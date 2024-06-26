import type { Config } from 'tailwindcss'

const config: Config = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  darkMode: ['class', '[data-mode="dark"]'],
  theme: {
    extend: {
      zIndex: {
        '100': '100',
        '110': '110',
      },
      colors: {
        primary: '#59a4a4',
        secondary: '#667085',
        accent: {
          DEFAULt: '#ed1d24',
          hover: '#dd242a',
        },
        body: '#dedede',
      },
      borderWidth: {
        default: '1px',
      },
      height: {
        '60': '60px',
        '120': '120px',
      },
      backgroundColor: {
        primary_op: 'rgba(89,164,164,0.1)',
        primary_op5: 'rgba(89,164,164,0.5)',
        bg_f9: '#f9f9f9',
      },
      boxShadow: {
        primary: '20px -20px 40px 0 rgba(89,164,164,0.1) inset ',
        inset: '0 5px 7px -5px #ccc inset',
        box_search: '1px 1px 27px 1px rgba(0,0,0,0.5)',
      },
      backgroundImage: {
        'gradient-radial': 'radial-gradient(var(--tw-gradient-stops))',
        'gradient-conic':
          'conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))',
        'bg-primary': '#59a4a4',
      },
    },
    screens: {
      sm: '640px',
      md: '768px',
      lg: '1024px',
      xl: '1300px',
    },
  },
  plugins: [],
}
export default config
