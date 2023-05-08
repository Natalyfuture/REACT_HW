import React from 'react';
import FilmCards  from './FilmCards';
import { fetchedFilms } from './redux/actions';
import { useDispatch, useSelector } from 'react-redux';

const CinemaFilms = () => {
    const dispatch = useDispatch();
    const films = useSelector((state) => state.myFilms.fetchedFilms);

    if(!films.length){
        return (
            <div>
                <h2>Вы еще не загрузили расписание :(</h2>
                <button onClick={() => dispatch(fetchedFilms())}>Загрузить</button> 
            </div>
         )    
    }
         
    return (
        <div>
            {films.map((film) => (
                <FilmCards key={film.id} film={film} />
            ))}
        </div>
    );
};

export default CinemaFilms;