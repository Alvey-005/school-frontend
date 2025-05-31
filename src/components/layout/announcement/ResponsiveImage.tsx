import React from 'react';
import Image from 'next/image';

interface ResponsiveImageProps {
  mobileSrc: string;
  laptopSrc: string;
  desktopSrc: string;
  alt: string;
  mobileSize: { width: number; height: number };
  laptopSize: { width: number; height: number };
  desktopSize: { width: number; height: number };
  className?: string;
  position: 'left' | 'right';
}

const ResponsiveImage: React.FC<ResponsiveImageProps> = ({
  mobileSrc,
  laptopSrc,
  desktopSrc,
  alt,
  mobileSize,
  laptopSize,
  desktopSize,
  className = '',
  position,
}) => (
  <>
    {/* Mobile */}
    <div className={`absolute top-0 ${position}-0 flex items-start xl:hidden ${className}`}>
      <Image src={mobileSrc} alt={alt} width={mobileSize.width} height={mobileSize.height} className="block" />
    </div>
    {/* Laptop */}
    <div className={`absolute top-0 ${position}-0 hidden xl:flex 3xl:!hidden items-start ${className}`}>
      <Image src={laptopSrc} alt={alt} width={laptopSize.width} height={laptopSize.height} className="block" />
    </div>
    {/* Desktop */}
    <div className={`absolute top-0 3xl:-top-5 ${position}-0 3xl:${position === 'left' ? '-left-2' : ''} hidden 3xl:flex items-start ${className}`}>
      <Image src={desktopSrc} alt={alt} width={desktopSize.width} height={desktopSize.height} className="block" />
    </div>
  </>
);

export default ResponsiveImage;
