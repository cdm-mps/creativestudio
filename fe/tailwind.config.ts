import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        masterclass: "#FFA630",
        edition: "#DC493A",
        workshop: "#B62356",
        "creative-talks": "#CC59D2",
        "artistic-residence": "#5BCD74",
        "business-workshop": "#63CBF8",
      },
    },
  },
  plugins: [],
};
export default config;
