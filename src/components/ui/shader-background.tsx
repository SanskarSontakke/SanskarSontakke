import React, { useEffect, useRef } from 'react';

const ShaderBackground = () => {
  const canvasRef = useRef<HTMLCanvasElement>(null);

  // Vertex shader source code
  const vsSource = `
    attribute vec4 aVertexPosition;
    void main() {
      gl_Position = aVertexPosition;
    }
  `;

  // Fragment shader source code - will be modified for mobile
  const getFragmentShader = (isMobile: boolean) => `
    precision highp float;
    uniform vec2 iResolution;
    uniform float iTime;
    uniform vec2 iMouse;
    uniform vec2 iClickPos;
    uniform float iClickTime;

    const float overallSpeed = 0.2;
    const float gridSmoothWidth = 0.015;
    const float axisWidth = 0.05;
    const float majorLineWidth = 0.025;
    const float minorLineWidth = 0.0125;
    const float majorLineFrequency = 5.0;
    const float minorLineFrequency = 1.0;
    const vec4 gridColor = vec4(0.5);
    const float scale = ${isMobile ? '2.5' : '5.0'};
    const vec4 lineColor = vec4(0.4, 0.2, 0.8, 1.0);
    const float minLineWidth = 0.01;
    const float maxLineWidth = 0.2;
    const float lineSpeed = 1.0 * overallSpeed;
    const float lineAmplitude = 1.0;
    const float lineFrequency = 0.2;
    const float warpSpeed = 0.2 * overallSpeed;
    const float warpFrequency = 0.5;
    const float warpAmplitude = 1.0;
    const float offsetFrequency = 0.5;
    const float offsetSpeed = 1.33 * overallSpeed;
    const float minOffsetSpread = ${isMobile ? '1.5' : '0.6'};
    const float maxOffsetSpread = ${isMobile ? '5.0' : '2.0'};
    const int linesPerGroup = 16;
    const float mouseInfluenceRadius = 0.8;
    const float mousePushStrength = 0.5;
    const float clickExplosionRadius = 1.5;
    const float clickExplosionDuration = 2.0;

    #define drawCircle(pos, radius, coord) smoothstep(radius + gridSmoothWidth, radius, length(coord - (pos)))
    #define drawSmoothLine(pos, halfWidth, t) smoothstep(halfWidth, 0.0, abs(pos - (t)))
    #define drawCrispLine(pos, halfWidth, t) smoothstep(halfWidth + gridSmoothWidth, halfWidth, abs(pos - (t)))
    #define drawPeriodicLine(freq, width, t) drawCrispLine(freq / 2.0, width, abs(mod(t, freq) - (freq) / 2.0))

    float drawGridLines(float axis) {
      return drawCrispLine(0.0, axisWidth, axis)
            + drawPeriodicLine(majorLineFrequency, majorLineWidth, axis)
            + drawPeriodicLine(minorLineFrequency, minorLineWidth, axis);
    }

    float drawGrid(vec2 space) {
      return min(1.0, drawGridLines(space.x) + drawGridLines(space.y));
    }

    float random(float t) {
      return (cos(t) + cos(t * 1.3 + 1.3) + cos(t * 1.4 + 1.4)) / 3.0;
    }

    float getPlasmaY(float x, float horizontalFade, float offset) {
      return random(x * lineFrequency + iTime * lineSpeed) * horizontalFade * lineAmplitude + offset;
    }

    void main() {
      vec2 fragCoord = gl_FragCoord.xy;
      vec4 fragColor;
      vec2 uv = fragCoord.xy / iResolution.xy;
      vec2 space = (fragCoord - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;

      float horizontalFade = 1.0 - (cos(uv.x * 6.28) * 0.5 + 0.5);
      float verticalFade = 1.0 - (cos(uv.y * 6.28) * 0.5 + 0.5);

      // Mouse push effect
      vec2 mouseSpace = (iMouse - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;
      vec2 toMouse = space - mouseSpace;
      float mouseDist = length(toMouse);
      float mouseInfluence = smoothstep(mouseInfluenceRadius, 0.0, mouseDist);
      vec2 mousePush = normalize(toMouse) * mouseInfluence * mousePushStrength * 0.3;
      space += mousePush;

      // Click explosion effect
      float clickEffect = 0.0;
      if (iClickTime > 0.0) {
        vec2 clickSpace = (iClickPos - iResolution.xy / 2.0) / iResolution.x * 2.0 * scale;
        vec2 toClick = space - clickSpace;
        float clickDist = length(toClick);
        float timeSinceClick = iTime - iClickTime;
        
        if (timeSinceClick < clickExplosionDuration) {
          float explosionRadius = clickExplosionRadius * (1.0 + timeSinceClick * 2.0);
          float explosionFade = 1.0 - (timeSinceClick / clickExplosionDuration);
          float explosionInfluence = smoothstep(explosionRadius, 0.0, clickDist) * explosionFade;
          
          // Push particles away from explosion center
          vec2 explosionPush = normalize(toClick) * explosionInfluence * 1.5;
          space += explosionPush;
          
          // Create empty gap at explosion center
          float gapRadius = 0.3 * (1.0 + timeSinceClick * 0.5);
          clickEffect = smoothstep(gapRadius, gapRadius * 0.5, clickDist) * explosionFade;
        }
      }

      space.y += random(space.x * warpFrequency + iTime * warpSpeed) * warpAmplitude * (0.5 + horizontalFade);
      space.x += random(space.y * warpFrequency + iTime * warpSpeed + 2.0) * warpAmplitude * horizontalFade;

      vec4 lines = vec4(0.0);
      vec4 bgColor1 = vec4(0.1, 0.1, 0.3, 1.0);
      vec4 bgColor2 = vec4(0.3, 0.1, 0.5, 1.0);

      for(int l = 0; l < linesPerGroup; l++) {
        float normalizedLineIndex = float(l) / float(linesPerGroup);
        float offsetTime = iTime * offsetSpeed;
        float offsetPosition = float(l) + space.x * offsetFrequency;
        float rand = random(offsetPosition + offsetTime) * 0.5 + 0.5;
        float halfWidth = mix(minLineWidth, maxLineWidth, rand * horizontalFade) / 2.0;
        float offset = random(offsetPosition + offsetTime * (1.0 + normalizedLineIndex)) * mix(minOffsetSpread, maxOffsetSpread, horizontalFade);
        float linePosition = getPlasmaY(space.x, horizontalFade, offset);
        float line = drawSmoothLine(linePosition, halfWidth, space.y) / 2.0 + drawCrispLine(linePosition, halfWidth * 0.15, space.y);

        float circleX = mod(float(l) + iTime * lineSpeed, 25.0) - 12.0;
        vec2 circlePosition = vec2(circleX, getPlasmaY(circleX, horizontalFade, offset));
        float circle = drawCircle(circlePosition, 0.01, space) * 4.0;

        line = line + circle;
        lines += line * lineColor * rand;
      }

      fragColor = mix(bgColor1, bgColor2, uv.x);
      fragColor *= verticalFade;
      fragColor.a = 1.0;
      
      // Remove lines in explosion gap
      lines *= (1.0 - clickEffect * 0.9);
      fragColor += lines;

      gl_FragColor = fragColor;
    }
  `;

  // Helper function to compile shader
  const loadShader = (gl: WebGLRenderingContext, type: number, source: string): WebGLShader | null => {
    const shader = gl.createShader(type);
    if (!shader) return null;

    gl.shaderSource(shader, source);
    gl.compileShader(shader);

    if (!gl.getShaderParameter(shader, gl.COMPILE_STATUS)) {
      console.error('Shader compile error: ', gl.getShaderInfoLog(shader));
      gl.deleteShader(shader);
      return null;
    }

    return shader;
  };

  // Initialize shader program
  const initShaderProgram = (gl: WebGLRenderingContext, vsSource: string, fsSource: string): WebGLProgram | null => {
    const vertexShader = loadShader(gl, gl.VERTEX_SHADER, vsSource);
    const fragmentShader = loadShader(gl, gl.FRAGMENT_SHADER, fsSource);

    if (!vertexShader || !fragmentShader) {
      return null;
    }

    const shaderProgram = gl.createProgram();
    if (!shaderProgram) return null;

    gl.attachShader(shaderProgram, vertexShader);
    gl.attachShader(shaderProgram, fragmentShader);
    gl.linkProgram(shaderProgram);

    if (!gl.getProgramParameter(shaderProgram, gl.LINK_STATUS)) {
      console.error('Shader program link error: ', gl.getProgramInfoLog(shaderProgram));
      return null;
    }

    return shaderProgram;
  };

  useEffect(() => {
    const canvas = canvasRef.current;
    if (!canvas) return;

    const gl = canvas.getContext('webgl');
    if (!gl) {
      console.warn('WebGL not supported.');
      return;
    }

    // Detect mobile device
    const isMobile = /Android|webOS|iPhone|iPad|iPod|BlackBerry|IEMobile|Opera Mini/i.test(navigator.userAgent) || 
                     (window.innerWidth <= 768 && 'ontouchstart' in window);

    // Get mobile-specific shader
    const fsSource = getFragmentShader(isMobile);

    const shaderProgram = initShaderProgram(gl, vsSource, fsSource);
    if (!shaderProgram) return;

    const positionBuffer = gl.createBuffer();
    if (!positionBuffer) {
      console.error('Failed to create position buffer');
      return;
    }
    gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
    const positions = [
      -1.0, -1.0,
       1.0, -1.0,
      -1.0,  1.0,
       1.0,  1.0,
    ];
    gl.bufferData(gl.ARRAY_BUFFER, new Float32Array(positions), gl.STATIC_DRAW);

    const vertexPositionLoc = gl.getAttribLocation(shaderProgram, 'aVertexPosition');
    const resolutionLoc = gl.getUniformLocation(shaderProgram, 'iResolution');
    const timeLoc = gl.getUniformLocation(shaderProgram, 'iTime');
    const mouseLoc = gl.getUniformLocation(shaderProgram, 'iMouse');
    const clickPosLoc = gl.getUniformLocation(shaderProgram, 'iClickPos');
    const clickTimeLoc = gl.getUniformLocation(shaderProgram, 'iClickTime');

    if (vertexPositionLoc === -1 || !resolutionLoc || !timeLoc || !mouseLoc || !clickPosLoc || !clickTimeLoc) {
      console.error('Failed to get shader attribute/uniform locations');
      return;
    }

    const programInfo = {
      program: shaderProgram,
      attribLocations: {
        vertexPosition: vertexPositionLoc,
      },
      uniformLocations: {
        resolution: resolutionLoc,
        time: timeLoc,
        mouse: mouseLoc,
        clickPos: clickPosLoc,
        clickTime: clickTimeLoc,
      },
    };

    // Mouse/Touch state
    let mousePos = { x: 0, y: 0 };
    let scrollY = 0;

    const resizeCanvas = () => {
      canvas.width = window.innerWidth;
      // Increase height on mobile devices (150% of viewport)
      if (isMobile) {
        canvas.height = window.innerHeight * 1.5;
      } else {
        canvas.height = window.innerHeight;
      }
      gl.viewport(0, 0, canvas.width, canvas.height);
    };

    window.addEventListener('resize', resizeCanvas);
    resizeCanvas();

    // Mouse event handlers (desktop only)
    const handleMouseMove = (e: MouseEvent) => {
      if (!isMobile) {
        mousePos.x = e.clientX;
        mousePos.y = canvas.height - e.clientY; // Flip Y coordinate for WebGL
      }
    };

    const handleMouseLeave = () => {
      if (!isMobile) {
        mousePos.x = -1000;
        mousePos.y = -1000;
      }
    };

    // Touch event handlers (mobile only)
    const handleTouchStart = (e: TouchEvent) => {
      if (isMobile && e.touches.length > 0) {
        const touch = e.touches[0];
        mousePos.x = touch.clientX;
        mousePos.y = canvas.height - touch.clientY; // Flip Y coordinate for WebGL
      }
    };

    const handleTouchMove = (e: TouchEvent) => {
      if (isMobile && e.touches.length > 0) {
        const touch = e.touches[0];
        mousePos.x = touch.clientX;
        mousePos.y = canvas.height - touch.clientY; // Flip Y coordinate for WebGL
      }
    };

    const handleTouchEnd = () => {
      if (isMobile) {
        // Keep last position for a moment, then fade
        setTimeout(() => {
          mousePos.x = -1000;
          mousePos.y = -1000;
        }, 100);
      }
    };

    // Scroll event handler (mobile)
    const handleScroll = () => {
      if (isMobile) {
        scrollY = window.scrollY;
        // Use scroll position to influence shader
        mousePos.y = canvas.height - (window.innerHeight * 0.5 + scrollY * 0.3);
        mousePos.x = window.innerWidth * 0.5;
      }
    };

    // Add listeners based on device type
    if (isMobile) {
      window.addEventListener('touchstart', handleTouchStart, { passive: true });
      window.addEventListener('touchmove', handleTouchMove, { passive: true });
      window.addEventListener('touchend', handleTouchEnd, { passive: true });
      window.addEventListener('scroll', handleScroll, { passive: true });
    } else {
      window.addEventListener('mousemove', handleMouseMove);
      window.addEventListener('mouseleave', handleMouseLeave);
      // Disable click events on desktop too (as requested)
      // window.addEventListener('click', handleMouseClick); // Removed
    }

    let startTime = Date.now();
    let animationFrameId: number;

    const render = () => {
      const currentTime = (Date.now() - startTime) / 1000;

      gl.clearColor(0.0, 0.0, 0.0, 1.0);
      gl.clear(gl.COLOR_BUFFER_BIT);

      gl.useProgram(programInfo.program);

      gl.uniform2f(programInfo.uniformLocations.resolution, canvas.width, canvas.height);
      gl.uniform1f(programInfo.uniformLocations.time, currentTime);
      gl.uniform2f(programInfo.uniformLocations.mouse, mousePos.x, mousePos.y);
      // Disable click effects - always set to inactive
      gl.uniform2f(programInfo.uniformLocations.clickPos, -1, -1);
      gl.uniform1f(programInfo.uniformLocations.clickTime, -1.0);

      gl.bindBuffer(gl.ARRAY_BUFFER, positionBuffer);
      gl.vertexAttribPointer(
        programInfo.attribLocations.vertexPosition,
        2,
        gl.FLOAT,
        false,
        0,
        0
      );
      gl.enableVertexAttribArray(programInfo.attribLocations.vertexPosition);

      gl.drawArrays(gl.TRIANGLE_STRIP, 0, 4);
      animationFrameId = requestAnimationFrame(render);
    };

    animationFrameId = requestAnimationFrame(render);

    return () => {
      window.removeEventListener('resize', resizeCanvas);
      if (isMobile) {
        window.removeEventListener('touchstart', handleTouchStart);
        window.removeEventListener('touchmove', handleTouchMove);
        window.removeEventListener('touchend', handleTouchEnd);
        window.removeEventListener('scroll', handleScroll);
      } else {
        window.removeEventListener('mousemove', handleMouseMove);
        window.removeEventListener('mouseleave', handleMouseLeave);
      }
      cancelAnimationFrame(animationFrameId);
    };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{
        position: 'fixed',
        top: 0,
        left: 0,
        width: '100%',
        height: '100%',
        zIndex: -10,
        pointerEvents: 'none'
      }}
    />
  );
};

export default ShaderBackground;

