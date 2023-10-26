import React from 'react'
import smartlogo from "./image/smart_logo.png"
import EmailIcon from '@mui/icons-material/Email';
import TelegramIcon from '@mui/icons-material/Telegram';
import TwitterIcon from '@mui/icons-material/Twitter';

const Footer = () => {
  return (
    <div className='flex flex-col justify-center bg-white-600 h-150  '>
        <div className='flex justify-center mr-10 mt-32'>
         <div className='flex justify-center relative' >
          <img src={smartlogo } className='w-100 h-40'/>
         
          
          
          </div>   
          <div className='flex justify-center gap-5 text-white mt-[70px]' >
          <EmailIcon className='  border  border-smartstaking-600 rounded-sm cursor-pointer hover:bg-smartstaking-700'/>
          <TelegramIcon className='  border  border-smartstaking-600 rounded-sm cursor-pointer hover:bg-smartstaking-700'/>
          <TwitterIcon className='  border  border-smartstaking-600 rounded-sm cursor-pointer hover:bg-smartstaking-700'/>
          </div>
        </div>
        <div className='flex justify-center pb-4
         border-[1px] border-l-0 pt-2 border-t-gray-700 text-gray-400'>
            <p className='mt-2'>SmartStaking © 2023 | All Rights Reserved</p>
        </div>
    </div>
  )
}

export default Footer