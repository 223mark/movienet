// dependecies
import { Link, NavLink, useLocation } from 'react-router-dom'
import {AiOutlineHeart, AiOutlineHome} from 'react-icons/ai'
import { BiMoviePlay } from 'react-icons/bi';
import { RiMovie2Line } from 'react-icons/ri';
import { HiMagnifyingGlass } from 'react-icons/hi2';
import { useEffect, useState } from 'react';
import { useDispatch, useSelector } from 'react-redux';

// slices
import { searchHandler } from '../features/globalState/globalStateSlice';
import { searchMovies, serachSeries } from '../features/movies/movieSlice';

const NavContainer = () => {
    const { pathname } = useLocation();
     const [keyword, setKeyword] = useState('');
    const isSearch = useSelector(state => state.globalState.search);
    const dispatch = useDispatch();
    
    
    

    useEffect(() => {
        dispatch(searchMovies(`search/movie?query=${keyword}`))
        dispatch(serachSeries(`search/tv?query=${keyword}`))
        
    }, [keyword, dispatch]);

    // select fun
    const onSearchHandler = () => {
        dispatch(searchHandler())
        
    }
   
    //search onchange fun
    const searchHandleChange = (keyword) => {
        setTimeout(() => {
           setKeyword(keyword)
       }, 1000)
    }
    
  return (
    <div className="flex flex-col-reverse justify-evenly sticky top-0 items-center  pt-4 pb-2 text-white font-medium   z-50 bg-black md:flex-row">
        <div className="flex justify-between items-center px-4 w-full md:w-[40%] mx:px-0">
              <NavLink to='/' className='hover:text-green-500 flex flex-col justify-center' >
              <AiOutlineHome className='text-[28px]' />
              <h4 className='text-[12px]'>Home</h4>
        </NavLink>
          <NavLink to='/movies' className='hover:text-green-500 flex flex-col justify-center' >
              <BiMoviePlay className='text-[28px]' />
              <h4 className='text-[12px]'>Movies</h4>
          </NavLink>
          <NavLink to='/series' className='hover:text-green-500 flex flex-col justify-center' >
              <RiMovie2Line className='text-[28px]' />
              <h4 className='text-[12px]'>Series</h4>
          </NavLink>
          <NavLink to='/mylists' className='hover:text-green-500 flex flex-col justify-center' >
              <AiOutlineHeart className='text-[28px]' />
              <h4 className='text-[12px]'>Fav</h4>
          </NavLink>
          </div>
          {pathname !== '/' &&
              <div
              onMouseEnter={()=> onSearchHandler()}
                onMouseLeave={() => onSearchHandler()}
              className='  flex items-center justify-center relative cursor-pointer mb-4 md:mb-0 ' >
              <input type="text"
                  
                  onChange={(e)=> searchHandleChange(e.target.value)}
                  className={`${isSearch ? 'w-[300px]': 'w-[120px]'} transition-all duration-100 ease-out px-4 py-2 text-white bg-transparent border-none outline-none rounded-sm focus:ring-[aqua] focus:border-[aqua]`} placeholder='Search...' />
               <HiMagnifyingGlass size={20} className='absolute right-2'  />
          </div>
           }
         
          <div className="flex items-center justify-center pr-2 ">
               
              <Link to='/'>
                  <div className="self-center whitespace-nowrap pb-2 text-[aqua] text-xl font-semibold font-kaint  hover:underline tracking-widest cursor-pointer  ">
                  MovieNet
              </div>
               </Link>
          </div>
      </div>
  )
}

export default NavContainer