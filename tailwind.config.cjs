/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js,svelte,ts}'],
  darkMode: 'media',
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
      },
      backgroundImage: {
        profile: "url('/profile.png')"
      }
    },
  },
  daisyui: {
    themes: [
      'light',
      {
        dark: {
          ...require('daisyui/src/theming/themes')["[data-theme=dark]"],
          "primary": "#18181b",
          "base-100": "#ffffff",
        }
      }
    ]
  },
  plugins: [
    require('@tailwindcss/typography'),
    require('prettier-plugin-tailwindcss'),
    require('daisyui')
  ],
}
