/** @type {import('tailwindcss').Config} */
export default {
  content: ["./index.html", "./src/**/*.{js,ts,jsx,tsx}"],
  theme: {
    extend: {
      colors: {
        concierge: {
          black: "#0D0D0D",
          charcoal: "#1A1A1A",
          gold: "#D9C280",
          "gold-hover": "#C9B070",
          "soft-gold": "#E6D9B3",
          ivory: "#FAFAFA",
          slate: "#999999",
        },
      },
      boxShadow: {
        luxe: "0 24px 50px rgba(0, 0, 0, 0.45)",
      },
    },
  },
  plugins: [],
};
