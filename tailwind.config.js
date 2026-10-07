/** @type {import('tailwindcss').Config} */
export default {
  darkMode: ["class"],
  content: [
    "./index.html",
    "./src/**/*.{ts,tsx,js,jsx}",
  ],
  theme: {
    container: {
      center: true,
      padding: "2rem",
      screens: {
        "2xl": "1400px",
      },
    },
    extend: {
      colors: {
        // Architectural Timeless Palette
        arch: {
          charcoal: "#1C1C1A",
          dark: "#20211F",
          ivory: "#F4F1EA",
          stone: "#E8E3D9",
          "stone-light": "#EDEAE2",
          bronze: "#A8793D",
          "bronze-hover": "#8F642F",
          "bronze-subtle": "rgba(168, 121, 61, 0.12)",
          text: "#252421",
          muted: "#716D65",
          border: "#D8D2C5",
          "border-dark": "#31312E",
        },
        border: "hsl(var(--border))",
        input: "hsl(var(--input))",
        ring: "hsl(var(--ring))",
        background: "hsl(var(--background))",
        foreground: "hsl(var(--foreground))",
      },
      fontFamily: {
        serif: ['"Playfair Display"', '"Cormorant Garamond"', 'Georgia', 'serif'],
        display: ['"Playfair Display"', 'Georgia', 'serif'],
        sans: ['"Plus Jakarta Sans"', 'Manrope', 'sans-serif'],
      },
      borderRadius: {
        none: "0px",
        sm: "2px",
        DEFAULT: "4px",
        md: "6px",
        lg: "8px",
      },
    },
  },
  plugins: [],
}
