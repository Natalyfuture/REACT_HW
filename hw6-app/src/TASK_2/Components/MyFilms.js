import React from 'react';
import {Film} from './Film';
import { connect } from 'react-redux';

const MyFilms = ({myFilms}) => {
    console.log(myFilms)

  if(!myFilms.length){
        return(
            <p>Пока что ничего не хочу смотреть :(</p>
        )
    }
    return(
        <div>
            {myFilms.map((myFilm) => (
                <Film key={myFilm} myFilm={myFilm}/>
            ))}
        </div>
    )
} 
const mapStateToProps = (state) => {
    return {
        myFilms: state.myFilms.myFilms,
    }
    

}

export default connect(mapStateToProps, null)(MyFilms);

