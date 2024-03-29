/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './components/**/*.{js,vue,ts}',
    './layouts/**/*.vue',
    './pages/**/*.vue',
    './plugins/**/*.{js,ts}',
    './nuxt.config.{js,ts}',
    './app.vue',
  ],
  theme: {
    extend: {
      colors: {
        black: '#12130F',
        white: '#F0F7F4',

        green: {
          100: '#c7eedc',
          200: '#beebd6',
          300: '#b5e9d0',
          400: '#abe6ca',
          500: '#a2e3c4',
          600: '#92ccb0',
          700: '#82b69d',
          800: '#719f89',
          900: '#618876',
        },
        'dark-green': {
          100: '#8a928c',
          200: '#778079',
          300: '#636d65',
          400: '#505b52',
          500: '#3c493f',
          600: '#364239',
          700: '#303a32',
          800: '#2a332c',
          900: '#242c26',
        },
        gray: {
          100: '#d1d9d4',
          200: '#cad2cd',
          300: '#c2ccc6',
          400: '#bbc5bf',
          500: '#b3bfb8',
          600: '#a1aca6',
          700: '#8f9993',
          800: '#7d8681',
          900: '#6b736e',
        },
        'dark-gray': {
          100: '#b2bbb6',
          200: '#a5afaa',
          300: '#98a49d',
          400: '#8b9891',
          500: '#7e8d85',
          600: '#717f78',
          700: '#65716a',
          800: '#58635d',
          900: '#4c5550',
        },
      },
      fontFamily: {
        display: ['Roboto', 'sans-serif'],
        body: ['Open Sans', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
