import { useRef, useState } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';
const MovieRow = ({ title, movies, isSeries = false }) => {
    const movieRef = useRef();
    const [slideNumber, setSlideNumber] = useState(0);
    // const [isHover, setIsHover] = useState(false);
    // console.log(isHover);
    // carousel
    const handleClick = (direction) => {
        let distance = movieRef.current.getBoundingClientRect().x - 20;
       
        console.log(typeof(distance));
        if (direction === 'left' && slideNumber>0) {
            
            movieRef.current.style.transform = `translateX(${distance + 230}px)`;
            setSlideNumber(slideNumber-1)
        }
        if (direction === 'right' && slideNumber<14) {
            movieRef.current.style.transform = `translateX(${-250+ distance}px)`
            setSlideNumber(slideNumber+1)
        }
    }
    return (
        <>
             <div className=" overflow-hidden">
                <div className="flex justify-between items-center pr-[50px] ">
                    <h3 className="text-2xl px-[50px] my-5  font-medium tracking-wide text-white">{title}</h3>
                    <Link to={`${isSeries ? '/series' : '/movies'}`}>
                        <button className='px-4 py-1 bg-green-500 hover:bg-green-400 rounded-md text-white font-semibold'>All</button>
                    </Link>
            </div>

                <div className="relative  ">
                    <div className="flex w-screen  h-[250px] ">
           
                <div
                    ref={movieRef}
                            className="flex h-full translate-x-[1px]  select-none " 
                            style={{ transition: 'all 0.3s ease' }}
                    >
                {movies.map((movie) => (
                    // <MovieCard movie={movie} key={movie.id} />
                    
                    <Link to={`/movies/${movie.id}`} key={movie.id}>
                        <div
                            
                        style={{ transition: 'all 0.4s ease' }}
                        className={`${isSeries ? 'w-[350px]' : 'w-[230px]'} relative h-[180px] mr-5 cursor-pointer hover:z-20 hover:scale-110 `} >
                            <img src={`https://image.tmdb.org/t/p/original/${movie?.backdrop_path}`} alt={movie.title} className='h-full w-full mb-2 '
                            />
                            {/* <p  className='text-white text-sm font-normal'>{movie.overview.substring(0,20)}...</p> */}
                            <h4 className=' text-white text-md font-medium hover:text-green-500'>{movie.title} </h4>
        
                        {/* <div className="bg-gray-800">
                            <h3 className='text-white font-medium absolute bottom-5 text-md'>{movie.title}</h3>
                        <AiFillHeart size={20} color='green' className=''/>
                        </div> */}
                    </div>
                    </Link>
                    
                                        
                ))}
                    
            </div>
            
                        <AiOutlineLeft
                    onClick={()=> handleClick('left')}
                    size={40}
                    className='w-[50px] absolute left-0 mr-2 h-[180px]  bg-black opacity-80 cursor-pointer text-white ' />
                <AiOutlineRight
                        onClick={()=> handleClick('right')}
                        size={20}
                        className='absolute right-0 h-[180px] w-[50px] bg-black opacity-80 cursor-pointer text-white' />
                </div>
                
            </div>
      </div>
        </>
  )
}

export default MovieRow