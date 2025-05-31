'use client';
import { cn } from '@/lib/utils';
import React from 'react';
import useEmblaCarousel from 'embla-carousel-react';
import { useCallback, useEffect, useRef } from 'react';
import { FaAngleLeft,FaAngleRight } from "react-icons/fa";
import ResponsiveImage from './ResponsiveImage';
import GlobeIcon from './GlobeIcon';
import AnnouncementSlide from './AnnouncementSlide';


const AUTOPLAY_INTERVAL = 30000; // 30 seconds

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

  const [emblaRef, emblaApi] = useEmblaCarousel({ loop: true });
  const autoplayRef = useRef<NodeJS.Timeout | null>(null);

  const autoplay = useCallback(() => {
    if (!emblaApi) return;
    if (autoplayRef.current) clearTimeout(autoplayRef.current);
    autoplayRef.current = setTimeout(() => {
      emblaApi.scrollNext();
    }, AUTOPLAY_INTERVAL);
  }, [emblaApi]);

  useEffect(() => {
    if (!emblaApi) return;
    emblaApi.on('select', autoplay);
    autoplay();
    return () => {
      if (autoplayRef.current) clearTimeout(autoplayRef.current);
      emblaApi.off('select', autoplay);
    };
  }, [emblaApi, autoplay]);

  // Embla Carousel Buttons
  const scrollPrev = useCallback(() => {
    if (emblaApi) emblaApi.scrollPrev();
  }, [emblaApi]);
  const scrollNext = useCallback(() => {
    if (emblaApi) emblaApi.scrollNext();
  }, [emblaApi]);

  return (
    <div className={cn(
      "relative bg-primary-90 border-2 border-secondary-15 rounded-[6px] py-3 text-center overflow-hidden",
      className
    )}>
      {/* Top-left decorative icons */}
      <ResponsiveImage
        mobileSrc="/svg/mobile-nav-top-left.svg"
        laptopSrc="/svg/laptop-nav-top-left.svg"
        desktopSrc="/svg/desktop-nav-top-left.svg"
        alt="Announcement Icon Left"
        mobileSize={{ width: 50, height: 50 }}
        laptopSize={{ width: 180, height: 180 }}
        desktopSize={{ width: 250, height: 250 }}
        position="left"
      />
      {/* Top-right decorative icons */}
      <ResponsiveImage
        mobileSrc="/svg/mobile-nav-top-right.svg"
        laptopSrc="/svg/laptop-nav-top-right.svg"
        desktopSrc="/svg/desktop-nav-top-right.svg"
        alt="Announcement Icon Right"
        mobileSize={{ width: 50, height: 50 }}
        laptopSize={{ width: 180, height: 180 }}
        desktopSize={{ width: 250, height: 250 }}
        position="right"
      />
      {/* Main announcement text replaced with Embla carousel and navigation buttons */}
      <div className="relative w-full flex items-center justify-between">
        {/* Left Button */}
        <button
          type="button"
          aria-label="Previous announcement"
          onClick={scrollPrev}
        >
          <FaAngleLeft className='size-6'/>
        </button>
        <div ref={emblaRef} className="overflow-hidden w-full">
          <div className="flex">
            {announcements.map((announcement, idx) => (
              <AnnouncementSlide key={idx} text={announcement.text} link={announcement.link} />
            ))}
          </div>
        </div>
        {/* Right Button */}
        <button
          type="button"
          aria-label="Next announcement"
          onClick={scrollNext}
        >
          <FaAngleRight className='size-6'/>
        </button>
      </div>
      {/* Globe icons */}
      <GlobeIcon position="bottom-right" />
      <GlobeIcon position="top-left" />
    </div>
  );
};

export default Announcement;
