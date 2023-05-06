import { ADD_FILM } from './types';

export function createMyFilm(myFilm) {
    return {
        type: ADD_FILM,
        payload: myFilm
    }
}
