import type { Config } from 'tailwindcss'

import colors from 'tailwindcss/colors'

const config: Config = {
  content: [
    './pages/**/*.{js,ts,jsx,tsx,mdx}',
    './components/**/*.{js,ts,jsx,tsx,mdx}',
    './app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    colors: {
      current: colors.current,
      transparent: colors.transparent,
      black: colors.black,
      white: colors.white,
      carnation: {
        '4': '#FF8787',
        '6': '#fa5252',
        '7': '#F03E3E',
      },
      daintree: '#0A1F27',
      lima: {
        '6': '#74b816',
        '7': '#5C940D',
      },
    },
    container: {
      center: true,
    },
    extend: {
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
      },
      // screens: {
      //   sm: '640px',
      //   // => @media (min-width: 640px) { ... }

      //   md: '768px',
      //   // => @media (min-width: 768px) { ... }

      //   lg: '1024px',
      //   // => @media (min-width: 1024px) { ... }

      //   xl: '1280px',
      //   // => @media (min-width: 1280px) { ... }

      //   '2xl': '1536px',
      //   // => @media (min-width: 1536px) { ... }
      // },
    },
  },
  plugins: [],
}
export default config
