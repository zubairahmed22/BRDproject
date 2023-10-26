
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
            <p className='text-smartstaking-600 text-[20px] font-bold '>Tokenomics</p>
            <div className='md:flex md:justify-between'>
                <h1 className='text-white text-4xl font-bold mt-4 '>Token Information</h1>
                <button className='bg-smartstaking-600 hover:bg-white hover:text-smartstaking-600 text-white w-24 mt-10 h-10 rounded-md 
                font-semibold'>View All</button>
            </div>
            <div className='md:flex md:flex-wrap mt-6'>
            
            
              <Card
            
              heading="Allocation"
              secondHeading="Staking Rewards"
              amount="1,500,000"
              percent="tokens (15%)
              "
              paragraph="For incentivizing staking and liquidity provision."
              />
              <Card
             
              heading="Marketing & Community Engagement"
              secondHeading="Staking Rewards"
              amount="500,000"
              percent="tokens (5%)"
              paragraph="Fund’s marketing campaigns, partnerships, events, etc"
              />
              <Card
            
              heading="
              Product Development"
              secondHeading="Staking Rewards"
              amount="500,000"
              percent="tokens (5%)"
              paragraph="Supports ongoing development, enhancements, and security."
              />
               <Card
              
              heading="
              Fair Launch"
              secondHeading="Staking Rewards"
              amount="7,000,000"
              percent="tokens (70%)"
              paragraph="Facilitates a decentralized distribution during the public launch."
              />
               <Card
              
              heading="
              Team"
              secondHeading="Staking Rewards"
              amount="500,000"
              percent="tokens (5%)"
              paragraph="Rewards the core team for their invaluable contributions"
              />
              
            </div>
        </div>
        <div className='  flex-col mt-14'>
        {/* <div className='mt-10 md:flex justify-center flex-col items-center'>
        <p className='text-teal-400 text-[20px]
        font-bold tracking-wide mt-10 ml-6'>Previous</p>
        <h1 className='text-white font-bold text-4xl mt-6'>Completed Project</h1>
        <div className='bg-[url("./image/header-svg.svg")] h-5 w-[150px] mt-4 '></div>
     </div> */}
      {/* <div>
      <Card_2/>
      <Card_2/>
      <Card_2/>
      </div>
      <div className='flex justify-center mt-10 pb-4'>
      <button className='bg-teal-400 text-base w-32 h-12 rounded-md font-semibold'> View More</button>
      </div> */}
       
        </div>
    </div>
  )
}

export default Herosection_4