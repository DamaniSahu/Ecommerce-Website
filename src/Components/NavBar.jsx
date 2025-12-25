import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = ({cart}) => {
  return (
    <nav className=' bg-black flex justify-between items-center p-3'>
      <h1 className='text-pink-500 text-lg sm:text-3xl md:text-5xl'>BeautyProduct.com!</h1>
       <div className='flex flex-shrink-0 gap-2 lg:gap-4 pr-2'>
       <Link to="/" 
          className="text-white hover:text-blue-700 text-sm sm:text-lg md:font-bold no-underline">
          Home
        </Link>
        <Link to="/About"
        className="text-white hover:text-blue-700 text-sm sm:text-lg md:font-bold no-underline" >
        About
        </Link>

        <Link to="/ProductCart" 
          className="text-white hover:text-blue-700 text-sm sm:text-lg md:font-bold no-underline">
          Cart ({cart.length})
        </Link>
       </div>
    </nav>
    
  );

  
}

export default NavBar
