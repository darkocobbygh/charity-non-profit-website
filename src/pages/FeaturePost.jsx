import React from 'react'
import scho from '../assets/Rectangle 28802.png'
import './featurepost.css'
import loadi from '../assets/Rectangle 2885.png';
import vec from '../assets/vec.png';
import vectt from '../assets/vectt.png';
const FeaturePost = () => {
  return (
    <div className='lg:flex lg:pb-10 lg:mb-20 pl-4 h-full pr-4'>
      <div className='welcome-to-charity lg:pl-10 pb-2'>
        <h5 className='lg:text-2xl text-2xl lg:text-left text-center font-semibold'>Welcome to Charity</h5>
        <h2 className='text-4xl lg:font-bold lg:text-left text-center'>Let Us Come Together <br /> To Make a Difference</h2>
        <p className='text-base font-normal pt-4'>Lorem ipsum dolor sit amet, consetetur sadipscing elitr, sed diam <br /> nonumy tempor invidunt ut labore et dolore magna aliquyam <br /> erat, sed diam voluptua. At vero eos et accusam et justo.</p>
       <div className='flex lg:flex-row flex-col gap-4'>
       <div className='bg-green-200 lg:h-36 lg:w-60 lg:mr-10 mission'>
        <div className='lg:flex mt-4 pl-4'>
        <img src={vec} alt="" className='lg:pr-4 items-center justify-center flex' /> 
        <p className='lg:text-3xl text-4xl text-center text-green-600'>Our mission</p>
        </div>
            <p className='lg:pl-2 lg:pt-4'>Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr, <br /> sed diam</p>
        </div>
        <div className='bg-green-200 lg:h-36 lg:w-60 lg:mr-10 mission'>
        <div className='lg:flex lg:mt-4 lg:pl-4'>
        <img src={vectt} alt="" className='lg:pr-4' />
        <p className='lg:text-3xl lg:text-center text-green-600'> Our vision</p>
        </div>
            <p className='lg:pl-2 lg:pt-4'>Lorem ipsum dolor sit amet, <br /> consetetur sadipscing elitr, <br /> sed diam</p>
        </div>
       </div>
        <div className='flex justify-between'>
        <h5>Donations</h5>
        <p className='lg:pr-10 pr-2'>75%</p>
        </div>
       <div className='loads'>
       <img src={loadi} alt="" />
       </div>
      </div>
      <div className='schol pt-4 lg:pt-0 relative'>
        <img src={scho} alt="abou" className='sch w-44 h-44' />
        <div className='toge lg:mb-20 lg:pb-10 flex lg:justify-center lg:items-center absolute top-1/4 left-1/4'>
            <ul className='togetherness pl-5'>
                <li className='text-green-600'>Together, we're going to make the future</li>
                <li>children where we are able to fulfill all</li>
                <li>their requirements to keep them safe from withered world</li>
                <li>We have already stepped out and start changing the world</li>
                <li>Keeping safe them from war, inhumanity</li>
            </ul>
        </div>
        </div>
    </div>
  )
}

export default FeaturePost
