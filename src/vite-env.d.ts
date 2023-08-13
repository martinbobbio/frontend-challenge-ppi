/// <reference types="vite/client" />

// eslint-disable-next-line @typescript-eslint/no-unused-vars
import { DefaultTheme } from 'styled-components';

interface Palette {
  white: {
    main: string;
  };
  black: {
    main: string;
  };
  gray: {
    main: string;
  };
  primary: {
    main: string;
  };
  elements: {
    header: {
      background: string;
    };
    box: {
      background: string;
    };
  };
}

interface FontSize {
  sm: string;
  md: string;
  lg: string;
  xl: string;
  xxl: string;
  xxxl: string;
}

interface FontWeight {
  low: number;
  medium: number;
  high: number;
}

interface BoxShadow {
  low: string;
  medium: string;
  high: string;
}

interface MyTheme {
  palette: Palette;
  fontSize: FontSize;
  fontWeight: FontWeight;
  boxShadow: BoxShadow;
}

declare module 'styled-components' {
  // eslint-disable-next-line @typescript-eslint/no-empty-interface
  export interface DefaultTheme extends MyTheme {}
}
