/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,ts,js}"],
  theme: {
    extend: {
      colors: {
        beige: {
          50: "#09090B", // Zinc 950 (Background)
          100: "#18181B", // Zinc 900 (Cards)
          200: "#27272A", // Zinc 800 (Borders)
          300: "#3F3F46", // Zinc 700
          400: "#A1A1AA", // Zinc 400
          500: "#D4D4D8", // Zinc 300
        },
        warm: {
          text: "#FAFAFA", // Zinc 50 (Main Text)
          accent: "#FAFAFA", // Zinc 50 (Accent, monochrome)
          "accent-hover": "#D4D4D8", // Zinc 300
        },
      },
      fontFamily: {
        sans: ["Inter", "sans-serif"],
      },
    },
  },
  plugins: [],
};
