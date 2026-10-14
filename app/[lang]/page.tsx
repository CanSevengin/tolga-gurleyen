import type { Metadata } from "next";
import { notFound } from "next/navigation";
import Site from "@/components/Site";
import type { Lang } from "@/lib/content";

export function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const tr = lang === "tr";
  const title = tr ? "Tolga Gürleyen | Uluslararası Satış ve Pazarlama" : "Tolga Gürleyen | International Sales and Marketing";
  const description = tr
    ? "Babyjem Uluslararası Satış ve Pazarlama Müdürü. Avrupa, Birleşik Krallık, Orta Doğu ve MENA pazarlarında distribütör geliştirme ve ihracat."
    : "International Sales and Marketing Manager at Babyjem. Distributor development and export across Europe, the UK, the Middle East and MENA.";
  return {
    title,
    description,
    alternates: { languages: { tr: "/tr", en: "/en" } },
    openGraph: { title, description, images: ["/photos/portrait.jpg"], type: "website" },
  };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "tr" && lang !== "en") notFound();
  return <Site lang={lang as Lang} />;
}
