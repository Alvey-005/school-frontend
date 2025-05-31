import React from 'react';
import Image from 'next/image';

interface GlobeIconProps {
  position: 'top-left' | 'bottom-right';
}

const GlobeIcon: React.FC<GlobeIconProps> = ({ position }) => {
  if (position === 'bottom-right') {
    return (
      <div className="absolute -bottom-[60%] xl:-bottom-[40%] -right-[20px] xl:right-1/4 size-[50px] xl:size-[30px] bg-center bg-no-repeat z-10">
        <Image src="/svg/globe.svg" alt="Globe Icon" width={50} height={50} />
      </div>
    );
  }
  return (
    <div className="absolute bottom-[60%] 3xl:bottom-[20%] left-0 xl:left-1/4 size-[33px] xl:size-[50px] 3xl:size-[72px] bg-center bg-no-repeat z-10">
      <Image src="/svg/globe.svg" alt="Globe Icon" width={72} height={72} />
    </div>
  );
};

export default GlobeIcon;
