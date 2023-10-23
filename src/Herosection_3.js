import React from 'react'
// import bgimage from "./image/header.svg"
import pngImage from "./image/1.png"

const Herosection_3 = () => {
  return (
    <div className='flex flex-col items-center mt-20 bg-smartstaking-500'>
     <div className='mt-10'>
        <p className='text-teal-400 text-2xl 
        font-bold tracking-wider mt-10 ml-12'>Getting Start</p>
        <h1 className='text-white font-bold text-4xl mt-6'>Simple as 1,2,3</h1>
        <div className='bg-[url("./image/header.svg")] h-6 w-[178px] mt-4 ml-10'></div>
     </div>
     <div className='md:flex md:justify-evenly w-full '>
        <div className='items-center mt-10'>
       <img src={pngImage} className='ml-14'/>
       <h1 className='text-white font-bold text-2xl mt-4 ml-6'>
        1.Submit KYC</h1>
       <p className='text-white mt-5 text-center'>Lorem ipsum dolor sit amet consectetur <br/>
        adipiscing elit odio massa ege.</p>
        </div>
        <div className='items-center mt-10'>
       <img src={pngImage} className='ml-14'/>
       <h1 className='text-white font-bold text-2xl mt-4 ml-6'>
       2. Verify Wallet</h1>
       <p className='text-white mt-5 text-center'>Lorem ipsum dolor sit amet consectetur <br/>
        adipiscing elit odio massa ege.</p>
        </div>
        <div className='items-center mt-10'>
       <img src={pngImage} className='ml-14 hover:'/>
       <h1 className='text-white font-bold text-2xl mt-4 ml-6'>
       3. Start Staking</h1>
       <p className='text-white mt-5 text-center'>Lorem ipsum dolor sit amet consectetur <br/>
        adipiscing elit odio massa ege.</p>
        </div>
     </div>
     <div className='mt-20 pb-20'> 
     <button className='bg-teal-400 w-36 h-12 rounded-sm text-center items-center font-semibold'> Varify KYC</button>
     </div>
   
    </div>
  )
}

export default Herosection_3