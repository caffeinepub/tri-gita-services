/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      fontFamily: {
        sans: ['Outfit', 'system-ui', 'sans-serif'],
        display: ['Playfair Display', 'Georgia', 'serif'],
      },
      colors: {
        background: "oklch(var(--background) / <alpha-value>)",
        foreground: "oklch(var(--foreground) / <alpha-value>)",
        card: {
          DEFAULT: "oklch(var(--card) / <alpha-value>)",
          foreground: "oklch(var(--card-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "oklch(var(--popover) / <alpha-value>)",
          foreground: "oklch(var(--popover-foreground) / <alpha-value>)",
        },
        primary: {
          DEFAULT: "oklch(var(--primary) / <alpha-value>)",
          foreground: "oklch(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "oklch(var(--secondary) / <alpha-value>)",
          foreground: "oklch(var(--secondary-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "oklch(var(--muted) / <alpha-value>)",
          foreground: "oklch(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "oklch(var(--accent) / <alpha-value>)",
          foreground: "oklch(var(--accent-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "oklch(var(--destructive) / <alpha-value>)",
          foreground: "oklch(var(--destructive-foreground) / <alpha-value>)",
        },
        border: "oklch(var(--border) / <alpha-value>)",
        input: "oklch(var(--input) / <alpha-value>)",
        ring: "oklch(var(--ring) / <alpha-value>)",
        /* Navy palette */
        navy: {
          50:  "oklch(0.97 0.01 245)",
          100: "oklch(0.93 0.03 245)",
          200: "oklch(0.85 0.05 245)",
          300: "oklch(0.72 0.08 245)",
          400: "oklch(0.55 0.10 245)",
          500: "oklch(0.42 0.10 245)",
          600: "oklch(0.35 0.10 245)",
          700: "oklch(0.28 0.09 245)",
          800: "oklch(0.22 0.07 245)",
          900: "oklch(0.16 0.05 245)",
        },
        /* Gold palette */
        gold: {
          50:  "oklch(0.98 0.03 80)",
          100: "oklch(0.95 0.06 78)",
          200: "oklch(0.90 0.10 76)",
          300: "oklch(0.84 0.14 75)",
          400: "oklch(0.78 0.16 74)",
          500: "oklch(0.72 0.16 75)",
          600: "oklch(0.64 0.15 72)",
          700: "oklch(0.55 0.13 70)",
          800: "oklch(0.44 0.10 68)",
          900: "oklch(0.34 0.08 65)",
        },
        /* Teal palette */
        teal: {
          50:  "oklch(0.97 0.02 185)",
          100: "oklch(0.93 0.05 183)",
          200: "oklch(0.86 0.08 182)",
          300: "oklch(0.76 0.11 180)",
          400: "oklch(0.64 0.13 178)",
          500: "oklch(0.54 0.13 177)",
          600: "oklch(0.46 0.12 176)",
          700: "oklch(0.38 0.10 175)",
          800: "oklch(0.30 0.08 174)",
          900: "oklch(0.22 0.06 173)",
        },
      },
      borderRadius: {
        lg: "var(--radius)",
        md: "calc(var(--radius) - 2px)",
        sm: "calc(var(--radius) - 4px)",
        xl: "1rem",
        "2xl": "1.5rem",
        "3xl": "2rem",
      },
      boxShadow: {
        'gold-sm': '0 1px 3px oklch(0.72 0.16 75 / 0.2)',
        'gold-md': '0 4px 12px oklch(0.72 0.16 75 / 0.25)',
        'gold-lg': '0 8px 24px oklch(0.72 0.16 75 / 0.30)',
        'navy-sm': '0 1px 3px oklch(0.28 0.09 245 / 0.2)',
        'navy-md': '0 4px 12px oklch(0.28 0.09 245 / 0.25)',
        'navy-lg': '0 8px 24px oklch(0.28 0.09 245 / 0.30)',
        'teal-md': '0 4px 12px oklch(0.54 0.13 177 / 0.25)',
      },
      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
        "banner-shimmer": {
          "0%": { transform: "translateX(-100%) skewX(-15deg)", opacity: "0" },
          "10%": { opacity: "1" },
          "90%": { opacity: "1" },
          "100%": { transform: "translateX(300%) skewX(-15deg)", opacity: "0" },
        },
        "stat-pulse-glow": {
          "0%, 100%": { boxShadow: "0 0 0 0 oklch(0.72 0.16 75 / 0.4)" },
          "50%": { boxShadow: "0 0 0 12px oklch(0.72 0.16 75 / 0)" },
        },
        "fade-in-up": {
          "0%": { opacity: "0", transform: "translateY(24px)" },
          "100%": { opacity: "1", transform: "translateY(0)" },
        },
        "fade-in": {
          "0%": { opacity: "0" },
          "100%": { opacity: "1" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
        "banner-shimmer": "banner-shimmer 3.5s ease-in-out infinite",
        "stat-pulse-glow": "stat-pulse-glow 2s ease-in-out infinite",
        "fade-in-up": "fade-in-up 0.6s ease-out forwards",
        "fade-in": "fade-in 0.5s ease-out forwards",
      },
    },
  },
  plugins: [
    require("tailwindcss-animate"),
    require("@tailwindcss/typography"),
    require("@tailwindcss/container-queries"),
  ],
};
