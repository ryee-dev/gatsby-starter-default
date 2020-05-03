import React from 'react';
import styled from 'styled-components';
import { Flex, Text } from 'theme-ui';

const HomeContainer = styled(Flex)`
  position: absolute;
  z-index: 1;
  width: 100%;
  height: 100%;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;

  .b {
    font-weight: 400;
  }
`;

const SubHeadingContainer = styled(Flex)`
  align-items: center;
  justify-content: space-evenly;
`;

const HomePage = () => {
  return (
    <HomeContainer>
      <Text
        mb={['-1rem']}
        variant="heading"
      >
        roger yee
      </Text>
      <SubHeadingContainer px={[3, 4]}>
        <Text variant="subheading"><span className="b">front end</span> developer</Text>
        <Text variant="subheading" className="b" px={[3]} >|</Text>
        <Text variant="subheading"><span className="b">ui</span> engineer</Text>
        <Text variant="subheading" className="b" px={[3]}>|</Text>
        <Text variant="subheading">based in <span className="b">irvine, ca</span></Text>
      </SubHeadingContainer>
    </HomeContainer>
  );
};

export default HomePage;
