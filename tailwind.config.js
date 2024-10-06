/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        spacegrotesk: ['Space Grotesk', 'sans-serif'],
        jetmono: ['JetBrains Mono', 'monospace'], 
      },
      colors: {
        customgreen: '#00ff99',
      },
    },
  },
  plugins: [],
}