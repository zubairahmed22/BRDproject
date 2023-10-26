import React from 'react'
import imageBox from "./image/6.png"
import binance from "./image/binance.png"

const Card_2 = () => {
  return (
    <div className=' pb-4 ml-4 mr-4  h-auto items-center  md:flex bg-smartstaking-500 md:mr-20 mt-20 md:h-40 md:pb-3
     rounded-sm md:ml-20 md:justify-between'>
        
        <div className='flex md:w-[500px] md:ml-4  md:justify-between items-center'>
            <img src={imageBox} className='  md:w-20 md:h-20 rounded-md mt-4'/>
            <div>
                <h1 className='text-white text-2xl ml-6 font-bold mt-4 md:mr-32'>Cyber balltleField</h1>
                <p className='text-gray-400 text-base ml-6 font-semibold mt-2'>Price(GAC)=0.59 BUSD</p>
            </div>
            <img src={binance} className=' ml-4 mt-4 md:w-10 md:mt-4'/>
        </div>
        <div className=' mt-4 md:mr-10 flex w-96 justify-between items-center'>
            <h3 className='text-white text-2lx ml-4 font-extrabold md:font-extrabold mt-4'>2 Days Ago</h3>
            <div className='w-64 justify-start'>
            <p className='text-gray-400 text-base font-semibold'>Raised Ammount</p>
        <p className='text-teal-400 font-bold mt-2'>5000 <span className='text-white font-bold'> / 15000 BUSD</span></p>
        <div className='bg-smartstaking-400 h-3  rounded-sm  relative mt-2'>
        <div className='bg-teal-400  absolute  pl-24 h-3 rounded-l-sm' ></div>
        </div>  
            </div>
        </div>
       
    </div>
  )
}

export default Card_2