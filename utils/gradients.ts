const gradients = [
  { bg: '#4158D0', image: 'linear-gradient(43deg, #4158D0 0%, #C850C0 46%, #FFCC70 100%)' },
  { bg: '#0093E9', image: 'linear-gradient(160deg, #0093E9 0%, #80D0C7 100%);' },
  { bg: '#8EC5FC', image: 'linear-gradient(62deg, #8EC5FC 0%, #E0C3FC 100%)' },
  { bg: '#85FFBD', image: 'linear-gradient(45deg, #85FFBD 0%, #FFFB7D 100%)' },
]

export const getRandomGradientCss = () => gradients[Math.floor(Math.random() * gradients.length)]
