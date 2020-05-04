import React from 'react';
import { Flex, Image } from 'theme-ui';
import { Close } from '../assets';

interface MenuProps {
  setMenu: Function;
}

const Menu = (props: MenuProps) => {
  const { setMenu } = props;

  return (
    <Flex sx={{
      position: 'absolute',
      top: 0,
      left: 0,
      width: '100%',
      height: '100%',
      maxHeight: '100vh',
      backgroundColor: 'white',
      alignItems: 'flex-end',
      justifyContent: 'center',
      boxSizing: 'border-box',
      overflow: 'hidden',
      zIndex: 3,
    }}>
      <Image src={Close} alt="close-button" m={[4]} sx={{ position: 'absolute', left: 0, top: 0, cursor: 'pointer' }} onClick={() => setMenu(false)} />
      <Flex>
        {/* <Text></Text> */}
      </Flex>
    </Flex>
  );
};

export default Menu;
