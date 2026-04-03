'use client';

import { useState } from 'react';
import Link from 'next/link';

interface Article {
  title: string;
  slug: string;
  category: string;
  date: string;
  author: string;
  excerpt: string;
  image?: string;
}

const ARTICLES_PER_PAGE = 9;

export default function ArticlesList({
  articles,
  categories,
}: {
  articles: Article[];
  categories: string[];
}) {
  const [activeCategory, setActiveCategory] = useState<string | null>(null);
  const [page, setPage] = useState(1);

  const today = new Date().toISOString().split('T')[0];
  const published = articles.filter((a) => a.date <= today);

  const filtered = activeCategory
    ? published.filter((a) => a.category === activeCategory)
    : published;

  const totalPages = Math.ceil(filtered.length / ARTICLES_PER_PAGE);
  const featured = filtered[0];
  const rest = filtered.slice(1);
  const paginated = rest.slice(0, page * ARTICLES_PER_PAGE);
  const hasMore = paginated.length < rest.length;

  function formatDate(dateStr: string) {
    return new Date(dateStr).toLocaleDateString('fr-FR', {
      day: 'numeric',
      month: 'long',
      year: 'numeric',
    });
  }

  return (
    <>
      {/* Filtres catégories */}
      <div className="bg-linen border-b border-sand/20 py-6">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          <div className="flex flex-wrap gap-3">
            <button
              onClick={() => {
                setActiveCategory(null);
                setPage(1);
              }}
              className={`font-label text-caption uppercase tracking-[0.08em] px-4 py-2 rounded-sm transition-colors ${
                activeCategory === null
                  ? 'bg-slate_f text-linen'
                  : 'bg-transparent text-slate_f/60 hover:text-slate_f border border-slate_f/20'
              }`}
            >
              Tous
            </button>
            {categories.map((cat) => (
              <button
                key={cat}
                onClick={() => {
                  setActiveCategory(cat);
                  setPage(1);
                }}
                className={`font-label text-caption uppercase tracking-[0.08em] px-4 py-2 rounded-sm transition-colors ${
                  activeCategory === cat
                    ? 'bg-slate_f text-linen'
                    : 'bg-transparent text-slate_f/60 hover:text-slate_f border border-slate_f/20'
                }`}
              >
                {cat}
              </button>
            ))}
          </div>
        </div>
      </div>

      {/* Grille d'articles */}
      <section className="bg-linen py-16 lg:py-24">
        <div className="mx-auto max-w-7xl px-6 lg:px-8">
          {/* Article vedette */}
          {featured && (
            <article className="grid grid-cols-1 lg:grid-cols-5 gap-8 mb-16">
              <Link href={`/actualites/${featured.slug}`} className="lg:col-span-3 aspect-[16/9] rounded-lg overflow-hidden bg-steel-blue/10 block">
                {featured.image ? (
                  <img src={featured.image} alt={featured.title} className="w-full h-full object-cover" />
                ) : (
                  <div className="w-full h-full flex items-center justify-center">
                    <span className="font-label text-caption uppercase tracking-[0.08em] text-sand/40">Image article</span>
                  </div>
                )}
              </Link>
              <div className="lg:col-span-2 flex flex-col justify-center">
                <div className="flex items-center gap-2 mb-3">
                  <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue">
                    {featured.category}
                  </span>
                  <span className="text-sand/50">&bull;</span>
                  <time className="font-body text-caption text-slate_f/60">
                    {formatDate(featured.date)}
                  </time>
                </div>
                <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mb-3">
                  <Link
                    href={`/actualites/${featured.slug}`}
                    className="hover:text-steel-blue transition-colors"
                  >
                    {featured.title}
                  </Link>
                </h2>
                <p className="font-body text-body leading-[1.6] text-slate_f/70 line-clamp-4">
                  {featured.excerpt}
                </p>
              </div>
            </article>
          )}

          {/* Grille */}
          {paginated.length > 0 && (
            <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-6 lg:gap-8">
              {paginated.map((article) => (
                <article key={article.slug} className="group">
                  <Link href={`/actualites/${article.slug}`} className="aspect-[16/9] rounded-lg overflow-hidden bg-steel-blue/10 mb-4 block">
                    {article.image ? (
                      <img src={article.image} alt={article.title} className="w-full h-full object-cover" />
                    ) : (
                      <div className="w-full h-full flex items-center justify-center">
                        <span className="font-label text-caption uppercase tracking-[0.08em] text-sand/40">Image</span>
                      </div>
                    )}
                  </Link>
                  <div className="flex items-center gap-2 mb-2">
                    <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue">
                      {article.category}
                    </span>
                    <span className="text-sand/50" aria-hidden="true">
                      &bull;
                    </span>
                    <time
                      className="font-body text-caption text-slate_f/60"
                      dateTime={article.date}
                    >
                      {formatDate(article.date)}
                    </time>
                  </div>
                  <h3 className="font-heading text-h4 tracking-[-0.02em] group-hover:text-steel-blue transition-colors duration-base">
                    <Link href={`/actualites/${article.slug}`}>
                      {article.title}
                    </Link>
                  </h3>
                  <p className="font-body text-body-sm leading-[1.6] text-slate_f/70 mt-2 line-clamp-3">
                    {article.excerpt}
                  </p>
                </article>
              ))}
            </div>
          )}

          {/* Pagination */}
          {hasMore && (
            <div className="mt-12 flex justify-center">
              <button
                onClick={() => setPage((p) => p + 1)}
                className="font-label text-label uppercase tracking-[0.08em] text-sand border border-sand/50 rounded-md px-6 py-3 hover:bg-sand/10 transition-colors"
              >
                Voir plus d&apos;articles
              </button>
            </div>
          )}

          {filtered.length === 0 && (
            <p className="font-body text-body text-slate_f/60 text-center py-12">
              Aucun article dans cette catégorie pour le moment.
            </p>
          )}
        </div>
      </section>
    </>
  );
}
