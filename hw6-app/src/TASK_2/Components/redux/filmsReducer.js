import { ADD_FILM } from './types';

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
        default:
            return state;
    }
    
}
