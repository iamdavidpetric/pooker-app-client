/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    colors: {
      white: {
        DEFAULT: '#ffffff',
      },
      black: {
        DEFAULT: '#000000',
      },
      primary: {
        DEFAULT: '#2D2D2D',
      },
      secondary: {
        DEFAULT: '#181818',
      },
      success: {
        DEFAULT: '#008243',
      },
      danger: {
        DEFAULT: '#810000',
      },
      warning: {
        DEFAULT: '#ffb703',
      },
    },
  },
  plugins: [],
};
