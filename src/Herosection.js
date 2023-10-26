import React from 'react'
import rocket from "./image/rocket.png"


const Herosection = () => {
  return (
    <div className='bg-[url("./image/bg.png")] bg-cover bg-no-repeat md:flex md:justify-between'>
    <div className='md:mt-10 h-auto'>
        <div className=''>
        <h1 className=' text-white font-bold   text-3xl ml-12 mr-12  pt-10  md:text-4xl md:leading-normal md:font-exterabold
         md:text-white md:ml-14 md:pt-20 md:pb-10 uppercase'>Cryptocurrency has revolutionized <br/> the way we view and <br/>interact with finance</h1>
<p className=' ml-14 mr-14 text-base leading-6 mt2 mt-4 text-white  text-bold'>
Born from
decentralized ideals, it offers a new horizon of opportunities <br/> untethered from traditional
financial constraints</p>
        </div>
       <div className='ml-14  mt-10 pb-10'>
        <button className='bg-smartstaking-600 text-white pr-4 pl-4 pt-3 pb-3  rounded-sm'>ExploreIOD</button>
       </div>
    </div>
    <div className='md:flex md:justify-start md:w-[550px] mt-20'>
      <img src={rocket} className=' md:w-8/12 md:mt-16 animate-bounce'/>
    </div>
    </div>
  )
}

export default Herosection