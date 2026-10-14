"use client";
import Link from "next/link";
import { LinkedinLogo } from "@phosphor-icons/react";
import { site, ui, type Lang } from "@/lib/content";

export default function Nav({ lang, suffix = "", home = true }: { lang: Lang; suffix?: string; home?: boolean }) {
  const h = home ? "" : `/${lang}`;
  return (
    <nav className="nav" aria-label="Main">
      <Link className="brand" href={`/${lang}`}>{site.name}</Link>
      <div className="links">
        <a href={`${h}#about`}>{ui.nav.about[lang]}</a>
        <a href={`${h}#journey`}>{ui.nav.journey[lang]}</a>
        <a href={`${h}#babyjem`}>{ui.nav.babyjem[lang]}</a>
        <a href={`${h}#memories`}>{ui.nav.memories[lang]}</a>
        <Link href={`/${lang}/blog`}>{ui.nav.blog[lang]}</Link>
      </div>
      <div className="tools">
        <div className="lang">
          <Link href={`/tr${suffix}`} className={lang === "tr" ? "on" : ""} aria-label="Türkçe">TR</Link>
          <Link href={`/en${suffix}`} className={lang === "en" ? "on" : ""} aria-label="English">EN</Link>
        </div>
        <a className="ico" href={site.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn">
          <LinkedinLogo size={20} weight="regular" />
        </a>
      </div>
    </nav>
  );
}
