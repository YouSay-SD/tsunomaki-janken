import React from 'react';
import { Provider } from 'react-redux';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './config/globalStyle';
import theme from './config/theme';
import fonts from './config/fonts';
import { AppRouter } from './routers/AppRouter';
import { store } from './store/store';

export const TsunomakiJankenApp = () => {
  return (
    <Provider store={store}>
      <ThemeProvider theme={ theme }>
        <ThemeProvider theme={ fonts }>
        
          <GlobalStyle />
          <AppRouter />

        </ThemeProvider>
      </ThemeProvider>
    </Provider>
  );
}
