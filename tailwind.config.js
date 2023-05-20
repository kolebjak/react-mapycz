/** @type {import('tailwindcss').Config} */
module.exports = {
  content: ['./home/**/*.{js,ts,jsx,tsx,html}'],
  theme: {
    fontFamily: {
      sans: ['Lato', 'sans'],
    },
    screens: {
      xs: '360px',
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1140px',
      '2xl': '1700px',
    },
    colors: {
      primary: '#3EC564',
      black: '#000',
      transparent: 'transparent',
    },
    lineHeight: {
      normal: '1.5rem',
      lg: '18px',
      xl: '26px',
      '2xl': '31px',
      xxl: '36px',
      xxxl: '46px',
      xxxxxl: '76px',
    },
    fontSize: {
      // 14px
      sm: ['0.875rem'],
      // 16px
      base: ['1rem'],
      // 18px
      lg: ['1.125rem'],
      // 20px
      xl: ['1.25rem'],
      // 24px
      '2xl': ['1.5rem'],
      // 28px
      '3xl': ['1.75rem'],
      // 32px
      '4xl': ['2rem'],
      // 36px
      '5xl': ['2.25rem'],
      // 56px
      '7xl': ['3.5rem'],
    },
    spacing: {
      0: '0',
      1: '0.5rem',
      2: '1rem',
      3: '1.5rem',
      4: '2rem',
      5: '2.5rem',
      6: '3rem',
      7: '3.5rem',
      8: '4rem',
      9: '4.5rem',
      10: '5rem',
      11: '5.5rem',
      12: '6rem',
      13: '6.5rem',
      14: '7rem',
      15: '7.5rem',
      16: '8rem',
      17: '8.5rem',
      18: '9rem',
      19: '9.5rem',
      20: '10rem',
      21: '10.5rem',
      22: '11rem',
      23: '11.5rem',
      24: '12rem',
      25: '12.5rem',
      26: '13rem',
      27: '13.5rem',
      28: '14rem',
      30: '15rem',
      32: '16rem',
      34: '17rem',
      36: '18rem',
      40: '20rem',
      46: '23rem',
      50: '25rem',
      65: '32.5rem',
      70: '35rem',
      75: '37rem',
      80: '40rem',
      100: '90rem',
    },
    boxShadow: {
      DEFAULT: '0 3px 6px rgba(0, 0, 0, 0.16)',
    },
    borderRadius: {
      none: 0,
      sm: '0.125rem',
      default: '0.25rem',
      md: '0.375rem',
      lg: '0.5rem',
      xl: '0.75rem',
      '2xl': '1rem',
      '3xl': '2rem',
      '4xl': '3.5rem',
      full: '100%',
    },
    extend: {
      transitionProperty: {
        height: 'height',
      },
      transitionDuration: {
        250: '250ms',
        400: '400ms',
      },
      transitionDelay: {
        50: '50ms',
        250: '250ms',
        350: '350ms',
        400: '400ms',
        450: '450ms',
        550: '550ms',
        600: '600ms',
        800: '800ms',
        900: '900ms',
      },
      transitionTimingFunction: {
        'intersection-animation-timing': 'cubic-bezier(0.6,0.24,0.42,0.84)',
      },
      keyframes: {
        'show-right': {
          '0%': { transform: 'translateX(1.25rem)', opacity: 0 },
          '100%': { transform: 'translateX(0)', opacity: 1 },
        },
        'show-down': {
          '0%': { opacity: 0, transform: 'translateY(-1rem)' },
          '100%': { opacity: 1, transform: 'translateY(0)' },
        },
        'button-loading': {
          '0%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(720deg)' },
        },
        float: {
          '0%': { transform: 'translateY(0)' },
          '50%': { transform: 'translateY(-0.5rem)' },
          '100%': { transform: 'translateY(0)' },
        },
      },
      animation: {
        'show-down': 'show-down 250ms ease-out forwards',
        'button-loading': 'button-loading 1000ms ease-in-out infinite',
        float: 'float 2s ease-in-out infinite',
      },
    },
  },
  plugins: [],
  variants: {
    extend: {
      display: ['group-hover'],
    },
  },
};
