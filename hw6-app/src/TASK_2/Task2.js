import React, {useState} from 'react';
import { Form } from './Components/Form';
import  MyFilms  from './Components/MyFilms';
import { CinemaFilms } from './Components/CinemaFilms';
import '../App.css'


const Task2 = () => {
    const [inputValue, setInputValue] = useState('');

    const [myFilms, setMyFilms] = useState([]);
    
    const handleInput = (event) => {
        setInputValue(event.target.value);
    };

    const addMyFilms = (inputValue) => {
        const myFilm = {
            title: inputValue,
            id: Date.now().toLocaleString(),
        };
        setMyFilms([...myFilms, myFilm]);
    };

console.log(myFilms)
    return(
        <div className='container'>
                <Form addMyFilms={addMyFilms} 
                handleInput={handleInput} 
                setInputValue={setInputValue} 
                inputValue={inputValue}
                />
            <div className='content'>
                <div className='col'>
                    <h1 className='title'>Мой список фильмов к просмотру :</h1>
                    <MyFilms myFilms={myFilms}/>
                </div>
                <div className='col'>
                    <h1 className='title'>Что интересного в CinemaCity:</h1>
                    <CinemaFilms films={[]}/>
                </div>
            </div>
        </div>
    )

}

export default Task2;

