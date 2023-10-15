/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        "blue-500": "#0074e4", // Ganti dengan kode warna biru yang Anda inginkan
      },
    },
  },
  plugins: [
    function ({ addUtilities }) {
      const newUtilities = {
        ".underline": {
          "text-decoration": "underline",
        },
      };
      addUtilities(newUtilities, ["hover"]);
    },
  ],
};
