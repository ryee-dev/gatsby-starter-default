import React from 'react';
import styled from 'styled-components';
import { Box, Image } from 'rebass';
import { Branch, Petals, Paper } from '../../assets';

const BgLayer = styled(Image)`
  position: absolute;
  height: 100%;
  max-height: 800px;
`;

const BgWrapper = styled(Box)`
  width: 100%;
  height: 100%;
  position: absolute;
  top: 0;
  left: 0;
  background-image: url(${Paper});
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 0;
`;

const BgEffects = () => {
  return (
    <BgWrapper>
      <BgLayer
        src={Branch}
        alt="branch"
        css={{ right: 0, top: 0 }}
      />
      <BgLayer
        src={Petals}
        alt="petals"
        css={{ bottom: 0 }}
      />
    </BgWrapper>
  );
};

export default BgEffects;
