import { createTheme } from '@rneui/themed';

const theme = createTheme({
  components: {
    Button: {
      raised: false,
      title: 'Default Title',
      buttonStyle: {},
      containerStyle: {},
    },
    Text: (props) => ({
      //set your various properties for the Text elements
    }),
  },
  mode: 'dark',
  darkColors: {
    primary: 'cornflowerblue',
    searchBg: '#999',
    secondary: 'rebeccapurple',
    success: 'green',
    warning: 'gold',
    white: '#ccc',
  },
  lightColors: {},
  spacing: {
    xs: 3,
    sm: 6,
    md: 12,
    lg: 24,
    xl: 48,
  },
  txt: {
    xs: 10,
    sm: 20,
    md: 30,
    lg: 40,
    xl: 50,
  },
});

export { theme };
