import { Metadata } from 'next';
import { notFound } from 'next/navigation';
import ReactMarkdown from 'react-markdown';
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

  return (
    <>
      {/* ═══════════════════════════════════════════
          HERO ARTICLE
          ═══════════════════════════════════════════ */}
      <section className="relative min-h-[50vh] flex items-end bg-slate_f text-linen pt-32 pb-12 lg:pt-40 lg:pb-16">
        {article.image && (
          <>
            <img src={article.image} alt="" aria-hidden="true" className="absolute inset-0 w-full h-full object-cover opacity-40" />
            <div className="absolute inset-0 bg-slate_f/50" aria-hidden="true" />
          </>
        )}
        <div className="mx-auto max-w-3xl px-6 lg:px-8 relative z-10">
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

          {/* Titre */}
          <h1 className="font-heading text-h1 lg:text-hero tracking-[-0.02em] text-linen mb-6">
            {article.title}
          </h1>

          {/* Séparateur */}
          <div className="w-12 h-0.5 bg-sand mb-6" />

          {/* Auteur + Date */}
          <p className="font-body text-body-sm text-sand">
            Par {article.author} | <time dateTime={article.date}>{formattedDate}</time>
          </p>
        </div>
      </section>

      {/* ═══════════════════════════════════════════
          CONTENU ARTICLE
          ═══════════════════════════════════════════ */}
      <Section variant="linen" padding="default">
        <div className="max-w-3xl mx-auto text-justify">
          <ReactMarkdown
            components={{
              h2: ({ children }) => (
                <h2 className="font-heading text-h2 tracking-[-0.02em] text-slate_f mt-12 mb-4">
                  {children}
                </h2>
              ),
              h3: ({ children }) => (
                <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mt-8 mb-3">
                  {children}
                </h3>
              ),
              p: ({ children }) => (
                <p className="font-body text-body leading-[1.8] text-slate_f/80 mb-6">
                  {children}
                </p>
              ),
              em: ({ children }) => <em className="italic">{children}</em>,
              strong: ({ children }) => (
                <strong className="font-medium text-slate_f">{children}</strong>
              ),
              blockquote: ({ children }) => (
                <blockquote className="border-l-[3px] border-sand pl-6 italic text-steel-blue">
                  {children}
                </blockquote>
              ),
              a: ({ href, children }) => (
                <a
                  href={href}
                  className="text-steel-blue underline hover:text-sand transition-colors"
                >
                  {children}
                </a>
              ),
              ul: ({ children }) => (
                <ul className="font-body text-body leading-[1.8] text-slate_f/80 mb-6 list-disc pl-6 space-y-2">
                  {children}
                </ul>
              ),
              ol: ({ children }) => (
                <ol className="font-body text-body leading-[1.8] text-slate_f/80 mb-6 list-decimal pl-6 space-y-2">
                  {children}
                </ol>
              ),
            }}
          >
            {article.content}
          </ReactMarkdown>
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
