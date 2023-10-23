import React from 'react'
import { useState } from 'react';
import image from "./image/smart.png"
import AccountBalanceWalletIcon from '@material-ui/icons/AccountBalanceWallet';
import MenuIcon from '@material-ui/icons/Menu';

const Header = () => {
  return (
    
    <div className='flex flex-row justify-between items-center p-2 bg-smartstaking-500'>
        <div className='ml-10'>
        <img src={image} alt='image' className='w-[200px] h-[70px] object-cover'/>
        </div>
        
         <div className=' flex w-full flex-col items-center mt-[203px] md:mt-0 md:justify-end md:ml-[300px]  absolute md:relative'>
          <ul className=' hidden bg-smartstaking-500  text-sm text-white border-b-white capitalize md:flex flex-row md:text-white m-4 md:uppercase pl-2 md:text-sm font-semibold '>
            
            <li className='border-b-[1px bg-gray-100]'> Home <span className='p-3  font-bold text-base pl-72 md:pl-3'> + </span></li>
            <li> Project <span className='p-3 font-bold text-base pl-72 md:pl-2 '> + </span></li>
            <li> Stacking <span className='p-3 font-bold text-base pl-72 md:pl-2'> + </span></li>
            <li> Pages <span className='p-3 font-bold text-base pl-72 md:pl-2'> + </span></li>
            <li> Blog <span className='p-3 font-bold text-base pl-72 md:pl-2'> + </span></li>
            <li className='mt-1'> Contact</li>
            
          </ul>
          
          </div>   
          <div className='flex col-auto md:mr-10'>
          <button className=' hidden md:bg-teal-500 rounded-md p-3 w-32 md:block md:text-black md:text-base md:text-sami-bold md:font-sami-bold md: relative text-start'>Connect</button>
          <AccountBalanceWalletIcon className=' text-gray-400 text:hover-  md:text-black md:absolute mr-3 ml-[80px] md:mt-3 mt-2 cursor-pointer'/>
          <div className='md:hidden'>
          <MenuIcon className=' md:hidden text-white mt-2 mr-6 cursor-pointer'
          
          />
          </div>
          </div>
       
    
     </div>
    
  )
}

export default Header