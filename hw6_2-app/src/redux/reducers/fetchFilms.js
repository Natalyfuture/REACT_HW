import { createAsyncThunk } from '@reduxjs/toolkit';


export const fetchFilms = createAsyncThunk(
    'films/fetchFilms',
    async (arg, thunkAPI) => {
        try{
            const responce = await fetch(' https://my.api.mockaroo.com/cinema.json?key=778301b0')
            const json = await responce.json()
            return json
        } catch (err) {
            return thunkAPI.rejectWithValue(err.message)
        }
      
    }
)