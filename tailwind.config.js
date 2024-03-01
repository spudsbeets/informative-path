/** @type {import('tailwindcss').Config} */
export default {
  content: [    
  "./index.html",
  "./src/**/*.{js,ts,jsx,tsx}"
  ],
  theme: {
    extend: {
      colors: {
        "videoGameGreen": "#33cc33",
        "borderGreen": "#057405"
      },
      fontFamily: {
         "silkscreen": "'Silkscreen', serif"
      },
      height: {
        'screen/65': '65vh'
      },
      width: {
        'screen/80': '80vw'
      }
    },
  },
  plugins: [],
}