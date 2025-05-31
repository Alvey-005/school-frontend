import { cn } from '@/lib/utils';
import React from 'react';
import Image from 'next/image';
import { GoArrowRight } from "react-icons/go";

const Announcement = ({
  className,
}: {
  className?: string;
}) => {

    const announcements = [
    { text: "Admission is Open, Grab your seat now", link: "/admission" },
    { text: "New courses launched this month!", link: "/courses" },
    { text: "Scholarships available for early applicants", link: "/scholarships" },
  ];
  return (
    <div className={cn(
      "relative bg-primary-90 border-2 border-secondary-15 rounded-[6px] py-3 text-center overflow-hidden",
      className
    )}>
      {/* Top-left decorative icons */}
      {/* Responsive top-left image: mobile */}
      <div className="absolute -top-0.5 -left-2 flex items-start xl:hidden">
        <Image
          src="/svg/mobile-nav-top-left.svg"
          alt="Mobile Announcement Icon"
          width={50}
          height={50}
          className="block"
        />
      </div>
      {/* Responsive top-left image: laptop */}
      <div className="absolute top-0 left-0 hidden xl:flex 3xl:!hidden items-start">
        <Image
          src="/svg/laptop-nav-top-left.svg"
          alt="Laptop Announcement Icon"
          width={180}
          height={180}
          className="block"
        />
      </div>
      {/* Responsive top-left image: desktop */}
      <div className="absolute top-0  3xl:-top-5  left-0 3xl:-left-2 hidden 3xl:flex items-start">
        <Image
          src="/svg/desktop-nav-top-left.svg"
          alt="Desktop Announcement Icon"
          width={250}
          height={250}
          className="block"
        />
      </div>

      {/* Main announcement text */}
      {/* <div className='text-sm xl:text-base 3xl:text-xl font-medium leading-[150%] font-outfit inline-flex items-center gap-2.5'>
        Admission is Open, Grab your seat now <GoArrowRight className='size-5 xl:size-6 3xl:size-7.5'/>
      </div> */}

              <div
          className="animate-announcement-slider flex flex-row"
          style={{
            animationDuration: `${announcements.length}s`,
          }}
        >
          {announcements.map((announcement, idx) => (
            <a
              key={idx}
              href={announcement.link}
              className="text-sm xl:text-base 3xl:text-xl font-medium leading-[150%] font-outfit inline-flex items-center gap-2.5 justify-center h-6 xl:h-7 3xl:h-8"
            >
              {announcement.text} <GoArrowRight className='size-5 xl:size-6 3xl:size-7.5'/>
            </a>
          ))}
        </div>

      {/* Top-right decorative icons */}
      {/* Responsive top-right image: mobile */}
      <div className="absolute top-0 right-0 flex items-start xl:hidden">
        <Image
          src="/svg/mobile-nav-top-right.svg"
          alt="Mobile Announcement Icon"
          width={50}
          height={50}
          className="block"
        />
      </div>
      {/* Responsive top-right image: laptop */}
      <div className="absolute top-0 right-0 hidden xl:flex 3xl:!hidden items-start">
        <Image
          src="/svg/laptop-nav-top-right.svg"
          alt="Laptop Announcement Icon"
          width={180}
          height={180}
          className="block"
        />
      </div>
      {/* Responsive top-right image: desktop */}
      <div className="absolute top-0 3xl:-top-5 right-0 hidden 3xl:flex items-start">
        <Image
          src="/svg/desktop-nav-top-right.svg"
          alt="Desktop Announcement Icon"
          width={250}
          height={250}
          className="block"
        />
      </div>

      {/* Bottom-right globe icon */}
      <div
        className="absolute -bottom-[60%] xl:-bottom-[40%] -right-[20px] xl:right-1/4  size-[50px] xl:size-[30px] bg-center bg-no-repeat z-10"
      >
        <Image src="/svg/globe.svg" alt="Globe Icon" width={50} height={50} />
      </div>

      {/* Top-left globe icon */}
      <div
        className="absolute bottom-[60%] 3xl:bottom-[20%] left-0 xl:left-1/4 size-[33px] xl:size-[50px] 3xl:size-[72px] bg-center bg-no-repeat z-10"
      >
        <Image src="/svg/globe.svg" alt="Globe Icon" width={72} height={72} />
      </div>
    </div>
  );
};

export default Announcement;
