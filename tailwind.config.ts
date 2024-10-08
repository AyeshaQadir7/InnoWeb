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
        deepCharcoal: '#1E1E1E',
        brightCyan: '#00E0FF',
        vividMagenta: '#FF0080',
        electricOrange: '#FF5A00',
        softNeonPurple: '#AE00FF',
        graphiteGrey: '#3A3A3A',
      },
    },
  },
  plugins: [],
};
export default config;
