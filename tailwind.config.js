module.exports = {
  content: [
    "./pages/**/*.{js,ts,jsx,tsx}",
    "./components/**/*.{js,ts,jsx,tsx}",
  ],
  theme: {
    extend: {
      colors: {
        'custom-gray': 'rgba(255, 255, 255, 0.5)',
        'custom-red': '#E30000',
      },
      backgroundImage: {
        'red-gradient': 'linear-gradient(19.23deg, #010101 -45.98%, #E30000 141.31%)'
      },
      borderRadius: {
        circle: '50%'
      }
    },
    fontFamily: {
      sans: ['Oswald', 'sans-serif']
    }
  },
  plugins: [],
}
