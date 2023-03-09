import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes } from 'react-icons/fa';

function NavBar() {
    const [nav, setNav] = useState(false);
  return (
    <div className='flex justify-between items-center w-full h-20 px-4 text-white bg-black fixed'>
        <div>
            <h1 className='text-5xl ml-2 font-bold'>WEB</h1>
        </div>
        <ul className="hidden md:flex text-3xl">
            <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"><Link to="/">home</Link></li>
            <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"><Link to="/projects">projects</Link></li>
            <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"><Link to="/experience">experience</Link></li>
            <li className="px-4 cursor-pointer capitalize font-medium text-gray-300 hover:scale-105 duration-200"><Link to="/contact">contact</Link></li>
        </ul>

        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-500 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>

        {nav && (
            <ul class="flex flex-col justify-center items-center absolute top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-800 text-gray-300">
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-300 hover:scale-105 duration-200"><Link to="/">home</Link></li>
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-300 hover:scale-105 duration-200"><Link to="/projects">projects</Link></li>
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-300 hover:scale-105 duration-200"><Link to="/experience">experience</Link></li>
            <li className="px-4 cursor-pointer capitalize py-6 text-4xl text-gray-300 hover:scale-105 duration-200"><Link to="/contact">contact</Link></li>
        </ul>
        )}
    </div>
  )
}

export default NavBar