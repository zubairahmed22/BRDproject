
import React from 'react'
import Card from "./Card"
import eth_icon from "./image/eth.png"
import avel_icon from "./image/aval.png"
import binance_icon from "./image/binance.png"
import Card_2 from './Card_2'
const Herosection_4 = () => {
  return (
    <div className='bg-smartstaking-400 w-full'>
        <div className='flex flex-col ml-14 mr-14 mt-16'>
            <p className='text-teal-400 text-[20px] font-bold '>IDO Project</p>
            <div className='md:flex md:justify-between'>
                <h1 className='text-white text-4xl font-bold mt-4 '>Upcoming IDO</h1>
                <button className='bg-teal-400 w-20 h-10 rounded-md 
                font-semibold'>View All</button>
            </div>
            <div className='md:flex mt-6'>
              <Card
              topImage={eth_icon}
              />
              <Card
              topImage={avel_icon}
              />
              <Card
              topImage={binance_icon}
              />
               
            </div>
        </div>
        <div className='  flex-col mt-14'>
        <div className='mt-10 md:flex justify-center flex-col items-center'>
        <p className='text-teal-400 text-[20px]
        font-bold tracking-wide mt-10 ml-6'>Previous</p>
        <h1 className='text-white font-bold text-4xl mt-6'>Completed Project</h1>
        <div className='bg-[url("./image/header.svg")] h-6 w-[178px] mt-4 ml-6'></div>
     </div>
      <div>
      <Card_2/>
      <Card_2/>
      <Card_2/>
      </div>
      
        </div>
    </div>
  )
}

export default Herosection_4