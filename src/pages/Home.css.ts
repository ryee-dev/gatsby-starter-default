import styled from 'styled-components';
import { motion } from 'framer-motion';
import { Flex } from 'theme-ui';
import { Paper } from '../assets';

export const HomeContainer = styled(motion.div)`
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

export const NameContainer = styled(Flex)`
  align-items: flex-start;
  justify-content: space-evenly;
  flex-direction: column;
  
  .subheading {
    align-items: center;
    justify-content: flex-start;
  }
`;
