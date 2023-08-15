// dependecies
import { useEffect, useState } from "react";
import { useSelector } from "react-redux";

// components
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import { Paginator } from "../components/Paginator";
import NavContainer from "../components/NavContainer";
import { searchMovies } from "../features/movies/movieSlice";

const MoviesScreen = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
   const { data, loading} = useFetch(`/movie/now_playing?language=en-US&page=${page}`);
  const isSearch = useSelector(state => state.globalState.search);
  const  searchedMovies  = useSelector(state => state.movies.movies);

  useEffect(() => {
    
    setMovies(data);
  }, [data])
 
  return (
    <div className="px-4 md:px-[50px] min-h-screen">
      <NavContainer/>
      <div className={`${isSearch ? 'opacity-70': 'opacity-100' } mt-1 sm:mt-2 md:mt-4`}>
        <div className="flex flex-wrap justify-between items-center gap-2 md:gap-5 ">
          {
            searchedMovies.length === 0 ? (
         movies.map((movie) => (
          <MovieCard data={movie} key={movie.id} />
       ))) :
              searchedMovies.map((movie) => (
              <MovieCard data={movie} key={movie.id} />
            ))  
      }
      </div>
      { searchMovies.length === 0 &&
        <div className="flex justify-start items-center pt-[80px] md:justify-end ">
        <Paginator page={page} setPage={setPage} />
      </div>}
      </div>
    </div>
  )
}

export default MoviesScreen