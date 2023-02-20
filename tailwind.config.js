const colors = require('tailwindcss/colors')
const defaultTheme = require('tailwindcss/defaultTheme')
const plugin = require('tailwindcss/plugin')

/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  plugins: [
    plugin(function({ addBase, theme }) {
      addBase({
        'h1': { fontSize: theme('fontSize.3xl') },
        '.h1': { fontSize: theme('fontSize.3xl') },
        'h2': { fontSize: theme('fontSize.xl') },
        'h3': { fontSize: theme('fontSize.lg') },
        '.h3': { fontSize: theme('fontSize.lg') },
      })
    })
  ],
  theme: {
    extend: {
   fontFamily: {
        sans: ['Inter var', ...defaultTheme.fontFamily.sans],
      },
      fontSize: {
        xs: '0.75rem',
        sm: '0.875rem',
        base: '1rem',
        lg: '1.125rem',
        xl: '36px',
        '2xl': '1.5rem',
        '3xl': '1.875rem',
        '4xl': '2.25rem',
        '5xl': '3rem',
        '6xl': '4rem',
      },
  colors: {
        default:  {
          light: colors.slate[400],
          DEFAULT: colors.slate[500],
          dark: colors.slate[700],
        },
        primary:  {
          light: colors.teal[500],
          DEFAULT: colors.teal[600],
          dark: colors.teal[700],
          darkest: colors.teal[800],
        },
        secondary: {
          lightest: colors.zinc[400],
          light: colors.zinc[500],
          DEFAULT: colors.zinc[800],
          //dark: colors.zinc[800],
        },
        danger: {
          lightest: colors.rose[50],
          light: colors.rose[500],
          DEFAULT: colors.rose[700],
        },
        success: {
          lightest: '#ECFDF5',
          light: colors.teal[500],
          DEFAULT: colors.teal[700],
        },
        info: {
          lightest: colors.blue[50],
          light: colors.blue[500],
          DEFAULT: colors.blue[700],
        },
        warning: {
          lightest: colors.yellow[50],
          light: colors.yellow[500],
          DEFAULT: colors.yellow[700],
        },
        textColor: {
          disabled: colors.gray[300],
          lightest: colors.zinc[400],
          light: colors.zinc[500],
          DEFAULT: colors.zinc[600],
          dark: colors.zinc[800],
        },
        textLightColor: {
          DEFAULT: colors.zinc[50],
        },
        textDisabled: {
          DEFAULT: colors.zinc[600],
        },
        iconColor: {
          DEFAULT: colors.gray[400],
          dark: colors.zinc[400],
        },
        borderColor: {
          lightest: '#ececec',
          light: colors.gray[200],
          DEFAULT: colors.zinc[300],
          dark: colors.zinc[800],
        },
        gray: {
          light: colors.zinc[500],
          DEFAULT: colors.zinc[600],
          dark: colors.zinc[800],
        },
        slate: {
          light: colors.slate[5400],
          DEFAULT: colors.slate[500],
          dark: colors.slate[800],
        },
        blue: {
          500: '#1a73e8',
        },
      },
      borderRadius: {
        '4xl': '2rem',
        base: '1.25rem',
        xs: '3px',
      },
    }
  }
}