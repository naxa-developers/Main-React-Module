module.exports = {
  // content: ['./src/**/*.{js,ts,jsx,tsx}'],
  content: ['./index.html', './src/**/*.{vue,js,ts,jsx,tsx}'],
  purge: false,
  theme: {
    extend: {
      fontFamily: {
        primaryfont: ['product-sans', 'sans-serif'],
      },
      // colors: {
      //   primarycolor: '##C9232B',
      // },
      colors: {
        primary: {
          50: '#FFEDF1',
          100: '#FFD1D8',
          200: '#F8A0A4',
          300: '#F27A80',
          400: '#FF5A5F',
          500: '#FF4846',
          600: '#F74046',
          700: '#E5363F',
          800: '#D82F38',
          900: '#C9232B',
        },
        secondary: {
          50: '#DFF2F1',
          100: '#B0DFDA',
          200: '#7BCBC3',
          300: '#42B6AA',
          400: '#00A699',
          500: '#009686',
          600: '#3B8779',
          700: '#347769',
          800: '#2C675A',
          900: '#1E4C3F',
        },
        grey: {
          50: '#FAFAFA',
          100: '#F5F5F5',
          200: '#E6E6E6',
          300: '#D7D7D7',
          400: '#BDBDBD',
          500: '#989898',
          600: '#757575',
          700: '#616161',
          800: '#484848',
          900: '#212121',
        },
      },
      fontSize: {
        base: ['1rem'],
        'body-lg': [
          '0.938rem',
          {
            lineHeight: '1.25',
            fontWeight: '400',
            letterSpacing: '0',
          },
        ],
        'body-md': [
          '0.831rem',
          {
            lineHeight: '1.125',
            fontWeight: '400',
            letterSpacing: '0',
          },
        ],
        'body-sm': [
          '0.75rem',
          {
            lineHeight: '1',
            fontWeight: '700',
            letterSpacing: '0',
          },
        ],
        button: [
          '0.938rem',
          {
            lineHeight: '1.25',
            fontWeight: '700',
            letterSpacing: '0',
          },
        ],
      },
    },
  },
  plugins: [],
  prefix: 'naxatw-',
};
