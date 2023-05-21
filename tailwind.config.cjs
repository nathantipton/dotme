/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'class',
  theme: {
    extend: {
      fontFamily: {
        opensans: ['Open Sans', 'sans-serif'],
        montserrat: ['Montserrat', 'sans-serif']
      },
      height: {
        safe: '100dvh'
      },
      minHeight: {
        safe: '100dvh'
      }
    },
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('prettier-plugin-tailwindcss'),
    ...require('@skeletonlabs/skeleton/tailwind/skeleton.cjs')()
  ],
}
