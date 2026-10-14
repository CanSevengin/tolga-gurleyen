"use client";

import Link from "next/link";
import { useEffect, useLayoutEffect, useRef, useState } from "react";
import {
  AnimatePresence,
  animate,
  motion,
  useInView,
  useMotionValue,
  useMotionValueEvent,
  useScroll,
  useSpring,
  useTransform,
  type MotionValue,
} from "framer-motion";
import { jobs, site, ui, type Lang, type Job } from "@/lib/content";

const ease = [0.22, 1, 0.36, 1] as const;

function Reveal({ children, delay = 0, y = 40, className }: { children: React.ReactNode; delay?: number; y?: number; className?: string }) {
  return (
    <motion.div
      className={className}
      initial={{ opacity: 0, y }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: "-80px" }}
      transition={{ duration: 0.9, delay, ease }}
    >
      {children}
    </motion.div>
  );
}

/* ---------- NAV ---------- */
function Nav({ lang }: { lang: Lang }) {
  const n = ui.nav;
  return (
    <motion.header className="nav" initial={{ y: -80, opacity: 0 }} animate={{ y: 0, opacity: 1 }} transition={{ duration: 0.9, ease, delay: 0.2 }}>
      <a href="#top" className="logo">
        Tolga <b>Gürleyen</b>
      </a>
      <a className="link" href="#story">{n.story[lang]}</a>
      <a className="link" href="#work">{n.work[lang]}</a>
      <a className="link" href="#fairs">{n.fairs[lang]}</a>
      <a className="link" href="#memories">{n.memories[lang]}</a>
      <a className="link" href="#contact">{n.contact[lang]}</a>
      <div className="lang" aria-label="Language">
        <Link href="/tr" className={lang === "tr" ? "on" : ""} hrefLang="tr">TR</Link>
        <Link href="/en" className={lang === "en" ? "on" : ""} hrefLang="en">EN</Link>
      </div>
    </motion.header>
  );
}

/* ---------- HERO ---------- */
function Hero({ lang }: { lang: Lang }) {
  const h = ui.hero;
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end start"] });
  const py = useTransform(scrollYProgress, [0, 1], [0, 140]);
  const rot = useTransform(scrollYProgress, [0, 1], [0, 5]);
  const sc = useTransform(scrollYProgress, [0, 1], [1, 1.08]);
  const textY = useTransform(scrollYProgress, [0, 1], [0, -80]);
  const fade = useTransform(scrollYProgress, [0, 0.8], [1, 0]);
  const [i, setI] = useState(0);
  useEffect(() => {
    const id = setInterval(() => setI((v) => (v + 1) % h.words.length), 2200);
    return () => clearInterval(id);
  }, [h.words.length]);

  return (
    <section id="top" className="hero" ref={ref}>
      <motion.div className="blob" style={{ width: 560, height: 560, left: "-10%", top: "6%", background: "rgba(255,255,255,.16)", y: py }} />
      <motion.div className="blob" style={{ width: 480, height: 480, right: "-8%", top: "30%", background: "rgba(150,160,190,.16)", y: textY }} />
      <div className="blob" style={{ width: 360, height: 360, left: "40%", bottom: "-12%", background: "rgba(255,255,255,.08)" }} />
      <div className="wrap hero-grid">
        <motion.div style={{ y: textY, opacity: fade }}>
          <motion.p className="hello" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ duration: 0.8, ease, delay: 0.35 }}>
            {h.hello[lang]}
          </motion.p>
          <h1 className="name">
            {["Tolga", "Gürleyen"].map((w, k) => (
              <span key={w} style={{ display: "block", overflow: "hidden", paddingBottom: ".08em" }}>
                <motion.span
                  className={k === 1 ? "grad" : ""}
                  style={{ display: "inline-block" }}
                  initial={{ y: "110%" }}
                  animate={{ y: 0 }}
                  transition={{ duration: 1.1, ease, delay: 0.45 + k * 0.12 }}
                >
                  {w}
                </motion.span>
              </span>
            ))}
          </h1>
          <motion.p className="role" initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1, duration: 0.9 }}>
            {h.role[lang]}
          </motion.p>
          <motion.p className="headline" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.15, duration: 0.9, ease }}>
            {h.headline[lang]}
          </motion.p>
          <motion.div initial={{ opacity: 0 }} animate={{ opacity: 1 }} transition={{ delay: 1.3 }}>
            <span className="rot grad-warm">
              <AnimatePresence mode="wait">
                <motion.span
                  key={i}
                  style={{ display: "inline-block" }}
                  initial={{ y: "100%", opacity: 0 }}
                  animate={{ y: 0, opacity: 1 }}
                  exit={{ y: "-100%", opacity: 0 }}
                  transition={{ duration: 0.5, ease }}
                >
                  {h.words[i][lang]}
                </motion.span>
              </AnimatePresence>
            </span>
          </motion.div>
          <motion.div className="btns" initial={{ opacity: 0, y: 20 }} animate={{ opacity: 1, y: 0 }} transition={{ delay: 1.45, duration: 0.8, ease }}>
            <a className="btn p" href="#work">{h.cta1[lang]} →</a>
            <a className="btn s" href={site.linkedin} target="_blank" rel="noopener noreferrer">{h.cta2[lang]}</a>
          </motion.div>
        </motion.div>

        <motion.div style={{ y: py, rotate: rot, scale: sc, position: "relative" }} initial={{ opacity: 0, scale: 0.9 }} animate={{ opacity: 1 }} transition={{ duration: 1.2, ease, delay: 0.5 }}>
          <motion.div className="sticker" style={{ background: "#f5f5f7", top: 24, left: -18 }} animate={{ y: [0, -10, 0], rotate: [-6, -3, -6] }} transition={{ repeat: Infinity, duration: 4.5, ease: "easeInOut" }}>
            30+ {lang === "tr" ? "yıl deneyim" : "years of experience"}
          </motion.div>
          <motion.div className="sticker" style={{ background: "rgba(40,40,44,.85)", color: "#f5f5f7", border: "1px solid rgba(255,255,255,.18)", backdropFilter: "blur(14px)", bottom: 70, right: -14 }} animate={{ y: [0, 12, 0], rotate: [5, 2, 5] }} transition={{ repeat: Infinity, duration: 5.2, ease: "easeInOut" }}>
            📍 {h.location[lang]}
          </motion.div>
          <div className="portrait">
            <img src={site.photos.portrait} alt="Tolga Gürleyen" fetchPriority="high" />
          </div>
        </motion.div>
      </div>
      <div className="scroll-hint">
        {h.scroll[lang]}
        <i />
      </div>
    </section>
  );
}

/* ---------- TICKER ---------- */
function Ticker({ lang }: { lang: Lang }) {
  const items = [...ui.ticker, ...ui.ticker];
  return (
    <div className="ticker" aria-hidden>
      <div className="ticker-track">
        {items.map((t, k) => (
          <span key={k}>{t[lang]}</span>
        ))}
      </div>
    </div>
  );
}

/* ---------- STORY (word-by-word scroll reveal) ---------- */
function Word({ w, p, a, b }: { w: string; p: MotionValue<number>; a: number; b: number }) {
  const o = useTransform(p, [a, b], [0.14, 1]);
  return <motion.span className="w" style={{ opacity: o }}>{w} </motion.span>;
}
function Story({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const words = ui.story.text[lang].split(" ");
  const span = 0.8;
  return (
    <section id="story" className="story" ref={ref} style={{ height: "280vh" }}>
      <div className="story-sticky">
        <div className="wrap">
          <span className="kicker">{ui.story.kicker[lang]}</span>
          <p className="story-text">
            {words.map((w, k) => (
              <Word key={k} w={w} p={scrollYProgress} a={(k / words.length) * span} b={(k / words.length) * span + 0.06} />
            ))}
          </p>
        </div>
      </div>
    </section>
  );
}

/* ---------- STATS ---------- */
function Counter({ to, suffix, lang }: { to: number; suffix: string; lang: Lang }) {
  const ref = useRef<HTMLSpanElement>(null);
  const inView = useInView(ref, { once: true, margin: "-60px" });
  const [v, setV] = useState(0);
  useEffect(() => {
    if (!inView) return;
    const c = animate(0, to, { duration: 2, ease, onUpdate: (x) => setV(Math.round(x)) });
    return () => c.stop();
  }, [inView, to]);
  return (
    <span ref={ref} className="grad-warm">
      {v.toLocaleString(lang === "tr" ? "tr-TR" : "en-US")}
      {suffix}
    </span>
  );
}
function Stats({ lang }: { lang: Lang }) {
  return (
    <section className="stats">
      <div className="wrap stat-grid">
        {ui.stats.items.map((s, k) => (
          <Reveal key={k} delay={k * 0.08}>
            <div className="stat">
              <div className="num"><Counter to={s.value} suffix={s.suffix} lang={lang} /></div>
              <div className="lab">{s.label[lang]}</div>
            </div>
          </Reveal>
        ))}
      </div>
    </section>
  );
}

/* ---------- WORK ---------- */
function JobCard({ job, lang, open, toggle }: { job: Job; lang: Lang; open: boolean; toggle: () => void }) {
  return (
    <Reveal>
      <div className={"job" + (open ? " open" : "")} style={{ ["--c" as string]: job.color }}>
        <button className="job-head" onClick={toggle} aria-expanded={open}>
          <span className="job-period">{job.period[lang]}</span>
          <span>
            <div className="job-company">
              {job.company}
              {job.current && <span className="badge">{ui.work.now[lang]}</span>}
            </div>
            <div className="job-title">{job.title[lang]} · {job.place}</div>
          </span>
          <span className="plus">+</span>
        </button>
        <AnimatePresence initial={false}>
          {open && (
            <motion.div
              initial={{ height: 0, opacity: 0 }}
              animate={{ height: "auto", opacity: 1 }}
              exit={{ height: 0, opacity: 0 }}
              transition={{ duration: 0.5, ease }}
              style={{ overflow: "hidden" }}
            >
              <div className="job-body">
                <p>{job.summary[lang]}</p>
                {job.points.length > 0 && (
                  <ul>
                    {job.points.map((p, k) => (
                      <li key={k}>{p[lang]}</li>
                    ))}
                  </ul>
                )}
              </div>
            </motion.div>
          )}
        </AnimatePresence>
      </div>
    </Reveal>
  );
}
function Work({ lang }: { lang: Lang }) {
  const [open, setOpen] = useState<string | null>("babyjem");
  return (
    <section id="work" className="work light">
      <div className="wrap">
        <Reveal>
          <span className="kicker">{ui.work.kicker[lang]}</span>
          <h2 className="h2">{ui.work.title[lang]}</h2>
          <p className="hint">{ui.work.hint[lang]}</p>
        </Reveal>
        <div className="jobs">
          {jobs.map((j) => (
            <JobCard key={j.id} job={j} lang={lang} open={open === j.id} toggle={() => setOpen(open === j.id ? null : j.id)} />
          ))}
        </div>
      </div>
    </section>
  );
}

/* ---------- FAIRS ---------- */
function FairCard({ src, mid, lang }: { src: string; mid?: boolean; lang: Lang }) {
  const ref = useRef<HTMLDivElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start end", "end start"] });
  const y = useTransform(scrollYProgress, [0, 1], ["-9%", "0%"]);
  return (
    <Reveal>
      <div ref={ref} className={"fair-card" + (mid ? " mid" : "")}>
        <motion.img src={src} alt={ui.fairs.caption[lang]} style={{ y }} loading="lazy" />
        <span className="cap">{ui.fairs.caption[lang]}</span>
      </div>
    </Reveal>
  );
}
function Fairs({ lang }: { lang: Lang }) {
  const p = site.photos;
  return (
    <section id="fairs" className="fairs">
      <div className="wrap">
        <div className="fair-top">
          <Reveal>
            <span className="kicker">{ui.fairs.kicker[lang]}</span>
            <h2 className="h2">{ui.fairs.title[lang]}</h2>
          </Reveal>
          <Reveal delay={0.12}><p>{ui.fairs.text[lang]}</p></Reveal>
        </div>
        <div className="fair-grid">
          <FairCard src={p.fairVisitors} lang={lang} />
          <FairCard src={p.fairPartners} mid lang={lang} />
          <FairCard src={p.fairColleague} lang={lang} />
        </div>
      </div>
    </section>
  );
}

/* ---------- MEMORIES (pinned horizontal scroll) ---------- */
function Memories({ lang }: { lang: Lang }) {
  const ref = useRef<HTMLElement>(null);
  const trackRef = useRef<HTMLDivElement>(null);
  const max = useMotionValue(0);
  const { scrollYProgress } = useScroll({ target: ref, offset: ["start start", "end end"] });
  const smooth = useSpring(scrollYProgress, { stiffness: 90, damping: 26, mass: 0.4 });
  const [dist, setDist] = useState(0);
  useLayoutEffect(() => {
    const m = () => {
      if (!trackRef.current) return;
      const d = Math.max(0, trackRef.current.scrollWidth - window.innerWidth);
      setDist(d);
      max.set(d);
    };
    m();
    window.addEventListener("resize", m);
    const t = setTimeout(m, 600);
    return () => { window.removeEventListener("resize", m); clearTimeout(t); };
  }, [max]);
  const x = useTransform(smooth, [0.04, 0.96], [0, -dist]);
  const photos = site.photos as Record<string, string>;
  const wide = new Set(["disco", "teamNight"]);
  return (
    <section id="memories" className="mem" ref={ref}>
      <div className="mem-pin">
        <div className="wrap mem-head">
          <span className="kicker">{ui.memories.kicker[lang]}</span>
          <h2 className="h2" style={{ fontSize: "clamp(30px,5vw,60px)" }}>{ui.memories.title[lang]}</h2>
        </div>
        <motion.div className="mem-track" ref={trackRef} style={{ x }}>
          {ui.memories.items.map((m, k) => (
            <div key={k} className={"mem-card" + (wide.has(m.photo) ? " wide" : "")}>
              <img src={photos[m.photo]} alt={m.caption[lang]} loading="lazy" />
              <span className="cap">{m.caption[lang]}</span>
            </div>
          ))}
        </motion.div>
        <div className="wrap" style={{ width: "min(1200px, calc(100% - 40px))" }}>
          <div className="mem-bar"><motion.i style={{ scaleX: scrollYProgress }} /></div>
        </div>
      </div>
    </section>
  );
}

/* ---------- SKILLS + EDU ---------- */
function Skills({ lang }: { lang: Lang }) {
  const e = ui.edu;
  return (
    <section className="skills light">
      <div className="wrap">
        <Reveal>
          <span className="kicker">{ui.skills.kicker[lang]}</span>
          <h2 className="h2">{ui.skills.title[lang]}</h2>
        </Reveal>
        <div className="chips">
          {ui.skills.items.map((s, k) => (
            <motion.span
              key={k}
              className="chip"
              initial={{ opacity: 0, y: 24, scale: 0.9 }}
              whileInView={{ opacity: 1, y: 0, scale: 1 }}
              viewport={{ once: true, margin: "-40px" }}
              transition={{ duration: 0.6, ease, delay: k * 0.05 }}
            >
              {s[lang]}
            </motion.span>
          ))}
        </div>
        <div className="edu-grid">
          <Reveal className="card">
            <h3>{lang === "tr" ? "Eğitim" : "Education"}</h3>
            {e.items.map((it, k) => (
              <div key={k} className="edu-item">
                <b>{it.title[lang]}</b>
                <span>{it.sub[lang]}</span>
              </div>
            ))}
          </Reveal>
          <Reveal delay={0.1} className="card">
            <h3>{lang === "tr" ? "Diller" : "Languages"}</h3>
            {e.langs.map((l, k) => (
              <div key={k} className="lang-row">{l.name[lang]} <span>{l.level[lang]}</span></div>
            ))}
            <p className="cert">{e.cert[lang]}</p>
          </Reveal>
        </div>
      </div>
    </section>
  );
}

/* ---------- CONTACT ---------- */
function Contact({ lang }: { lang: Lang }) {
  const c = ui.contact;
  return (
    <section id="contact" className="contact">
      <div className="blob" style={{ width: 560, height: 560, left: "50%", top: "6%", marginLeft: -280, background: "rgba(255,255,255,.14)", opacity: 0.6 }} />
      <div className="wrap" style={{ position: "relative" }}>
        <Reveal>
          <span className="kicker">{c.kicker[lang]}</span>
          <h2 className="h2 grad">{c.title[lang]}</h2>
          <p>{c.text[lang]}</p>
          <div className="btns">
            <a className="btn p" href={`mailto:${site.email}`}>{c.mail[lang]}</a>
            <a className="btn s" href={site.linkedin} target="_blank" rel="noopener noreferrer">{c.li[lang]}</a>
          </div>
        </Reveal>
        <div className="foot">
          <span>© {new Date().getFullYear()} {site.name}. {c.rights[lang]}</span>
          <span>{ui.hero.location[lang]}</span>
        </div>
      </div>
    </section>
  );
}

export default function Site({ lang }: { lang: Lang }) {
  useEffect(() => {
    document.documentElement.lang = lang;
  }, [lang]);
  return (
    <main>
      <Nav lang={lang} />
      <Hero lang={lang} />
      <Ticker lang={lang} />
      <Story lang={lang} />
      <Stats lang={lang} />
      <Work lang={lang} />
      <Fairs lang={lang} />
      <Memories lang={lang} />
      <Skills lang={lang} />
      <Contact lang={lang} />
    </main>
  );
}
