

module.exports = {
  purge: {
    content: ['./src/**/*.{ts,tsx}'],
    options: {
      safelist: [
        'bg-blue-400', 'bg-blue-500', 'bg-gray-800', 'bg-gray-700', 'bg-red-700', 'bg-red-600',
        'opacity-0', 'opacity-100'
      ],
    },
  },
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      fontSize: {
        md: '1.5rem',
        'very-large': '10em'
      },
      transitionProperty: {
        height: 'height'
      },
      height: {
        '2/3-vh': '66.67vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
