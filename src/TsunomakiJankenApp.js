import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './config/globalStyle';
import theme from './config/theme';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

export const TsunomakiJankenApp = () => {
  return (
    <Provider store={ store }>
      <ThemeProvider theme={ theme }>
        <GlobalStyle />
        <AppRouter />
      </ThemeProvider>
    </Provider>
  );
}
