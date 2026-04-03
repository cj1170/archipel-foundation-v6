import { Metadata } from 'next';
import Section from '@/components/Section';
import { getArticles, getCategories } from '@/lib/articles';
import ArticlesList from './ArticlesList';

export const metadata: Metadata = {
  title: 'Actualités',
  description:
    'Articles, analyses et réflexions sur la santé préventive, la Salutogénèse et l\'approche intégrative.',
  openGraph: {
    images: [{ url: '/images/og-actualites.jpg', width: 1200, height: 630 }],
  },
};

export default async function ActualitesPage() {
  const { articles } = await getArticles({ perPage: 100 });
  const categories = await getCategories();

  return (
    <>
      {/* ═══════════════════════════════════════════
          SECTION 1 — HERO BLOG
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="compact" className="pt-32 lg:pt-36 relative overflow-hidden">
        <img src="/images/hero-actualites.webp" alt="" className="absolute inset-0 w-full h-full object-cover opacity-60" />
        <div className="absolute inset-0 bg-slate_f/25" />
        <div className="max-w-3xl mx-auto text-center relative z-10">
          <span className="font-label text-[1.25rem] uppercase tracking-[0.12em] text-sand mb-6 block">
            Actualités
          </span>

          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-4">
            Réflexions, analyses, recherches.
          </h1>

          <p className="font-body text-h4 text-linen/70">
            Ce que nous apprenons, ce que nous construisons, ce qui nous
            interroge.
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          SECTIONS 2+3 — FILTRES + GRILLE (client)
          ═══════════════════════════════════════════ */}
      <ArticlesList articles={articles} categories={categories} />
    </>
  );
}
