import React from 'react'
import rocket from "./image/rocket.png"


const Herosection = () => {
  return (
    <div className='bg-[url("./image/bg.png")] bg-cover bg-no-repeat md:flex md:justify-between'>
    <div className='md:mt-20 h-auto'>
        <div className=''>
        <h1 className=' text-white leading-relaxed font-bold   text-6xl ml-12 leading-20 pt-14  md:text-6xl md:font-bold w-50
         md:text-white md:ml-14 md:pt-20 md:pb-10'>WEB 3.0 <br/>
LAUNCHPAD <br/>
FOR IDO & INO</h1>
<p className='ml-14  text-base leading-6 mt2  text-white  text-bold'>The next generation gaming ecosystem for IDO's and INO <br/>launchpad web 3.0 platform</p>
        </div>
       <div className='ml-14  mt-10 pb-10'>
        <button className='bg-teal-400 pr-4 pl-4 pt-3 pb-3  rounded-sm'>ExploreIOD</button>
       </div>
    </div>
    <div className='flex justify-start w-[550px] mt-20'>
      <img src={rocket} className=' w-8/12 mt-16 animate-bounce'/>
    </div>
    </div>
  )
}

export default Herosection