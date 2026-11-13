/** @type {import('tailwindcss').Config} */

/*
 * Roufi Vet design tokens.
 *
 * Brand colours come from the logo and the values already hard-coded across
 * the original components (#1a8b00, #ff0302, #fffcf7). The numbered steps are
 * tints and shades of those same colours, used for surfaces, hover states and
 * text that needs extra contrast. No new hues are introduced.
 */
export default {
  content: [
    "./app/**/*.{js,jsx,mdx}",
    "./components/**/*.{js,jsx}",
    "./lib/**/*.{js,jsx}",
  ],
  theme: {
    extend: {
      colors: {
        "roufi-green": {
          DEFAULT: "#1a8b00", // logo green
          50: "#f3f9ef",
          100: "#e5f2dc",
          200: "#c8e4b3",
          700: "#157000", // text-safe on white and cream (6:1)
          800: "#105600",
          900: "#0c3f02",
          950: "#082a02", // dark surfaces
        },
        "roufi-red": {
          DEFAULT: "#ff0302", // logo red
          50: "#fff1f1",
          100: "#ffdede",
          700: "#d40000", // text-safe on white (5.4:1)
        },
        "roufi-light-green": "#7CD655",
        "roufi-cream": {
          DEFAULT: "#fffcf7",
          100: "#FFF9F0",
          200: "#f5eddf",
        },
        "roufi-brown": {
          DEFAULT: "#8D5B4C",
          50: "#f8f1ee",
          900: "#3b241d",
        },
        "roufi-sage": "#eaf0de",

        // Semantic tokens used by the shadcn-style components in components/ui
        border: "rgb(var(--border) / <alpha-value>)",
        input: "rgb(var(--input) / <alpha-value>)",
        ring: "rgb(var(--ring) / <alpha-value>)",
        background: "rgb(var(--background) / <alpha-value>)",
        foreground: "rgb(var(--foreground) / <alpha-value>)",
        primary: {
          DEFAULT: "rgb(var(--primary) / <alpha-value>)",
          foreground: "rgb(var(--primary-foreground) / <alpha-value>)",
        },
        secondary: {
          DEFAULT: "rgb(var(--secondary) / <alpha-value>)",
          foreground: "rgb(var(--secondary-foreground) / <alpha-value>)",
        },
        destructive: {
          DEFAULT: "rgb(var(--destructive) / <alpha-value>)",
          foreground: "rgb(var(--destructive-foreground) / <alpha-value>)",
        },
        muted: {
          DEFAULT: "rgb(var(--muted) / <alpha-value>)",
          foreground: "rgb(var(--muted-foreground) / <alpha-value>)",
        },
        accent: {
          DEFAULT: "rgb(var(--accent) / <alpha-value>)",
          foreground: "rgb(var(--accent-foreground) / <alpha-value>)",
        },
        popover: {
          DEFAULT: "rgb(var(--popover) / <alpha-value>)",
          foreground: "rgb(var(--popover-foreground) / <alpha-value>)",
        },
        card: {
          DEFAULT: "rgb(var(--card) / <alpha-value>)",
          foreground: "rgb(var(--card-foreground) / <alpha-value>)",
        },
      },
      fontFamily: {
        sans: ["var(--font-poppins)", "ui-sans-serif", "system-ui", "sans-serif"],
      },
      borderRadius: {
        "4xl": "2rem",
        "5xl": "2.5rem",
      },
      boxShadow: {
        soft: "0 1px 2px rgb(28 25 23 / 0.04), 0 12px 32px -16px rgb(28 25 23 / 0.18)",
        lift: "0 2px 4px rgb(28 25 23 / 0.04), 0 24px 48px -24px rgb(28 25 23 / 0.28)",
        hairline: "0 0 0 1px rgb(28 25 23 / 0.07)",
      },
      transitionTimingFunction: {
        "out-expo": "cubic-bezier(0.22, 1, 0.36, 1)",
      },
      keyframes: {
        rise: {
          from: { opacity: "0", transform: "translateY(24px)" },
          to: { opacity: "1", transform: "none" },
        },
        "word-rise": {
          from: { transform: "translateY(105%)" },
          to: { transform: "none" },
        },
        "fade-in": {
          from: { opacity: "0" },
          to: { opacity: "1" },
        },
        "scale-in": {
          from: { opacity: "0", transform: "scale(1.06)" },
          to: { opacity: "1", transform: "none" },
        },
      },
      animation: {
        rise: "rise 0.9s cubic-bezier(0.22, 1, 0.36, 1) both",
        "word-rise": "word-rise 1s cubic-bezier(0.22, 1, 0.36, 1) both",
        "fade-in": "fade-in 0.3s ease-out both",
        "scale-in": "scale-in 1.4s cubic-bezier(0.22, 1, 0.36, 1) both",
      },
    },
  },
  plugins: [],
};
