import React from 'react'

import image from "./image/smart_logo.png"
import AccountBalanceWalletIcon from '@mui/icons-material/AccountBalanceWallet';
import MenuIcon from '@mui/icons-material/Menu';

const Header = () => {
  return (
    
    <div className='flex flex-row justify-between items-center p-2 bg-white'>
        <div className='ml-0'>
        <img src={image} alt='image' className='w-[200px] h-[70px] object-cover'/>
        </div>
        
         <div className='  items-center mt-[203px] md:mt-0 md:justify-end md:ml-[300px]  absolute md:relative'>
          <ul className=' hidden bg-smartstaking-500 md:bg-white text-sm  border-b-white capitalize md:flex flex-row text-black m-4 md:uppercase pl-2 md:text-sm font-semibold '>
            
            <li className='border-b-[1px bg-gray-100] hover:text-smartstaking-600 cursor-pointer'> Home </li>
            <li className='pl-3 pr-3 hover:text-smartstaking-600 cursor-pointer'> Project </li> 
            <li className='pl-3 pr-3 hover:text-smartstaking-600 cursor-pointer'> Stacking</li>
            <li className='pl-3 pr-3 hover:text-smartstaking-600 cursor-pointer'> Pages </li>
            <li className='pl-3 pr-3 hover:text-smartstaking-600 cursor-pointer'> Blog </li>
            <li className='pl-3 pr-3 hover:text-smartstaking-600 cursor-pointer'> Contact</li>
            
          </ul>
          
          </div>   
          <div className='flex col-auto md:mr-10'>
          <button className=' hidden md:bg-smartstaking-600  rounded-md p-3 w-32 md:block md:mt-1 md:text-white md:text-base md:text-semi-bold md:font-semi-bold md:relative text-start'>Connect</button>
          <AccountBalanceWalletIcon className=' text-gray-400 text:hover-  md:text-white  md:absolute mr-3 ml-[80px] md:mt-4 mt-2 cursor-pointer'/>
          <div className='md:hidden'>
          <MenuIcon className=' md:hidden text-smartstaking-600 mt-2 mr-6 cursor-pointer'
          
          />
          </div>
          </div>
       
    
     </div>
    
  )
}

export default Header