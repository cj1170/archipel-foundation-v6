import type { Config } from 'tailwindcss';

const config: Config = {
  content: ['./app/**/*.{ts,tsx}', './components/**/*.{ts,tsx}'],
  theme: {
    extend: {
      colors: {
        slate_f:      '#1A2B35',
        'steel-blue': '#3D5A80',
        linen:        '#EDE8E0',
        sand:         '#B8A082',
        tete:         '#A0A8C0',
        corps:        '#789878',
        coeur:        '#C85A30',
        milieu:       '#3D5A80',
      },
      fontFamily: {
        heading: ['CoCoMat Pro', 'Cormorant Garamond', 'Georgia', 'serif'],
        body:    ['Tenor Sans', 'Georgia', 'serif'],
        label:   ['Archytype Bayer-Type', 'Montserrat', 'sans-serif'],
      },
      fontSize: {
        hero:      ['var(--text-hero)',    { lineHeight: 'var(--leading-tight)' }],
        h1:        ['var(--text-h1)',      { lineHeight: 'var(--leading-tight)' }],
        h2:        ['var(--text-h2)',      { lineHeight: 'var(--leading-tight)' }],
        h3:        ['var(--text-h3)',      { lineHeight: 'var(--leading-tight)' }],
        h4:        ['var(--text-h4)',      { lineHeight: 'var(--leading-tight)' }],
        body:      ['var(--text-body)',    { lineHeight: 'var(--leading-normal)' }],
        'body-sm': ['var(--text-body-sm)', { lineHeight: 'var(--leading-normal)' }],
        caption:   ['var(--text-caption)', { lineHeight: 'var(--leading-normal)' }],
        label:     ['var(--text-label)',   { lineHeight: '1.4' }],
      },
      boxShadow: {
        sm:       '0 1px 2px rgba(26,43,53,0.06)',
        md:       '0 4px 12px rgba(26,43,53,0.08)',
        lg:       '0 8px 24px rgba(26,43,53,0.12)',
        card:     '0 2px 8px rgba(26,43,53,0.06), 0 0 1px rgba(26,43,53,0.08)',
        dropdown: '0 8px 32px rgba(26,43,53,0.16)',
      },
      borderRadius: {
        sm:   '0.25rem',
        md:   '0.5rem',
        lg:   '0.75rem',
        xl:   '1rem',
        full: '9999px',
      },
      transitionDuration: {
        fast: '150ms',
        base: '250ms',
        slow: '400ms',
      },
      transitionTimingFunction: {
        spring: 'cubic-bezier(0.34, 1.56, 0.64, 1)',
      },
    },
  },
  plugins: [],
};

export default config;
