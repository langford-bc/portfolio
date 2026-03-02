/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./src/pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/components/**/*.{js,ts,jsx,tsx,mdx}",
    "./src/app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "#FFFFFF",
        foreground: "#000000",
        brand: {
          black: "#000000",
          offblack: "#111111",
          gray: {
            light: "#F5F5F7",
            mid: "#86868B",
            dark: "#1D1D1F",
          },
          white: "#FFFFFF",
        },
      },
      fontFamily: {
        sans: ["Geist", "Inter", "system-ui", "sans-serif"],
        serif: ["Georgia", "serif"],
      },
      maxWidth: {
        "8xl": "1440px",
      },
      gridTemplateColumns: {
        '12': 'repeat(12, minmax(0, 1fr))',
      },
      spacing: {
        '18': '4.5rem',
        '22': '5.5rem',
        '30': '7.5rem',
      }
    },
  },
  plugins: [],
};
