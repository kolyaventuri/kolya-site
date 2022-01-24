

module.exports = {
  purge: {
    content: ['./src/**/*.{ts,tsx}'],
    options: {
      safelist: [
        'bg-blue-400', 'hover:bg-blue-300', 'bg-gray-800', 'hover:bg-gray-700', 'bg-red-700', 'hover:bg-red-600',
        'opacity-0', 'opacity-100', 'justify-self-end', 'justify-self-start', 'justify-center', 'content-center'
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
        '4/5-vh': '80vh'
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
