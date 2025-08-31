/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      // Add your custom color here
      colors: {
        'brand-blue': '#3f80c0',
      },
    },
  },
  plugins: [],
}