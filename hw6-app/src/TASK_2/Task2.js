import React from 'react';
import { Form } from './Components/Form';
import  MyFilms  from './Components/MyFilms';
import  CinemaFilms from './Components/CinemaFilms';
import '../App.css'


const Task2 = () => {
    return(
        <div className='container'>
                <Form />
            <div className='content'>
                <div className='col'>
                    <h1 className='title'>Мой список фильмов к просмотру :</h1>
                    <MyFilms />
                </div>
                <div className='col'>
                    <h1 className='title'>Что интересного в CinemaCity:</h1>
                    <CinemaFilms />
                   
                </div>
            </div>
        </div>
    )

}

export default Task2;

