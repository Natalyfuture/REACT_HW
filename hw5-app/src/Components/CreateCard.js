import React, { useState, useRef, useEffect } from 'react';
import  styled from 'styled-components';

import visaFace from '../Images/VISA FRONT SIDE.png';
import visaBack from '../Images/Mastercard.png';
import mastercardBack from '../Images/MC BACK SIDE.png';
import mastercardFace from '../Images/MC FRONT SIDE.png';
import visa from '../Images/LogoVisa.png';
import mastercard  from '../Images/Mastercard.png';
import { CardOptions } from './CardOptions';


const CardWrapper = styled.div`
    margin: 170px;
`;

const Sides = styled.div`
    position: relative;
    width: 540px;
    height: 340px;
    display: flex;
    justify-content: center;
    backface-visibility: hidden;
    align-items: center;
    border-radius: 10px;
    perspective: 1200;
    transition: transform 1.2s ease-out;
`;

const Front = styled(Sides)`
    position: absolute;
    left: 0;
    top: 0;
    transform: ${props => props.isFlipped ? 'rotateY(0deg)' : 'rotateY(180deg)'};
    
`;

const Back = styled(Sides)`
    position: absolute;
    left: 0;
    top: 0;
    transform: ${props => props.isFlipped ? 'rotateY(180deg)' : 'rotateY(0deg)'};
`;

const CardContainer = styled.div`
    width: 534px;
    height: 334px;
    box-sizing: border-box;
    border-radius: 48px;
`;

const CardImage = styled.img`
    width: 100%;
    height: 100%;
    object-fit: cover;
    border-radius: 48.6px;
`;

const Card = styled.div`
    width: 534px;
    height: 334px;
    border-radius: 48.6px;
    text-align: center;
    margin-bottom: 200px;
`;  
const Wrapper = styled.div`
    position: relative;
    width: 540px;
    height: fit-content;
    margin-bottom: 200px;
`;

const DataWrapper = styled.div`
    width: 500px;
    height: 80px;
    position: absolute;
    margin: 0 auto;
    top: 50%;
    left: 15%;
`;

const CardNumber = styled.div`
    display: block;
    text-align: left;
    color: white;
    font-size: 32px;
    transform: translateY(-50%);
`; 

const WrapperContent = styled.div`
    display: flex;
    width: 400px;
    justify-content: space-between;
    align-item: center;
`;

 const FullName = styled.h3`
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    letter-spacing: 2.4px;
    color: white;
`; 
 
const Logo = styled.div`
    margin-top: 15px;
    width: 76px;
    height: 60px;
    
`; 

const LogoIcon = styled.img`
    width: 100%;
    height: 100%;
`;

const BackWrapped = styled.div`
    position: absolute;
    width: 400px;
    height: 50px;
    padding: 0 56px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    bottom: 70px;
    left: 57px; 
`;

const DataValid = styled.p`
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: 4.17391px;
    color: white;
`;

 const Cvv = styled.p`
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: 4.17391px; 
    color: white;
`; 

const StatWrapper = styled.div`
    width: 525px;
    margin: 0 auto; 
    position: absolute;
    top: 410px;
    left: 7px;
    transition: height 1s ease;
`;

const StatsList = styled.div`
    width: 525px;
    height: fit-content;
    padding: 50px 25px 20px 25px;
    box-sizing: border-box;
    background: white;
    border-radius: 30px;
   
`;

const Title = styled.p`
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 61px;
    letter-spacing: 2.4px;
    color: #000000;
    text-align: center;
`;

const StatsContext = styled.p`
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    letter-spacing: 2.4px;
    color: #000000;
`; 

    export const CreateCardFace = ({numberCard,  fullName, logo: cardType, handleFlip, handleClick, showOptions, handleEyeOpen, eyeOpen, hiddenNumber, handleStatsClick}) => {

        return(
            <CardWrapper onClick={handleClick} >
                <CardContainer >
                    <Card cardType={cardType}>
                    <CardImage src={cardType === 'visa' ? visaFace : mastercardFace} />
                    </Card>   
                    <DataWrapper>
                        <CardNumber>{eyeOpen ? numberCard : hiddenNumber}</CardNumber>
                        <WrapperContent>
                            <FullName>{fullName}</FullName>
                            <Logo>
                                <LogoIcon src={cardType === 'visa' ? visa : mastercard} style={{width: `${cardType=== 'visa' ? '100%' : '60%'}`, height: `${cardType=== 'visa' ? '100%' : '50%'}`}}></LogoIcon>
                            </Logo>
                        </WrapperContent>
                    </DataWrapper>
                    {showOptions && <CardOptions handleEyeOpen={handleEyeOpen} eyeOpen={eyeOpen} handleFlip={handleFlip} cardType={cardType} handleStatsClick={handleStatsClick}/>} 
                </CardContainer>
            </CardWrapper>   
            
        )
    };

    const CreditCardBack = ({dataValid, cvv, showOptions, handleFlip,  cardType, handleEyeOpen, eyeOpen}) => {
        return(
            <CardWrapper>
                <CardContainer>
                    <Card>
                    <CardImage src={cardType === 'visa' ? visaBack : mastercardBack} />
                    </Card>
                    <BackWrapped>
                        <DataValid>{dataValid}</DataValid>
                        <Cvv>{cvv}</Cvv>
                    </BackWrapped>  
                    {showOptions && <CardOptions handleEyeOpen={handleEyeOpen} eyeOpen={eyeOpen} handleFlip={handleFlip} cardType={cardType}/>}
                </CardContainer>   
            </CardWrapper>
           
        )
    }; 

    const Statistics = ({dataStatistic, statRef}) => {
        return(
            <StatWrapper ref={statRef}>
                    <StatsList>
                        <Title>Card stats</Title>
                        {dataStatistic.dataStatistic.map((item) => (
                        <StatsContext key={item.id}  >{item.date}----{item.place}----{item.expense} {item.currency}</StatsContext>
                        ))}
                    </StatsList>
            </StatWrapper>
        )
    }  

    export const MyCard = ({id, numberCard,  fullName, logo,  dataValid, cvv, dataStatistic}) => {

        const [isFlipped, setIsFlipped] = useState(true);
        const [showOptions, setShowOptions] = useState(false);
        const [eyeOpen, setEyeOpen] = useState(false);
        const [statClicked, setStatClicked] = useState(false);
        const [contentHeight, setContentHeight] = useState(0);
        const statRef = useRef(null);

        
        useEffect(() => {
            if (statRef.current) {
            setContentHeight(statRef.current.offsetHeight); 
            }
        }, [statClicked]);

        const handleCardNumber = (numberCard) => {
            const groups = [];
            for(let i = 0; i < numberCard.length; i = i + 4){
                groups.push(numberCard.slice(i, i + 4));
            }
                return groups.join(' ');
                
        }

        const updateCardNumber= handleCardNumber(numberCard)

        const maskCreditNumber = (numberCard) => {
            const MASK = '****';
            const groups = [];
                for (let j = 1; j < 4; j++) {
                        groups.push(MASK);
                        continue;
                }
                      const group = numberCard.slice(-4);
                      groups.push(group);
                 
                const res = groups.join(' ');
                return res;
            
        }
       
        const hiddenNumber = maskCreditNumber(numberCard)

            const handleFlip = () => {
                setIsFlipped(!isFlipped);
            };
            
            const handleClick = () => {
                setShowOptions(prevShowOptions => !prevShowOptions);
            }

            const handleEyeOpen = () => {
                    setEyeOpen(!eyeOpen);
            }

            const handleStatsClick = () => {
                setStatClicked(prev => !prev)
            }

        return (
        <Wrapper key={id}  style={{ marginBottom: statClicked ? `${contentHeight + 80}px`: '200px' }}>
            <Sides onClick={handleClick}>
                <Front  isFlipped={isFlipped}>
                    <CreateCardFace numberCard={updateCardNumber}
                        fullName={fullName}
                        logo={logo}
                        hiddenNumber={hiddenNumber}
                        showOptions={showOptions}
                        dataStatistic={dataStatistic}
                        handleFlip={handleFlip}
                        isFlipped={isFlipped}
                        handleEyeOpen={handleEyeOpen}
                        eyeOpen={eyeOpen}
                        handleStatsClick={handleStatsClick}
                    />
                </Front>
                <Back  isFlipped={isFlipped}>
                    <CreditCardBack 
                        dataValid={dataValid} 
                        cvv={cvv} 
                        logo={logo} 
                        showOptions={showOptions}
                        handleClick={handleClick}
                        handleEyeOpen={handleEyeOpen}
                        eyeOpen={eyeOpen}
                        dataStatistic={dataStatistic}
                        handleFlip={handleFlip}
                    /> 
                </Back>
            </Sides>  
            {statClicked && 
                     <Statistics 
                     statRef={statRef}
                    dataStatistic={{dataStatistic}}
                    />  
                
            }
        </Wrapper>      
        )
    }

   