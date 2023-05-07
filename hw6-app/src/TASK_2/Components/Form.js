import React, { useState } from 'react';
/* import { connect } from 'react-redux'; */
import { createMyFilm } from './redux/actions';
import { useDispatch } from 'react-redux';

export const Form = () => {
    const [inputValue, setInputValue] = useState(''); 
   /*  const [myFilms, setMyFilms] = useState([]); */

    const dispatch = useDispatch();

    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

   console.log(inputValue)
  /*  console.log(myFilms) */

    const addMyFilms = (inputValue) => {
        const myFilm = {
          title: inputValue,
          id: Date.now().toString(),
        };

        dispatch(createMyFilm(myFilm));
       /*  setMyFilms([...myFilms, myFilm]); */
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

/* const mapDispatchToProps = (dispatch) => {
    return{
        createMyFilm: (myFilms) => dispatch(createMyFilm({myFilms})),
    }
    
}

export default connect(null, mapDispatchToProps)(Form); */