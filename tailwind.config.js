/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./index.html",
    "./src/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        "github": "#6e5494",
        "weixin": "#09B83E",
        "email": "#0489c9",
      }
    },
  },
  plugins: [],
}

