import { Button, Navbar,} from 'flowbite-react';
import { useEffect, useState } from 'react';
import {SlLogin} from 'react-icons/sl';
import { Link, NavLink, useLocation } from 'react-router-dom';

const Header = () => {
  const location = useLocation();
 
  
  const [navStatus, setNavStatus] = useState(false);

  const transitionNav = () => {
    if (window.scrollY > 120) {
      setNavStatus(true);
    }else {
      setNavStatus(false)
    }
  }
  console.log(navStatus);
  useEffect(() => {
    window.addEventListener('scroll', transitionNav);
  }, [])
  return (
    <Navbar className={`${location.pathname=== '/' ? 'fixed': 'sticky'}  top-0 w-full  z-50  ${navStatus ? 'bg-black': 'bg-transparent'} `}
    >
      <Navbar.Brand >
        
        <span className="self-center whitespace-nowrap text-green-500 text-2xl font-bold dark:text-white">
          Movie <span className='text-white'>Net</span>
        </span>
      </Navbar.Brand>
      <div className="flex w-[300px] justify-between items-center text-white font-medium text-lg">
        <NavLink to='/' className='hover:text-green-500' >Home</NavLink>
        <NavLink to='/movies' className='hover:text-green-500' >Movies</NavLink>
        <NavLink to='/series' className='hover:text-green-500' >Series</NavLink>
        <NavLink to='/mylists' className='hover:text-green-500' >My Lists</NavLink>
      </div>
      <SlLogin size={25} color='white'  /> 
      
        </Navbar>
  )
}

export default Header