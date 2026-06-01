import type { Config } from 'tailwindcss'

const config = {
  darkMode: ['class'],
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        background: 'var(--color-background)',
        foreground: 'var(--color-foreground)',
        card: 'var(--color-card)',
        'card-foreground': 'var(--color-card-foreground)',
        popover: 'var(--color-popover)',
        'popover-foreground': 'var(--color-popover-foreground)',
        primary: 'var(--color-primary)',
        'primary-foreground': 'var(--color-primary-foreground)',
        secondary: 'var(--color-secondary)',
        'secondary-foreground': 'var(--color-secondary-foreground)',
        muted: 'var(--color-muted)',
        'muted-foreground': 'var(--color-muted-foreground)',
        accent: 'var(--color-accent)',
        'accent-foreground': 'var(--color-accent-foreground)',
        destructive: 'var(--color-destructive)',
        'destructive-foreground': 'var(--color-destructive-foreground)',
        border: 'var(--color-border)',
        input: 'var(--color-input)',
        ring: 'var(--color-ring)',
        // Editorial specific palette
        bone: '#F7F5F0',
        ink: '#111111',
        terracotta: '#C4553B',
        forest: '#2C4C3B',
        sand: '#E8E5DF',
      },
      borderRadius: {
        lg: 'var(--radius-lg)',
        md: 'var(--radius-md)',
        sm: 'var(--radius-sm)',
      },
      fontFamily: {
        sans: 'var(--font-sans)',
        serif: 'var(--font-serif)',
        mono: 'var(--font-mono)',
        display: 'var(--font-display)',
      },
      fontSize: {
        'display-2xl': ['6rem', { lineHeight: '0.95', tracking: '-0.02em' }],
        'display-xl': ['5rem', { lineHeight: '0.95', tracking: '-0.02em' }],
        'display-lg': ['4rem', { lineHeight: '1' }],
        'display-md': ['3rem', { lineHeight: '1.05' }],
        'display-sm': ['2.5rem', { lineHeight: '1.1' }],
      },
      spacing: {
        'section': '8rem',
      },
      animation: {
        'slow-pan': 'pan 20s ease-in-out infinite alternate',
      },
      keyframes: {
        pan: {
          '0%': { objectPosition: '0% 50%' },
          '100%': { objectPosition: '100% 50%' },
        }
      }
    },
  },
  plugins: [require('tailwindcss-animate')],
} satisfies Config

export default config
