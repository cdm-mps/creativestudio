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
        background: "#0c0c0c",
        masterclasses: "#FFA630",
        editions: "#DC493A",
        workshops: "#B62356",
        creativeTalks: "#CC59D2",
        artisticResidences: "#5BCD74",
        businessWorkshops: "#63CBF8",
        "businessWorkshops-opacity": "rgba(99,203,248,0.20)",
        "not-found-disclaimer": "rgba(255,255,255,0.10)",
      },
      animation: {
        "autoplay-infinite": "slide 70s linear infinite",
        "skeleton-loading": "skeletonLoading 1s linear infinite alternate",
      },
      keyframes: {
        slide: {
          "0%": { transform: "translateX(0)" },
          "100%": { transform: "translateX(-100%)" },
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
    {
      pattern:
        /text-(artisticResidence|workshop|edition|businessWorkshop|creativeTalks|masterclass)/,
      variants: ["hover"],
    },
    {
      pattern:
        /bg-(artisticResidence|workshop|edition|businessWorkshop|creativeTalks|masterclass)/,
      variants: ["hover"],
    },
    {
      pattern:
        /border-(artisticResidence|workshop|edition|businessWorkshop|creativeTalks|masterclass)/,
      variants: ["hover"],
    },
    {
      pattern:
        /accent-(artisticResidence|workshop|edition|businessWorkshop|creativeTalks|masterclass)/,
      variants: ["hover"],
    },
  ],
};
export default config;
