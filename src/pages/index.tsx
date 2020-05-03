import React, { useEffect, useState } from 'react';
import styled from 'styled-components';
import { Image } from 'theme-ui';

import Layout from '../components/Layout';
import BgEffects from '../components/bgEffects';
import HomePage from './Home';
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
      <HamburgerMenu src={Hamburger} alt="menu" m={[4]} sx={{
        position: 'absolute', top: 0, left: 0, zIndex: 2, cursor: 'pointer',
      }}
      onClick={() => setMenu(true)}
      />

      <BgEffects />
      <HomePage />

      {menu && <Menu setMenu={setMenu} />
      }
    </Layout>
  );
};

export default IndexPage;
