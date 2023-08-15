// dependecies
import { useEffect, useState } from "react";
import { Link } from "react-router-dom";
import { useSelector } from "react-redux";

// components
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import { Paginator } from "../components/Paginator";

import NavContainer from "../components/NavContainer";

const SeriesScreen = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
   const { data, loading, } = useFetch(`/trending/tv/day?language=en-US&page=${page}`);
  const searchedSeries = useSelector(state => state.movies.series);
  
   const isSearch = useSelector(state => state.globalState.search);
  useEffect(() => {
    
    setMovies(data);
  }, [data])
 
  return (
    <div className="px-2 md:px-[50px] min-h-screen" id="series">
      <NavContainer/>
      <div className={`${isSearch ? 'opacity-70': 'opacity-100' } mt-1 sm:mt-2 md:mt-4`}>
        <div className="flex flex-wrap justify-between items-center gap-5 ">
      { searchedSeries.length === 0 ? (
         movies.map((movie) => (
          <MovieCard data={movie} isSeries={true} key={movie.id} />
       ))
          ) : (
              searchedSeries.map((movie) => (
                <MovieCard data={movie} isSeries={true} key={movie.id} />
              ))
      )
      }
      </div>
      {!loading && 
        <Link href='series'>
          <div className="flex justify-end items-center pt-[80px] ">
        <Paginator page={page} setPage={setPage} />
      </div>
        </Link>
      }
      </div>
    </div>
  )
}

export default SeriesScreen