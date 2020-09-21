import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './config/globalStyle';
import theme from './config/theme';
import fonts from './config/fonts';
import { AppRouter } from './routers/AppRouter';

export const TsunomakiJankenApp = () => {
  return (
    <ThemeProvider theme={ theme }>
      <ThemeProvider theme={ fonts }>
      
        <GlobalStyle />
        <AppRouter />

      </ThemeProvider>
    </ThemeProvider>
  );
}
