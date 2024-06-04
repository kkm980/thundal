/** @type {import('tailwindcss').Config} */
import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
    "./utils/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    screens: {
      'min': {'max': '359px'},
      // => @media (max-width: 359px) { ... }
      'xxsmScr': {'min': '360px', 'max': '449px'},
      // => @media (min-width: 360px and max-width: 449px) { ... }
      'xsmScr': {'min': '450px', 'max': '639px'},
      // => @media (min-width: 450px and max-width: 639px) { ... }
      'smScr': {'min': '640px', 'max': '767px'},
      // => @media (min-width: 640px and max-width: 767px) { ... }

      'midScr': {'min': '768px', 'max': '1023px'},
      // => @media (min-width: 768px and max-width: 1023px) { ... }

      'bigScr': {'min': '1024px', 'max': '1279px'},
      // => @media (min-width: 1024px and max-width: 1279px) { ... }

      'biggerScr': {'min': '1280px', 'max': '1535px'},
      // => @media (min-width: 1280px and max-width: 1535px) { ... }

      'biggestScr': {'min': '1536px'},
      // => @media (min-width: 1536px) { ... }
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
      },
      colors: {
        primary: {
          foreground: "white",
          DEFAULT: "black",
        },
        tahitiii: {
          foreground: "#FF5733",
          DEFAULT: "#20575A",
        },
        homeBg: {
          foreground: "#135D66",
          DEFAULT: "#034441"
        },
        titleDesc: {
          foreground: "#344955",
          DEFAULT: "#344955"
        },
        sky: {
          foreground: "#87ceeb",
          DEFAULT: "#87ceeb"
        },
        riverSide: {
          foreground: "#aad9d1",
          DEFAULT: "#aad9d1"
        },
        darkCyan: {
          foreground: "#048c80",
          DEFAULT: "#048c80"
        }
      },
      fontSize: {
        'mainTitle': "47px",
        'secTitle': '24px',
        'punchText': '16px',
      },
      fontWeight: {
        
      }
    },
  },
  plugins: [],
};

export default config;
