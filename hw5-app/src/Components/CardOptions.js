import React, { useState, useRef } from 'react';
import  styled from 'styled-components';
import EyeOpen from '../Images/eye-open.png';
import EyeClose from '../Images/eye-closed.png';
import Statistic from '../Images/statistic.png';
import Flip from '../Images/flip.png';

const WrapperOptions = styled.div`
    display: flex;
    justify-content: space-between;
    box-sizing: border-box;
    height: 45px;
    padding: 10px 5px 3px 5px;
    background: #9A99B4;
    border-radius: 0 0 20px 20px;
    position: fixed;

`;

const OptionsButton = styled.button`
    width: 110px;
    height: 25px;
    border: 1px solid #DFF0F0;
    border-radius: 8px;
    box-sizing: border-box;
    margin-right: 2px;
`;

const OptionsImg = styled.img`
    width: 26px;
    height: 20px;
`;

export const CardOptions = ({handleEyeOpen, eyeOpen, handleFlip, cardType, handleStatsClick}) => {
  
    const handleWrapperClick = (event) => {
        event.stopPropagation(); 
      };

    return(
    <WrapperOptions onClick={handleWrapperClick} style={cardType === 'visa' ? {top: '293px', left: '153px', width: '312px'} : {top: '289px', left: '220px', width: '300px'}}>
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
