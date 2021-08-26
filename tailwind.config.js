const colors = require('tailwindcss/colors')

module.exports = {
  mode: 'jit',
  purge: [
    './src/**/*.html',
    './_site/**/*.html',
    './src/_data/themeColorStrings.js'
  ],
  darkMode: true, // or 'media' or 'class'
  theme: {
    extend: {
      screens: {
        "3xl": "1920px",
        "4xl": "2160px",
        "fp": "calc(512px + 66.667%)"
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
        fp: {
          "primary-dark": colors.blue['300'],
          "primary": colors.blue['500'],
          "primary-light": colors.blue['700'],
        }
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
        ],
        serif: [
          "Cascadia Code"
        ]
      },
      fontSize: {
        h2: ['clamp(1.125rem, 3vw, 2rem)', { lineHeight: 'clamp(1.75rem, 1.275rem, 1rem)'}],
        p: ['clamp(0.75rem, 2vw, 1.125rem)', { lineHeight: 'clamp(1.75, 1.5, 1.25)'}],
        lede: ['clamp(1rem, 3vw, 1.5rem)', { lineHeight: 'clamp(1, 1.5, 1.375)'}],
      }
    },
     
    // transitionTimingFunction: {
    //   DEFAULT: 'cubic-bezier(0, 0.3, 0, 1)',
    // }
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
