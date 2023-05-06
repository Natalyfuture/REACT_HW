import React, { useState } from 'react';
import { connect } from 'react-redux';
import { createMyFilm } from './redux/actions';

export const Form = () => {
    const [inputValue, setInputValue] = useState(''); 
    const [myFilms, setMyFilms] = useState([]);

    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

   

    const addMyFilms = (inputValue) => {
        const myFilm = {
          title: inputValue,
          id: Date.now().toString(),
        };
        setMyFilms([...myFilms, myFilm]);
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

const mapDispatchToProps = (dispatch) => {
    return{
        createMyFilm: (myFilm) => dispatch(createMyFilm({myFilm})),
    }
    
}

export default connect(null, mapDispatchToProps)(Form);