module.exports = {
  purge: ['./src/**/*.{js,jsx,ts,tsx}'],
  darkMode: false, // or 'media' or 'class'
  theme: {
    extend: {
      animation:{
        blob: "blob 8s infinite"
      },
      keyframes: {
        blob: {
          "0%":{
            transform: "translate(0px, 0px) scale(1)"
          },
          "33%":{
            transform: "translate(20px, -30px) scale(1.1)"
          },
          "66%":{
            transform: "translate(-10px, 20px) scale(0.9)"
          },
          "100%":{
            transform: "translate(0px, 0px) scale(1)"
          }
        }
      }
    },
  },
  variants: {
    extend: {},
  },
  plugins: [],
}
