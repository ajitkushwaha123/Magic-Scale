import React from 'react';
import { hoursIcon } from '../assets'; 

const TrustCard = ({ borderWidth = "2", iconImg, title, description }) => {
  // Set a default borderWidth if not provided
  return (
    <div className={`flex px-[20px] border-r-${borderWidth} border-dotted border-gray-400`}>
      <img className='w-[83px] h-[83px]' src={iconImg} alt={title} /> {/* Added alt text for accessibility */}
      <div className='px-[20px]'>
        <strong className='mb-[6px] font-medium leading-[1.2] text-[#111] text-[24px] capitalize pb-[3px]'>{title}</strong>
        <p className='font-normal pt-[12px] text-[16px] leading-6 text-[#72747c]'>{description}</p>
      </div>
    </div>
  );
};

export default TrustCard;
