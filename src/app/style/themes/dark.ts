import { theme } from '@/types/theme';

const darkTheme: theme = {
  title: 'Dark',
  colors: {
    primary: 'hsl(222, 14%, 10%)',
    secondary: '#212121',
    tertiary: '#282C34'
  },
  transitions: 'all 350ms ease;',
  typography: {
    sizes: {
      xs: 0.8,
      s: 1.2,
      m: 1.8,
      l: 2.2,
      xl: 2.8,
      xxl: 5.6
    },
    colors: {
      primary: '#f2f2f2',
      secondary: '#213635',
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

export default darkTheme;
