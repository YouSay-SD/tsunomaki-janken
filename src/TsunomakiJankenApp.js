import React from 'react';
import { ThemeProvider } from 'styled-components';
import GlobalStyle from './config/globalStyle';
import theme from './config/theme';
import fonts from './config/fonts';
import { HomeScreen } from './components/home/HomeScreen';

export const TsunomakiJankenApp = () => {
  return (
    <ThemeProvider theme={ theme }>
      <ThemeProvider theme={ fonts }>
      
        <GlobalStyle />
        <HomeScreen />

      </ThemeProvider>
    </ThemeProvider>
  );
}
