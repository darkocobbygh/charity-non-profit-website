import React from 'react'
import ya from '../assets/ya.png';
import './testimonials.css'
import diagonal from '../assets/diagonal-arrow-right-up.png';
import john from '../assets/Ellipse 25.png';
import jack from '../assets/Ellipse 258.png';
import sakib from '../assets/Ellipse 2500.png';

const Testimonials = () => {
  return (
    <div>
      <div className='flex lg:justify-between lg:pl-10 lg:pr-10 test'>
      <div className='testimonial lg:pb-4'>
      <h3 className='text-2xl text-green-600 font-normal'>Testimonial</h3>
      <h2 className='text-5xl text-black-600 font-semibold'>What People Say About <br /> Us</h2>
      </div>
      <div className='lg:pt-10'>
      <div className='diagno lg:h-16 lg:w-16 lg:bg-green-600 flex lg:justify-center lg:items-center'>
       <img src={diagonal} alt="" />
      </div>
      </div>
      </div>
      <div className='lg:flex lg:flex-row heart lg:pl-10 lg:pr-10  lg:pb-10 flex flex-col gap-4 items-center'>
        <div className='lg:w-96 lg:h-96 lg:border-2 lg:border-green-600 pl-4 pr-4 border-green-600 h-96 w-96 border-2 lg:pr-10 lg:mr-10 lg:pl-4 lg:items-center'>
            <img src={ya} alt="" className='pt-3'/>
            <h4 className='pt-10 text-2xl font-normal'>Kindness</h4>
            <p className='flex flex-wrap'>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is</p>
            <div className='pt-4 flex'>
              <div>
                <img src={john} alt="" />
                </div>
                <div className='pl-6 pt-2'>
                <h4>John Doe</h4>
                <p>Senior Gardener Farmer</p>
                </div>
            </div>
        </div>
        <div className='lg:w-96 lg:h-96 lg:border-2 lg:border-green-600 pl-4 pr-4 border-green-600 h-96 w-96 border-2 lg:pr-10 lg:mr-10 lg:pl-4 lg:items-center'>
        <img src={ya} alt="" className='pt-3' />
            <h4 className='pt-10 text-2xl font-normal'>Humanity</h4>
            <p>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is</p>
            <div className='pt-4 flex'>
              <div>
              <img src={jack} alt="" />
              </div>
              <div className='pl-4 pt-2'>
              <h4>John Doe</h4>
                <p>Senior Gardener Farmer</p>
              </div>
            </div>
        </div>
        <div className='lg:w-96 lg:h-96 lg:border-2 lg:border-green-600 border-green-600 pl-4 pr-4 h-96 w-96 border-2 lg:pr-10 lg:mr-10 lg:pl-4 lg:items-center'>
        <img src={ya} alt="" className='pt-3' />
            <h4 className='pt-10 text-2xl font-normal'>Ethics & Morality</h4>
            <p>Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is simply dummy text Lorem Ipsum is</p>
            <div className='pt-4 flex'>
              <div>
              <img src={sakib} alt="" />
              </div>
              <div className='pl-4 pt-2'>
              <h4>Sakib Hossain</h4>
                <p>Senior Gardener Farmer</p>
              </div>
            </div>
        </div>
      </div>
    </div>
  )
}

export default Testimonials
