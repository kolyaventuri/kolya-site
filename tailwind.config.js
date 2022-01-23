module.exports = {
  purge: ['./src/**/*.{ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        md: '1.5rem',
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
