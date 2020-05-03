import React from 'react';
import styled from 'styled-components';
import { Box, Image } from 'theme-ui';
import { Branch, Paper, Petals1 } from '../../assets';


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

  &.branch {
    width: 70%;
    transform: rotate(3deg);
  }
  
  &.petals {
    width: auto;
  }
  
`;


const BgEffects = () => {
  return (
    <BgWrapper>
      <BgLayer
        className="branch"
        src={Branch}
        alt="branch"
        sx={{
          maxWidth: ['1000px'],
          top: ['18vw', null, '10%', 0],
          right: [null, -2, null],
          left: ['-12vw', null, 'auto'],
          transform: ['rotate(-90deg)', null, 'rotate(0deg) !important'],
        }}
      />
      <BgLayer
        className="petals"
        src={Petals1}
        sx={{ bottom: [0], right: [0] }}
      />
    </BgWrapper>
  );
};

export default BgEffects;
