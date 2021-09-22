import { createTheme } from '@material-ui/core/styles';

const theme = createTheme({
  background: '#292929',
  typography: {
    useNextVariants: true,

    h1: {
      'font-family': 'Source Sans Pro',
    },
    h2: {
      'font-family': 'Source Sans Pro',
    },
    h3: {
      'font-family': 'Source Sans Pro',
    },
    h4: {
      'font-family': 'Source Sans Pro',
    },
    subtitle1: {
      'font-family': 'Source Sans Pro',
    },
    subtitle2: {
      'font-family': 'Source Sans Pro',
    },
    body1: {
      'font-family': 'Source Sans Pro',
    },
    body2: {
      'font-family': 'Source Sans Pro',
    },
    content: {
      fontFamily: 'Source Sans Pro',
    },
    caption: {
      'font-family': 'Source Sans Pro',
    },
  },
  palette: {
    type: 'dark',
    primary: {
      main: '#292929',
    },
    secondary: {
      main: '#0083C2',
    },
    background: {
      main: '#292929',
    },
    error: { main: '#CC2C1C' },
    warning: { main: '#FC642D' },
    info: { main: '#08549E' },
    text: { main: '#FC642D' },
    icon: { main: '#757575' },
  },
  shape: {
    borderRadius: 6,
  },
});

export default theme;
