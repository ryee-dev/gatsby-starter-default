import React from 'react';
import { Flex, Text } from 'theme-ui';

const Work = () => {
  return (
    <Flex sx={{
      position: 'relative',
      width: '100%',
      height: '100vh',
      backgroundColor: '#a0ffe6',
      alignItems: 'center',
      justifyContent: 'center',
      zIndex: 1,
      boxSizing: 'border-box',
      overflow: 'hidden',
    }}>
      <Flex>
        <Text variant="title">work</Text>
      </Flex>
    </Flex>
  );
};

export default Work;
