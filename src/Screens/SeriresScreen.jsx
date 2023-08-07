import { useEffect, useState } from "react";
import MovieCard from "../components/MovieCard";
import useFetch from "../hooks/useFetch";
import { Paginator } from "../components/Paginator";
const SeriesScreen = () => {
  const [page, setPage] = useState(1);
  const [movies, setMovies] = useState([]);
   const { data, loading, error , reFetch} = useFetch(`/trending/tv/day?language=en-US&page=${page}`);
   
  
  useEffect(() => {
    
    setMovies(data);
  }, [data])
  console.log(page, 'page');
  return (
    <div className="px-[50px]">
      <div className="flex flex-wrap justify-between items-center gap-5 ">
      {
       movies &&  movies.map((movie) => (
          <MovieCard data={movie} isSeries={true} key={movie.id} />
        ))
      }
      </div>
      {loading && 
        <div className="flex justify-end items-center pt-[80px] ">
        <Paginator page={page} setPage={setPage} />
      </div>
      }
    </div>
  )
}

export default SeriesScreen