/** @type {import('tailwindcss').Config} */
export default {
  content: ['./index.html', './src/**/*.{js,ts,jsx,tsx}'],
  theme: {
    extend: {
      colors: {
        ink: 'var(--ink)',
        card: 'var(--card)',
        cardhover: 'var(--card-hover)',
        line: 'var(--line)',
        soft: 'var(--text-soft)',
        muted: 'var(--text-muted)',
        faint: 'var(--text-faint)',
        accent: 'var(--accent)',
      },
      fontFamily: {
        sans: ['Geist', 'Inter', '-apple-system', 'BlinkMacSystemFont', 'Segoe UI', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
