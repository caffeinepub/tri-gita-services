/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ['class'],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  theme: {
    extend: {
      fontFamily: {
        outfit: ['Outfit', 'sans-serif'],
        playfair: ['"Playfair Display"', 'serif'],
      },
      colors: {
        navy: {
          50:  'oklch(0.97 0.01 240)',
          100: 'oklch(0.93 0.02 240)',
          200: 'oklch(0.85 0.04 240)',
          300: 'oklch(0.72 0.07 240)',
          400: 'oklch(0.58 0.10 240)',
          500: 'oklch(0.44 0.12 240)',
          600: 'oklch(0.34 0.10 240)',
          700: 'oklch(0.27 0.08 240)',
          800: 'oklch(0.20 0.06 240)',
          900: 'oklch(0.15 0.05 240)',
          950: 'oklch(0.10 0.04 240)',
        },
        // Warm solar amber/orange palette — evokes Odisha sunshine & solar energy
        gold: {
          50:  'oklch(0.98 0.02 75)',
          100: 'oklch(0.95 0.06 72)',
          200: 'oklch(0.90 0.10 70)',
          300: 'oklch(0.84 0.14 68)',
          400: 'oklch(0.78 0.17 66)',
          500: 'oklch(0.72 0.18 68)',
          600: 'oklch(0.60 0.17 65)',
        },
        teal: {
          50:  'oklch(0.97 0.02 185)',
          100: 'oklch(0.93 0.05 185)',
          200: 'oklch(0.86 0.09 185)',
          300: 'oklch(0.76 0.13 185)',
          400: 'oklch(0.65 0.15 185)',
          500: 'oklch(0.55 0.14 185)',
          600: 'oklch(0.45 0.12 185)',
        },
        // Warm amber alias for hero overlay utility
        amber: {
          900: 'oklch(0.28 0.10 55)',
        },
        success: 'oklch(var(--success))',
        border: 'oklch(var(--border))',
        input: 'oklch(var(--input))',
        ring: 'oklch(var(--ring))',
        background: 'oklch(var(--background))',
        foreground: 'oklch(var(--foreground))',
        primary: {
          DEFAULT: 'oklch(var(--primary))',
          foreground: 'oklch(var(--primary-foreground))',
        },
        secondary: {
          DEFAULT: 'oklch(var(--secondary))',
          foreground: 'oklch(var(--secondary-foreground))',
        },
        destructive: {
          DEFAULT: 'oklch(var(--destructive))',
          foreground: 'oklch(var(--destructive-foreground))',
        },
        muted: {
          DEFAULT: 'oklch(var(--muted))',
          foreground: 'oklch(var(--muted-foreground))',
        },
        accent: {
          DEFAULT: 'oklch(var(--accent))',
          foreground: 'oklch(var(--accent-foreground))',
        },
        popover: {
          DEFAULT: 'oklch(var(--popover))',
          foreground: 'oklch(var(--popover-foreground))',
        },
        card: {
          DEFAULT: 'oklch(var(--card))',
          foreground: 'oklch(var(--card-foreground))',
        },
      },
      borderRadius: {
        lg: 'var(--radius)',
        md: 'calc(var(--radius) - 2px)',
        sm: 'calc(var(--radius) - 4px)',
      },
      boxShadow: {
        'navy': '0 4px 24px oklch(0.15 0.05 240 / 0.3)',
        'gold': '0 4px 24px oklch(0.72 0.18 68 / 0.35)',
        'teal': '0 4px 24px oklch(0.55 0.14 185 / 0.3)',
        'card': '0 2px 16px oklch(0.15 0.05 240 / 0.12)',
      },
      keyframes: {
        'accordion-down': {
          from: { height: '0' },
          to: { height: 'var(--radix-accordion-content-height)' },
        },
        'accordion-up': {
          from: { height: 'var(--radix-accordion-content-height)' },
          to: { height: '0' },
        },
        shimmer: {
          '0%': { backgroundPosition: '-200% center' },
          '100%': { backgroundPosition: '200% center' },
        },
        'pulse-ring': {
          '0%': { transform: 'scale(1)', opacity: '0.8' },
          '100%': { transform: 'scale(1.6)', opacity: '0' },
        },
        'fade-in-up': {
          from: { opacity: '0', transform: 'translateY(30px)' },
          to: { opacity: '1', transform: 'translateY(0)' },
        },
      },
      animation: {
        'accordion-down': 'accordion-down 0.2s ease-out',
        'accordion-up': 'accordion-up 0.2s ease-out',
        shimmer: 'shimmer 2.5s infinite',
        'pulse-ring': 'pulse-ring 1.5s ease-out infinite',
        'fade-in-up': 'fade-in-up 0.6s ease-out forwards',
      },
    },
  },
  plugins: [require('tailwindcss-animate'), require('@tailwindcss/typography')],
};
