import { useParams } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react";
import {AiOutlinePlayCircle} from 'react-icons/ai';
import MovieRow from "../components/MovieRow";

const DetailsScreen = () => {
  const { id: movieId } = useParams();
  const [data, setData] = useState();
  const { data: movies, loading, error } = useFetch(`/movie/now_playing?language=en}`);
  const { data: relatedMovies, loading:loadingRelatedMovies } = useFetch(`/movie/now_playing?language=en}`);

  
  useEffect(() => {
    setData(movies[7])
  }, [movies])
  return (
    <>
      <div className="w-full h-[80vh] flex justify-end items-end px-[100px] pb-[10px] " style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data?.poster_path}')`, backgroundSize: 'cover' }}>
      
      <div className="flex-1 flex justify-between items-center gap-[10px]  mx-auto">
        <div className=" h-[350px] relative">
            <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt="" className="w-full h-full rounded-md shadow-lg object-cover" />
            <AiOutlinePlayCircle  className='absolute left-0 bottom-0  top-0 right-0 m-auto text-[100px] text-white hover:text-green-500'/>
        </div>
        <div className="flex-1 flex flex-col space-y-2 bg-black opacity-80 px-4 py-2 ">
          <h1 className="text-green-500 text-2xl font-medium pb-4">{data?.title}</h1>
          <p className="text-lg text-[#ccc]">{data?.overview}</p>
         </div>
      </div>
      
      </div>
      <MovieRow  title='Related Movies' movies={relatedMovies}/>
    </>
  )
}

export default DetailsScreen