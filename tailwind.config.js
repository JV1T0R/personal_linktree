/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jetmono: ['JetBrains Mono', 'monospace'],
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
      },
      colors: {
        customgreen: '#00ff99',
        customdarkgreen: '#3da67c',
      },
    },
  },
  plugins: [],
}