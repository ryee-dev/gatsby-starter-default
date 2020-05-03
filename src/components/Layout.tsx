import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';


const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    box-sizing: inherit;
  }
  
  body {
    display: flex;
    flex-direction: column;
  }
`;

const Layout: React.FC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Layout;
