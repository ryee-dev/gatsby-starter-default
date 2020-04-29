import React from 'react';
// import styled from 'styled-components';
// import { Image, Box } from 'rebass';

import Layout from '../components/Layout';
import BgEffects from '../components/bgEffects';
import HomePage from './Home';

const IndexPage = () => {
  return (
    <Layout>
      <BgEffects />
      <HomePage />
    </Layout>
  );
};

export default IndexPage;
