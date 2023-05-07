import { ADD_FILM , FETCH_FILMS} from './types';

export function createMyFilm(myFilms) {
    return {
        type: ADD_FILM,
        payload: myFilms
    }
}

export function fetchedFilms() {
    return async dispatch => {
        const response = await fetch(' https://my.api.mockaroo.com/cinema.json?key=778301b0');
        const json = await response.json();

        dispatch({type: FETCH_FILMS, payload: json});
    };
}
