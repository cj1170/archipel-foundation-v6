import Link from 'next/link';

interface BreadcrumbItem {
  label: string;
  href?: string;
}

interface BreadcrumbsProps {
  items: BreadcrumbItem[];
  variant: 'on-dark' | 'on-light';
}

export default function Breadcrumbs({ items, variant }: BreadcrumbsProps) {
  const linkColor = variant === 'on-dark' ? 'text-sand hover:text-linen' : 'text-steel-blue hover:text-slate_f';
  const currentColor = variant === 'on-dark' ? 'text-linen' : 'text-slate_f';
  const separatorColor = variant === 'on-dark' ? 'text-sand/50' : 'text-steel-blue/50';

  return (
    <nav aria-label="Fil d'Ariane" className="mb-8">
      <ol className="flex items-center gap-2 font-label text-caption uppercase tracking-[0.08em]">
        {items.map((item, index) => {
          const isLast = index === items.length - 1;
          return (
            <li key={item.label} className="flex items-center gap-2">
              {index > 0 && (
                <span className={separatorColor} aria-hidden="true">/</span>
              )}
              {isLast || !item.href ? (
                <span className={currentColor} aria-current={isLast ? 'page' : undefined}>
                  {item.label}
                </span>
              ) : (
                <Link href={item.href} className={`${linkColor} transition-colors`}>
                  {item.label}
                </Link>
              )}
            </li>
          );
        })}
      </ol>
    </nav>
  );
}
