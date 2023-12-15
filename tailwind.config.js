/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    screens: {
        'sm': '320px',
        'md': '768px',
        'lg': '1920px',
    },
    extend: {},
  },
  plugins: [],
}
