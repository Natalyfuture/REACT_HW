import React from 'react'; 
import { Routes, Route , useNavigate} from "react-router-dom";
import BaseHome from '../components/Base';
import Login from '../components/Login';
import Register from '../components/Register';
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

const RouterApp = () => {
    return(
        <>
        <div className='routerHeader'>
            <GoBackButton />
        </div>
        <Routes>
            <Route path='/login' element={<Login />} />
            <Route path='/' element={<Register />} />
            <Route path='/home' element={<BaseHome />} />
        </Routes>
        </>
           
    )
}

export default RouterApp;