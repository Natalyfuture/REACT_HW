import React, { useState,  useEffect } from 'react';
import { Routes, Route, useNavigate } from 'react-router-dom';
import arrow from '../Images/arrow.png'
import '../index.css'

import  {YourCards}  from './YourCards';
import {CardForm} from './CardForm';

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
 
export const RouterApp = () => {

    const [newCard, setNewCard] = useState([]);
    const [cards, setCards] = useState([]);

    const addNewCard = (newCard) => {
        console.log(newCard)
        setCards((prev) => [newCard, ...prev]);
    }

    useEffect(() => {
        fetch('https://my.api.mockaroo.com/cards/123.json?key=778301b0')
            .then(response => {
                if (!response.ok) {
                    throw new Error('Something went wrong!');
                }
                return response.json()
            })
            .then(res => {
                setCards([res]);
                console.log([res])
            })
            .catch((error) => {
                console.error('Error:', error);
            });
    }, [])

        return(
            <div className='base-wrapper'>
                <div className='router-wrapper'>
                <TransitionToForm />
                <GoBackButton />
                </div>
                <Routes>
                    <Route path='/' element={<YourCards cards={cards}/>} />
                    <Route path='/card-form' element={<CardForm  setNewCard={setNewCard} newCard={newCard} addNewCard={addNewCard}/>} />
                </Routes>
            </div>
        )
    
}

