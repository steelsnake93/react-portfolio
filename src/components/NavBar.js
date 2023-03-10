import React, { useState } from 'react';
import { Link } from 'react-router-dom';
import { FaBars, FaTimes, FaGithub, FaLinkedinIn } from 'react-icons/fa';
import { HiOutlineMail } from 'react-icons/hi';
import { BsFillPersonLinesFill } from 'react-icons/bs';

function NavBar() {
    const [nav, setNav] = useState(false);
  return (
    <div className='flex justify-between lg:justify-around items-center w-full h-20 px-4 text-white bg-[#073b4c] fixed'>
        <div>
            <h1 className='text-5xl ml-2 font-bold font-signature text-[#bbe567]'>
                Niko
            </h1>
        </div>
        {/* menu */}
        <ul className="hidden md:flex text-2xl text-gray-200 capitalize cursor-pointer font-medium">
            <li className="px-4 hover:scale-105 duration-200"><Link to="/">home</Link></li>
            <li className="px-4 hover:scale-105 duration-200"><Link to="/projects">projects</Link></li>
            <li className="px-4 hover:scale-105 duration-200"><Link to="/experience">experience</Link></li>
            <li className="px-4 hover:scale-105 duration-200"><Link to="/contact">contact</Link></li>
        </ul>
        {/* Hamburger */}
        <div onClick={() => setNav(!nav)} className='cursor-pointer pr-4 z-10 text-gray-200 md:hidden'>
            {nav ? <FaTimes size={30} /> : <FaBars size={30} />}
        </div>
        {/* Mobile menu */}
        {nav && (
        <ul class="flex flex-col text-4xl justify-center items-center absolute capitalize top-0 left-0 w-full h-screen bg-gradient-to-b from-black to-gray-600 text-gray-200 ">
            <li className="p-5 hover:scale-105 duration-200"><Link to="/">home</Link></li>
            <li className="p-5 hover:scale-105 duration-200"><Link to="/projects">projects</Link></li>
            <li className="p-5 hover:scale-105 duration-200"><Link to="/experience">experience</Link></li>
            <li className="p-5 hover:scale-105 duration-200"><Link to="/contact">contact</Link></li>
        </ul>
        )}
        {/* Social icons */}
        <div className='hidden lg:flex fixed flex-col top-[35%] left-0'>
            <ul className='text-gray-300'>
                <li className='flex items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#45a0f5]'>
                    <a className='flex justify-between px-4 items-center w-full' 
                    href='https://www.linkedin.com/in/nikola-tasev/'>
                        LinkedIn <FaLinkedinIn size={30} />
                    </a>
                </li>
                <li className='flex items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#333333]'>
                    <a className='flex justify-between px-4 items-center w-full' 
                    href="https://github.com/steelsnake93">
                        Github <FaGithub size={30} />
                    </a>
                </li>
                <li className='flex items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#159781]'>
                    <a className='flex justify-between px-4 items-center w-full' 
                    href="/">
                        Email <HiOutlineMail size={30} />
                    </a>
                </li>
                <li className='flex items-center w-[160px] h-[60px] ml-[-100px] hover:ml-[-10px] duration-300 bg-[#565f69]'>
                    <a className='flex justify-between px-4 items-center w-full' 
                    href="/">
                        Resume <BsFillPersonLinesFill size={30} />
                    </a>
                </li>
            </ul>
        </div>
    </div>
  )
}

export default NavBar