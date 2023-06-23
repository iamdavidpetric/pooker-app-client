/** @type {import('tailwindcss').Config} */
// eslint-disable-next-line
module.exports = {
  content: ['./src/**/*.{js,jsx,ts,tsx}'],
  theme: {
    extend: {
      spacing: {
        112: '28rem',
        128: '32rem',
        144: '36rem',
      },
    },
    colors: {
      white: {
        DEFAULT: '#ffffff',
      },
      black: {
        DEFAULT: '#000000',
      },
      gray: {
        DEFAULT: '#E9E9E9',
      },
      primary: {
        DEFAULT: '#FCF9FF',
      },
      secondary: {
        DEFAULT: '#a78bfa',
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
