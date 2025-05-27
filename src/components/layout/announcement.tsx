import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';

const Announcement = ({
  className,
}: {
  className?: string;
}) => {
  return (
    <div className={cn(
      "relative bg-primary-90 border-2 border-secondary-15 rounded-[6px] py-3 text-center overflow-hidden",
      className
    )}>
      {/* Top-left decorative icons */}
      <div className="absolute top-0 left-0 flex items-start">
        {/* Responsive top-left image: mobile */}
        <Image
          src="/svg/mobile-nav-top-left.svg"
          alt="Mobile Announcement Icon"
          width={50}
          height={50}
          className="block xl:hidden" // Visible on mobile, hidden from xl upwards
        />
        {/* Responsive top-left image: laptop */}
        <Image
          src="/svg/laptop-nav-top-left.svg"
          alt="Laptop Announcement Icon"
          width={180}
          height={180}
          className="hidden xl:block 3xl:!hidden" // Hidden on mobile, visible from xl up to 3xl
        />
        {/* Responsive top-left image: desktop */}
        <Image
          src="/svg/desktop-nav-top-left.svg"
          alt="Desktop Announcement Icon"
          width={250}
          height={250}
          className="hidden 3xl:block" // Hidden below 3xl, visible from 3xl upwards
        />
      </div>

      {/* Main announcement text */}
      <div className='text-sm font-medium leading-[150%] font-outfit'>
        Admission is Open, Grab your seat now
      </div>

      {/* Top-right decorative icons */}
      <div className="absolute top-0 right-0 flex items-start">
        {/* Responsive top-right image: mobile */}
        <Image
          src="/svg/mobile-nav-top-right.svg"
          alt="Mobile Announcement Icon"
          width={50}
          height={50}
          className="block xl:hidden" // Visible on mobile, hidden from xl upwards
        />
        {/* Responsive top-right image: laptop */}
        <Image
          src="/svg/laptop-nav-top-right.svg"
          alt="Laptop Announcement Icon"
          width={180}
          height={180}
          className="hidden xl:block 3xl:!hidden" // Hidden on mobile, visible from xl up to 3xl
        />
        {/* Responsive top-right image: desktop */}
        <Image
          src="/svg/desktop-nav-top-right.svg"
          alt="Desktop Announcement Icon"
          width={250}
          height={250}
          className="hidden 3xl:block" // Hidden below 3xl, visible from 3xl upwards
        />
      </div>

      {/* Bottom-right globe icon */}
      <div
        className="absolute bottom-0 right-0 size-[50px] bg-center bg-no-repeat z-10"
      >
        <Image src="/svg/globe.svg" alt="Globe Icon" width={50} height={50} />
      </div>

      {/* Top-left globe icon */}
      <div
        className="absolute top-0 left-0 size-[33px] bg-center bg-no-repeat z-10"
      >
        <Image src="/svg/globe.svg" alt="Globe Icon" width={33} height={33} />
      </div>
    </div>
  );
};

export default Announcement;
