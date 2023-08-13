const FONT_SIZES = {
  sm: '14px',
  md: '16px',
  lg: '22px',
  xl: '24px',
  xxl: '32px',
  xxxl: '64px',
};

const FONT_WEIGHTS = {
  low: 400,
  medium: 700,
  high: 1000,
};

const BOX_SHADOWS = {
  low: '0 2px 4px rgba(0, 0, 0, 0.2)',
  medium: '0 4px 6px rgba(0, 0, 0, 0.3)',
  high: '0 8px 10px rgba(0, 0, 0, 0.4)',
};

const BASIC_PROPS = {
  fontSize: FONT_SIZES,
  fontWeight: FONT_WEIGHTS,
  boxShadow: BOX_SHADOWS,
};

export default {
  ...BASIC_PROPS,
  palette: {
    white: {
      main: '#fff',
    },
    black: {
      main: '#000',
    },
    gray: {
      main: '#757575',
    },
    primary: {
      main: '#1A8DFF',
    },
    elements: {
      header: {
        background: '#0E1342',
      },
      box: {
        background: '#E8F3FF',
      },
    },
  },
};
