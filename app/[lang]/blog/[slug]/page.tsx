import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import { blog, posts, site, type Lang } from "@/lib/content";

export function generateStaticParams() {
  return ["tr", "en"].flatMap((lang) => posts.map((p) => ({ lang, slug: p.slug })));
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string; slug: string }> }): Promise<Metadata> {
  const { lang, slug } = await params;
  const p = posts.find((x) => x.slug === slug);
  if (!p) return {};
  return { title: `${p.title[lang as Lang]} | Tolga Gürleyen`, description: p.excerpt[lang as Lang], openGraph: { images: [site.photos[p.cover]] } };
}

export default async function Page({ params }: { params: Promise<{ lang: string; slug: string }> }) {
  const { lang, slug } = await params;
  if (lang !== "tr" && lang !== "en") notFound();
  const l = lang as Lang;
  const p = posts.find((x) => x.slug === slug);
  if (!p) notFound();
  return (
    <main className="blog">
      <Nav lang={l} suffix={`/blog/${p.slug}`} home={false} />
      <article className="post">
        <Link href={`/${l}/blog`} className="mono back">← {blog.back[l]}</Link>
        <span className="mono">{p.date[l]} · {p.min} {blog.min[l]}</span>
        <h1>{p.title[l]}</h1>
        <img className="cover" src={site.photos[p.cover]} alt={p.title[l]} />
        {p.body.map((para, i) => <p key={i}>{para[l]}</p>)}
      </article>
    </main>
  );
}
