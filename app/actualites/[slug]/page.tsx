import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import Section from '@/components/Section';
import Button from '@/components/Button';
import { getArticleBySlug, getArticleSlugs } from '@/lib/articles';

interface PageProps {
  params: { slug: string };
}

export async function generateStaticParams() {
  const slugs = await getArticleSlugs();
  return slugs.map((slug) => ({ slug }));
}

export async function generateMetadata({ params }: PageProps): Promise<Metadata> {
  const article = await getArticleBySlug(params.slug);
  if (!article) return { title: 'Article introuvable' };

  return {
    title: article.title,
    description: article.excerpt,
    openGraph: {
      title: article.title,
      description: article.excerpt,
      type: 'article',
      publishedTime: article.date,
      authors: [article.author],
    },
  };
}

export default async function ArticlePage({ params }: PageProps) {
  const article = await getArticleBySlug(params.slug);
  if (!article) notFound();

  const formattedDate = new Date(article.date).toLocaleDateString('fr-FR', {
    day: 'numeric',
    month: 'long',
    year: 'numeric',
  });

  // Split content into paragraphs
  const paragraphs = article.content
    .trim()
    .split('\n\n')
    .filter((p) => p.trim().length > 0);

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO ARTICLE
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="hero">
        <div className="max-w-3xl mx-auto">
          {/* Breadcrumbs */}
          <nav
            aria-label="Fil d'Ariane"
            className="mb-8 font-label text-caption uppercase tracking-[0.08em] text-sand/60"
          >
            <a
              href="/actualites"
              className="hover:text-sand transition-colors"
            >
              Actualités
            </a>
            <span className="mx-2" aria-hidden="true">
              /
            </span>
            <span className="text-sand">{article.category}</span>
          </nav>

          {/* Meta */}
          <div className="flex items-center gap-3 mb-6">
            <span className="font-label text-caption uppercase tracking-[0.08em] text-tete">
              {article.category}
            </span>
            <span className="text-sand/50">&bull;</span>
            <time
              className="font-body text-caption text-sand/70"
              dateTime={article.date}
            >
              {formattedDate}
            </time>
          </div>

          {/* Titre */}
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            {article.title}
          </h1>

          {/* Auteur */}
          <p className="font-body text-body-sm text-sand">
            Par {article.author}
          </p>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          CONTENU ARTICLE
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto">
          <div className="space-y-6 font-body text-body leading-[1.8] text-slate_f/80">
            {paragraphs.map((p, i) => (
              <p key={i}>{p.trim()}</p>
            ))}
          </div>
        </div>
      </Section>

      {/* ═══════════════════════════════════════════
          CTA PIONNIERS
          ═══════════════════════════════════════════ */}
      <Section variant="slate" padding="compact">
        <div className="max-w-3xl mx-auto text-center">
          <h2 className="font-heading text-h2 tracking-[-0.02em] text-linen mb-6">
            Vous partagez cette vision ?
          </h2>
          <Button variant="accent" size="lg" href="/#pionniers">
            Rejoindre les pionniers
          </Button>
        </div>
      </Section>
    </>
  );
}
