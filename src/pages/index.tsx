import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Image } from 'theme-ui';
// import { useViewportScroll } from 'framer-motion';

import { useTransform, useViewportScroll } from 'framer-motion';
// import Layout from '../components/Layout';s
// import Page from '../components/Page';
import Home from './Home';
import About from './About';
import Work from './Work';
import Menu from '../components/Menu';
import { Hamburger } from '../assets';

const HamburgerMenu = styled(Image)`
  cursor: pointer;
`;

const IndexPage = () => {
  const [menu, setMenu] = useState(false);
  const [fadeOut, setFadeOut] = useState(1);
  const [menuOpacity, setMenuOpacity] = useState(0);
  const { scrollY } = useViewportScroll();
  const y1 = useTransform(scrollY, [0, 966], [0, 100]);
  // const y2 = useTransform(scrollY, [966, 1934], [0, 100]);


  useEffect(() => {
    scrollY.onChange(() => {
      setFadeOut(1 - (y1.current.toFixed(2) * 0.01));
    });

    if (menu === true) {
      setMenuOpacity(0);
    } else if (menu === false) {
      setMenuOpacity(1);
    }
  }, [scrollY]);


  return (
    <>
      <HamburgerMenu
        src={Hamburger}
        alt="menu" m={[3, null, 4]} p={[2]}
        sx={{
          width: ['50px', '60px'],
          position: 'fixed',
          top: 0,
          left: 0,
          zIndex: 2,
          cursor: 'pointer',
        }}
        onClick={() => setMenu(true)}
      />


      {menu ? <Menu setMenu={setMenu} menuOpacity={menuOpacity} />
        : <Box backgroundColor="white">
          <Home fadeOut={fadeOut} />
          <About />
          <Work />
        </Box>
      }
    </>
  );
};

export default IndexPage;
