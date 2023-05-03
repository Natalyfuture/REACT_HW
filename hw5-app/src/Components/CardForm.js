import React, { useState, useEffect , useRef} from 'react';
import  styled from 'styled-components';
import visaFace from '../Images/VISA FRONT SIDE.png';
import mastercardFace from '../Images/MC FRONT SIDE.png';
import visa from '../Images/LogoVisa.png';
import mastercard  from '../Images/Mastercard.png';
import { useNavigate } from 'react-router-dom';
import { YourCards } from './YourCards';

const Container = styled.div`
    margin: 0 auto;
    width: 667px;
    display: block;
    padding: 60px 80px 111px 80px;
    position: relative;
    
`;

const Title = styled.h1`
    text-align: left;
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 48px;
    line-height: 61px;
    letter-spacing: 4.17391px;
    color: #000000;
    margin-bottom: 350px;
   
`;

const ContainerNewCard= styled.div`
    width: 540px;
    height: 300px;
    background: #D6AECC;
    border-radius: 48px;
    position: absolute;
    top: 160px;
    left: 80px;
    
`;

const DopWrapper = styled.div`
  position: absolute;
  top: -130px;
  left: -95px; 
`;

const DataWrapperNewCard = styled.div`
    width: 540px;
    height: 300px;
    position:absolute;
    box-sizing: border-box;
    top:0;
    left:0;
    z-index: 115;
`;

const NewCardNumber = styled.span`
    display: block;
    text-align: left;
    color: white;
    font-size: 32px;
    transform: translateY(-50%);
    margin: 145px 100px 0 57px;
   
`;

const FormContainer = styled.form`
    width: 514px;
    z-index: 120;
`;

const WrapperInputNumber = styled.div`
`;

const WrapperContentNewCard = styled.div`
    display: flex;
    width: 340px;
    justify-content: space-between;
    align-item: center;
    position : absolute;
    top: 130px;
    
`;

const FullNameNewCard = styled.h3`
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 24px;
    line-height: 31px;
    letter-spacing: 2.4px;
    color: white;
    margin-top: 80px; 
`;

const LogoNewCard = styled.div`
    width: 76px;
    height: 60px;
    margin-top: 70px;
    
`;

const LogoIconNewCard = styled.img`
    width: 100%;
    height: 100%;
    
`;

const ErrorNumber = styled.span`
    color: #f00;
    font-size: 20px;
    position: absolute;
    bottom: 760px;
    left: 80px;
`;

const ErrorCvv = styled.span`
  color: #f00;
  font-size: 20px;
  position: absolute;
  bottom: 580px;
  left: 80px;
`;

const Label = styled.label`
    font-family: 'Abel';
    font-style: normal;
    font-weight: 400;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: 4.17391px;
    text-align: left;
    display: block;

    color: #010000;
`;

const Input = styled.input`
    width: 514px;
    height: 76px;
    background-color:  #E7D7EF;
    border-radius: 25px;
    margin-bottom: 61px;
    font-size: 22px;
    padding-left: 25px; 
`;

const FormSubmitted = styled.div`
`;
const TextFormSubmitted = styled.p`
    font-size: 36px;
`;

const Button = styled.button`
    width: 514px;
    height: 76px;
    left: 79px;
    top: 1183px;
    font-size: 30px;
    line-height: 38px;
    letter-spacing: 4.17391px;
    color: #FFFFFF;
    background: #AA24E9;
    border-radius: 25px;
`;

const BackgroundCard = styled.img`
  width: 200%;
  height: 170%
  object-fit: cover;
  position: absolute;
  top: -220px;
  left: -213px;
  z-index: -2;
`;

const BackgroundWrapper = styled.div`
  width: 540px;
  height: 300px;
  border-radius: 48px;
  overflow: hidden;
  position: relative;
  z=_index: -2;
  `;

export const CardForm = ({ newCard, setNewCard, addNewCard}) => {
 
      const [numberCard, setNumberCard] = useState('');
      const [cvv, setCvv] = useState('');
      const [fullName, setFullName] = useState('');
      const [logo, setLogo] = useState('');
      const [isNumberCardValid, setIsNumberCardValid] = useState(false);
      const [isCvvValid, setIsCvvValid] = useState(false)
      const [errors, setErrors] = useState({});
      const [isSubmitted, setIsSubmitted] = useState(false);
      
 
      const navigate = useNavigate();

      const formData = {
          fullName,
          numberCard,  
          cvv,
          logo,
        };

        const creatingNewCardData = (formData) => {
          const currentData = new Date().toLocaleDateString()
          
          const newCardData = {
                  id: 1,
                 card: {
                     numbers: formData.numberCard,
                     type: formData.logo,
                     expiry_date: currentData,
                     cvv: formData.cvv
                     },
                 statistic: Array(0),
         
        }
        return newCardData
        };

      const handleSubmit = (event) => {
        event.preventDefault();

        const data = creatingNewCardData(formData);
        newCard = {
          user_id: 1,
          user_name: formData.fullName,
          data: [data],
          id: 123,
        };

          if(currentValidForm){
            addNewCard(newCard);
            
              return fetch('https://my.api.mockaroo.com/cards/123.json?key=778301b0', {
                method: 'POST',
                body: JSON.stringify(newCard),
                headers: {
                  'Content-Type': 'application/json',
                },
              })
              .then((response) => {
                console.log("response:", response);
                
                if (!response.ok) {
                  throw new Error('Network response was not ok');
                }
                return response.json(); 
              })
              .catch((error) => {
                console.error('Error in first then block:', error);
              })
              .then((data) => {
                navigate('/');
                setIsSubmitted(true);
                setNumberCard('');
                setCvv('');
                setFullName('');
                setLogo('');
              })
              .catch((error) => {
                console.error('Error:', error);
              });
             
          }    
      };

      const handleValidForm = (isNumberCardValid, isCvvValid, fullName, logo) => {
        return(
          isNumberCardValid &&
          isCvvValid &&
          isFullNameValid(fullName) &&
          isLogoValid(logo)
        );
      }

      useEffect(() => {
       const regex = /^\d(?:\d{11}|\d{15})$/
      
       if (regex.test(numberCard)) {
         setErrors({});
         setIsNumberCardValid(true);
       } else {
         setErrors({number: 'Enter valid number'});
       }
      }, [numberCard]);

      useEffect(() => {
        const regexCvv = /^\d(?:\d{2})$/
        if(regexCvv.test(cvv)){
          setErrors({});
          setIsCvvValid(true);
         } else {
          setErrors({cvv: 'Enter valid cvv'});
         }
      }, [cvv])

      const handleCardNumber = (numberCard) => {
        const groups = [];
        for(let i = 0; i < numberCard.length; i = i + 4){
            groups.push(numberCard.slice(i, i + 4));
        }
            return groups.join(' ');
            
    }
       
      const handleInputNumberCard = (event) => {
        const inputNumber = event.target.value;
        setNumberCard(inputNumber); 
       
      };

     const currentInputCardNumber = handleCardNumber(numberCard)

      const handleInputCvv = (event) => {
        const inputCvv = event.target.value;
          setCvv(inputCvv);
      };

      const capitalizeWords = (str) => {
        return str.toLowerCase().replace(/(^|\s)\S/g, (letter) => {
          return letter.toUpperCase();
        });
      };

      const handleFullName = (event) => {
        const inputFullName = event.target.value;
        const capitalizedFullName = capitalizeWords(inputFullName);
        setFullName(capitalizedFullName);
        
      };
      const isFullNameValid = (capitalizedFullName) => {
        return capitalizedFullName.trim() !== '';
      };

      const handleLogo = (event) => {
        const inputLogo = event.target.value.trim();
        setLogo(inputLogo);
      }
      const isLogoValid = (logo) => {
        return logo === 'visa' || logo === 'mastercard';
      };

      const currentValidForm = handleValidForm(isNumberCardValid, cvv, fullName, logo)

      const cardType = logo;

    return(
        <Container>
            <Title>Create a new card</Title>
            <ContainerNewCard>
                <DataWrapperNewCard>
                    <NewCardNumber>{ currentInputCardNumber }</NewCardNumber>
                    <WrapperContentNewCard style={{marginLeft: `${cardType === 'visa' ? '95px' : '140px'}`}}>
                        <FullNameNewCard>{formData.fullName}</FullNameNewCard>
                        <LogoNewCard>
                            {cardType &&  (
                            <>
                              <DopWrapper style={{top: `${cardType === 'visa' ? "-130px" : "-130px"}`, left: `${cardType=== 'visa' ? "-95px" : "-140px"}`}}>
                                <BackgroundWrapper>
                                    <BackgroundCard 
                                    src={cardType === 'visa' && currentValidForm ? visaFace : mastercardFace}
                                    style={{top: `${cardType === 'visa' ? "-220px" : "-195px"}`, left: `${cardType=== 'visa' ? "-213px" : "-305px"}`}}
                                    ></BackgroundCard>
                                  </BackgroundWrapper>
                              </DopWrapper>
                                <LogoIconNewCard  
                                    src={cardType === 'visa' ? visa : mastercard} 
                                    style={{width: `${cardType=== 'visa' ? '100%' : '60%'}`, height: `${cardType=== 'visa' ? '100%' : '50%'}`}}>   
                                </LogoIconNewCard> 
                            </>)
                            }    
                        </LogoNewCard>
                    </WrapperContentNewCard>
                </DataWrapperNewCard>
                </ContainerNewCard>
                <FormContainer onSubmit={handleSubmit}>
                    <WrapperInputNumber>
                        <Label>Card number
                            <Input type="text" value={numberCard} onChange={handleInputNumberCard} required maxLength="16" />
                        </Label>
                        {numberCard !=='' && !isNumberCardValid && (
                        <ErrorNumber key={'error-number'} >{errors.number}</ErrorNumber>
                        )}
                    </WrapperInputNumber>
                    <Label>CVV
                        <Input type="text"  value={cvv} onChange={handleInputCvv} required maxLength="3" />
                    </Label>
                          {cvv !=='' && !isCvvValid && (
                            <ErrorCvv key={'error-cvv'} >{errors.cvv}</ErrorCvv>
                          )}
                    <Label >Your fullname
                        <Input type="text" value={fullName} onChange={handleFullName} required />
                    </Label>
                    <Label >VISA or MASTERCARD
                        <Input type="text" value={logo} onChange={handleLogo} required />
                    </Label>
                    <Button type={'submit'} disabled={!handleValidForm}>Add card</Button>
            </FormContainer>
        </Container>
    )
}