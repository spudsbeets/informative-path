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
        'screen/65': '65vh',
        'screen/30': '30vh',
        'screen/40': '40vh'
      },
      width: {
        'screen/80': '80vw',
        'screen/90': '90vw'
      },
      fontSize: {
        'xSm': '10px',
        'xxSm': '8px',
        'xxxSm': '7px'
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
        vSmSlideMovement: {
          '0%': { marginLeft: '420px' },
          '25%': { marginLeft: '420px' },
          '33%': { marginLeft: '0px' },
          '58%': { marginLeft: '0px' },
          '66%': { marginLeft: '-420px' },
          '99%': { marginLeft: '-420px' },
          '100%': { marginLeft: '420px' }
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
        opacityShiftTwoPicsOne : {
          '0%': { opacity: '1' },
          '45%': { opacity: '1' },
          '55%': { opacity: '0' },
          '95%': { opacity: '0' },
          '100%': { opacity: '1' }
        },
        opacityShiftTwoPicsTwo : {
          '0%': { opacity: '0' },
          '45%': { opacity: '0' },
          '55%': { opacity: '1' },
          '95%': { opacity: '1' },
          '100%': { opacity: '0' }
        },
        buttonOpacityShiftTwoPicsOne : {
          '0%': { opacity: '.85' },
          '45%': { opacity: '.85' },
          '55%': { opacity: '.3' },
          '100%': { opacity: '.3' }
        },
        buttonOpacityShiftTwoPicsTwo : {
          '0%': { opacity: '.3' },
          '45%': { opacity: '.3' },
          '55%': { opacity: '.85' },
          '100%': { opacity: '.85' }
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
        },
        shipTwitch: {
          '0%': { transform: 'rotate(0deg)' },
          '45%': { transform: 'rotate(0deg)' },
          '50%': { transform: 'rotate(30deg)' },
          '55%': { transform: 'rotate(0deg)' },
          '80%': { transform: 'rotate(0deg)' },
          '85%': { transform: 'rotate(-25deg)' },
          '90%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
        shipMove: {
          '0%': { marginLeft: '0px' },
          '50%': { marginLeft: '550px' },
          '100%': { marginLeft: '0px' }
        },
        lgShipMove: {
          '0%': { marginLeft: '0px' },
          '50%': { marginLeft: '1200px' },
          '100%': { marginLeft: '0px' }
        },
        catTwitch: {
          '0%': { transform: 'rotate(0deg)' },
          '28%': { transform: 'rotate(0deg)' },
          '30%': { transform: 'rotate(20deg)' },
          '34%': { transform: 'rotate(0deg)' },
          '38%': { transform: 'rotate(-20deg)' },
          '42%': { transform: 'rotate(0deg)' },
          '80%': { transform: 'rotate(0deg)' },
          '83%': { transform: 'rotate(26deg)' },
          '87%': { transform: 'rotate(0deg)' },
          '91%': { transform: 'rotate(-23deg)' },
          '95%': { transform: 'rotate(0deg)' },
          '100%': { transform: 'rotate(0deg)' }
        },
      },
      animation: {
        'slide-move': 'slideMovement 15s ease-in-out infinite',
        'vsm-slide-move': 'vSmSlideMovement 15s ease-in-out infinite',
        'opacity-shift-1': 'opacityShiftOne 15s ease-in-out infinite',
        'opacity-shift-2': 'opacityShiftTwo 15s ease-in-out infinite',
        'opacity-shift-3': 'opacityShiftThree 15s ease-in-out infinite',
        'opacity-shift-2pics-1': 'opacityShiftTwoPicsOne 14s ease-in-out infinite',
        'opacity-shift-2pics-2': 'opacityShiftTwoPicsTwo 14s ease-in-out infinite',
        'button-opacity-shift-1': 'buttonOpacityShiftOne 15s ease-in-out infinite',
        'button-opacity-shift-2': 'buttonOpacityShiftTwo 15s ease-in-out infinite',
        'button-opacity-shift-3': 'buttonOpacityShiftThree 15s ease-in-out infinite',
        'button-opacity-shift-2pics-1': 'buttonOpacityShiftTwoPicsOne 14s ease-in-out infinite',
        'button-opacity-shift-2pics-2': 'buttonOpacityShiftTwoPicsTwo 14s ease-in-out infinite',
        'ship-1-twitch': 'shipTwitch 15s ease-in-out infinite',
        'ship-2-twitch': 'shipTwitch 15s 4s ease-in-out infinite',
        'ship-3-twitch': 'shipTwitch 15s 9s ease-in-out infinite',
        'move-ships': 'shipMove 60s linear infinite',
        'move-ship-large': 'lgShipMove 60s linear infinite',
        'cat-1-twitch': 'catTwitch 30s 2s ease-in-out infinite',
        'cat-2-twitch': 'catTwitch 31s 6s ease-in-out infinite'
      },
      screens: {
        'vSm': { 'max': '400px' },
        'pSm': { 'max': '480px' }
      }
    },
  },
  plugins: []
}