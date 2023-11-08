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
        green: {
          DEFAULT: "#70916C",
          light: "#A2C39E",
          dark: "#597355",
        },
        blue: {
          DEFAULT: "#9FB1BF",
          light: "#779BB8",
          dark: "#5881A1",
        },
        background: {
          white: "#F7F7F7",
          blue: "#F0F7FC",
          green: "#F5F7F5",
        },
        black: {
          200: "#191919",
          300: "#2D292E",
        },
        grey: "#E6E6E6",
      },
      fontFamily: {
        agencyfb: ["var(--font-agencyfb)"],
      },
      height: {
        dvh: "100dvh",
      },
      minHeight: {
        dvh: "100dvh",
      },
      maxHeight: {
        dvh: "100dvh",
      },
      transitionDuration: {
        250: "250ms",
      },
    },
  },
  future: {
    hoverOnlyWhenSupported: true,
  },
  plugins: [],
};
export default config;
