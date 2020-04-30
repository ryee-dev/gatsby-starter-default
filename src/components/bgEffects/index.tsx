import React from 'react';
import styled from 'styled-components';
import { Box, Image } from 'theme-ui';
import { Tree, Paper } from '../../assets';


const BgWrapper = styled(Box)`
  position: absolute;
  width: 100%;
  height: 100%;
  background-image: url(${Paper});
  background-position: center;
  background-size: cover;
  box-sizing: border-box;
  overflow: hidden;
  z-index: 0;
`;

const BgLayer = styled(Image)`
  position: absolute;
`;

const BgEffects = () => {
  return (
    <BgWrapper>
      <BgLayer
        className="tree"
        src={Tree}
        alt="tree"
        sx={{
          top: ['18vw', null, '10%', '5%'],
          right: [null, -2, null],
          left: ['-12vw', null, 'auto'],
          transform: ['rotate(-90deg)', null, 'rotate(0deg) !important'],
        }}
      />
    </BgWrapper>
  );
};

export default BgEffects;
