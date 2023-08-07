import { useState } from "react";
import {AiOutlinePlayCircle} from 'react-icons/ai'
const CarouselMovieItem = ({ data, isSeries = false }) => {
    const [isHover, setIsHover] = useState(false);
  return (
    <div
                            onMouseOver={() => setIsHover(true)}   
                            onMouseLeave={()=> setIsHover(false)}
                        style={{ transition: 'all 0.4s ease' }}
                        className={`${isSeries ? 'w-[300px]' : 'w-[230px]'} relative h-[200px] mr-5 cursor-pointer hover:z-20 hover:scale-110 hover:brightness-50 `} >
                            <img src={`https://image.tmdb.org/t/p/original/${data?.backdrop_path}`} alt={data.title} className='h-full w-full mb-2 '
                            />
                            {isHover && <AiOutlinePlayCircle  className='absolute left-0 bottom-0  top-0 right-0 m-auto text-[25px] text-[aqua] brightness-150 sm:text-[30px] md:text-[50px]'/>}
                            
                            
                           
                            <h4 className={`${isHover ? 'text-[aqua]': 'text-white'}  text-md font-medium `}>
                                {isSeries ? data.name : data.title}
                                
                            </h4>
        
                        
                    </div>
  )
}

export default CarouselMovieItem