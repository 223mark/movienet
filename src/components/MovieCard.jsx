// dependecies
import { useState } from "react"
import { Link } from "react-router-dom"
import { AiOutlinePlayCircle } from 'react-icons/ai'

const MovieCard = ({ data, isSeries = false }) => {
  const [isHover, setIsHover] = useState(false);
  return (

    
      <Link to={`${isSeries ? `/series/${data.id}` : `/movies/${data.id}` }`}
        onMouseEnter={() => setIsHover(true)}
        onMouseLeave={()=> setIsHover(false)}
        className={`text-white cursor-pointer relative  ${isSeries ? 'w-full sm:w-[300px] md:w-[310px]' : 'w-full sm:w-[280px] md:w-[290px]'} h-[300px] transition-all duration-100 ease-in hover:scale-110 hover:z-20 `}>
      <div className="w-full h-[280px] ">
        <img
          loading="lazy"
          src={`https://image.tmdb.org/t/p/original/${data?.poster_path}`} className="w-full h-full object-cover hover:brightness-50 " />
        </div>
        {isHover && <AiOutlinePlayCircle  className='absolute left-0 bottom-0  top-0 right-0 m-auto text-[25px] text-[aqua] brightness-150 sm:text-[30px] md:text-[50px]'/>}
      {
        isSeries ? (
          <div className={`${isHover ? 'text-[aqua]' : 'text-white'}`}>{data.name}</div>
        ) : (
            <div className={`${isHover ? 'text-[aqua]' : 'text-white'}`}>{data.title}</div>
        ) 
      }
      
    </Link>
   
  )
}

export default MovieCard