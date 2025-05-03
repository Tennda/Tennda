/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    './src/pages/**/*.{js,ts,jsx,tsx,mdx}',
    './src/components/**/*.{js,ts,jsx,tsx,mdx}',
    './src/app/**/*.{js,ts,jsx,tsx,mdx}',
  ],
  theme: {
    extend: {
      colors: {
        primary: {
          light: '#4da6ff',
          DEFAULT: '#0078ff',
          dark: '#0057b8',
        },
        secondary: {
          light: '#f8f9fa',
          DEFAULT: '#e9ecef',
          dark: '#dee2e6',
        },
        tennda: {
          purple: '#6c63ff',
          lightGray: '#d4d4d419',
          inputBg: '#d6d6d6bf',
          textDark: '#1a1a1aff',
          textMedium: '#1a1a1ae5',
          textLight: '#000000b2',
        }
      },
      boxShadow: {
        'custom': '0px 4px 35px rgba(136, 136, 136, 1)',
      },
      borderRadius: {
        'custom': '15px',
      },
    },
  },
  plugins: [],
};