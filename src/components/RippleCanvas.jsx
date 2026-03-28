import React, { useRef, useEffect } from 'react';

const RippleCanvas = () => {
  const canvasRef = useRef(null);
  const ripplesRef = useRef([]);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let animId;

    const resize = () => {
      canvas.width = window.innerWidth;
      canvas.height = window.innerHeight;
    };

    const handleClick = (e) => {
      ripplesRef.current.push({ 
        x: e.clientX, 
        y: e.clientY, 
        r: 0, 
        alpha: 0.6 
      });
    };

    const draw = () => {
      ctx.clearRect(0, 0, canvas.width, canvas.height);
      ripplesRef.current = ripplesRef.current.filter(r => r.alpha > 0);
      
      ripplesRef.current.forEach(r => {
        ctx.beginPath();
        ctx.arc(r.x, r.y, r.r, 0, Math.PI * 2);
        ctx.strokeStyle = `rgba(0,255,136,${r.alpha})`;
        ctx.lineWidth = 1.5;
        ctx.stroke();
        
        r.r += 2.5;
        r.alpha -= 0.025;
      });
      
      animId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', resize);
    document.addEventListener('click', handleClick);
    resize();
    draw();

    return () => {
      window.removeEventListener('resize', resize);
      document.removeEventListener('click', handleClick);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas 
      ref={canvasRef} 
      style={{ position: 'fixed', inset: 0, pointerEvents: 'none', zIndex: 2 }} 
    />
  );
};

export default RippleCanvas;
