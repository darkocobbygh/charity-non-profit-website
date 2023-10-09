import React, { useState } from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/VGF Logo File  (1) 1.png';
import vect from '../assets/Vector.png'
import {FaBars,FaTimes} from 'react-icons/fa';



const Navbar = () => {
  const [isOpen,setIsOpen]=useState(false);

  const toggleNav=()=>{
    setIsOpen(!isOpen)
  }
  return (
    <>
      <nav className='h-full flex justify-between w-full pb-2 lg:flex lg:justify-between lg:h-20 lg:items-start lg:pt-3 justify-between'>
        <Link>
          <img src={logo} alt="" />
        </Link>
      <ul className='hidden flex flex-col justify-center items-center text-5xl gap-y-10 lg:h-16 lg:w-96 lg:flex lg:gap-y-10 lg:pt-4 lg:text-base lg:flex-row'>
        <li className='pr-4'>
            <Link className='underline'>Home</Link>
        </li>
        <li className='pr-4'>
            <Link>Gallery</Link>
        </li>
        <li className='pr-4'>
            <Link className='flex'>About Us <img src={vect} className='hidden mt-7 ml-2 lg:h-2.5 lg:w-5 lg:mt-2 lg:pt-1 lg:pl-1' alt="" /> </Link>
        </li>
        <li className='pr-4'>
            <Link className='flex'>How we help <img src={vect} className='hidden mt-7 ml-2 lg:h-2.5 lg:w-5 lg:mt-2 lg:pt-1 lg:pl-1' alt="" /> </Link>
        </li>
      </ul>
      <Link className='hidden md:flex pr-10 lg:pt-2 pt-10 flex justify-center items-center gap-6'>
      <button className='bg-green-600 text-white w-32 h-12'>Contact us</button>
      </Link>
     <div className='md:hidden pr-4 pt-4'>
      <button onClick={toggleNav}>{isOpen? <FaTimes size={'50px'}></FaTimes>:<FaBars size={'50px'}></FaBars>} </button>
     </div>
    </nav>
    {isOpen &&(
      <div>
         <ul className='flex flex-col justify-center items-center text-5xl gap-y-10 lg:h-16 lg:w-96 lg:flex lg:gap-y-10 lg:pt-4 lg:text-base lg:flex-row'>
        <li className='pr-4'>
            <Link className='underline'>Home</Link>
        </li>
        <li className='pr-4'>
            <Link>Gallery</Link>
        </li>
        <li className='pr-4'>
            <Link className='flex'>About Us <img src={vect} className='hidden mt-7 ml-2 lg:h-2.5 lg:w-5 lg:mt-2 lg:pt-1 lg:pl-1' alt="" /> </Link>
        </li>
        <li className='pr-4'>
            <Link className='flex'>How we help <img src={vect} className='hidden mt-7 ml-2 lg:h-2.5 lg:w-5 lg:mt-2 lg:pt-1 lg:pl-1' alt="" /> </Link>
        </li>
      </ul>
      </div>
    )}
    </>
  )
}

export default Navbar
