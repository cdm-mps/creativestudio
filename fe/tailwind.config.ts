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
      "noto-sans": ["Noto Sans", "cursive"],
    },
    backgroundImage: {
      "banner-gradient":
        "linear-gradient(120deg, rgba(12, 12, 12,1) 33%, rgba(255,255,255,0) 100%)",
      "line-gradient":
        "linear-gradient(0deg, rgba(12, 12, 12,1) 5%, rgba(255,255,255,0) 100%)",
    },
    extend: {
      colors: {
        available: "#83C62D",
        soldOut: "#C69B2D",
        occurred: "#C62D2D",
        background: "#0c0c0c",
        masterclasses: "#FFA630",
        editions: "#DC493A",
        workshops: "#B62356",
        creativeTalks: "#CC59D2",
        artisticResidences: "#5BCD74",
        businessWorkshops: "#63CBF8",
        "businessWorkshops-opacity": "rgba(99,203,248,0.20)",
        "not-found-disclaimer": "rgba(255,255,255,0.10)",
        "black-50": "rgba(0,0,0,0.50)",
      },
      animation: {
        "autoplay-infinite": "slide 70s linear infinite",
        "skeleton-loading": "skeletonLoading 1s linear infinite alternate",
        slideInLeft: "slideInLeft 300ms cubic-bezier(0.4, 0, 0.2, 1) alternate",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
        },
        slideInLeft: {
          "0%": { transform: "translateX(-20%)" },
          "100%": { transform: "translateX(0)" },
        },
        skeletonLoading: {
          "0%": { backgroundColor: "#ffffff" },
          "100%": { backgroundColor: "#595959" },
        },
      },
    },
  },
  plugins: [],
  safelist: [
    "left-[0px]",
    "left-[42px]",
    "left-[84px]",
    "left-[126px]",
    "left-[168px]",
    {
      pattern:
        /text-(artisticResidence|workshop|edition|businessWorkshop|creativeTalks|masterclass)/,
      variants: ["hover", "group-hover"],
    },
    {
      pattern:
        /bg-(artisticResidence|workshop|edition|businessWorkshop|creativeTalks|masterclass|available|occurred|soldOut|onGoing)/,
      variants: ["hover", "group-hover"],
    },
    {
      pattern:
        /border-(artisticResidence|workshop|edition|businessWorkshop|creativeTalks|masterclass)/,
      variants: ["hover", "group-hover"],
    },
    {
      pattern:
        /accent-(artisticResidence|workshop|edition|businessWorkshop|creativeTalks|masterclass)/,
      variants: ["hover", "group-hover"],
    },
  ],
};
export default config;
