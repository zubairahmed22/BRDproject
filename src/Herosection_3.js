import React from 'react'
import Binance from "./image/binance-usd-busd-logo-A436FCF6B6-seeklogo.com.png"
// import bgimage from "./image/header.svg"
import pngImage from "./image/1.png"
import projectDev from "./image/dev.png"
import degitalcampgain from "./image/digital-campaign.png"

const Herosection_3 = () => {
  return (
    <div className='flex flex-col items-center  mt-20 bg-bg-gradient-to-r from-smartstaking-700 from-10% via-smartstaking-500 via-30% to-smartstaking-600 to-90% ..."'>
     <div className='mt-10 '>
        <p className='text-smartstaking-600 nd:text-4xl 
        md:font-bold md:tracking-wider md:mt-10 ml-6 text-3xl  font-extrabold'>Core Features and Vision</p>
        <h1 className='text-white md:ml-12 md:font-bold mt-2
        md:text-1xl md:mt-6'>Transactional Dynamics of the $MART Token</h1>
        <div className='bg-[url("./image/header-svg.svg")] h-5 w-[150px] md:mt-4 md:ml-32 ml-14 mt-4'></div>
     </div>
     <div className='md:flex  md:justify-between gap-20    mt-20 '>
        <div className='items-center mt-14   bg-smartstaking-700 p-4 rounded-md'>
       <img src={Binance} className='md:ml-16 w-36'/>
       <h1 className='text-white font-bold text-2xl mt-4 '>
       4% Redistribution in BUSD</h1>
       <p className='text-white mt-5  text-justify text-sm w-64'>This portion is designed to consistently reward holders. <br/> The
choice of BUSD, a stable coin steadfastly pegged to the US dollar</p>
        </div>
        <div className='items-center mt-10  bg-smartstaking-700 p-4 rounded-md'>
       <img src={projectDev} className='md:ml-16 w-40'/>
       <h1 className='text-white font-bold text-2xl mt-4'>
       2% Project Development</h1>
       <p className='text-white mt-5 text-sm text-justify w-64'>A project’s success is contingent upon continuous
evolution and betterment. <br/>This allocation is earmarked for research, technological </p>
        </div>
        <div className='items-center mt-16   bg-smartstaking-700 p-4 rounded-md'>
       <img src={degitalcampgain} className=' md:ml-16 w-32'/>
       <h1 className='text-white font-bold text-2xl mt-4'>
       2% For Marketing</h1>
       <p className='text-white mt-5 text-justify w-64'>Awareness and community engagement are indispensable. <br/>This allocation
fuels marketing initiatives, brand partnerships, and outreach efforts.</p>
        </div>
     </div>
     <div className='mt-20 pb-20'> 
     <button className='bg-smartstaking-600 w-36 h-12 text-white rounded-sm text-center items-center font-semibold'> Varify KYC</button>
     </div>
   
    </div>
  )
}

export default Herosection_3