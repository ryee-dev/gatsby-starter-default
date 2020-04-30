import React from 'react';

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
