import React from 'react'
import Card from "./Card"
import icon_2 from "./image/metic.png"
import topIcon from "./image/binance.png"
import icon_1 from "./image/solana.png"

import ArrowBackIcon from '@material-ui/icons/ArrowBack';
import ArrowForwardIcon from '@material-ui/icons/ArrowForward';
const Herosection2 = () => {
  return (
    <div className='w-full md:flex justify-between  bg-smartstaking-400 mt-20 h-auto overflow-auto'>
        <div className='ml-14'>
           <h4 className='text-teal-400 text-2xl mt-6 font-sami-boldS'>
            Trending</h4>
           <h1 className='text-white md:text-4xl font-bold mt-5 '>
           Most Popular IDO <br/> Projects
           </h1>
           <p className='text-white mt-7'>Lorem ipsum dolor sit, amet consectetur <br/>
adipisicing elit. Cum, quod?

</p>
<div className='mt-8'>
  <button className='bg-smartstaking-500 w-12 h-12
   text-teal-400 rounded-sm skew-y-50'><ArrowBackIcon/></button>
  <button className='bg-smartstaking-500 w-12 h-12 ml-4 text-teal-400 rounded-sm'><ArrowForwardIcon/></button>
</div>
        </div>
  <div className=' ml-14 items-center md:flex md:overflow-auto'>
  <Card
  topImage={icon_2}
  />
   <Card
   topImage={ topIcon}
   />
   <Card
   topImage={icon_1}
   />
  </div>
   
    
    </div>
  )
}

export default Herosection2