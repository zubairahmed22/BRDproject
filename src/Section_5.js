import React from 'react'

const Section_5 = () => {
  return (
    <div>
        <div className='mt-10 md:flex justify-center flex flex-col items-center'>
        <p className='text-smartstaking-600 text-[20px]
        font-bold tracking-wide mt-10 ml-6'>Explore</p>
        <h1 className='text-white font-bold text-4xl mt-6'>Our Roadmap</h1>
        <div className='bg-[url("./image/header-svg.svg")] h-6 w-[150px] mt-4 ml-6'></div>
     </div>
    <div className='md:flex md:justify-between mt-10'>
      <div className='md:ml-20'>

        <div className='  pl-4  pr-4 md:w-[500px] mt-10 ml-4 mr-4 bg-smartstaking-500 md:mt-[270px] pb-10 rounded-md'>
          <div className=' flex justify-between md:flex pt-5 md:justify-between ml-10 mr-10'>
            <h1 className='text-white mt-6 font-bold'>Social Media Engagement</h1>
            <p className='mt-6 font-extrabold text-smartstaking-600'>02</p>
          </div>
          <div className='ml-10 mr-10'>
            <p className='text-ms text-gray-400 text-left mt-4'>
            The crypto world thrives on community. We aim to carve out a
strong and engaging digital footprint across various platforms like Twitter, Telegram, and
Discord. Regular updates, interactive sessions, and transparent communications will build trust
and foster a cohesive $MART community.

            </p>
          </div>
        </div>

        <div className=' md:w-[500px] mt-10 ml-6 mr-6 pl-4 pr-4 bg-smartstaking-500 md:mt-[270px] pb-10 rounded-md'>
          <div className='flex justify-between pt-5 md:justify-between ml-10 mr-10'>
            <h1 className='text-white mt-6 font-bold'>Smart Contract Development</h1>
            <p className='mt-6 font-extrabold text-smartstaking-600'>04</p>
          </div>
          <div className='ml-10 mr-10'>
            <p className='text-ms text-gray-400 text-left mt-4'>
            The backbone of any crypto project. Our focus is on developing
a robust, secure, and functional token smart contract, rigorously tested to prevent
vulnerabilities and ensure seamless transactions.

            </p>
          </div>
        </div>





      </div>
      <div className='md:flex  md:bg-smartstaking-600 md:h-auto md:mt-6 md:ml-4 md:w-3 md:rounded'></div>
      <div className='md:mr-20'>

      <div className='md:w-[500px]  mr-6 ml-6 pl-4 pr-4 bg-smartstaking-500 pb-10 rounded-md mt-6'>
          <div className='flex pt-5 justify-between ml-10 mr-10'>
            <h1 className='text-white mt-6 font-bold'>Website Development</h1>
            <p className='mt-6 font-extrabold text-smartstaking-600 text-1xl'>01</p>
          </div>
          <div className='ml-10 mr-10'>
            <p className='text-ms text-gray-400 text-left mt-4'>
            The majority of people will first interact with Smart Staking via our
social media channels and website. Our primary objective is to create an interactive, usercentric platform that offers comprehensive insights into the project. This digital space will
provide necessary information while encouraging community interaction and feedback.
            </p>
          </div>
        </div>
      

      
        <div className=' md:w-[500px] mr-6 ml-6 pl-4 pr-4 mt-6 bg-smartstaking-500 pb-10 rounded-md md:mt-[260px]'>
          <div className='flex pt-5 justify-between ml-10 mr-10'>
            <h1 className='text-white mt-6 font-bold'>Fair Launch on Pink Sale</h1>
            <p className='mt-6 font-extrabold text-smartstaking-600 text-1xl'>03</p>
          </div>
          <div className='ml-10 mr-10'>
            <p className='text-ms text-gray-400 text-left mt-4'>
            Transparency is key. Our initial token distribution via Pink Sale or
similar platforms will be designed to ensure every participant gets a fair opportunity, laying the
foundation for a decentralized and inclusive community.

            </p>
          </div>
        </div>

      </div>
    </div>
    </div>
  )
}

export default Section_5