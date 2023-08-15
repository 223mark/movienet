// dependecies
import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { Link } from 'react-router-dom';
import { AiFillPlayCircle, AiOutlineInfoCircle } from 'react-icons/ai';
import { useSelector } from 'react-redux';

const Banner = ({upcomingMovies }) => {
  
    const [movie, setMovie] = useState();
     const isSearch = useSelector(state => state.globalState.search);
    useEffect(() => {
        const bannerMovie = Math.floor(Math.random() * upcomingMovies.length);
        setMovie(upcomingMovies[bannerMovie]);

    },[])
  return (
      <div className={` ${isSearch ? 'opacity-70': 'opacity-100'} flex flex-col justify-end items-start pb-[45px] pl-[20px] h-[40vh] md:pb-[65px] md:pl-[40px] sm:h-[40vh] md:h-[87vh]`}
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, backgroundPosition: 'center center' , backgroundSize: 'cover'}}

      >
          <div className="w-full sm:w-[400px] md:w-[500px] space-y-2">
              <h3 className=' font-bold tracking-wide text-white text-lg md:text-4xl'>{movie?.original_title}</h3>
              <p className='text-white  tracking-normal font-normal text-sm md:text-md'>{movie?.overview.substring(0, 180)}...</p>
              <div className="flex items-center space-x-2">
                  <Button color='success' className='flex items-center justify-center'> <AiFillPlayCircle size={20}/> Watch  </Button>
                  {movie && <Link to={`/movies/${movie?.id}`}>
                      <Button color='dark' className='flex items-center justify-center '>
                      <AiOutlineInfoCircle size={20}/>Info </Button>
                  </Link>}
          </div>
         
          
          </div>
         
     </div>
  )
  
}



export default Banner