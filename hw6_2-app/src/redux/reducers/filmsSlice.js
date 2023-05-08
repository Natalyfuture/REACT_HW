import { createSlice} from '@reduxjs/toolkit';
import {fetchFilms} from './fetchFilms'

const initialState = {
    films: [],
    fetchedFilms: [],
    isLoading: false,
    error: null
}

const filmsSlice = createSlice({
    name: 'films',
    initialState, 
    reducers: {
        createFilm: (state, action) => {
            state.films.push(action.payload)
        },
        removeFilms: (state, action) => {
            state.films = state.films.filter(film => film.id !== action.payload)
        }
    },
    extraReducers: (builder) => {
        builder
            .addCase(fetchFilms.pending, (state, action) => {
                state.isLoading = true
            })
            .addCase(fetchFilms.fulfilled, (state, action) => {
                state.isLoading = false
                state.fetchedFilms = action.payload
                state.error = null
            })
            .addCase(fetchFilms.rejected, (state, action) => {
                state.isLoading = false
                state.error = action.payload
            })
    
    }
})

export const { createFilm } = filmsSlice.actions

export default filmsSlice.reducer