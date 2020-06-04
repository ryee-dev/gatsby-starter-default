export default {
  breakpoints: ['36em', '50em', '64em', '80em', '96rem'],
  fontSizes: [
    12, 14, 16, 20, 24, 32, 48, 64, 72, 84, 96, 108, 124, 136, 148, 160,
  ],
  colors: {
    blue: '#07c',
    lightgray: '#f6f6ff',
  },
  space: [
    0, 4, 8, 16, 32, 64, 128, 256,
  ],
  fonts: {
    body: 'system-ui, sans-serif',
    heading: 'Transat Text, sans-serif',
    subheading: 'Arboria, sans-serif',
  },
  fontWeights: {
    body: 400,
    lighter: 'lighter',
    bold: 'bold',
  },
  lineHeights: {
    body: 1.5,
    heading: 1.25,
  },
  shadows: {
    small: '0 0 4px rgba(0, 0, 0, .125)',
    large: '0 0 24px rgba(0, 0, 0, .125)',
  },
  variants: {},
  text: {
    heading: {
      fontFamily: 'heading',
      fontWeight: 'lighter',
      marginLeft: [null, null, -2, null],
      fontSize: [7, 10, 11, 13],
      // textAlign: ['right', null, 'left'],
    },
    subheading: {
      fontFamily: 'subheading',
      fontWeight: 'lighter',
      fontSize: ['12px', '14px', 2, '21px'],
      // textAlign: 'right',
    },
    title: {
      fontFamily: 'subheading',
      fontWeight: 'body',
      fontSize: [3, null, 5, 6],
    },
  },
  buttons: {
    primary: {
      color: 'white',
      bg: 'primary',
    },
  },
};
