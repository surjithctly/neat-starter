const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './_site/**/*.html'
  ],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "1920px"
      },
      colors: {
        gray: {
          50: '#fafafa',
          100: '#f4f4f5',
          200: '#e4e4e7',
          300: '#d4d4d8',
          400: '#a1a1aa',
          500: '#71717a',
          600: '#52525b',
          700: '#3f3f46',
          750: '#333338',
          800: '#27272a',
          850: '#202023',
          900: '#18181b',
        },
      },
      boxShadow: {
        solid: '0 0 0 4px #202023',
        'inner-xl': 'inset 1px 0px 8px rgba(0,0,0,.2)',
        inset: 'inset 0 1px 2px rgba(0,0,0,.1), inset 0 -1px 1px rgba(255,255,255,.05)'
      },
      fontFamily: {
        sans: [
          '"Inter var"',
          'ui-sans-serif',
          'system-ui',
          '-apple-system',
          'BlinkMacSystemFont',
          '"Segoe UI"',
          'Roboto',
          '"Helvetica Neue"',
          'Arial',
          '"Noto Sans"',
          'sans-serif',
          '"Apple Color Emoji"',
          '"Segoe UI Emoji"',
          '"Segoe UI Symbol"',
          '"Noto Color Emoji"',
        ],
        serif: [
          "Gazpacho Black"
        ]
      },
    },
    
    transitionTimingFunction: {
      DEFAULT: 'cubic-bezier(0, 0.3, 0, 1)',
    }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
