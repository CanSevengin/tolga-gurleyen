"use client";
import { useEffect, useRef, useState } from "react";

const POOL = ["LONDRA", "DUBAI", "KOLN", "RIYAD", "PARIS", "KAZABLANKA", "BERLIN", "AMSTERDAM", "DOHA", "MILANO", "VARSOVA", "KAHIRE"];
const COLS = 10;
const GL = "ABCDEFGHIJKLMNOPRSTUVYZ0123456789";
const pad = (s: string) => s.padEnd(COLS, " ");
const STATUS = ["ON TIME", "BOARDING", "GATE OPEN"];

export default function Board({ title }: { title: string }) {
  const [rows, setRows] = useState<string[]>(() => POOL.slice(0, 6).map(pad));
  const [stat, setStat] = useState<number[]>([0, 1, 0, 2, 0, 1]);
  const next = useRef(6);
  const timers = useRef<number[]>([]);

  const flip = (i: number, target: string) => {
    const t = pad(target);
    let n = 0;
    const id = window.setInterval(() => {
      n++;
      setRows((r) => {
        const c = [...r];
        c[i] = t.split("").map((ch, k) => (n > 5 + k * 1.4 || ch === " " ? ch : GL[Math.floor(Math.random() * GL.length)])).join("");
        return c;
      });
      if (n > 5 + COLS * 1.4) { clearInterval(id); setRows((r) => { const c = [...r]; c[i] = t; return c; }); }
    }, 55);
    timers.current.push(id);
  };

  useEffect(() => {
    if (window.matchMedia("(prefers-reduced-motion: reduce)").matches) return;
    rows.forEach((r, i) => window.setTimeout(() => flip(i, r.trim()), 400 + i * 160));
    const loop = window.setInterval(() => {
      const i = Math.floor(Math.random() * 6);
      const city = POOL[next.current++ % POOL.length];
      flip(i, city);
      setStat((s) => { const c = [...s]; c[i] = Math.floor(Math.random() * 3); return c; });
    }, 3200);
    return () => { clearInterval(loop); timers.current.forEach(clearInterval); };
    // eslint-disable-next-line react-hooks/exhaustive-deps
  }, []);

  return (
    <div className="board" aria-hidden>
      <div className="board-h"><span>{title}</span><span>IST</span></div>
      {rows.map((r, i) => (
        <div className="board-r" key={i}>
          <div className="cells">{r.split("").map((ch, k) => <i key={k}>{ch}</i>)}</div>
          <b className={stat[i] === 1 ? "hot" : ""}>{STATUS[stat[i]]}</b>
        </div>
      ))}
    </div>
  );
}
