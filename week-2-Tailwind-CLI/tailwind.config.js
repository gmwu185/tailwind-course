/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./src/**/*.{html,js}'],
  theme: {
    /* theme 下設定 colors 客製化，會令 Tailwind 原先的色彩失效 */
    // colors: {
    //   lightBlue: '#1fb6ff',
    // },
    extend: {
      colors: {
        /* 寫法一 */
        lightBlue: '#1fb6ff',
        /* 寫法二 */
        'tahiti': {
          100: '#cffafe',
          200: '#a5f3fc',
          300: '#67e8f9',
          400: '#22d3ee',
          500: '#06b6d4',
          600: '#0891b2',
          700: '#0e7490',
          800: '#155e75',
          900: '#164e63',
        },
        /* 寫法三 */
        'tahitiTwo': {
          light: '#67e8f9',
          DEFAULT: '#06b6d4',
          dark: '#0e7490',
        }
      },
    },
  },
  plugins: [],
};
