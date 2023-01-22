import React from 'react'
import SearchIcon from '@mui/icons-material/Search';

import {
  FiberSmartRecord,
  Notifications,
  Search,
  Settings,
} from "@mui/icons-material";
import { IconButton } from "@mui/material";

function Header() {
  return ( 
    <div className='flex items-center w-full h-[80px] py-4 md:px-8 sm:px-4'>
    {/* Logo */}
    <img src="https://firebasestorage.googleapis.com/v0/b/videoblog-9a094.appspot.com/o/Images%2Fattachment_104755631.jfif?alt=media&token=3b8946b2-2808-4be7-99c6-76c911aa4bd5"
      alt="logo" 
      className="md:w-[60px] md:h-[60px] sm:w-[30px] sm:h-[30px] lg:ml-[22px]" />

    {/* Search Bar */}
    <div className='ml-20 bg-searchBg h-[40px] px-2 md:flex items-center rounded-md overflow-hidden
      sm:hidden'>
        <Search className='text-gray-400'/>
        <input type="text" placeholder="Search..." 
        className='bg-transparent w-full h-full outline-none border-none text-textColor placeholder-gray-400 px-2'
      />
    </div>
  {/* Profile Container */}
<div className='flex items-center justify-evenly h-[40px] lg:w-[25%] ml-auto'>
  <IconButton className='lg:mx-4'>
    <Settings className="text-gray-400 hover:text-textColor"/>
  </IconButton>

  <IconButton className='lg:mx-4'>
    <Notifications className="text-gray-400 hover:text-textColor"/>
  </IconButton>


  <div className='flex items-center'>
    <img src="https://firebasestorage.googleapis.com/v0/b/videoblog-9a094.appspot.com/o/Images%2Ficon-256x256.png?alt=media&token=9c5d387b-2745-4186-b33f-ac1cd721330b"
    alt=""
    className='w-[40px] h-[40px] rounded-full object-cover min-w-[40px]'  
      />
      <p className='text-textColor text-[16px] font-bold ml-2'>
    My name is Abdalrhman <span className='block text-[12px] text-gray-500'> Product Designer</span>
        </p>
    </div>

</div>
  </div>
  )
}

export default Header