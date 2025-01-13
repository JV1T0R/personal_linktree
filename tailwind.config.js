/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ["./src/**/*.{html,js}"],
  theme: {
    extend: {
      fontFamily: {
        jersey: ['"Jersey 10"', 'sans-serif'],
        jetmono: ['"JetBrains Mono"', 'monospace'], 
      },
      colors: {
        customgreen: '#00ff99',
      },
      boxShadow: {
        custom: '4px 4px #000000',
        'custom-hover': '0 6px 12px rgba(0, 0, 0, 0.2)',
      },
    },
  },
  plugins: [],
}