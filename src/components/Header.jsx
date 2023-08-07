// import { Button, Navbar,} from 'flowbite-react';
// import { useEffect, useState } from 'react';
// import {SlLogin} from 'react-icons/sl';
// import { Link, NavLink, useLocation } from 'react-router-dom';

// const Header = () => {
//   const location = useLocation();
 
  
//   const [navStatus, setNavStatus] = useState(false);

//   const transitionNav = () => {
//     if (window.scrollY > 120) {
//       setNavStatus(true);
//     }else {
//       setNavStatus(false)
//     }
//   }
//   console.log(navStatus);
//   useEffect(() => {
//     window.addEventListener('scroll', transitionNav);
//   }, [])
//   return (
//     <Navbar className={`top-0 w-full  z-50  ${navStatus ? 'bg-black': 'bg-transparent'} `}
//     >
//       <Navbar.Brand href='/' >
        
//         <span className="self-center whitespace-nowrap text-green-500 text-2xl font-bold dark:text-white">
//           Movie <span className='text-white'>Net</span>
//         </span>
//       </Navbar.Brand>
      
//       <SlLogin size={25} color='white'  /> 
      
//         </Navbar>
//   )
// }

// export default Header