import typography from '@tailwindcss/typography';
import containerQueries from '@tailwindcss/container-queries';
import animate from 'tailwindcss-animate';

/** @type {import('tailwindcss').Config} */
export default {
    darkMode: ['class'],
    content: ['index.html', 'src/**/*.{js,ts,jsx,tsx,html,css}'],
    theme: {
        container: {
            center: true,
            padding: '2rem',
            screens: {
                '2xl': '1400px'
            }
        },
        extend: {
            fontFamily: {
                heading: ['Montserrat', 'sans-serif'],
                body: ['Inter', 'sans-serif'],
            },
            colors: {
                border: 'oklch(var(--border))',
                input: 'oklch(var(--input))',
                ring: 'oklch(var(--ring) / <alpha-value>)',
                background: 'oklch(var(--background))',
                foreground: 'oklch(var(--foreground))',
                primary: {
                    DEFAULT: 'oklch(var(--primary) / <alpha-value>)',
                    foreground: 'oklch(var(--primary-foreground))'
                },
                secondary: {
                    DEFAULT: 'oklch(var(--secondary) / <alpha-value>)',
                    foreground: 'oklch(var(--secondary-foreground))'
                },
                destructive: {
                    DEFAULT: 'oklch(var(--destructive) / <alpha-value>)',
                    foreground: 'oklch(var(--destructive-foreground))'
                },
                muted: {
                    DEFAULT: 'oklch(var(--muted) / <alpha-value>)',
                    foreground: 'oklch(var(--muted-foreground) / <alpha-value>)'
                },
                accent: {
                    DEFAULT: 'oklch(var(--accent) / <alpha-value>)',
                    foreground: 'oklch(var(--accent-foreground))'
                },
                popover: {
                    DEFAULT: 'oklch(var(--popover))',
                    foreground: 'oklch(var(--popover-foreground))'
                },
                card: {
                    DEFAULT: 'oklch(var(--card))',
                    foreground: 'oklch(var(--card-foreground))'
                },
                chart: {
                    1: 'oklch(var(--chart-1))',
                    2: 'oklch(var(--chart-2))',
                    3: 'oklch(var(--chart-3))',
                    4: 'oklch(var(--chart-4))',
                    5: 'oklch(var(--chart-5))'
                },
                sidebar: {
                    DEFAULT: 'oklch(var(--sidebar))',
                    foreground: 'oklch(var(--sidebar-foreground))',
                    primary: 'oklch(var(--sidebar-primary))',
                    'primary-foreground': 'oklch(var(--sidebar-primary-foreground))',
                    accent: 'oklch(var(--sidebar-accent))',
                    'accent-foreground': 'oklch(var(--sidebar-accent-foreground))',
                    border: 'oklch(var(--sidebar-border))',
                    ring: 'oklch(var(--sidebar-ring))'
                },
                /* Warm Amber / Golden palette */
                solar: {
                    50:  'oklch(0.97 0.03 75)',
                    100: 'oklch(0.93 0.07 73)',
                    200: 'oklch(0.88 0.11 71)',
                    300: 'oklch(0.83 0.14 70)',
                    400: 'oklch(0.78 0.16 68)',
                    500: 'oklch(0.74 0.17 68)',
                    600: 'oklch(0.68 0.18 60)',
                    700: 'oklch(0.58 0.16 55)',
                    800: 'oklch(0.44 0.12 52)',
                    900: 'oklch(0.30 0.08 50)',
                },
                /* Deep Charcoal palette */
                charcoal: {
                    50:  'oklch(0.96 0.01 255)',
                    100: 'oklch(0.90 0.02 255)',
                    200: 'oklch(0.80 0.02 255)',
                    300: 'oklch(0.68 0.03 255)',
                    400: 'oklch(0.55 0.03 255)',
                    500: 'oklch(0.42 0.03 255)',
                    600: 'oklch(0.32 0.03 255)',
                    700: 'oklch(0.26 0.03 255)',
                    800: 'oklch(0.20 0.03 255)',
                    900: 'oklch(0.15 0.02 255)',
                    950: 'oklch(0.10 0.02 255)',
                },
                /* Keep forest for backward compat with existing components */
                forest: {
                    50:  'oklch(0.96 0.03 145)',
                    100: 'oklch(0.90 0.06 145)',
                    200: 'oklch(0.80 0.09 145)',
                    300: 'oklch(0.65 0.12 145)',
                    400: 'oklch(0.50 0.13 145)',
                    500: 'oklch(0.40 0.13 145)',
                    600: 'oklch(0.35 0.12 145)',
                    700: 'oklch(0.28 0.10 145)',
                    800: 'oklch(0.22 0.08 145)',
                    900: 'oklch(0.16 0.05 145)',
                },
                /* Amber alias for direct use */
                amber: {
                    50:  'oklch(0.97 0.03 75)',
                    100: 'oklch(0.93 0.07 73)',
                    200: 'oklch(0.88 0.11 71)',
                    300: 'oklch(0.83 0.14 70)',
                    400: 'oklch(0.78 0.16 68)',
                    500: 'oklch(0.74 0.17 68)',
                    600: 'oklch(0.68 0.18 60)',
                    700: 'oklch(0.58 0.16 55)',
                    800: 'oklch(0.44 0.12 52)',
                    900: 'oklch(0.30 0.08 50)',
                },
            },
            borderRadius: {
                lg: 'var(--radius)',
                md: 'calc(var(--radius) - 2px)',
                sm: 'calc(var(--radius) - 4px)'
            },
            boxShadow: {
                solar: '0 4px 24px oklch(0.74 0.17 68 / 0.30)',
                amber: '0 4px 24px oklch(0.74 0.17 68 / 0.30)',
                green: '0 4px 24px oklch(0.35 0.12 145 / 0.25)',
                card: '0 2px 16px oklch(0.16 0.03 55 / 0.08)',
            },
            keyframes: {
                'pulse-glow': {
                    '0%, 100%': { boxShadow: '0 0 0 0 oklch(0.74 0.17 68 / 0.4)' },
                    '50%': { boxShadow: '0 0 0 12px oklch(0.74 0.17 68 / 0)' },
                },
                float: {
                    '0%, 100%': { transform: 'translateY(0px)' },
                    '50%': { transform: 'translateY(-8px)' },
                },
                'accordion-down': {
                    from: { height: '0' },
                    to: { height: 'var(--radix-accordion-content-height)' }
                },
                'accordion-up': {
                    from: { height: 'var(--radix-accordion-content-height)' },
                    to: { height: '0' }
                }
            },
            animation: {
                'pulse-glow': 'pulse-glow 2s ease-in-out infinite',
                float: 'float 3s ease-in-out infinite',
                'accordion-down': 'accordion-down 0.2s ease-out',
                'accordion-up': 'accordion-up 0.2s ease-out'
            }
        }
    },
    plugins: [typography, containerQueries, animate],
};
