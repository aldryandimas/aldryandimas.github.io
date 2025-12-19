/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{html,ts,js}"],
  theme: {
    extend: {
      colors: {
        beige: {
          50: "#0B1120", // Deep Dark Blue (Background)
          100: "#1E293B", // Slate 800 (Cards)
          200: "#334155", // Slate 700 (Borders)
          300: "#475569", // Slate 600
          400: "#94A3B8", // Slate 400
          500: "#CBD5E1", // Slate 300
        },
        warm: {
          text: "#E2E8F0", // Slate 200 (Main Text)
          accent: "#38BDF8", // Sky 400 (Accent)
          "accent-hover": "#0EA5E9", // Sky 500
        },
      },
      fontFamily: {
        sans: ["Poppins", "sans-serif"],
      },
    },
  },
  plugins: [],
};
