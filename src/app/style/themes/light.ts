import { theme } from '@/types/theme';

const lightTheme: theme = {
  title: 'Light',
  colors: {
    primary: 'rgb(255 255 255)',
    secondary: '#ae0404',
    tertiary: '#f4f4f4'
  },
  transitions: 'all 350ms ease',
  typography: {
    sizes: {
      xs: 1,
      s: 1.4,
      m: 1.8,
      l: 2.2,
      xl: 2.8,
      xxl: 5.6
    },
    colors: {
      primary: '#212529',
      secondary: '#fee7e7',
      info: '#525c5a',
      success: '#0de5a8',
      warning: '#f70b17',
      danger: '#fe9c6b',
      dark: '#212529',
      light: '#f8f9fa'
    }
  },
  buttons: {
    colors: {
      primary: '#53cbbf',
      secondary: '#a79b83',
      info: '#525c5a',
      success: '#0de5a8',
      warning: '#f70b17',
      danger: '#fe9c6b',
      dark: '#212529',
      light: '#f8f9fa'
    },
    sizes: {
      height: {
        xs: 1.6,
        s: 2.2,
        m: 3.2,
        l: 4.2,
        xl: 5.2,
        xxl: 6.2
      },
      minWidth: {
        xs: 5,
        s: 7.5,
        m: 10,
        l: 15,
        xl: 25,
        xxl: 50
      }
    }
  }
};

export default lightTheme;
