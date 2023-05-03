import React, { useState, useRef } from 'react';
import  styled from 'styled-components';
import EyeOpen from '../Images/eye-open.png';
import EyeClose from '../Images/eye-closed.png';
import Statistic from '../Images/statistic.svg';
import Flip from '../Images/flip.svg';

const WrapperOptions = styled.div`
    display: flex;
    width: 530px;
    height: 120px;
    justify-content: space-between;
    box-sizing: border-box;
    padding: 70px 5px 3px 5px;
    background: #9A99B4;
    border-radius: 0 0 20px 20px;
    position: absolute;
    bottom: -70px;
    left:5px;
    z-index: -1;

`;

const OptionsButton = styled.button`
    width: 160px;
    height: 40px;
    border: 1px solid #DFF0F0;
    border-radius: 8px;
    box-sizing: border-box;
    cursor: pointer;
`;

const OptionsImg = styled.img`
    width: 26px;
    height: 20px;
`;

export const CardOptions = ({handleEyeOpen, eyeOpen, handleFlip, handleStatsClick, isFlipped}) => {
  
    const handleWrapperClick = (event) => {
        event.stopPropagation(); 
      };

    return(
    <WrapperOptions onClick={handleWrapperClick} >
        <OptionsButton onClick={handleEyeOpen} eyeOpen={eyeOpen}>
            <OptionsImg src={eyeOpen ? EyeOpen : EyeClose} alt='eyeOpen ? eye-open : eye-close' />
        </OptionsButton>
        <OptionsButton onClick={handleStatsClick}>
            <OptionsImg src={Statistic} alt='statistic'/>
        </OptionsButton>
        <OptionsButton onClick={handleFlip}>
            <OptionsImg src={Flip} alt='Flip'/>
        </OptionsButton>
    </WrapperOptions>
    )
   
};
