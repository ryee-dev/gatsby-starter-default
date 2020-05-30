import React from 'react';
import styled from 'styled-components';
import { Flex, Text } from 'theme-ui';
import { motion } from 'framer-motion';
import { Paper } from '../assets';


import BgEffects from '../components/bgEffects';

const HomeContainer = styled(motion.div)`
  position: relative;
  z-index: 1;
  width: 100%;
  height: 100vh;
  display: flex;
  align-items: flex-start;
  justify-content: center;
  flex-direction: column;
  box-sizing: border-box;
  overflow: hidden;
  background-image: url(${Paper});
  background-position: center;
  background-size: cover;
  .b {
    font-weight: 400;
  }
`;

const NameContainer = styled(Flex)`
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  
  .subheading {
    align-items: center;
    justify-content: flex-start;
  }
`;

interface HomeProps {
  fadeOut?: number;
}

const Home = (props: HomeProps) => {
  const { fadeOut } = props;
  console.log(fadeOut);
  return (
    <HomeContainer style={{ opacity: (fadeOut) }}>
      <BgEffects />
      <NameContainer ml={['16px', '20px', 4]}>
        <Text
          ml={['-4px', null]}
          mb={['-0.5rem', '-1rem']}
          variant="heading"
        >
          roger yee
        </Text>
        <Flex className="subheading">
          <Text variant="subheading"><span className="b">front end</span> developer</Text>
          <Text variant="subheading" className="b" px={[2, 3]} >|</Text>
          <Text variant="subheading"><span className="b">ui</span> engineer</Text>
          <Text variant="subheading" className="b" px={[2, 3]}>|</Text>
          <Text variant="subheading">based in <span className="b">irvine, ca</span></Text>
        </Flex>
      </NameContainer>
    </HomeContainer>
  );
};

export default Home;
