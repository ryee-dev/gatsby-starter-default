import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Box, Image } from 'theme-ui';

import Layout from '../components/Layout';
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

  useEffect(() => {
    if (menu) {
      setMenu(false);
    }
  }, []);

  return (
    <Layout>
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


      {menu ? <Menu setMenu={setMenu} />
        : <Box>
          <Home />
          <About />
          <Work />
        </Box>
      }
    </Layout>
  );
};

export default IndexPage;
