import React from 'react';
import styled from 'styled-components';
import { Box, Text } from 'theme-ui';

const HomeContainer = styled(Box)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  
  //.name {
  //  text-align: left;
  //  
  //  @media screen and (max-width: 799px) {
  //    text-align: right;
  //  }
  //}

  .b {
    font-weight: 400;
  }
`;

const TextContainer = styled(Box)`
  position: absolute;
  bottom: 0;
  right: 0;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Text
        variant="heading"
      >
        roger yee
      </Text>
      <TextContainer p={[3, 4]}>
        <Text variant="subheading"><span className="b">front end</span> developer</Text>
        <Text variant="subheading"><span className="b">ui</span> engineer</Text>
        <Text variant="subheading">based in <span className="b">irvine</span>, CA</Text>
      </TextContainer>
    </HomeContainer>
  );
};

export default HomePage;
