interface SectionProps {
  variant: 'slate' | 'steel' | 'linen';
  padding?: 'default' | 'compact' | 'hero';
  id?: string;
  className?: string;
  children: React.ReactNode;
}

const variantStyles: Record<SectionProps['variant'], string> = {
  slate: 'bg-slate_f text-linen',
  steel: 'bg-steel-blue text-linen',
  linen: 'bg-linen text-slate_f',
};

const paddingStyles: Record<NonNullable<SectionProps['padding']>, string> = {
  default: 'py-16 lg:py-24',
  compact: 'py-12 lg:py-16',
  hero: 'pt-32 pb-16 lg:pt-40 lg:pb-24',
};

export default function Section({
  variant,
  padding = 'default',
  id,
  className = '',
  children,
}: SectionProps) {
  return (
    <section
      id={id}
      className={`${variantStyles[variant]} ${paddingStyles[padding]} ${className}`}
    >
      <div className="mx-auto max-w-7xl px-6 lg:px-8">
        {children}
      </div>
    </section>
  );
}
