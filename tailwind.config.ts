import type { Config } from "tailwindcss"

const config = {
  darkMode: ["class"],
  content: [
    './pages/**/*.{ts,tsx}',
    './components/**/*.{ts,tsx}',
    './app/**/*.{ts,tsx}',
    './src/**/*.{ts,tsx}',
  ],
  prefix: "",
  theme: {
    container: {
    padding:{
        DEFAULT: "1rem",
        md: "1.5rem",
        lg: "3.125rem",
        xl: "5rem",
        "2xl": "6.25rem",
    }
    },
    screens:{
sm:"425px",
  md: "768px",
  lg: "1024px",
  xl: "1366px",
  "2xl": "1920px",
    },
    extend: {
      animation: {
        typewriter: "typewriter 2s steps(11) forwards"
      },
      keyframes: {
        typewriter: {
          to: {
            left: "100%"
          }
        }
      },
    colors:{
      primary:"#3B82F6",
    },
    fontFamily:{
      stylish:"'Stylish', serif"
    }
    },
  },
  plugins: [require("tailwindcss-animate")],
} satisfies Config

export default config