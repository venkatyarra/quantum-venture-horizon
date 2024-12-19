import type { Config } from "tailwindcss";

export default {
  darkMode: ["class"],
  content: [
    "./pages/**/*.{ts,tsx}",
    "./components/**/*.{ts,tsx}",
    "./app/**/*.{ts,tsx}",
    "./src/**/*.{ts,tsx}",
  ],
  prefix: "",
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        border: "hsl(var(--border))",
        quantum: {
          dark: "#1A1F2C",
          primary: "#9b87f5",
          secondary: "#7E69AB",
          accent: "#0EA5E9",
        },
      },
      animation: {
        "particle-slow": "particle 8s linear infinite",
      },
      keyframes: {
        particle: {
          "0%, 100%": { transform: "translateY(0) translateX(0)" },
          "25%": { transform: "translateY(-20px) translateX(10px)" },
          "50%": { transform: "translateY(0) translateX(20px)" },
          "75%": { transform: "translateY(20px) translateX(10px)" },
        },
      },
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config;