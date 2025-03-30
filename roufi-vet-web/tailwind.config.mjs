/** @type {import('tailwindcss').Config} */
export default {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx,mdx}",
    "./components/**/*.{js,ts,jsx,tsx,mdx}",
    "./app/**/*.{js,ts,jsx,tsx,mdx}",
  ],
  theme: {
    extend: {
      colors: {
        background: "var(--background)",
        foreground: "var(--foreground)",
        'roufi-red': '#FF0000',
				'roufi-green': '#2D9D3A',
				'roufi-light-green': '#7CD655',
				'roufi-cream': '#FFF9F0',
				'roufi-brown': '#8D5B4C',
      },
    },
  },
  plugins: [],
};
