import Link from 'next/link';

interface CardProps {
  variant: 'feature' | 'principe' | 'blog' | 'cta';
  title: string;
  description?: string;
  label?: string;
  href?: string;
  image?: { src: string; alt: string };
  date?: string;
  onDark?: boolean;
  ctaLabel?: string;
  className?: string;
  children?: React.ReactNode;
}

function FeatureCard({ title, description, label, onDark = false, className = '' }: CardProps) {
  const containerClasses = onDark
    ? 'bg-steel-blue/15 border border-steel-blue/25 text-linen'
    : 'bg-steel-blue/10 border border-steel-blue/20';
  const labelClasses = onDark ? 'text-tete' : 'text-steel-blue';
  const descClasses = onDark ? 'text-linen/80' : 'text-slate_f/80';

  return (
    <div className={`${containerClasses} rounded-lg p-6 lg:p-8 ${className}`}>
      {label && (
        <div className="flex items-center gap-3 mb-4">
          <span className={`font-label text-label uppercase tracking-[0.08em] ${labelClasses}`}>
            {label}
          </span>
        </div>
      )}
      <h3 className="font-heading text-h3 tracking-[-0.02em] mb-3">{title}</h3>
      {description && (
        <p className={`font-body text-body leading-[1.6] ${descClasses}`}>{description}</p>
      )}
    </div>
  );
}

function PrincipeCard({ title, description, label, className = '' }: CardProps) {
  return (
    <div className={`bg-slate_f text-linen rounded-lg p-6 lg:p-8 ${className}`}>
      {label && (
        <span className="inline-block font-label text-caption uppercase tracking-[0.12em] text-sand mb-4">
          {label}
        </span>
      )}
      <h3 className="font-heading text-h3 tracking-[-0.02em] mb-3">{title}</h3>
      {description && (
        <p className="font-body text-body-sm leading-[1.6] text-linen/80">{description}</p>
      )}
    </div>
  );
}

function BlogCard({ title, description, label, href, image, date, className = '' }: CardProps) {
  const formattedDate = date
    ? new Date(date).toLocaleDateString('fr-FR', { day: 'numeric', month: 'long', year: 'numeric' })
    : null;

  return (
    <article className={`group ${className}`}>
      <div className="aspect-[16/9] rounded-lg overflow-hidden bg-steel-blue/20 mb-4">
        {image ? (
          <img
            src={image.src}
            alt={image.alt}
            className="w-full h-full object-cover"
            loading="lazy"
          />
        ) : (
          <div className="w-full h-full bg-steel-blue/10" />
        )}
      </div>
      <div className="flex items-center gap-2 mb-2">
        {label && (
          <span className="font-label text-caption uppercase tracking-[0.08em] text-steel-blue">
            {label}
          </span>
        )}
        {label && formattedDate && <span className="text-sand/50" aria-hidden="true">&bull;</span>}
        {formattedDate && (
          <time className="font-body text-caption text-slate_f/60" dateTime={date}>
            {formattedDate}
          </time>
        )}
      </div>
      <h3 className="font-heading text-h4 tracking-[-0.02em] group-hover:text-steel-blue transition-colors duration-base">
        {href ? <Link href={href}>{title}</Link> : title}
      </h3>
      {description && (
        <p className="font-body text-body-sm leading-[1.6] text-slate_f/70 mt-2 line-clamp-3">
          {description}
        </p>
      )}
    </article>
  );
}

function CtaCard({ title, description, href, ctaLabel = 'Découvrir', children, className = '' }: CardProps) {
  return (
    <div className={`bg-linen rounded-lg p-8 text-center border border-sand/30 hover:shadow-card transition-shadow duration-base ${className}`}>
      {children && <div className="w-12 h-12 mx-auto mb-6 text-coeur">{children}</div>}
      <h3 className="font-heading text-h3 tracking-[-0.02em] text-slate_f mb-3">{title}</h3>
      {description && (
        <p className="font-body text-body-sm text-slate_f/70 mb-6">{description}</p>
      )}
      {href && (
        <Link
          href={href}
          className="inline-flex items-center px-6 py-3 bg-sand text-slate_f font-label text-label uppercase tracking-[0.08em] rounded-md hover:bg-[#C8B496] transition-colors duration-base"
        >
          {ctaLabel}
        </Link>
      )}
    </div>
  );
}

export default function Card(props: CardProps) {
  switch (props.variant) {
    case 'feature':
      return <FeatureCard {...props} />;
    case 'principe':
      return <PrincipeCard {...props} />;
    case 'blog':
      return <BlogCard {...props} />;
    case 'cta':
      return <CtaCard {...props} />;
  }
}
