/** @type {import('tailwindcss').Config} */
module.exports = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        Dark: "#2B2D42",
        DarkBlue: "#03045E",
        CTA: "#00AEFF",
        Light: "#F6FFF8",
      },
    },
  },
  plugins: [],
};
