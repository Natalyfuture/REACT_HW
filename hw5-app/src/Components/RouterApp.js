import React, { Component } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import arrow from '../Images/arrow.png'
import '../index.css'

import { YourCards } from './YourCards';
import { CardForm } from './CardForm';

 const GoBackButton = () =>{
    const navigate = useNavigate();
    const handleButton = () => {
        navigate(-1)
    }
    return(
        <div className='wrapper-arrow'>
             <button className='button-arrow' onClick={handleButton}>
                {<img src={arrow} className='arrow'/>}
            </button>
        </div>
    )
       
} 
const TransitionToForm = () => {
    const navigate = useNavigate();

    const handlePlus =() => {
        navigate('/card-form');
    } 
    return(
        <div className='add-card' onClick={handlePlus}>
            <span>+</span>
        </div>
    )
}
 
export default class RouterApp extends Component {
    
    render () {
        return(
            <div className='base-wrapper'>
                <div className='router-wrapper'>
                <TransitionToForm />
                <GoBackButton />
                </div>
                <Routes>
                    <Route path='/' element={<YourCards/>} />
                    <Route path='/card-form' element={<CardForm />} />
                </Routes>
            </div>
        )
    }
}

