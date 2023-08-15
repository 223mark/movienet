// dependecies
import { useRef, useState } from 'react';
import { AiOutlineRight, AiOutlineLeft } from 'react-icons/ai';
import { Link } from 'react-router-dom';

// components
import CarouselMovieItem from './CarouselMovieItem';

const MovieRow = ({ title, movies, isSeries = false }) => {
    const movieRef = useRef();
    const [slideNumber, setSlideNumber] = useState(0);
   
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
                <div className="flex justify-between items-center px-2 pr-2 md:pr-[50px] ">
                    <h3 className="text-lg px-1 my-5  font-medium text-white tracking-wide  md:px-[50px] md:text-xl">{title}</h3>
                    <Link to={`${isSeries ? '/series' : '/movies'}`}>
                        <button className='px-4 py-0 bg-green-500 hover:bg-green-400 rounded-md text-white font-normal md:font-medium md:py-1'>All</button>
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
                    
                    <Link to={`${isSeries ? `/series/${movie.id}` : `/movies/${movie.id}`}`} key={movie.id}>
                        <CarouselMovieItem data={movie} isSeries={isSeries} />
                    </Link>
                    
                                        
                ))}
                    
            </div>
            
                        <AiOutlineLeft
                    onClick={()=> handleClick('left')}
                    size={40}
                    className='w-[50px] absolute left-0 mr-2 h-[230px]  bg-black opacity-60 cursor-pointer text-white ' />
                <AiOutlineRight
                        onClick={()=> handleClick('right')}
                        size={20}
                        className='absolute right-0 h-[230px] w-[50px] bg-black opacity-60 cursor-pointer text-white' />
                </div>
                
            </div>
      </div>
        </>
  )
}

export default MovieRow