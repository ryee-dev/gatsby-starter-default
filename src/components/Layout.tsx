import * as React from 'react';
import { createGlobalStyle } from 'styled-components';
import { ThemeProvider } from 'theme-ui';
import theme from '../theme';


const GlobalStyle = createGlobalStyle`
  html, body {
    margin: 0;
    padding: 0;
    width: 100%;
    height: 100%;
    //box-sizing: inherit;
  }
  
  * {
    box-sizing: border-box;
  }
  
  body {
    display: flex;
    flex-direction: column;
    background-color: white;
    
    
  }
`;

// eslint-disable-next-line @typescript-eslint/ban-types
const Layout: React.FC<{}> = ({ children }) => (
  <ThemeProvider theme={theme}>
    <GlobalStyle />
    {children}
  </ThemeProvider>
);

export default Layout;
