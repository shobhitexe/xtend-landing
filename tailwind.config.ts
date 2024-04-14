import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      screens: {
        xs: "480px",
        ss: "620px",
        sm: "768px",
        md: "1060px",
        lg: "1200px",
        xl: "1700px",
      },
      backgroundImage: {
        heroHeadText: "linear-gradient(180deg, #1FA9DB 59.29%, #006089 100%)",
        blueButtonBG: "linear-gradient(360deg, #108ABE 0%, #1DA7DA 100%)",
        fullWebsiteCardBg: "linear-gradient(180deg, #86D4F3 0%, #E2F3FC 100%)",

        launchBg: "url('/image/launch/launch-bg.avif')",
        heroBg: "url('/image/hero/hero-bg.webp')",
      },
      fontFamily: {
        circularMedium: "circular-medium",
        circularBold: "circular-bold",
        circularBook: "circular-book",
      },
      colors: {
        navBg: "#0C3045",
        blue: "#108ABE",
        lightBlue: "#E2F3FC",
        darkBlue: "#134B67",
        gray: "#5F5F5F",
      },

      keyframes: {
        "accordion-down": {
          from: { height: "0" },
          to: { height: "var(--radix-accordion-content-height)" },
        },
        "accordion-up": {
          from: { height: "var(--radix-accordion-content-height)" },
          to: { height: "0" },
        },
      },
      animation: {
        "accordion-down": "accordion-down 0.2s ease-out",
        "accordion-up": "accordion-up 0.2s ease-out",
      },
    },
  },
  plugins: [],
};
export default config;
