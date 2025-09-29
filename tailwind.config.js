/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        bg: 'var(--color-bg)',
        fg: 'var(--color-fg)',
        accent: 'var(--color-accent)',
        surface: 'var(--color-surface)',
        'text-primary': 'var(--color-text-primary)',
        'text-secondary': 'var(--color-text-secondary)',
        primary: 'hsl(210 90% 50%)',
        'accent-gold': 'hsl(40 90% 55%)',
        coral: '#ff6b6b',
        'dark-teal': '#1a4d4d',
      },
      fontFamily: {
        sans: ['Inter', 'system-ui', 'sans-serif'],
      },
      borderRadius: {
        'sm': '0.375rem',
        'md': '0.625rem',
        'lg': '1rem',
      },
      spacing: {
        'sm': '0.5rem',
        'md': '0.75rem',
        'lg': '1.25rem',
        'xl': '2rem',
      },
      boxShadow: {
        'card': '0 4px 12px hsla(210, 14%, 14%, 0.08)',
        'lift': '0 8px 24px hsla(210, 14%, 14%, 0.12)',
      },
      animation: {
        'spin-wheel': 'spin 3s cubic-bezier(0.22, 1, 0.36, 1) forwards',
        'bounce-in': 'bounceIn 0.6s cubic-bezier(0.22, 1, 0.36, 1)',
        'fade-in': 'fadeIn 0.4s cubic-bezier(0.22, 1, 0.36, 1)',
      },
      keyframes: {
        bounceIn: {
          '0%': { transform: 'scale(0.3)', opacity: '0' },
          '50%': { transform: 'scale(1.05)' },
          '70%': { transform: 'scale(0.9)' },
          '100%': { transform: 'scale(1)', opacity: '1' },
        },
        fadeIn: {
          '0%': { opacity: '0', transform: 'translateY(10px)' },
          '100%': { opacity: '1', transform: 'translateY(0)' },
        },
      },
    },
  },
  plugins: [],
}
