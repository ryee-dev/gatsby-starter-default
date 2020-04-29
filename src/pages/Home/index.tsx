import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'rebass';

const HomeContainer = styled(Box)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  
  h1 {
    font-family: 'Transat Text', sans-serif;
    font-weight: lighter;
  } 
  
  h2 {
    font-family: Arboria, sans-serif;
    font-weight: lighter;
    
    .b {
      font-weight: 400;
    }
  }
`;

const TextContainer = styled(Box)`
  position: absolute;
  bottom: 0;
  right: 0;
  text-align: right;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Text as="h1" fontSize={['84px', '120px', '144px']} pl={[1, 3, 4]}>roger yee</Text>
      <TextContainer p={[3, 4]}>
        <Text as="h2" fontSize={['36px']}><span className="b">front end</span> developer</Text>
        <Text as="h2" fontSize={['36px']}><span className="b">ui</span> engineer</Text>
        <Text as="h2" fontSize={['36px']}>based in <span className="b">irvine</span>, CA</Text>
      </TextContainer>
    </HomeContainer>
  );
};

export default HomePage;
