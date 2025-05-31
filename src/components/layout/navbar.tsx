import React from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { cn } from '@/lib/utils';

const NAV_LINKS = [
  { label: 'Home', href: '/' },
  { label: 'Courses', href: '/courses' },
  { label: 'Admission', href: '/admission' },
  { label: 'Scholarships', href: '/scholarships' },
  { label: 'Contact', href: '/contact' },
];

const Navbar = ({
    className = '',
}:{
    className?: string;
}) => {
  return (
    <nav className={cn(` flex items-center justify-between   bg-white border-2 border-secondary-15 rounded-[8px]`, className)}>
      {/* Logo on the left */}
      <Link href="/" className="bg-primary-65">
        <Image src="/svg/logo.svg" alt="Logo" width={155} height={34} className='px-5 py-5'/>
      </Link>
      {/* Links on the right */}
      <div className="gap-0 items-center hidden lg:flex">
        {NAV_LINKS.map(link => (
          <Link key={link.href} href={link.href} className="text-secondary-15 font-medium transition-colors  border-l-2 border-secondary-15 py-5 px-7.5">
            {link.label}
          </Link>
        ))}
      </div>
    </nav>
  );
};

export default Navbar;
