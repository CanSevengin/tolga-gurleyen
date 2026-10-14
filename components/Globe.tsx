"use client";

import { useEffect, useRef } from "react";
import land from "@/lib/land.json";

const D2R = Math.PI / 180;
const LIME = "200,241,53";

type V3 = [number, number, number];
const toVec = (lat: number, lon: number): V3 => {
  const la = lat * D2R;
  const lo = lon * D2R;
  return [Math.cos(la) * Math.sin(lo), Math.sin(la), Math.cos(la) * Math.cos(lo)];
};

const IST: [number, number] = [41.01, 28.98];
// Avrupa, Birleşik Krallık, Orta Doğu ve MENA yönündeki rotalar
const DEST: [number, number][] = [
  [51.5, -0.12], [50.94, 6.96], [48.85, 2.35], [40.42, -3.7], [52.23, 21.01], [59.33, 18.07],
  [41.9, 12.5], [25.2, 55.27], [29.37, 47.98], [24.71, 46.68], [30.04, 31.24], [33.57, -7.59],
  [36.8, 10.18], [31.77, 35.21],
];

const STEPS = 56;

function buildArc(a: V3, b: V3): V3[] {
  const dot = Math.min(1, Math.max(-1, a[0] * b[0] + a[1] * b[1] + a[2] * b[2]));
  const w = Math.acos(dot);
  const sw = Math.sin(w) || 1;
  const pts: V3[] = [];
  for (let i = 0; i <= STEPS; i++) {
    const t = i / STEPS;
    const k0 = Math.sin((1 - t) * w) / sw;
    const k1 = Math.sin(t * w) / sw;
    const lift = 1 + 0.22 * Math.sin(Math.PI * t) * Math.min(1, w / 1.1);
    pts.push([(a[0] * k0 + b[0] * k1) * lift, (a[1] * k0 + b[1] * k1) * lift, (a[2] * k0 + b[2] * k1) * lift]);
  }
  return pts;
}

export default function Globe() {
  const ref = useRef<HTMLCanvasElement>(null);

  useEffect(() => {
    const canvas = ref.current;
    if (!canvas) return;
    const ctx = canvas.getContext("2d");
    if (!ctx) return;

    const reduce = window.matchMedia("(prefers-reduced-motion: reduce)").matches;

    // Kara noktaları (birim vektörler)
    const n = land.length / 2;
    const pts = new Float32Array(n * 3);
    for (let i = 0; i < n; i++) {
      const v = toVec(land[i * 2] / 10, land[i * 2 + 1] / 10);
      pts[i * 3] = v[0];
      pts[i * 3 + 1] = v[1];
      pts[i * 3 + 2] = v[2];
    }
    const sx = new Float32Array(n);
    const sy = new Float32Array(n);
    const lvl = new Uint8Array(n);

    const istV = toVec(IST[0], IST[1]);
    const arcs = DEST.map((d, i) => ({
      pts: buildArc(istV, toVec(d[0], d[1])),
      end: toVec(d[0], d[1]),
      speed: 0.00011 + (i % 5) * 0.000018,
      phase: (i * 0.173) % 1,
    }));

    let w = 0, h = 0, dpr = 1, cx = 0, cy = 0, R = 0;
    const resize = () => {
      const r = canvas.getBoundingClientRect();
      dpr = Math.min(2, window.devicePixelRatio || 1);
      w = r.width; h = r.height;
      canvas.width = Math.round(w * dpr);
      canvas.height = Math.round(h * dpr);
      if (w < 760) { R = w * 0.82; cx = w * 0.5; cy = h * 0.82; }
      else { R = Math.min(w * 0.3, h * 0.6); cx = w * 0.7; cy = h * 0.56; }
    };
    resize();
    const ro = new ResizeObserver(resize);
    ro.observe(canvas);

    // Fare ile hafif yönlendirme
    let px = 0, py = 0, tx = 0, ty = 0;
    const onMove = (e: PointerEvent) => {
      tx = (e.clientX / window.innerWidth - 0.5) * 2;
      ty = (e.clientY / window.innerHeight - 0.5) * 2;
    };
    window.addEventListener("pointermove", onMove, { passive: true });

    const baseRot = -IST[1] * D2R;
    const start = performance.now();
    let raf = 0;
    let visible = true;

    const io = new IntersectionObserver(([e]) => { visible = e.isIntersecting; if (visible && !raf && !reduce) raf = requestAnimationFrame(frame); }, { threshold: 0 });
    io.observe(canvas);

    function frame(now: number) {
      raf = 0;
      if (!visible || document.hidden) { raf = visible ? requestAnimationFrame(frame) : 0; return; }
      draw(now);
      if (!reduce) raf = requestAnimationFrame(frame);
    }

    function draw(now: number) {
      const c = ctx!;
      const time = now - start;
      px += (tx - px) * 0.04;
      py += (ty - py) * 0.04;
      const sway = reduce ? 0 : Math.sin(time * 0.00011) * 0.42;
      const theta = baseRot + sway + px * 0.22 + (reduce ? 0 : window.scrollY * 0.00035);
      const phi = 0.62 + py * 0.08;
      const ct = Math.cos(theta), st = Math.sin(theta);
      const cp = Math.cos(phi), sp = Math.sin(phi);

      const rot = (v: V3): V3 => {
        const x1 = v[0] * ct + v[2] * st;
        const z1 = v[2] * ct - v[0] * st;
        const y2 = v[1] * cp - z1 * sp;
        const z2 = v[1] * sp + z1 * cp;
        return [x1, y2, z2];
      };

      c.setTransform(dpr, 0, 0, dpr, 0, 0);
      c.clearRect(0, 0, w, h);

      // Atmosfer parıltısı
      const glow = c.createRadialGradient(cx, cy, R * 0.6, cx, cy, R * 1.28);
      glow.addColorStop(0, `rgba(${LIME},0.07)`);
      glow.addColorStop(1, `rgba(${LIME},0)`);
      c.fillStyle = glow;
      c.beginPath(); c.arc(cx, cy, R * 1.28, 0, Math.PI * 2); c.fill();

      // Küre gövdesi
      const body = c.createRadialGradient(cx - R * 0.35, cy - R * 0.4, R * 0.1, cx, cy, R);
      body.addColorStop(0, "#14181d");
      body.addColorStop(1, "#090b0e");
      c.fillStyle = body;
      c.beginPath(); c.arc(cx, cy, R, 0, Math.PI * 2); c.fill();
      c.strokeStyle = "rgba(200,241,53,0.28)";
      c.lineWidth = 1;
      c.beginPath(); c.arc(cx, cy, R, 0, Math.PI * 2); c.stroke();

      // Kara noktaları
      for (let i = 0; i < n; i++) {
        const x = pts[i * 3], y = pts[i * 3 + 1], z = pts[i * 3 + 2];
        const x1 = x * ct + z * st;
        const z1 = z * ct - x * st;
        const y2 = y * cp - z1 * sp;
        const z2 = y * sp + z1 * cp;
        if (z2 > 0.02) {
          sx[i] = cx + x1 * R;
          sy[i] = cy - y2 * R;
          lvl[i] = z2 > 0.75 ? 4 : z2 > 0.5 ? 3 : z2 > 0.3 ? 2 : 1;
        } else lvl[i] = 0;
      }
      const alphas = [0, 0.16, 0.3, 0.5, 0.72];
      const size = Math.max(1.6, R / 300);
      for (let l = 1; l <= 4; l++) {
        c.fillStyle = `rgba(226,232,240,${alphas[l]})`;
        c.beginPath();
        for (let i = 0; i < n; i++) if (lvl[i] === l) c.rect(sx[i], sy[i], size, size);
        c.fill();
      }

      // Rotalar
      const intro = Math.min(1, time / 2600);
      c.lineCap = "round";
      arcs.forEach((a, ai) => {
        const grow = reduce ? 1 : Math.min(1, Math.max(0, intro * 1.6 - ai * 0.06));
        const ease = 1 - Math.pow(1 - grow, 3);
        const maxI = Math.floor(STEPS * ease);
        const proj: (V3 | null)[] = [];
        for (let i = 0; i <= STEPS; i++) {
          const p = rot(a.pts[i]);
          const vis = p[2] > 0 || p[0] * p[0] + p[1] * p[1] > 1;
          proj.push(vis ? [cx + p[0] * R, cy - p[1] * R, p[2]] : null);
        }
        // soluk tam rota
        c.strokeStyle = `rgba(${LIME},0.2)`;
        c.lineWidth = 1;
        c.beginPath();
        let pen = false;
        for (let i = 0; i <= maxI; i++) {
          const q = proj[i];
          if (!q) { pen = false; continue; }
          if (!pen) { c.moveTo(q[0], q[1]); pen = true; } else c.lineTo(q[0], q[1]);
        }
        c.stroke();

        // hareketli parlak iz
        if (!reduce && grow >= 1) {
          const head = ((time * a.speed + a.phase) % 1.5);
          const tail = Math.max(0, head - 0.28);
          const hi = Math.min(STEPS, Math.floor(head * STEPS));
          const ti = Math.floor(tail * STEPS);
          for (let i = ti; i < hi; i++) {
            const q0 = proj[i], q1 = proj[i + 1];
            if (!q0 || !q1) continue;
            const f = (i - ti) / Math.max(1, hi - ti);
            c.strokeStyle = `rgba(${LIME},${0.15 + f * 0.85})`;
            c.lineWidth = 1 + f * 1.1;
            c.beginPath(); c.moveTo(q0[0], q0[1]); c.lineTo(q1[0], q1[1]); c.stroke();
          }
          const hq = proj[hi];
          if (hq && head < 1.02) {
            c.fillStyle = `rgba(${LIME},0.22)`;
            c.beginPath(); c.arc(hq[0], hq[1], 6, 0, Math.PI * 2); c.fill();
            c.fillStyle = `rgb(${LIME})`;
            c.beginPath(); c.arc(hq[0], hq[1], 2.2, 0, Math.PI * 2); c.fill();
          }
        }
        // varış noktası
        if (grow >= 1) {
          const e = rot(a.end);
          if (e[2] > 0.02) {
            c.fillStyle = `rgba(${LIME},0.9)`;
            c.beginPath(); c.arc(cx + e[0] * R, cy - e[1] * R, 2.2, 0, Math.PI * 2); c.fill();
          }
        }
      });

      // İstanbul
      const iv = rot(istV);
      if (iv[2] > 0) {
        const ix = cx + iv[0] * R, iy = cy - iv[1] * R;
        const pulse = reduce ? 0.5 : (time % 2200) / 2200;
        c.strokeStyle = `rgba(${LIME},${0.55 * (1 - pulse)})`;
        c.lineWidth = 1.2;
        c.beginPath(); c.arc(ix, iy, 6 + pulse * 22, 0, Math.PI * 2); c.stroke();
        c.fillStyle = `rgb(${LIME})`;
        c.beginPath(); c.arc(ix, iy, 4, 0, Math.PI * 2); c.fill();
        c.strokeStyle = `rgba(${LIME},0.7)`;
        c.lineWidth = 1;
        c.beginPath(); c.arc(ix, iy, 9, 0, Math.PI * 2); c.stroke();
        c.fillStyle = "rgba(245,246,248,0.92)";
        c.font = "600 12px ui-monospace, SFMono-Regular, Menlo, monospace";
        c.fillText("IST", ix + 16, iy - 10);
      }
    }

    if (reduce) draw(performance.now() + 4000);
    else raf = requestAnimationFrame(frame);

    return () => {
      cancelAnimationFrame(raf);
      ro.disconnect();
      io.disconnect();
      window.removeEventListener("pointermove", onMove);
    };
  }, []);

  return <canvas ref={ref} className="globe" aria-hidden="true" />;
}
