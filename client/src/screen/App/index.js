import React from 'react';
import { ThemeProvider } from '@material-ui/core/styles';
import Paper from '@material-ui/core/Paper';
import Navbar from '../../component/Navbar';
import ProductView from '../ProductView';
import ligthTheme from '../../theme/light';
import darkTheme from '../../theme/dark';

import useMode from '../../Hooks/useMode';

// webpackChunkName: "test"

const style = {
  root: {
    height: '100vh',
    width: '100vw',
    overflow: 'hidden',
  },
};

const App = () => {
  const isDark = useMode();

  const theme = isDark ? darkTheme : ligthTheme;

  return (
    <ThemeProvider theme={theme}>
      <Paper>
        <div style={style.root}>
          <Navbar isDark={isDark} />
          <ProductView />
        </div>
      </Paper>
    </ThemeProvider>
  );
};

export default App;
