import type { Config } from "tailwindcss";
const withMT = require("@material-tailwind/react/utils/withMT");

const config: Config = withMT({
  important: true, 
  content: [
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./node_modules/@material-tailwind/react/components/**/*.{js,ts,jsx,tsx}",
    "./node_modules/@material-tailwind/react/theme/components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
  extend: {
    colors: {
      primary: "#2C3E50",
      secondary: "#95A5A6",
      accent: "#D4AC0D",
      bgLight: "#F4F6F7",
      textDark: "#1B2631",
      textLight: "#7F8C8D",
    },
  },
},
  plugins: [],
});

export default config;
