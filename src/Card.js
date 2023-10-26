import React from 'react'
import boxImage from "./image/02.jpg"

import squarbox from "./image/6.png"

const Card = ({topImage,heading, secondHeading, amount, percent, paragraph}) => {
  return (
    <div className='mr-14 mt-12'>
    <div className='w-[330px] bg-smartstaking-500'>
      <img src={boxImage}
      className='relative rounded-t-md'
      />

      <div className='relative'>
       <img src={topImage}
      className='absolute bottom-0 right-0
      mr-3 mb-32 w-8 
      border border-black rounded-full
      bg-black
      '
      />
      </div>
    
      <div className='flex ml-4 relative'>
        {/* <div>
        <img src={squarbox} 
        className='w-16 h-16 rounded-sm border-2  absolute bottom-0 border-teal-700'/>
        </div> */}
        <div className=' w-64 justify-start'>
          <h1 className=' text-white font-bold mt-4  
           bg-smartstaking-500 '>
        {heading}
          </h1>
         
        </div>
      </div>
      <div className='flex justify-between mr-4 ml-4 mt-10'>
        <div className='text-gray-400'>
          <p className='font-bold font-base'>{secondHeading}</p>
         
        </div>
        <div className='flex flex-col font-bold text-smartstaking-600'>
          <span></span>
          
        </div>
      </div>
      <div className='ml-4 mr-4 text-gray-400 mt-3 pb-6'>
        <p>{ paragraph}</p>
        <p className='text-smartstaking-600 font-bold mt-2'>{amount}<span className='text-white font-bold ml-2'>{percent}</span></p>
        <div className='bg-smartstaking-400 h-3  rounded-sm  relative mt-2'>
        <div className='bg-smartstaking-600  absolute  pl-24 h-3 rounded-l-sm' ></div>
        </div>

        <button className='bg-smartstaking-600 text-white w-32 rounded-sm  h-10 mt-6'>View Details</button>
        
      </div>
    </div>
  </div>
  )
}

export default Card