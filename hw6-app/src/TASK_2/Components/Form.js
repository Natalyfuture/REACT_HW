import React, { useState } from 'react';
import { createMyFilm } from './redux/actions';
import { useDispatch } from 'react-redux';

export const Form = () => {
    const [inputValue, setInputValue] = useState(''); 
   

    const dispatch = useDispatch();

    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const addMyFilms = (inputValue) => {
        const myFilm = {
          title: inputValue,
          id: Date.now().toString(),
        };

        dispatch(createMyFilm(myFilm));
        setInputValue('');

        
      };

    const handleSubmit = (event) => {
        event.preventDefault();
        addMyFilms(inputValue);
    };

    return(
        <div>
            <h1 className='title'>Что я хочу посмотреть ?</h1>
            <form onSubmit={handleSubmit}>
                <input 
                type='text' 
                placeholder="введите название" 
                value={inputValue}
                onChange={handleInput}
                />
                <button type="submit">Добавить фильм</button>
            </form>
        </div>
    )
} 

