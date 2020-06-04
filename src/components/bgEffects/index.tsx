import React from 'react';
import styled from 'styled-components';
import { Flex, Image } from 'theme-ui';
import { Branch, Petals1 } from '../../assets';


const BgWrapper = styled(Flex)`
  position: absolute;
  top: 0;
  right: 0;
  box-sizing: border-box;
  overflow: hidden;
  z-index: -1;
  align-items: flex-end;
  justify-content: flex-start;
  flex-direction: column;
`;

const BgLayer = styled(Image)`
  //position: absolute;
  max-width: 1461px;

  &.branch {
    width: 70%;
  }
  
  &.petals {
    //width: auto;
    
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
          marginTop: ['19%', 0],
          transform: ['rotate(-90deg) scaleY(1)', 'rotate(3deg)'],
        }}
      />
      <BgLayer
        className="petals"
        src={Petals1}
        mt={['38%', '20%', 2, 0]}
        mr={['-30%', '-40%', -3, 0]}
        sx={{ transform: ['rotate(-90deg)', 'rotate(-110deg)', 'rotate(-15deg)', 'rotate(0deg)'] }}
      />
    </BgWrapper>
  );
};

export default BgEffects;
