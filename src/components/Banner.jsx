import { Button } from 'flowbite-react';
import { useEffect, useState } from 'react';
import { AiFillPlayCircle, AiOutlineInfoCircle } from 'react-icons/ai';
const Banner = ({upcomingMovies }) => {
  
     const [movie, setMovie] = useState();
    console.log(movie, 'mv');
    useEffect(() => {
        const bannerMovie = Math.floor(Math.random() * upcomingMovies.length);
        setMovie(upcomingMovies[bannerMovie]);

    },[])
  return (
      <div className="h-[80vh] flex flex-col justify-end items-start pb-[80px] pl-[40px]"
          style={{ backgroundImage: `url(https://image.tmdb.org/t/p/original/${movie?.backdrop_path})`, backgroundPosition: 'center center' , backgroundSize: 'cover'}}

      >
          <div className="w-[500px] space-y-2">
              <h3 className='text-4xl font-bold tracking-wide text-white'>{movie?.original_title}</h3>
              <p className='text-white text-md tracking-normal font-normal'>{movie?.overview.substring(0, 180)}...</p>
              <div className="flex items-center space-x-2">
                  <Button color='success' className='flex items-center justify-center'> <AiFillPlayCircle size={20}/> Watch  </Button>
                  <Button color='dark' className='flex items-center justify-center '>
                      <AiOutlineInfoCircle size={20}/>Info </Button>
          </div>
         
          
          </div>
         
     </div>
  )
  
}



export default Banner