import * as React from 'react';

import LayoutRoot from '../components/LayoutRoot';
import LayoutMain from '../components/LayoutMain';

const IndexLayout: React.FC = ({ children }) => (
  <LayoutRoot>
    <LayoutMain>{children}</LayoutMain>
  </LayoutRoot>
);

export default IndexLayout;
