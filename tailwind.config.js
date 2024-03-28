export default {
  content: ["./src/**/*.{js,jsx,ts,tsx}"],
  theme: {
    extend: {
      colors: {
        'dark-blue': '#061a44',
        'darker-blue': '#041836',
      },
      spacing: {
        '265': '265px', // Custom width for the sidebar
        '300': '300px', // Custom height, if ever needed
      },
    },
  },
  plugins: [],
}
