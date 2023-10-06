import React from 'react';
import {BsTwitter} from 'react-icons/bs';
import {BiLogoInstagramAlt} from 'react-icons/bi';
import {BsPinterest} from 'react-icons/bs';
import {AiFillYoutube} from 'react-icons/ai';
import './footer.css'
const Footer = () => {
  return (
    <div className='footer'>
      <hr className='footrule lg:h-4 text-gray-600'></hr>
      <div className='flex lg:justify-between lg:pl-10 lg:pr-10 lg:pt-20 pt-4 lg:flex-row flex-col gap-4 items-center h-full'>
      <div>
        <h3 className='text-base text-white'>Address</h3>
        <p className='text-gray-400'>A-272, Surajmal Vihar, Delhi, <br /> 11009281-8181-0860</p> <p className='text-gray-400 underline'>contact@vivekguptafoundation.in</p>
      </div>
      <div>
        <h3 className='text-base text-white'>Get In Touch</h3>
        <p className='text-gray-400'>Contact us <br /> Our services</p>
      </div>
      <div>
        <h3 className='text-base text-white'>Newsletter</h3>
        <div className='pt-14 flex'>
          <input type="text" placeholder='Enter Your Email' className='h-20 w-96 indent-4'/>
          <button className='subs h-16 text-white w-20 pt-4 items-center justify-center text-center'>Subscribe</button>
        </div>
        <p className='text-gray-400'>Your email is safe with us,we don’t spam.</p>
        <div className='pt-20'>
          <h3 className='text-white pb-4 pl-2'>Follow Me</h3>
          <div className='flex gap-2'>
          <BsTwitter size={'50px'} className='bg-white p-2 rounded-full '></BsTwitter>
          <BiLogoInstagramAlt size={'50px'} className='bg-white p-2 rounded-full'></BiLogoInstagramAlt>
          <BsPinterest size={'50px'} className='bg-white p-2 rounded-full'></BsPinterest>
          <AiFillYoutube size={'50px'} className='bg-white p-2 rounded-full'></AiFillYoutube>
          </div>
        </div>
         </div>
      </div>
    </div>
  )
}

export default Footer
