import { createAsyncThunk, createSlice } from "@reduxjs/toolkit";
import axios from "axios";

const MOVIE_URL = 'https://api.themoviedb.org/3';

// Fetch Movies
export const fetchMovies = createAsyncThunk('movies/fetchMoives', async (endpoint) => {
    const res = await axios.get(`${MOVIE_URL}/${endpoint}`, {
        headers: {
            accept: 'application/json',
            Authorization: 'Bearer eyJhbGciOiJIUzI1NiJ9.eyJhdWQiOiI0OTg3MjVmMmFmN2VhYzU4YjZjMTY3N2FlNmJjZDU3MSIsInN1YiI6IjY0YjhlNDM0YWI2ODQ5MDBlMjMwNWNlMiIsInNjb3BlcyI6WyJhcGlfcmVhZCJdLCJ2ZXJzaW9uIjoxfQ.-VeZllYKmSJctuk5ZFxOhocqzGjbdDeRBZfboW2nFe8'
        }
    });
    
    return res.data.results;
})

const initialState = {
    movies: null,
    status: 'idle',
    error:null
}

const movieSlice = createSlice({
    name: 'movies',
    initialState,
    reducers: {},
    extraReducers(builder) {
        builder
            .addCase(fetchMovies.pending, (state) => {
                state.status = 'loading'
            })
            .addCase(fetchMovies.fulfilled, (state, action) => {
                state.status = 'success';
                // console.log(action.payload, 'redux');
                state.movies = action.payload;
                
            })
            .addCase(fetchMovies.rejected, (state,action) => {
                state.status = 'failed';
                state.error = action.error
            })
    }
})

export default movieSlice.reducer;