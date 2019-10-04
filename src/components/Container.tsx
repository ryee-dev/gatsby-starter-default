import * as React from 'react';
import styled from 'styled-components';

const StyledContainer = styled.div`
  position: relative;
  margin-left: auto;
  margin-right: auto;
  width: auto;
`;

interface ContainerProps {
}

const Container: React.FC<ContainerProps> = ({ children }) => <StyledContainer>{children}</StyledContainer>;

export default Container;
