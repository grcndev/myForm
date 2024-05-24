import type { Config } from "tailwindcss";

const config: Config = {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/layout/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    colors: {
      marine_bleu: "hsl(213, 96%, 18%)",
      purplish_blue: "hsl(243, 100%, 62%)",
      pastel_blue: "hsl(228, 100%, 84%)",
      light_blue: "hsl(206, 94%, 87%)",
      strawberry_red: "hsl(354, 84%, 57%)",
      cool_gray: "hsl(231, 11%, 63%)",
      light_gray: "hsl(229, 24%, 87%)",
      magnolia: "hsl(217, 100%, 97%)",
      alabaster: "rgb(255,175,126)",
      white: "hsl(0, 0%, 100%)",
      light_purple: "rgb(98,90,255)",
      light_coral: "rgb(249,128,141)",
    },
    extend: {
      backgroundImage: {
        "gradient-radial": "radial-gradient(var(--tw-gradient-stops))",
        "gradient-conic":
          "conic-gradient(from 180deg at 50% 50%, var(--tw-gradient-stops))",
        'capa': "url('../assets/capa.jpeg')",
      },
    },
  },
  plugins: [/*require('tailwindcss/forms')*/],
};
export default config;
