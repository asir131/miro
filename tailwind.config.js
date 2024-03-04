/** @type {import('tailwindcss').Config} */
export const content = [
  "./src/**/*.{js,jsx,ts,tsx}",
  'node_modules/flowbite-react/lib/esm/**/*.js',
];
export const theme = {
  extend: {},
  screens: {
    'sm': '576px',
    // => @media (min-width: 576px) { ... }
    'md': '960px',
    // => @media (min-width: 960px) { ... }
    'lg': '1440px',
    // => @media (min-width: 1440px) { ... }
  }
};
export const plugins = [
  require('flowbite/plugin'),
];

