import React from 'react';
import {Film} from './Film';
import { connect } from 'react-redux';

const MyFilms = ({myFilms}) => {
    console.log(myFilms)

  if(!myFilms.length){
        return(
            <h2>Пока что ничего не хочу смотреть :(</h2>
        )
    }
    return(
        <div>
            {myFilms.map((myFilm) => (
                <Film key={myFilm.id} myFilm={myFilm}/>
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



