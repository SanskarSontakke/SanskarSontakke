import React, { useRef, useEffect } from 'react';

// ─── CIRCUIT BUILDER ───
function createCircuit(W, H, mobile) {
  const S = mobile ? 120 : 90;
  const cols = Math.max(3, Math.floor(W / S) - 1);
  const rows = Math.max(3, Math.floor(H / S) - 1);
  const ox = (W - cols * S) / 2;
  const oy = (H - rows * S) / 2;

  const nodes = [];
  const g = [];
  for (let c = 0; c <= cols; c++) {
    g[c] = [];
    for (let r = 0; r <= rows; r++) {
      g[c][r] = nodes.length;
      nodes.push({ x: ox + c * S, y: oy + r * S, v: 0, fix: false, adj: [] });
    }
  }

  const edges = [];
  const link = (a, b, tp) => {
    let type = tp || 'wire', R = 1;
    if (!tp) {
      const d = Math.random();
      if (d < 0.12) { type = 'resistor'; R = 5 + Math.random() * 12; }
      else if (d < 0.18) { type = 'capacitor'; R = 20; }
      else if (d < 0.22) { type = 'inductor'; R = 8; }
    }
    if (type === 'battery') R = 0.1;
    const i = edges.length;
    edges.push({
      n1: a, n2: b, type, R, G: 1 / R, I: 0, nI: 0,
      x1: nodes[a].x, y1: nodes[a].y, x2: nodes[b].x, y2: nodes[b].y,
      h: Math.abs(nodes[a].y - nodes[b].y) < 1
    });
    nodes[a].adj.push(i);
    nodes[b].adj.push(i);
    return i;
  };

  for (let c = 0; c <= cols; c++)
    for (let r = 0; r <= rows; r++) {
      if (c < cols && Math.random() < 0.55) link(g[c][r], g[c + 1][r]);
      if (r < rows && Math.random() < 0.55) link(g[c][r], g[c][r + 1]);
    }

  // Place batteries
  const bats = [];
  const nb = mobile ? 2 : 3;
  for (let b = 0; b < nb; b++) {
    const bc = Math.max(1, Math.min(cols - 1, Math.round((b + 0.5) * cols / nb)));
    const br = Math.max(0, Math.min(rows - 2, Math.round(rows * (0.3 + Math.random() * 0.3))));
    const p = g[bc][br], n = g[bc][br + 1];
    if (p === n) continue;
    let ei = -1;
    for (const i of nodes[p].adj) {
      const e = edges[i];
      if ((e.n1 === p && e.n2 === n) || (e.n1 === n && e.n2 === p)) { ei = i; break; }
    }
    if (ei < 0) ei = link(p, n, 'battery');
    else { edges[ei].type = 'battery'; edges[ei].R = 0.1; edges[ei].G = 10; }
    nodes[p].v = 5; nodes[p].fix = true;
    nodes[n].v = 0; nodes[n].fix = true;
    bats.push({ ei, p, n });
  }

  // BFS connectivity check
  if (bats.length) {
    const seen = new Set();
    const q = [bats[0].p];
    seen.add(bats[0].p);
    while (q.length) {
      const nd = q.shift();
      for (const i of nodes[nd].adj) {
        const nb2 = edges[i].n1 === nd ? edges[i].n2 : edges[i].n1;
        if (!seen.has(nb2)) { seen.add(nb2); q.push(nb2); }
      }
    }
    for (const bt of bats) {
      if (!seen.has(bt.p)) {
        let best = -1, bestD = Infinity;
        for (const s of seen) {
          const dx = nodes[s].x - nodes[bt.p].x, dy = nodes[s].y - nodes[bt.p].y;
          if (dx * dx + dy * dy < bestD) { bestD = dx * dx + dy * dy; best = s; }
        }
        if (best >= 0) link(bt.p, best, 'wire');
      }
    }
  }
  return { nodes, edges, bats, S };
}

// ─── KIRCHHOFF SOLVER (Gauss-Seidel Nodal Analysis) ───
function solve(cir) {
  if (!cir) return;
  const { nodes, edges } = cir;
  // KCL at every node: sum of currents = 0, using conductance-weighted voltage averaging
  for (let it = 0; it < 300; it++) {
    let mx = 0;
    for (let i = 0; i < nodes.length; i++) {
      if (nodes[i].fix || !nodes[i].adj.length) continue;
      let sumVG = 0, sumG = 0;
      for (const ei of nodes[i].adj) {
        const e = edges[ei];
        if (e.type === 'battery') continue;
        const j = e.n1 === i ? e.n2 : e.n1;
        sumVG += nodes[j].v * e.G;
        sumG += e.G;
      }
      if (sumG > 0) {
        const nv = sumVG / sumG;
        mx = Math.max(mx, Math.abs(nv - nodes[i].v));
        nodes[i].v = nv;
      }
    }
    if (mx < 1e-4) break;
  }
  // I = deltaV * G (Ohm's law per edge)
  let mI = 0;
  for (const e of edges) {
    if (e.type !== 'battery') e.I = (nodes[e.n1].v - nodes[e.n2].v) * e.G;
    mI = Math.max(mI, Math.abs(e.I));
  }
  for (const e of edges) e.nI = mI > 0 ? Math.abs(e.I) / mI : 0;
}

// ─── DRAWING HELPERS ───
const WIRE = 'rgba(200,153,58,0.4)';
const COMP = 'rgba(200,153,58,0.6)';

function drawComp(ctx, e) {
  const mx = (e.x1 + e.x2) / 2, my = (e.y1 + e.y2) / 2;
  ctx.save();
  ctx.translate(mx, my);
  if (!e.h) ctx.rotate(Math.PI / 2);
  ctx.strokeStyle = COMP;
  ctx.lineWidth = 1.8;
  ctx.beginPath();
  if (e.type === 'resistor') {
    ctx.moveTo(-14, 0); ctx.lineTo(-10, 0);
    ctx.lineTo(-7, -5); ctx.lineTo(-1, 5); ctx.lineTo(5, -5); ctx.lineTo(8, 5);
    ctx.lineTo(10, 0); ctx.lineTo(14, 0);
  } else if (e.type === 'capacitor') {
    ctx.moveTo(-14, 0); ctx.lineTo(-3, 0);
    ctx.moveTo(-3, -7); ctx.lineTo(-3, 7);
    ctx.moveTo(3, -7); ctx.lineTo(3, 7);
    ctx.moveTo(3, 0); ctx.lineTo(14, 0);
  } else if (e.type === 'inductor') {
    ctx.moveTo(-14, 0); ctx.lineTo(-8, 0);
    ctx.arc(-5, 0, 3, Math.PI, 0);
    ctx.arc(1, 0, 3, Math.PI, 0);
    ctx.arc(7, 0, 3, Math.PI, 0);
    ctx.lineTo(14, 0);
  }
  ctx.stroke();
  ctx.restore();
}

function drawBat(ctx, e, nodes) {
  const mx = (e.x1 + e.x2) / 2, my = (e.y1 + e.y2) / 2;
  const posUp = nodes[e.n1].v > nodes[e.n2].v;
  ctx.save();
  ctx.translate(mx, my);
  if (!e.h) ctx.rotate(Math.PI / 2);
  // Wires to plates
  ctx.strokeStyle = WIRE; ctx.lineWidth = 2;
  ctx.beginPath(); ctx.moveTo(-20, 0); ctx.lineTo(-5, 0); ctx.moveTo(5, 0); ctx.lineTo(20, 0); ctx.stroke();
  // Positive plate (long)
  ctx.strokeStyle = '#00ff88'; ctx.lineWidth = 3;
  ctx.beginPath();
  const px = posUp ? -5 : 5;
  ctx.moveTo(px, -9); ctx.lineTo(px, 9); ctx.stroke();
  // Negative plate (short)
  ctx.strokeStyle = '#ff4444'; ctx.lineWidth = 3;
  ctx.beginPath();
  const nx = posUp ? 5 : -5;
  ctx.moveTo(nx, -5); ctx.lineTo(nx, 5); ctx.stroke();
  // Labels
  ctx.font = 'bold 10px Orbitron, monospace';
  ctx.fillStyle = '#00ff88'; ctx.fillText('+', px - 3, -12);
  ctx.fillStyle = '#ff4444'; ctx.fillText('−', nx - 3, -8);
  ctx.restore();
}

function drawCircuit(ctx, cir) {
  if (!cir) return;
  const { nodes, edges } = cir;
  // Draw wires
  edges.forEach(e => {
    if (e.type === 'battery') { drawBat(ctx, e, nodes); return; }
    const bright = 0.25 + e.nI * 0.3;
    ctx.strokeStyle = `rgba(200,153,58,${bright})`;
    ctx.lineWidth = 1.5 + e.nI * 1.5;
    ctx.beginPath(); ctx.moveTo(e.x1, e.y1); ctx.lineTo(e.x2, e.y2); ctx.stroke();
    if (e.type !== 'wire') drawComp(ctx, e);
  });
  // Draw junction vias
  nodes.forEach(nd => {
    if (nd.adj.length < 2) return;
    ctx.beginPath(); ctx.arc(nd.x, nd.y, nd.adj.length >= 3 ? 3.5 : 2, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(200,153,58,0.4)'; ctx.fill();
    ctx.beginPath(); ctx.arc(nd.x, nd.y, nd.adj.length >= 3 ? 5 : 3, 0, Math.PI * 2);
    ctx.strokeStyle = 'rgba(200,153,58,0.25)'; ctx.lineWidth = 1; ctx.stroke();
  });
}

// ─── PARTICLE SYSTEM ───
function spawnParticle(cir, particles) {
  if (!cir || !cir.bats.length) return;
  const bat = cir.bats[Math.floor(Math.random() * cir.bats.length)];
  const nd = bat.p; // positive terminal
  const outEdges = getOutgoing(cir, nd);
  if (!outEdges.length) return;
  const chosen = weightedPick(outEdges);
  particles.push({
    ei: chosen.ei, from: nd, to: chosen.to, prog: 0,
    speed: 0.004 + chosen.nI * 0.012, size: 2.5 + chosen.nI * 5, gen: 0
  });
}

function getOutgoing(cir, nd) {
  const out = [];
  for (const ei of cir.nodes[nd].adj) {
    const e = cir.edges[ei];
    if (e.type === 'battery') continue;
    // Current flows from high V to low V: positive I means n1->n2
    let to = -1;
    if (e.n1 === nd && e.I > 0.01) to = e.n2;
    else if (e.n2 === nd && e.I < -0.01) to = e.n1;
    if (to >= 0) out.push({ ei, to, nI: e.nI });
  }
  return out;
}

function weightedPick(arr) {
  const total = arr.reduce((s, a) => s + (a.nI || 0.01), 0);
  let r = Math.random() * total;
  for (const a of arr) { r -= (a.nI || 0.01); if (r <= 0) return a; }
  return arr[arr.length - 1];
}

function updateParticles(cir, particles, maxP) {
  const next = [];
  for (const p of particles) {
    p.prog += p.speed;
    if (p.prog < 1) { next.push(p); continue; }
    // Reached destination node
    const nd = p.to;
    // Check if it's a battery negative terminal
    const isBatNeg = cir.bats.some(b => b.n === nd);
    if (isBatNeg) continue; // absorbed at − terminal
    const outEdges = getOutgoing(cir, nd);
    if (!outEdges.length) continue; // dead end
    // Kirchhoff Junction Law: split proportionally
    if (outEdges.length > 1 && next.length < maxP - outEdges.length && p.gen < 4) {
      const totalI = outEdges.reduce((s, o) => s + (o.nI || 0.01), 0);
      for (const o of outEdges) {
        const frac = (o.nI || 0.01) / totalI;
        next.push({
          ei: o.ei, from: nd, to: o.to, prog: 0,
          speed: 0.004 + o.nI * 0.012, size: Math.max(1.5, p.size * frac), gen: p.gen + 1
        });
      }
    } else {
      const chosen = weightedPick(outEdges);
      next.push({
        ei: chosen.ei, from: nd, to: chosen.to, prog: 0,
        speed: 0.004 + chosen.nI * 0.012, size: Math.max(1.5, p.size * 0.95), gen: p.gen
      });
    }
  }
  particles.length = 0;
  particles.push(...next);
}

function drawParticles(ctx, cir, particles) {
  if (!cir) return;
  const lerp = (a, b, t) => a + (b - a) * t;
  for (const p of particles) {
    const e = cir.edges[p.ei];
    const sx = p.from === e.n1 ? e.x1 : e.x2;
    const sy = p.from === e.n1 ? e.y1 : e.y2;
    const ex = p.to === e.n1 ? e.x1 : e.x2;
    const ey = p.to === e.n1 ? e.y1 : e.y2;
    const x = lerp(sx, ex, p.prog), y = lerp(sy, ey, p.prog);
    // Outer glow
    ctx.beginPath(); ctx.arc(x, y, p.size * 3, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,255,136,0.06)'; ctx.fill();
    // Mid glow
    ctx.beginPath(); ctx.arc(x, y, p.size * 1.6, 0, Math.PI * 2);
    ctx.fillStyle = 'rgba(0,255,136,0.18)'; ctx.fill();
    // Core
    ctx.beginPath(); ctx.arc(x, y, p.size, 0, Math.PI * 2);
    ctx.fillStyle = '#00ff88'; ctx.fill();
  }
}

// ─── MAIN COMPONENT ───
const TraceCanvas = () => {
  const canvasRef = useRef(null);
  const cirRef = useRef(null);
  const particlesRef = useRef([]);
  const mobileRef = useRef(window.innerWidth < 768);

  useEffect(() => {
    const canvas = canvasRef.current;
    const ctx = canvas.getContext('2d');
    let W, H, animId;
    const MAX_P = mobileRef.current ? 30 : 60;

    const rebuild = () => {
      W = canvas.width = window.innerWidth;
      H = canvas.height = window.innerHeight;
      mobileRef.current = W < 768;
      cirRef.current = createCircuit(W, H, mobileRef.current);
      solve(cirRef.current);
      particlesRef.current = [];
    };

    const handlePulse = () => {
      for (let i = 0; i < (mobileRef.current ? 8 : 15); i++) {
        setTimeout(() => spawnParticle(cirRef.current, particlesRef.current), Math.random() * 500);
      }
    };

    const draw = () => {
      ctx.clearRect(0, 0, W, H);
      drawCircuit(ctx, cirRef.current);
      // Spawn particles periodically at battery + terminals
      const spawnRate = mobileRef.current ? 0.04 : 0.08;
      if (Math.random() < spawnRate && particlesRef.current.length < MAX_P) {
        spawnParticle(cirRef.current, particlesRef.current);
      }
      updateParticles(cirRef.current, particlesRef.current, MAX_P);
      drawParticles(ctx, cirRef.current, particlesRef.current);
      animId = requestAnimationFrame(draw);
    };

    window.addEventListener('resize', rebuild);
    window.addEventListener('sys-pulse', handlePulse);
    rebuild();
    draw();

    return () => {
      window.removeEventListener('resize', rebuild);
      window.removeEventListener('sys-pulse', handlePulse);
      cancelAnimationFrame(animId);
    };
  }, []);

  return (
    <canvas ref={canvasRef} id="trace-canvas"
      style={{ position: 'fixed', inset: 0, zIndex: 1, pointerEvents: 'none' }} />
  );
};

export default TraceCanvas;
