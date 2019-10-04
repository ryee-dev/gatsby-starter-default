import * as React from 'react';
import { createGlobalStyle } from 'styled-components';

const GlobalStyle = createGlobalStyle`
  body {
    display: flex;
    flex-direction: column;
    min-height: 100vh;
  }
`;

const LayoutRoot: React.FC<{}> = ({ children }) => (
  <>
    <GlobalStyle />
    {children}
  </>
);

export default LayoutRoot;
