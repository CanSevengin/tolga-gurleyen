import type { Metadata } from "next";
import Link from "next/link";
import { notFound } from "next/navigation";
import Nav from "@/components/Nav";
import { blog, posts, site, ui, type Lang } from "@/lib/content";

export function generateStaticParams() {
  return [{ lang: "tr" }, { lang: "en" }];
}

export async function generateMetadata({ params }: { params: Promise<{ lang: string }> }): Promise<Metadata> {
  const { lang } = await params;
  const l = lang as Lang;
  return { title: `${blog.title[l] ?? "Blog"} | Tolga Gürleyen`, description: blog.sub[l] };
}

export default async function Page({ params }: { params: Promise<{ lang: string }> }) {
  const { lang } = await params;
  if (lang !== "tr" && lang !== "en") notFound();
  const l = lang as Lang;
  return (
    <main className="blog">
      <Nav lang={l} suffix="/blog" home={false} />
      <header className="blog-head">
        <span className="mono">{ui.nav.blog[l]}</span>
        <h1>{blog.title[l]}</h1>
        <p>{blog.sub[l]}</p>
      </header>
      <div className="blog-list">
        {posts.map((p) => (
          <Link key={p.slug} href={`/${l}/blog/${p.slug}`} className="post-row">
            <img src={site.photos[p.cover]} alt="" loading="lazy" />
            <div>
              <span className="mono">{p.date[l]} · {p.min} {blog.min[l]}</span>
              <h2>{p.title[l]}</h2>
              <p>{p.excerpt[l]}</p>
              <span className="more">{blog.read[l]} →</span>
            </div>
          </Link>
        ))}
      </div>
    </main>
  );
}
