import { configureStore } from '@reduxjs/toolkit';
import filmsReducer from './reducers/filmsSlice';

export const store = configureStore({
    reducer: {
        films: filmsReducer
    }
})