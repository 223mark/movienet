// depenedcies
import { useLocation, useParams, Link } from "react-router-dom"
import useFetch from "../hooks/useFetch"
import { useEffect, useState } from "react";
import { AiOutlinePlayCircle } from 'react-icons/ai';

// components
import MovieRow from "../components/MovieRow";

const DetailsScreen = () => {
  const { id } = useParams();
  const { pathname } = useLocation();
  const [data, setData] = useState();
  const filteredParam = pathname.split('/').join('');
  const { data:movie } = useFetch(`movie/${id}`);
  const { data:series} = useFetch(`tv/${id}`);
  
  
  useEffect(() => {
    if (filteredParam.includes('movies')) {
     setData(movie)
     
  } else {
    setData(series)
  }
  }, [filteredParam, movie, series])
  
  const { data: relatedSeries } = useFetch(`tv/top_rated?language=en}`); 
  const { data: relatedMovies } = useFetch(`/movie/now_playing?language=en}`);
  

  return (
    <div className="min-h-screen ">
      <Link className="w-full h-[80vh] relative flex justify-end items-end px-2 py-[10px] mb-4 md:px-[100px] " style={{ backgroundImage: `url('https://image.tmdb.org/t/p/original/${data?.poster_path}')`, backgroundSize: 'cover' }}>
      
      <div className="flex-1 flex flex-col justify-between items-center gap-[10px]  mx-auto sm:flex-row md:flex-row">
        <div className="h-[200px] sm:[200px] md:h-[350px] relative">
            <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt="" className="w-full h-full rounded-md shadow-lg object-cover" />
            <AiOutlinePlayCircle  className='absolute left-0 bottom-0  top-0 right-0 m-auto text-[100px] text-white hover:text-green-500'/>
        </div>
        <div className="flex-1 flex flex-col space-y-2 bg-black opacity-80 px-4 py-2 ">
            <h1 className="text-green-500 text-2xl font-medium pb-4">
              {filteredParam.includes('movies') ? data?.title : data?.name}</h1>
          <p className="text-lg text-[#ccc]">{data?.overview}</p>
         </div>
        </div>
        <Link
          to={`${filteredParam.includes('movies') ? '/movies': '/series'}`}
          className="absolute left-8 top-5 px-4 py-2 bg-green-600 hover:bg-green-500 rounded-md cursor-pointer  font-medium text-white sm:left-7 sm:top-4 ">
          {/* <AiFillHome size={20} color="white"/> */}
          Back
        </Link>
      
      </Link>
      {
        filteredParam.includes('movies') ? (
          <MovieRow  title='Related Movies' movies={relatedMovies}/>
        ):
          (
            <MovieRow title='Related Series' movies={relatedSeries} isSeries={true} />
          )
      }
      
    </div>
  )
}

export default DetailsScreen