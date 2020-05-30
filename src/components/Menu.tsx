import React from 'react';
import { motion } from 'framer-motion';
import { Flex, Image } from 'theme-ui';
import styled from 'styled-components';
import { Close } from '../assets';

interface MenuProps {
  menuOpacity: number;
  // eslint-disable-next-line @typescript-eslint/ban-types
  setMenu: Function;
}

const MenuWrapper = styled(motion.div)`
  position: absolute;
  top: 0;
  left: 0;
  width: 100%;
  height: 100%;
  max-height: 100vh;
  background-color: white;
  align-items: flex-end;
  justify-content: center;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 3;
`;

const Menu = (props: MenuProps) => {
  const { setMenu, menuOpacity } = props;

  return (
    <MenuWrapper animate style={{ opacity: menuOpacity }}>
      <Image src={Close} alt="close-button" m={[3, null, 4]} p={[2]} sx={{ position: 'absolute', left: 0, top: 0, cursor: 'pointer' }} onClick={() => setMenu(false)} />
      <Flex>
      </Flex>
    </MenuWrapper>
  );
};

export default Menu;
