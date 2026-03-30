import Link from 'next/link';

interface ButtonProps {
  variant: 'primary' | 'secondary' | 'outline-light' | 'accent';
  size?: 'sm' | 'md' | 'lg';
  href?: string;
  loading?: boolean;
  disabled?: boolean;
  icon?: React.ReactNode;
  children: React.ReactNode;
  onClick?: () => void;
  type?: 'button' | 'submit';
  className?: string;
}

const variantStyles: Record<ButtonProps['variant'], string> = {
  primary:
    'bg-sand text-slate_f hover:bg-[#C8B496] active:bg-[#A89070] focus:ring-offset-slate_f rounded-md',
  secondary:
    'bg-transparent text-sand border border-sand hover:bg-sand/10 focus:ring-offset-slate_f rounded-md',
  'outline-light':
    'bg-transparent text-slate_f border border-slate_f hover:bg-slate_f/5 focus:ring-offset-linen rounded-md',
  accent:
    'bg-sand text-slate_f hover:bg-[#C8B496] active:bg-[#A89070] rounded-full',
};

const sizeStyles: Record<NonNullable<ButtonProps['size']>, string> = {
  sm: 'px-4 py-2 text-body-sm',
  md: 'px-6 py-3 text-body',
  lg: 'px-8 py-4 text-body',
};

function Spinner() {
  return (
    <svg
      className="animate-spin -ml-1 mr-2 h-4 w-4"
      xmlns="http://www.w3.org/2000/svg"
      fill="none"
      viewBox="0 0 24 24"
      aria-hidden="true"
    >
      <circle
        className="opacity-25"
        cx="12"
        cy="12"
        r="10"
        stroke="currentColor"
        strokeWidth="4"
      />
      <path
        className="opacity-75"
        fill="currentColor"
        d="M4 12a8 8 0 018-8V0C5.373 0 0 5.373 0 12h4z"
      />
    </svg>
  );
}

export default function Button({
  variant,
  size = 'md',
  href,
  loading = false,
  disabled = false,
  icon,
  children,
  onClick,
  type = 'button',
  className = '',
}: ButtonProps) {
  const baseClasses =
    'inline-flex items-center justify-center font-label text-label uppercase tracking-[0.08em] focus:outline-none focus:ring-2 focus:ring-steel-blue focus:ring-offset-2 active:scale-[0.98] transition-all duration-base disabled:opacity-50 disabled:cursor-not-allowed disabled:hover:scale-100';

  const classes = `${baseClasses} ${variantStyles[variant]} ${sizeStyles[size]} ${className}`;

  if (href && !disabled) {
    return (
      <Link href={href} className={classes}>
        {icon && <span className="mr-2">{icon}</span>}
        {children}
      </Link>
    );
  }

  return (
    <button
      type={type}
      onClick={onClick}
      disabled={disabled || loading}
      className={classes}
    >
      {loading && <Spinner />}
      {!loading && icon && <span className="mr-2">{icon}</span>}
      {children}
    </button>
  );
}
