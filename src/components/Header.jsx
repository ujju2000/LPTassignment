
import React from 'react'
import {Link} from 'react-router-dom';

import {MdArrowDropDown} from 'react-icons/md';
const buttonStyle = 'rounded-[23px] border-2 h-[50px] w-[144px] p-[2px] text-[25px] ';

export default function Header() {
  return (
    <div style = {{boxShadow: '0px 7px 6px 0px rgba(0, 0, 0, 0.25)'}} className = 'w-full px-10 py-4  flex items-center justify-between'>
        <div className = 'w-[200px] '>
            <Link to ='/'><img src="assets/Logo.png" alt="" className='w-[153px] h-[80px] object-contain'/></Link>
        </div>

        <ul className = 'flex w-3/4 items-center justify-evenly text-[30px] leading-normal '>
            <li className = 'px-10 flex '>
                <span>Filters</span> 
                <MdArrowDropDown className = 'mt-3' size = {30} />
            </li>
            <li>About Us</li>
            <li>Blog</li>
            <button className = 'w-[280px] h-[52px] rounded-[18px] border-2 border-[#047E70] p-2 text-[25px]'>Earning Calculator</button>
        </ul>
        <div className = 'w-1/4 flex items-center justify-evenly' >
            <Link to = '/signup'><button className = {buttonStyle}>Login</button></Link>
            <Link to = '/signup'><button className = {`${buttonStyle} bg-[#047E70] text-white`}>Signup</button></Link>
        </div>
       
    </div>
  )
}
