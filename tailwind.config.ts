import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        'yellow-dark': '#c47f17',
        yellow: '#dbac2c',
        'yellow-light': '#f1e9c9',
        'purple-dark': '#4b2995',
        purple: '#8047f8',
        'purple-light': '#ebe5f9',

        'base-title': '#272221',
        'base-subtitle': '#403937',
        'base-text': '#574f4d',
        'base-label': '#8d8686',
        'base-hover': '#d7d5d5',

        'base-button': '#e6e5e5',
        'base-input': '#ededed',
        'base-card': '#f3f2f2',
        'base-bg': '#fafafa',
      },
      fontFamily: {
        baloo: ['var(--font-baloo-2)'],
        roboto: ['var(--font-roboto)'],
      },
      fontWeight: {
        regular: '400',
        bold: '700',
      },
      lineHeight: {
        '130%': '1.3',
        '160%': '1.6',
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        // Titles
        '.title-xl': {
          fontSize: '48px',
          lineHeight: '130%',
          fontWeight: 'extrabold',
          fontFamily: 'Baloo2',
        },
        '.title-l': {
          fontSize: '32px',
          lineHeight: '130%',
          fontWeight: 'extrabold',
          fontFamily: 'Baloo2',
        },
        '.title-m': {
          fontSize: '24px',
          lineHeight: '130%',
          fontWeight: 'extrabold',
          fontFamily: 'Baloo2',
        },
        '.title-s': {
          fontSize: '20px',
          lineHeight: '130%',
          fontWeight: 'bold',
          fontFamily: 'Baloo2',
        },
        '.title-xs': {
          fontSize: '18px',
          lineHeight: '130%',
          fontWeight: 'bold',
          fontFamily: 'Baloo2',
        },
        // Text
        '.text-l': {
          fontSize: '20px',
          lineHeight: '130%',
          fontWeight: 'regular',
          fontFamily: 'Roboto',
        },
        '.text-m': {
          fontSize: '16px',
          lineHeight: '130%',
          fontWeight: 'regular',
          fontFamily: 'Roboto',
        },
        '.text-s': {
          fontSize: '14px',
          lineHeight: '130%',
          fontWeight: 'regular',
          fontFamily: 'Roboto',
        },
        '.text-xs': {
          fontSize: '12px',
          lineHeight: '130%',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
        },
        // Tag
        '.tag': {
          fontSize: '10px',
          lineHeight: '130%',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
        },
        // Buttons
        '.button-g': {
          fontSize: '14px',
          lineHeight: '160%',
          fontWeight: 'bold',
          fontFamily: 'Roboto',
        },
        '.button-m': {
          fontSize: '12px',
          lineHeight: '160%',
          fontWeight: 'regular',
          fontFamily: 'Roboto',
        },
      }

      addUtilities(newUtilities, ['responsive', 'hover'])
    },
  ],
}
export default config
