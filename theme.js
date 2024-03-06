import { DefaultTheme } from 'react-native-paper';

const theme = {
  ...DefaultTheme,
  colors: {
    ...DefaultTheme.colors,
    primary: '#8C1111',
    secondary: '#FBF4F4',
    gray: '#f0f0f0',
  },
  fonts: {
    large: {
      fontFamily: 'Inter',
      fontWeight: 'normal',
      fontSize: 24,
    },
    big: {
      fontFamily: 'Inter',
      fontWeight: 'normal',
      fontSize: 20,
    },
    regular: {
      fontFamily: 'Inter',
      fontWeight: 'normal',
      fontSize: 16,
    },
    medium: {
      fontFamily: 'Inter',
      fontWeight: 'normal',
      fontSize: 14,
    },
    light: {
      fontFamily: 'Inter',
      fontWeight: 'normal',
      fontSize: 12,
    },
    thin: {
      fontFamily: 'Inter',
      fontWeight: 'normal',
      fontSize: 10,
    },
  },
};

export default theme;
