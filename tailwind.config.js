module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        'very-large': '10em'
      },
      transitionProperty: {
        height: 'height'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
