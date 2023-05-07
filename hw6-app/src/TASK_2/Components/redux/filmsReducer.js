import { ADD_FILM , FETCH_FILMS } from './types';

const initialState = {
    myFilms: [],
    fetchedFilms: [],
};

export const filmsReducer = (state = initialState, action) => {
    switch (action.type) {
        case ADD_FILM:
          return {
            ...state,
            myFilms: [...state.myFilms, action.payload],
          };
          case FETCH_FILMS:
            return {
              ...state,
              fetchedFilms: action.payload
            };
        default:
            return state;
    }
    
}
