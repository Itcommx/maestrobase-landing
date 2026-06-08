import type { Config } from 'tailwindcss'

const config: Config = {
  content: ['./src/**/*.{js,ts,jsx,tsx,mdx}'],
  theme: {
    extend: {
      colors: {
        green: {
          DEFAULT: '#1A7A4A',
          dark: '#0D5C2E',
          light: '#E8F5EE',
          muted: '#C8E6D4',
        },
        orange: {
          DEFAULT: '#FF6B35',
          light: '#FFF0EB',
        },
      },
      fontFamily: {
        display: ['var(--font-lexend)', 'sans-serif'],
        body: ['var(--font-source-sans)', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
export default config
