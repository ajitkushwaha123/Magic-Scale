import React from 'react'
import Button from '../components/Button'
import { AboutImg } from '../assets'

const Hero = () => {
  return (
    <div className='w-full h-screen px-[100px] py-[164px] bg-mainBg mt-[-80px]'>
      <div className='w-full flex '>
        <div className='w-[50%] px-[50px]'>
            <h3 className='text-[17px] leading-7 text-[#111] font-medium mb-[23px]'> -Food Consulting Service </h3>

            <p className='font-medium leading-[1.1] text-[70px] capitalize '>Food <span className='text-btn'>Regitration</span>
 <br /> Service Agency</p>

            <p className='text-[15px] pt-[25px] text-[#72747c] pr-[75px] leading-8 mb-[40px]'>Lorem ipsum dolor sit amet consectetur adipisicing elit. Deleniti facere nisi, ut veritatis laudantium non nos.</p>
            
            <Button bgColor={"btn"}
             colors={"#fff"} 
             hoverBg={"#fff"} 
             title="Let’s talk — Send a message"
             hoverColor={"#111"}
             />
        </div>

        <div>
            <div>
                <img src={AboutImg}/>
            </div>

            <div className='absolute right-28 top-40 animate-bounce'><img className='rounded-full w-[100px]' src='http://khabar4u.in/wp-content/uploads/2020/06/og-magicpin-icon.png'/></div>
            <div className='absolute right-50 bottom-20 animate-bounce'><img className='w-[160px]' src='https://1000logos.net/wp-content/uploads/2021/05/Swiggy-emblem.png'/></div>
            <div className='absolute right-45 top-60 animate-bounce'><img className='w-[120px]' src='https://blogger.googleusercontent.com/img/b/R29vZ2xl/AVvXsEi-uGiQUqqdyVd5f5WggAZInmglTur8FsVOSJj71ZfYwBMVnZWt3zskcbD5aJo3lSe4SmqfmRxdBReyRh9YKdW87wMk4C2D-tGSK5IahdDGuApnboIiWCfSegMuy5gzU1m9eCXOdI8P4h1yrfBvp9bYfvuDksQzHKvFKrwbhBWkQ6wgB_B15EbobuiZ/s16000/image2.png'/></div>
            <div className='absolute right-20 rounded-md bottom-10 animate-bounce'><img className='w-[90px] rounded-xl' src='https://logodownload.org/wp-content/uploads/2019/05/uber-eats-logo-1.png'/></div>
        </div>

      </div>
    </div>
  )
}

export default Hero