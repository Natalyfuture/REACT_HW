import React from 'react';

const FilmCards = ({film}) => {
    console.log(film)
    return (
        <div>
            <h2>{film.day}--{film.time}--{film.title} </h2>
        </div>
    )
}

export default FilmCards;