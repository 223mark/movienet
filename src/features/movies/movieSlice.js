import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const BASE_URL = 'https://api.themoviedb.org/3';

// Filter Movies
export const searchMovies = createAsyncThunk('movies/searchMovies', async (endpoint) => {
    const res = await axios.get(`${BASE_URL}/${endpoint}`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTg3MjVmMmFmN2VhYzU4YjZjMTY3N2FlNmJjZDU3MSIsInN1YiI6IjY0YjhlNDM0YWI2ODQ5MDBlMjMwNWNlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-VeZllYKmSJctuk5ZFxOhocqzGjbdDeRBZfboW2nFe8'
        }
    });
    
    return res.data.results;
})

export const serachSeries = createAsyncThunk('series/searchSeries', async (endpoint) => {
    const res = await axios.get(`${BASE_URL}/${endpoint}`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTg3MjVmMmFmN2VhYzU4YjZjMTY3N2FlNmJjZDU3MSIsInN1YiI6IjY0YjhlNDM0YWI2ODQ5MDBlMjMwNWNlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-VeZllYKmSJctuk5ZFxOhocqzGjbdDeRBZfboW2nFe8'
        }
    });
    return res.data.results;
})
const initialState = {
    movies: [],
    series: [],
    status: 'idle',
    error:null
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            // filter series
            .addCase(searchMovies.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(searchMovies.fulfilled, (state, action) => {
                state.status = 'success';
                // console.log(action.payload, 'redux');
                state.movies = action.payload;
                
            })
            .addCase(searchMovies.rejected, (state,action) => {
                state.status = 'failed';
                state.error = action.error
            })
            // filter series
            .addCase(serachSeries.pending, (state) => {
                state.status = 'loading'
            })
           .addCase(serachSeries.fulfilled, (state, action) => {
                state.status = 'success';
                state.series = action.payload;
                
            })
            .addCase(serachSeries.rejected, (state,action) => {
                state.status = 'failed';
                state.error = action.error
            })
        
    }
})

export default movieSlice.reducer;