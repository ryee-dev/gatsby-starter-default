import React from 'react';
import { Flex, Text } from 'theme-ui';

const About = () => {
  return (
    <Flex sx={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: 'white',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 3,
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>
      <Flex>
        <Text variant="title">about</Text>
      </Flex>
    </Flex>
  );
};

export default About;
