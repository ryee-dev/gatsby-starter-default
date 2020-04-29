import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

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
  <>
    <GlobalStyle />
    {children}
  </>
);

export default Layout;
