import { configureStore } from "@reduxjs/toolkit";
import movieReducer from '../features/movies/movieSlice';
import globalSateReducer from '../features/globalState/globalStateSlice'

export const store = configureStore({
  reducer: {
      globalState: globalSateReducer,
      movies: movieReducer,
      
    }
})
