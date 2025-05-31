import React from 'react';
import { GoArrowRight } from "react-icons/go";

interface AnnouncementSlideProps {
  text: string;
  link: string;
}

const AnnouncementSlide: React.FC<AnnouncementSlideProps> = ({ text, link }) => (
  <div className="flex-shrink-0 w-full flex justify-center items-center" style={{ minWidth: '100%' }}>
    <a
      href={link}
      className="text-sm xl:text-base 3xl:text-xl font-medium leading-[150%] font-outfit inline-flex items-center gap-2.5 justify-center h-6 xl:h-7 3xl:h-8"
    >
      {text} <GoArrowRight className='size-5 xl:size-6 3xl:size-7.5'/>
    </a>
  </div>
);

export default AnnouncementSlide;
