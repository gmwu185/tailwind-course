/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#AA06010D',
          DEFAULT: '#AA0601',
          dark: '#650300',
        },
      },
    },
  },
  plugins: [require('@tailwindcss/forms')],
};
