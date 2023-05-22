/** @type {import('tailwindcss').Config} */
export default {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  theme: {
    fontFamily: {
      sans: ['Nunito Sans', 'sans-serif'],
      serif: ['Petrona', 'serif'],
    },
    extend: {},
  },
  plugins: [
    require('@tailwindcss/typography'),
  ],
}

