import { ThemeType } from 'react-native-magnus';
import fonts from './fonts';
type themesNames = 'light' | 'dark';
type MyThemeType = {
  [name in themesNames]: ThemeType;
};

export const colors = {
  blue900: '#2E4C6D',
  defaultPurple: '#9923F7',
  strongGray: '#1a202c',
};

export const themes: MyThemeType = {
  light: {
    name: 'light',
    colors,
    components: {
      Div: {
        bg: 'gray300',
      },
      Text: {
        fontFamily: fonts.roboto.regular,
        color: 'gray900',
      },
      Input: {
        bg: 'white',
      },
      Tag: {
        color: 'red',
      },
      CollapseHeader: {
        color: 'gray900',
      },
    },
  },
  dark: {
    name: 'dark',
    colors,
    components: {
      Div: {
        bg: '#35383F',
      },
      Text: {
        fontFamily: fonts.roboto.regular,
        color: 'gray100',
      },
      Tag: {
        color: 'gray100',
      },
      Input: {
        bg: 'strongGray',
      },
      CollapseHeader: {
        color: 'gray100',
      },
    },
  },
};
