import React from 'react'; 
import { useNavigate} from "react-router-dom";

import ArrowBack from '../assets/images/arrow.png';
import '../css/main.css';

const GoBackButton = () =>{
    const navigate = useNavigate();
    const handleButton = () => {
        navigate(-1)
    }
    return(
        <div className='arrow_wrapper'>
             <button className='button-arrow' onClick={handleButton}>
                {<img src={ArrowBack} className='arrow'/>}
            </button>
        </div>
    )
       
} 

export default GoBackButton;