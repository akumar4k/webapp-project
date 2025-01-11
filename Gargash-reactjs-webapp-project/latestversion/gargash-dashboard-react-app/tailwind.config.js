/** @type {import('tailwindcss').Config} */
export default {
  content: [
    './index.html',
    './src/**/*.{js,ts,jsx,tsx}',
    './src/components/**/*.{js,ts,jsx,tsx}',
    './app/**/*.{js,ts,jsx,tsx}',
    './plugins/**/*.{js,ts,jsx,tsx}'
  ],
  theme: {
    extend: {
      colors: {
        'chart-bg': '#172047',
        'mobile-nav-bg': '#78358c',
        'sidebar-bg': '#78358c',
        'filter-bg': '#441759',
        'filter-title-bg': '#160e2d',
        'filter-border-bg': '#5f52a8',
        'vehicle-summary-bg': '#25206b',
        'vehicle-summary-bg-mobile': '#34354a',
        'zoom-control-bg': '#3b1550',
        'zoom-control-border-bg': '#a371d2',
        'brand-gac': '#ff4f45',
        'brand-alfa-romeo': '#02a6dd',
        'brand-benz': '#02c57f',
        'brand-others': '#fb9f26'
      }
    },
    screens: {
      sm: '640px',
      // => @media (min-width: 640px) { ... }

      md: '768px',
      // => @media (min-width: 768px) { ... }

      lg: '1024px',
      // => @media (min-width: 1024px) { ... }

      xl: '1280px',
      // => @media (min-width: 1280px) { ... }

      '2xl': '1536px',
      // => @media (min-width: 1536px) { ... }

      fhd: '1920px',
      '2k': '2560px',
      '4k': '3840px'
    }
  },
  plugins: []
};
