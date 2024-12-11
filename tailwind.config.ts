import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        heading: "#D81159",
        button: "#DB0071",
        bg: "#EEECDB",
        border: "#414141"
      },
      spacing: {
        "img-w": "400px",
        "img-h": "300px",
        "700": "700px"
      }
    },
  },
  plugins: [],
};
export default config;
