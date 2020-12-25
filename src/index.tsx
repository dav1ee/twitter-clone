import React from 'react';
import ReactDOM from 'react-dom';
import { Provider } from 'react-redux';
import { BrowserRouter as Router } from 'react-router-dom';
import { ThemeProvider, CssBaseline } from '@material-ui/core';

import { store } from './store/store';
import { theme } from './theme';
import App from './App';

ReactDOM.render(
  <ThemeProvider theme={theme}>
    <CssBaseline />
    <Router>
      <Provider store={store}>
        <App />
      </Provider>
    </Router>
  </ThemeProvider>,
  document.getElementById('root'),
);
