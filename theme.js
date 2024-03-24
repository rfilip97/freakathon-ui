import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8C1111',
    primaryFocused: '#5D1111',
    secondary: '#FBF4F4',
    gray: '#f0f0f0',
  },
  fonts: {
    logo: {
      fontFamily: 'Shrikhand',
      fontWeight: 'normal',
      fontSize: 24,
      color: 'white'
    },
    large: {
      fontWeight: 'normal',
      fontSize: 24,
    },
    big: {
      fontWeight: 'normal',
      fontSize: 20,
    },
    regular: {
      fontWeight: 'normal',
      fontSize: 16,
    },
    medium: {
      fontWeight: 'normal',
      fontSize: 14,
    },
    light: {
      fontWeight: 'normal',
      fontSize: 12,
    },
    thin: {
      fontWeight: 'normal',
      fontSize: 10,
    },
  },
};

export default theme;
