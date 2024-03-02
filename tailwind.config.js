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
      },
      keyframes: {
        slideMovement : {
          '0%': { marginLeft: '600px' },
          '25%': { marginLeft: '600px' },
          '33%': { marginLeft: '0px' },
          '58%': { marginLeft: '0px' },
          '66%': { marginLeft: '-600px' },
          '99%': { marginLeft: '-600px' },
          '100%': { marginLeft: '600px' }
        },
        opacityShiftOne : {
          '0%': { opacity: '1' },
          '25%': { opacity: '1' },
          '33%': { opacity: '0' },
          '100%': { opacity: '0' }
        },
        opacityShiftTwo : {
          '0%': { opacity: '0' },
          '25%': { opacity: '0' },
          '33%': { opacity: '1' },
          '58%': { opacity: '1' },
          '66%': { opacity: '0' },
          '100%': { opacity: '0' }
        },
        opacityShiftThree : {
          '0%': { opacity: '0' },
          '58%': { opacity: '0' },
          '66%': { opacity: '1' },
          '99%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        buttonOpacityShiftOne: {
          '0%': { opacity: '.85' },
          '25%': { opacity: '.85' },
          '33%': { opacity: '.3' },
          '100%': { opacity: '.3' }
        },
        buttonOpacityShiftTwo : {
          '0%': { opacity: '.3' },
          '25%': { opacity: '.3' },
          '33%': { opacity: '.85' },
          '58%': { opacity: '.85' },
          '66%': { opacity: '.3' },
          '100%': { opacity: '.3' }
        },
        buttonOpacityShiftThree : {
          '0%': { opacity: '.3' },
          '58%': { opacity: '.3' },
          '66%': { opacity: '.85' },
          '99%': { opacity: '.85' },
          '100%': { opacity: '.3' }
        }
      },
      animation: {
        'slide-move': 'slideMovement 21s ease-in-out infinite',
        'opacity-shift-1': 'opacityShiftOne 21s ease-in-out infinite',
        'opacity-shift-2': 'opacityShiftTwo 21s ease-in-out infinite',
        'opacity-shift-3': 'opacityShiftThree 21s ease-in-out infinite',
        'button-opacity-shift-1': 'buttonOpacityShiftOne 21s ease-in-out infinite',
        'button-opacity-shift-2': 'buttonOpacityShiftTwo 21s ease-in-out infinite',
        'button-opacity-shift-3': 'buttonOpacityShiftThree 21s ease-in-out infinite'
      }
    },
  },
  plugins: []
}