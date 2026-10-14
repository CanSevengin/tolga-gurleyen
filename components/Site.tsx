"use client";
import { createRef, useEffect, useLayoutEffect, useRef, useState } from "react";
import Link from "next/link";
import { motion, useReducedMotion, useScroll, useSpring, useTransform, type MotionValue } from "motion/react";
import { LinkedinLogo, ArrowDown, ArrowRight } from "@phosphor-icons/react";
import Board from "./Board";
import { chapters, site, ui, type Lang } from "@/lib/content";
import Nav from "./Nav";

type L = { tr: string; en: string };

function Hero({ lang }: { lang: Lang }) {
  const h = ui.hero;
  const e = [0.2, 0.7, 0.2, 1] as [number, number, number, number];
  return (
    <header className="hero" id="top">
      <div className="hero-in">
        <div className="hero-l">
          <h1>
            <motion.span initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, ease: e }}>{h.headA[lang]}</motion.span>
            <motion.span className="hot" initial={{ opacity: 0, y: 50 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.15, ease: e }}>{h.headB[lang]}</motion.span>
          </h1>
          <motion.p className="sub" initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.4 }}>{h.sub[lang]}</motion.p>
          <motion.div initial={{ opacity: 0, y: 24 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.9, delay: 0.55 }}>
            <a className="btn" href="#journey">{h.cta[lang]} <ArrowDown size={18} weight="bold" /></a>
          </motion.div>
        </div>
        <motion.div className="hero-r" initial={{ opacity: 0, y: 40, rotate: 2 }} animate={{ opacity: 1, y: 0, rotate: -1.5 }} transition={{ duration: 1, delay: 0.3, ease: e }}>
          <Board title={ui.about.board[lang]} />
        </motion.div>
      </div>
    </header>
  );
}

function Word({ w, p, range, reduce }: { w: string; p: MotionValue<number>; range: [number, number]; reduce: boolean }) {
  const o = useTransform(p, range, [0.16, 1]);
  return <motion.span style={{ opacity: reduce ? 1 : o }}>{w}</motion.span>;
}

function About({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  const reduce = !!useReducedMotion();
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start 80%", "end 55%"] });
  const words = ui.about.text[lang].split(" ");
  return (
    <section className="about" id="about">
      <div className="about-in">
        <div className="pic"><img src={site.photos.portrait} alt={site.name} /><span className="sticker">{ui.about.sticker[lang]}</span></div>
        <p className="words" ref={ref}>
          {words.map((w, i) => (
            <Word key={i} w={w} p={scrollYProgress} reduce={reduce} range={[i / words.length, Math.min(1, (i + 3) / words.length)]} />
          ))}
        </p>
      </div>
    </section>
  );
}

function ChapterCard({ i, lang, selfRef, nextRef, reduce }: { i: number; lang: Lang; selfRef: React.RefObject<HTMLElement | null>; nextRef?: React.RefObject<HTMLElement | null>; reduce: boolean }) {
  const c = chapters[i];
  const { scrollYProgress } = useScroll({ target: nextRef ?? selfRef, offset: ["start end", "start start"] });
  const scale = useTransform(scrollYProgress, [0, 1], [1, nextRef && !reduce ? 0.93 : 1]);
  const dim = useTransform(scrollYProgress, [0, 1], [1, nextRef && !reduce ? 0.5 : 1]);
  const filter = useTransform(dim, (v) => `brightness(${v})`);
  return (
    <motion.article ref={selfRef as React.RefObject<HTMLElement>} className="card" style={{ top: 84 + i * 14, scale, filter }}>
      <div className="tk-main">
        <div className="tk-top"><span>{c.years[lang]}</span><span>0{i + 1} / 0{chapters.length}</span></div>
        <h3>{c.title[lang]}</h3>
        <p>{c.text[lang]}</p>
        <div className="route">
          {c.places.map((p, k) => (
            <span key={p}>{k > 0 && <ArrowRight size={14} weight="bold" />}{p}</span>
          ))}
        </div>
      </div>
      <div className="tk-stub">
        <div className="stat">{c.stat}</div>
        <div className="stat-l">{c.statLabel[lang]}</div>
        <div className="bars" aria-hidden />
      </div>
    </motion.article>
  );
}

function Journey({ lang }: { lang: Lang }) {
  const reduce = !!useReducedMotion();
  const refs = useRef(chapters.map(() => createRef<HTMLElement>())).current;
  return (
    <section className="journey" id="journey">
      <div className="sec-head">
        <span className="mono">{ui.journey.kicker[lang]}</span>
        <h2>{ui.journey.title[lang]}</h2>
      </div>
      <div className="stack">
        {chapters.map((_, i) => (
          <ChapterCard key={i} i={i} lang={lang} selfRef={refs[i]} nextRef={refs[i + 1]} reduce={reduce} />
        ))}
      </div>
    </section>
  );
}

function Photo({ k, alt }: { k: keyof typeof site.photos; alt: string }) {
  return <img src={site.photos[k]} alt={alt} loading="lazy" />;
}

function Babyjem({ lang }: { lang: Lang }) {
  const b = ui.babyjem;
  const fade = { initial: { opacity: 0, y: 40 }, whileInView: { opacity: 1, y: 0 }, viewport: { once: true, margin: "-80px" }, transition: { duration: 0.8, ease: [0.2, 0.7, 0.2, 1] as [number, number, number, number] } };
  return (
    <section className="babyjem" id="babyjem">
      <div className="sec-head">
        <h2>{b.title[lang]}</h2>
        <p style={{ marginTop: 18, color: "var(--mute)", fontSize: 20, maxWidth: "40ch" }}>{b.sub[lang]}</p>
      </div>
      <div className="bento">
        <motion.div className="cell c7" {...fade}>
          <Photo k="fairPartners" alt={b.capA[lang]} />
          <div className="cap">{b.capA[lang]}</div>
        </motion.div>
        <motion.div className="cell txt cob c5" {...fade}>
          <div className="big">4</div>
          <div>
            <h3>{b.regionsTitle[lang]}</h3>
            <p>{b.regions[lang]}</p>
          </div>
        </motion.div>
        <motion.div className="cell txt ink c4" {...fade}>
          <h3>{b.cycleTitle[lang]}</h3>
          <p>{b.cycle[lang]}</p>
        </motion.div>
        <motion.div className="cell c4" {...fade}>
          <Photo k="fairVisitors" alt={b.capB[lang]} />
          <div className="cap">{b.capB[lang]}</div>
        </motion.div>
        <motion.div className="cell c4" {...fade}>
          <Photo k="fairColleague" alt={b.capC[lang]} />
          <div className="cap">{b.capC[lang]}</div>
        </motion.div>
      </div>
    </section>
  );
}

function Memories({ lang }: { lang: Lang }) {
  const sec = useRef<HTMLElement>(null);
  const track = useRef<HTMLDivElement>(null);
  const [maxX, setMaxX] = useState(0);
  const { scrollYProgress } = useScroll({ target: sec, offset: ["start start", "end end"] });
  const x = useTransform(scrollYProgress, [0, 1], [0, -maxX]);
  const bar = useSpring(scrollYProgress, { stiffness: 120, damping: 24 });
  useLayoutEffect(() => {
    const m = () => setMaxX(Math.max(0, (track.current?.scrollWidth ?? 0) - window.innerWidth));
    m();
    window.addEventListener("resize", m);
    const imgs = track.current?.querySelectorAll("img");
    imgs?.forEach((im) => im.addEventListener("load", m));
    return () => { window.removeEventListener("resize", m); imgs?.forEach((im) => im.removeEventListener("load", m)); };
  }, []);
  return (
    <section className="mem" id="memories" ref={sec} style={{ height: `${Math.round(Math.max(2.2, 1 + maxX / 700) * 100)}dvh` }}>
      <div className="mem-pin">
        <div className="sec-head"><h2>{ui.memories.title[lang]}</h2></div>
        <motion.div className="mem-track" ref={track} style={{ x }}>
          {ui.memories.items.map((m, i) => (
            <figure className="mem-item" key={i}>
              <img src={site.photos[m.photo as keyof typeof site.photos]} alt={m.caption[lang]} />
              <figcaption>{m.caption[lang]}</figcaption>
            </figure>
          ))}
        </motion.div>
        <div className="mem-bar"><motion.i style={{ scaleX: bar }} /></div>
      </div>
    </section>
  );
}

function Row({ name, note, reduce }: { name: string; note: string; reduce: boolean }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const o = useTransform(scrollYProgress, [0, 0.5, 1], [0.15, 1, 0.15]);
  return (
    <motion.div ref={ref} className="s-row" style={{ opacity: reduce ? 1 : o }}>
      <div className="nm">{name}</div>
      <div className="nt">{note}</div>
    </motion.div>
  );
}

function Strengths({ lang }: { lang: Lang }) {
  const reduce = !!useReducedMotion();
  return (
    <section className="strengths">
      <div className="sec-head"><h2>{ui.strengths.title[lang]}</h2></div>
      <div className="s-list">
        {ui.strengths.items.map((s, i) => <Row key={i} name={s.name[lang]} note={s.note[lang]} reduce={reduce} />)}
      </div>
    </section>
  );
}

function Footer({ lang }: { lang: Lang }) {
  const f = ui.footer;
  const txt = (v: string | L) => (typeof v === "string" ? v : v[lang]);
  const year = new Date().getFullYear();
  return (
    <footer className="foot">
      <div className="foot-cols">
        <div><h4>{f.edu[lang]}</h4><ul>{f.eduItems.map((e, i) => <li key={i}><b>{txt(e.n)}</b><span>{e.d[lang]}</span></li>)}</ul></div>
        <div><h4>{f.lang[lang]}</h4><ul>{f.langItems.map((e, i) => <li key={i}><b>{txt(e.n)}</b><span>{e.d[lang]}</span></li>)}</ul></div>
        <div><h4>{f.more[lang]}</h4><ul>{f.moreItems.map((e, i) => <li key={i}><b>{txt(e.n)}</b><span>{e.d[lang]}</span></li>)}</ul></div>
      </div>
      <div className="wordmark" aria-hidden>{site.name}</div>
      <div className="foot-bar">
        <span>© {year} {site.name}. {f.rights[lang]}</span>
        <a href={site.linkedin} target="_blank" rel="noopener noreferrer"><LinkedinLogo size={18} /> {f.linkedin}</a>
      </div>
    </footer>
  );
}

export default function Site({ lang }: { lang: Lang }) {
  useEffect(() => { document.documentElement.lang = lang; }, [lang]);
  return (
    <main>
      <Nav lang={lang} />
      <Hero lang={lang} />
      <About lang={lang} />
      <Journey lang={lang} />
      <Babyjem lang={lang} />
      <Memories lang={lang} />
      <Strengths lang={lang} />
      <Footer lang={lang} />
    </main>
  );
}
