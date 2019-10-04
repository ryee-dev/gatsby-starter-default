import * as React from 'react';
import styled from 'styled-components';

const StyledPage = styled.div`
  display: block;
  flex: 1;
  position: relative;
  margin-bottom: 3rem;
`;

interface PageProps {
}

const Page: React.FC<PageProps> = ({ children }) => <StyledPage>{children}</StyledPage>;

export default Page;
