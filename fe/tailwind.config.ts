import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    fontFamily: {
      "league-gothic": ["League Gothic", "cursive"],
      lato: ["Lato", "cursive"],
    },
    backgroundImage: {
      "banner-gradient":
        "linear-gradient(120deg, rgba(0,0,0,1) 33%, rgba(255,255,255,0) 100%)",
      "line-gradient":
        "linear-gradient(0deg, rgba(0,0,0,1) 5%, rgba(255,255,255,0) 100%)",
    },
    extend: {
      colors: {
        masterclass: "#FFA630",
        edition: "#DC493A",
        workshop: "#B62356",
        "creative-talks": "#CC59D2",
        "artistic-residence": "#5BCD74",
        "business-workshop": "#63CBF8",
      },
      animation: {
        "autoplay-infinite": "slide 70s linear infinite",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    {
      pattern:
        /text-(artistic-residence|workshop|edition|business-workshop|creative-talks|masterclass)/,
    },
    {
      pattern:
        /bg-(artistic-residence|workshop|edition|business-workshop|creative-talks|masterclass)/,
    },
    {
      pattern:
        /border-(artistic-residence|workshop|edition|business-workshop|creative-talks|masterclass)/,
    },
    {
      pattern:
        /accent-(artistic-residence|workshop|edition|business-workshop|creative-talks|masterclass)/,
    },
  ],
};
export default config;
