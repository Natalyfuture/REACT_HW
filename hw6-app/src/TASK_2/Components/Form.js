import React from 'react';


export const Form = ({setInputValue, handleInput, inputValue, addMyFilms}) => {
    console.log(inputValue)
       

    const handleSubmit = (event) => {
        event.preventDefault();
        addMyFilms(inputValue);
        setInputValue('')
        
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