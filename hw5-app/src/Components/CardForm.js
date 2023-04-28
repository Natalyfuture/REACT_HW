import React, { useState, useEffect , useRef} from 'react';
import  styled from 'styled-components';
import visaFace from '../Images/Visa_face.jpg';
import mastercardFace from '../Images/Mastercard_face.jpg';
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

const NewCardCardNumber = styled.span`
    display: block;
    text-align: center;
    color: white;
    font-size: 25px;
    font-weight: 500;
    margin: 145px 100px 0 0px;
   
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
    color: white;
    font-size: 16px;
    letter-spacing: 1.2px;
    margin-top: 80px; 
`;

const LogoNewCard = styled.div`
    width: 70px;
    height: 55px;
    margin-top: 70px;
    
`;

const LogoIconNewCard = styled.img`
    width: 100%;
    height: 100%;
    
`;

const ErrorText = styled.span`
    color: #f00;
    font-size: 20px;
    position: absolute;
    bottom: 760px;
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

export const CardForm = ({}) => {
 

      const [numberCard, setNumberCard] = useState('');
      const [cvv, setCvv] = useState('');
      const [fullName, setFullName] = useState('');
      const [logo, setLogo] = useState('');
      const [isValid, setIsValid] = useState(true);
      const [errors, setErrors] = useState({});
      const [isSubmitted, setIsSubmitted] = useState(false);
      const [newCard, setNewCard] = useState([]);
      const [dataList, setDataList] = useState([]);
      const [isButtonDisabled, setIsButtonDisabled] = useState(false);
      
 
      const navigate = useNavigate();

      const formData = {
          fullName,
          numberCard,  
          cvv,
          logo,
        };

        
        const addCard = (formData) => {
          const newCardData = {
            numberCard: formData.numberCard,
            cvv: formData.cvv,
            logo: formData.logo,
          };
          return newCardData
        };
      
      useEffect(() =>{
        console.log(newCard)
       
      }, [newCard])
       
      
      const handleSubmit = (event) => {
        event.preventDefault();

        const newCardData = addCard(formData)
        setNewCard(prev => [
          ...prev,
          {
            user_id: 1,
            user_name: formData.fullName,
            data: [newCardData]
          }
        ])

          if(!numberCard || !cvv || !fullName || !logo) {
            setIsButtonDisabled(true);
          }

          if(!isButtonDisabled){
            console.log(111)
            console.log("newCard before fetch", newCard)
            
            
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
                console.log(data)
                const state = newCard
                console.log(data)
                navigate('/',  {state: state});
                console.log(222)
                setIsSubmitted(true);
                setNumberCard('');
                setCvv('');
                setFullName('');
                setLogo('');
                console.log(333)
              })
              .catch((error) => {
                console.error('Error:', error);
              });
             
          }    
        };
      
    
      useEffect(() => {
        const regex = /^\d(?:\d{11}|\d{15})$/
      
        if (regex.test(numberCard)) {
          setIsValid(true);
          setErrors({});
        } else {
          setIsValid(false);
          setErrors({number: 'Enter valid number'});
        }
      }, [numberCard]);
      
      const handleInputNumberCard = (event) => {
        const inputNumber = event.target.value;
          setNumberCard(inputNumber);
      };

      const handleInputCvv = (event) => {
        const inputCvv = event.target.value;
        setCvv(inputCvv);
      };

      const handleFullName = (event) => {
        const inputFullName = event.target.value;

        if (!inputFullName.trim()) {
          return;
        }
      
        setFullName(inputFullName);
      };
      
      const handleLogo = (event) => {
        const inputLogo = event.target.value;
        setLogo(inputLogo);
      };
      
      const cardType = logo;

    return(
        <Container>
            <Title>Create a new card</Title>
            <ContainerNewCard>
                <DataWrapperNewCard>
                    <NewCardCardNumber>{ formData.numberCard }</NewCardCardNumber>
                    <WrapperContentNewCard style={{marginLeft: `${cardType === 'visa' ? '95px' : '140px'}`}}>
                        <FullNameNewCard>{formData.fullName}</FullNameNewCard>
                        <LogoNewCard>
                            {cardType &&  (
                            <>
                              <DopWrapper style={{top: `${cardType === 'visa' ? "-130px" : "-130px"}`, left: `${cardType=== 'visa' ? "-95px" : "-140px"}`}}>
                                <BackgroundWrapper>
                                    <BackgroundCard 
                                    src={cardType === 'visa' ? visaFace : mastercardFace}
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
                            <Input type="text" value={numberCard} onChange={handleInputNumberCard} required maxLength="16" ></Input>
                        </Label>
                        {numberCard !=='' && !isValid && (
                        <ErrorText key={'error-text'} >{errors.number}</ErrorText>
                        )}
                    </WrapperInputNumber>
                    <Label>CVV
                        <Input type="text"  value={cvv} onChange={handleInputCvv} required maxLength="3"></Input>
                    </Label>

                    <Label >Your fullname
                        <Input type="text" value={fullName} onChange={handleFullName} required></Input>
                    </Label>
                    <Label >VISA or MASTERCARD
                        <Input type="text" value={logo} onChange={handleLogo} required></Input>
                    </Label>
                    <Button type={'submit'} disabled={isButtonDisabled}>Add card</Button>
            </FormContainer>
        </Container>
    )
}


