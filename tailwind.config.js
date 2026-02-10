/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'foodpanda': {
          'primary': '#D70F64',
          'secondary': '#FFE7EF',
          'accent': '#FF7E3E',
          'dark': '#1E1E1E',
          'light': '#F8F9FA',
          'success': '#00B14F',
          'warning': '#FFC107',
          'danger': '#DC3545',
        }
      },
      fontFamily: {
        'sans': ['Inter', 'system-ui', 'sans-serif'],
      },
    },
  },
  plugins: [],
}
