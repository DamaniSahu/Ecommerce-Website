import React from 'react'
import { Link } from 'react-router-dom';

const NavBar = ({cart}) => {
  return (
    <nav className='bg-black flex justify-between items-center pr-4 py-7 pl-3 '>
      <h1 className='text-pink-500 text-5xl'>BeautyProduct.com!</h1>
       <div>
       <Link to="/" 
          className="text-white hover:text-blue-700 border-2 border-white p-2 px-5 md:font-bold m-2 no-underline">
          Home
        </Link>

        <Link to="/ProductCart" 
          className="text-white hover:text-blue-700 border-2 border-white md:font-bold p-2 px-4 m-4 no-underline">
          Cart ({cart.length})
        </Link>
       </div>
    </nav>
    
  );

  
}

export default NavBar
