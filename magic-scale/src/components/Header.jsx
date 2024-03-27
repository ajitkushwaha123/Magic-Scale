import React from 'react';
import { FaHeart } from "react-icons/fa";
import { FaUser } from "react-icons/fa";
import { FaShoppingCart } from "react-icons/fa";
import { Logo } from '../assets';
import { Link , NavLink } from 'react-router-dom';
import Button from './Button';

// import { IoIosArrowDown } from "react-icons/io";

const Header = () => {

  return (
     <>
       <nav className='bg-transparent w-full flex items-center justify-between h-[80px] z-10 sm:px-[100px] px-[40px]'>
          <div className='flex justify-between items-center'>
            <img height={"50px"} width={"160px"} src={Logo}/>
          </div>

          <div className='flex'>
            <ul className='flex text-[16px] leading-16 font-medium uppercase'>
                <li className='ml-5'>Home</li>
                <li className='ml-5'>Services</li>
                <li className='ml-5'>About</li>
                <li className='ml-5'>Contact</li>
            </ul>
          </div>

          <div className='rounded-xl  text-white hover:text-[#111] hover:bg-[#fff]'>
            <Button colors={"#fff"} title={"Enquiry"} bgColor={'btn'} hoverColor={"#111"} hoverBg={"#fff"} hoverBorder={"btn"}/>
          </div>
       </nav>
     </>
  )
}

export default Header

{/* <ul className='text-red-500 flex'>
            {navItems.map((nav , index) => {
                <li key={nav.id} className={`font-poppins  hover:text-primary cursor-pointer text-[14px] ${index === navItems.length - 1 ? 'pr-0' : 'pr-10'}`}>
                <NavLink to={nav.link}>
                   {nav.title}
                </NavLink>
                {/* {(index === 0 || index === 3 || index === 4) && <IoIosArrowDown />} */}
        //      </li>
        //     })}
        //   </ul> */}