import React from 'react'
import smile from '../assets/Rectangle 2880.png'
import mos from '../assets/Rectangle 2882.png'
import './about.css'
const AboutUs = () => {
  return (
    <div className='pt-0'>
      <div className='flex grid-cols-1 items-center justify-center lg:grid lg:grid-cols-2 lg:pt-20 lg:pl-40 lg:pb-60 pl-4 pl:h-screen'>
        <div className='images relative'>
        <img src={smile} alt="abou" className='smile' />
        <img src={mos} alt="abou" className='mores abosolute top-1/2 left-1/2' />
        </div>
        <div className='lg:pt-40 lg:pl-40 pt-10 pl-4'>
            <h3 className='text-lg font-semibold'>About us</h3>
        <h2 className='text-4xl font-bold'>Your Support is Really <br /> Powerful.​</h2>
        <p>The secret to happiness lies in helping others. Never <br />
            underestimate the difference YOU can make in the <br />
            lives of the poor, the abused and the helpless.</p>
        <button className='pl:bg-green-500 h-10 w-24  pl:w-32 pl:text-white text-white bg-green-500'>Read more</button>
        </div>
      </div>
    </div>
  )
}

export default AboutUs
