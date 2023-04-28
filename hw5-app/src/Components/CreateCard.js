import React, { useState } from 'react';
import  styled from 'styled-components';
import visaFace from '../Images/Visa_face.jpg';
import visaBack from '../Images/Visa_back.jpg';
import mastercardBack from '../Images/Mastercard_back.jpg';
import mastercardFace from '../Images/Mastercard_face.jpg';
import visa from '../Images/LogoVisa.png';
import mastercard  from '../Images/Mastercard.png';
import { CardOptions } from './CardOptions';


const CardWrapper = styled.div`
    margin-bottom: 170px; 
    position: ${props => props.forForm ? 'absolute' : 'static'}
`;


const Sides = styled.div`
    position: absolute;
    width: 540px;
    height: 340px;
    left: 0;
    top: 0;
    display: flex;
    justify-content: center;
    align-items: center;
    backface-visibility: hidden;
    border-radius: 10px;
    perspective: 800px;
`;

const Front = styled(Sides)`
    transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "none")};
    transition: transform 0.6s ease-out;
`;

const Back = styled(Sides)`
    transform: ${({ isFlipped }) => (isFlipped ? "rotateY(180deg)" : "none")};
    transition: transform 0.6s ease-out;
`;

const CardContainer = styled.div`
    position: relative;
    width: 540px;
    height: 250px;
    box-sizing: border-box;
    border-radius: 20px;
    overflow: hidden;
`;

const CardImage = styled.img`
    width: ${props => props.visa ? '120%' : '270%'};
    height: 150%;
    object-fit: cover;
    border-radius: 48.6px;
    position: absolute;
    top: 25px;
    left: ${props => props.back ? '25px' : '20px'};
`;

const Card = styled.div`
    width: 354px;
    height: 300px;
    border-radius: 48.6px;
    text-align: center;
`;  
const Wrapper = styled.div`
    width:450px;
    height: 300px;
    position: relative;
    perspective: 1000px;
`

const DataWrapper = styled.div`
    width: 450px;
    height: 80px;
    position: absolute;
    margin: 0 auto;
    top: 70%;
    left: 20%;
    z-index: 3;
`;

const CardNumber = styled.div`
    display: block;
    text-align: center;
    color: white;
    font-size: 16px;
    transform: translateY(-50%);
`; 

const WrapperContent = styled.div`
    display: flex;
    width: 240px;
    justify-content: space-between;
    align-item: center;
`;

 const FullName = styled.h3`
    color: white;
    font-size: 12px;
    letter-spacing: 1.2px;
    
`; 
 
const Logo = styled.div`
    width: 50px;
    height: 45px;
    
`; 

const LogoIcon = styled.img`
    width: 55px;
    height: 45px;
`;

const BackWrapped = styled.div`
    position: absolute;
    width: 250px;
    height: 50px;
    padding: 0 20px;
    box-sizing: border-box;
    display: flex;
    justify-content: space-between;
    top: 70%;
    left: 40%;
`;

const DataValid = styled.p`
    font-size: 16px;
    color: white;
    text-align: left;
`;

 const Cvv = styled.p`
    font-size: 16px;
    color: white;
    text-align: right; 
`; 

const StatWrapper = styled.div`
    width: 380px;
    margin: 0 auto;  
    position: relative; 
`;

const StatData = styled.div`
    width: 410px;
    height: 200px;
    background: #232343;
    border-radius: 30px;
    position: absolute;
`;

const StatsList = styled.div`
    width: 410px;
    height: 500px;
    background: white;
    position: absolute;
    top: 193px;
    left:3px;
    z-index: 100;
    
`;

const Title = styled.p`
    font-family: 'Abel';
    font-style: normal;
    font-weight: 500;
    font-size: 22px;
    letter-spacing: 2.4px;
    color: #000000;
    text-align: center;
`;

const StatsContext = styled.p`
    text-align: center;
    font-family: 'Abel';
    font-style: normal;
    font-size: 10px;
    letter-spacing: 1.4px;
    color: #000000;
`; 

    export const CreateCardFace = ({numberCard,  fullName, logo, handleFlip, handleClick, showOptions, handleEyeOpen, eyeOpen, hiddenNumber, handleStatsClick}) => {

        const cardType = logo;
       
        return(
            <CardWrapper onClick={handleClick} >
                <Front>
                <CardContainer >
                    <Card cardType={cardType}>
                    <CardImage style={{width: `${cardType === 'visa' ? '120%' : '130%'}`}} src={cardType === 'visa' ? visaFace : mastercardFace} />
                    </Card>   
                    <DataWrapper>
                        <CardNumber>{eyeOpen ? numberCard : hiddenNumber}</CardNumber>
                        <WrapperContent style={{marginLeft: `${cardType === 'visa' ? '95px' : '140px'}`}}>
                            <FullName>{fullName}</FullName>
                            <Logo>
                                <LogoIcon src={logo === 'visa' ? visa : mastercard} style={{width: `${cardType=== 'visa' ? '100%' : '60%'}`, height: `${cardType=== 'visa' ? '100%' : '50%'}`}}></LogoIcon>
                            </Logo>
                        </WrapperContent>
                    </DataWrapper>
                    {showOptions && <CardOptions handleEyeOpen={handleEyeOpen} eyeOpen={eyeOpen} handleFlip={handleFlip} cardType={cardType} handleStatsClick={handleStatsClick}/>} 
                </CardContainer>
                </Front>
            </CardWrapper>   
            
        )
    };

   
    const CreditCardBack = ({dataValid, cvv, showOptions, handleFlip, logo, handleEyeOpen, eyeOpen}) => {
        const cardType = logo;
        return(
            <CardWrapper>
                <Back>
                <CardContainer>
                    <Card>
                    <CardImage back style={{width: `${cardType === 'visa' ? '118%' : '127%'}`}} src={cardType === 'visa' ? visaBack : mastercardBack} />
                    </Card>
                    <BackWrapped>
                        <DataValid>{dataValid}</DataValid>
                        <Cvv>{cvv}</Cvv>
                    </BackWrapped>  
                    {showOptions && <CardOptions handleEyeOpen={handleEyeOpen} eyeOpen={eyeOpen} handleFlip={handleFlip} cardType={cardType}/>}
                </CardContainer>
                
                </Back>   
            </CardWrapper>
           
        )
    }; 

    const Statistics = (dataStatistic, logo) => {
        return(
            <StatWrapper>
                <StatData style={{top: `${logo === 'visa' ? '120px' : '95px'}`, left: `${visa === 'visa' ? '140px' : '85px'}`}}>
                    <StatsList>
                        <Title>Card stats</Title>
                        {dataStatistic.dataStatistic.map((item) => (
                        <StatsContext key={item.id}>{item.date}----{item.place}----{item.expense} {item.currency}</StatsContext>
                        ))}
                    </StatsList>
                </StatData>
                
            </StatWrapper>
        )
    }  

    export const MyCard = ({id, numberCard,  fullName, logo,  dataValid, cvv, dataStatistic}) => {

        const [isFlipped, setIsFlipped] = useState(true);
        const [showOptions, setShowOptions] = useState(false);
        const [eyeOpen, setEyeOpen] = useState(false);
        const [statClicked, setStatClicked] = useState(false);

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
                        console.log(groups)
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
        <Wrapper onClick={handleClick}>
            {isFlipped && 
            <CreateCardFace 
                numberCard={updateCardNumber}
                fullName={fullName}
                logo={logo}
                handleFlip={handleFlip}
                isFlipped={isFlipped}
                showOptions={showOptions}
                handleEyeOpen={handleEyeOpen}
                eyeOpen={eyeOpen}
                hiddenNumber={hiddenNumber}
                handleStatsClick={handleStatsClick}
            />
            }
            {!isFlipped && 
            <CreditCardBack 
              dataValid={dataValid} 
              cvv={cvv} 
              logo={logo} 
              showOptions={showOptions}
              handleClick={handleClick}
              handleFlip={handleFlip}
              isFlipped={isFlipped}
              handleEyeOpen={handleEyeOpen}
              eyeOpen={eyeOpen}
            /> 
            }
            {statClicked &&
            <Statistics 
            logo={logo} 
            dataStatistic={dataStatistic}
            />
            }
            
        </Wrapper>     
            
        )
    }

   