import React from 'react'
import { Link } from 'react-router-dom'
import logo from '../assets/VGF Logo File  (1) 1.png';
import vect from '../assets/Vector.png'

const Navbar = () => {
  return (
    <nav className='h-screen lg:flex lg:justify-between lg:h-20 lg:items-start lg:pt-3'>
        <Link>
          <img src={logo} alt="" />
        </Link>
      <ul className='flex flex-col justify-center items-center text-7xl gap-y-10 lg:h-16 lg:w-96 lg:flex lg:gap-y-10 lg:pt-4 lg:text-base lg:flex-row'>
        <li className='pr-4'>
            <Link className='underline'>Home</Link>
        </li>
        <li className='pr-4'>
            <Link>Gallery</Link>
        </li>
        <li className='pr-4'>
            <Link className='flex'>About Us <img src={vect} className='h-6 mt-7 ml-2 lg:h-2.5 lg:w-5 lg:mt-2 lg:pt-1 lg:pl-1' alt="" /> </Link>
        </li>
        <li className='pr-4'>
            <Link className='flex'>How we help <img src={vect} className='h-6 mt-7 ml-2 lg:h-2.5 lg:w-5 lg:mt-2 lg:pt-1 lg:pl-1' alt="" /> </Link>
        </li>
      </ul>
      <Link className='pr-10 pt-10 flex justify-center items-center'>
      <button className='bg-green-600 text-white w-32 h-12'>Contact us</button>
      </Link>
    </nav>
  )
}

export default Navbar
