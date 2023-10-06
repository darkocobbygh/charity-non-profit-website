import React from 'react'
import './home.css'
const Home = () => {
  return (
    <div>
      <div className='container h-screen flex flex-col justify-center items-center w-screen lg:h-screen lg:flex lg:justify-center lg:items-center lg:text-white lg:text-center lg:flex-col lg:w-full lg:h-screen
'>
        <p className='lg:text-2xl lg:font-semibold text-white text-3xl'>Give Hope For Homeless</p>
        <h1 className='lg:text-7xl text-white text-7xl text-center'>Helping Each Other <br /> Can Make World Better</h1>
        <p className='lg:text-gray-100 text-white text-2xl pl-2'>We Seek Out World Changers And Difference Makers Around The <br /> Globe,And Equip Them To Fulfill Their Unique Purpose.</p>
        <div className='lg:flex lg:pr-10 text-white'>
        <button className='lg:bg-lime-800 lg:flex lg:h-14 lg:w-40 lg:flex lg:justify-center lg:items-center lg:mr-5 text-white bg-lime-800 h-10 mr-2 w-40'>Donate Now</button>
        <button className='lg:bg-transparent lg:h-14 lg:w-40 lg:border-2 border-lime-800 border-2 text-white h-10 mr-2 w-40'>Know About Us</button>
        </div>
        </div>
    </div>
  )
}

export default Home
