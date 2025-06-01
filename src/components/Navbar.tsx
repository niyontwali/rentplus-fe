'use client';

import React, { useState, useEffect } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { Menu, X } from 'lucide-react';
import RentPlusLogo from '@/assets/images/logo.png';

interface NavbarProps {
  className?: string;
}

// Navigation items configuration
const navItems = [
  {
    name: 'About Us',
    type: 'link',
    href: '/about-us',
  },
  {
    name: 'Homeowners',
    type: 'link',
    href: '/homeowners',
  },
  {
    name: 'Residents',
    type: 'link',
    href: '/residents',
  },
  {
    name: 'Find Homes',
    type: 'link',
    href: '/find-homes',
  },
  {
    name: 'Rewards',
    type: 'link',
    href: '/rewards',
  },
  {
    name: 'Vendors',
    type: 'link',
    href: '/vendors',
  },
  {
    name: 'Cleaners',
    type: 'link',
    href: '/cleaners',
  },
];

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);

  // Handle scroll to change navbar text color
  useEffect(() => {
    const handleScroll = () => {
      // Assuming hero section is roughly 100vh, adjust this value as needed
      const heroHeight = window.innerHeight;
      setIsScrolled(window.scrollY > heroHeight * 0.6);
    };

    window.addEventListener('scroll', handleScroll);
    return () => window.removeEventListener('scroll', handleScroll);
  }, []);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  // Dynamic text color classes
  const textColorClass = isScrolled ? 'text-primary' : 'text-white';
  const hoverTextColorClass = isScrolled ? 'hover:text-primary/80' : 'hover:text-secondary';

  return (
    <nav
      className={`fixed top-0 left-0 right-0 bg-transparent backdrop-blur-md z-50 transition-colors duration-300 ${className}`}
    >
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        <div className='flex items-center justify-between h-16 lg:h-20'>
          {/* Logo */}
          <div className='flex-shrink-0'>
            <Link href='/' className='flex items-center'>
              <Image src={RentPlusLogo} alt='Rent Plus' className='w-[100px] h-auto' />
            </Link>
          </div>

          {/* Desktop Navigation */}
          <div className='hidden lg:block'>
            <div className='ml-10 flex items-baseline '>
              {navItems.map(item => {
                return (
                  <Link
                    key={item.name}
                    href={item.href!}
                    className={`${textColorClass} ${hoverTextColorClass} px-3 py-2 text-sm font-semibold transition-colors duration-200`}
                  >
                    {item.name}
                  </Link>
                );
              })}
            </div>
          </div>

          {/* Get Started Button - Desktop */}
          <div className='hidden lg:block'>
            <Link
              href='/get-started'
              className='bg-secondary hover:bg-secondary/90 text-white px-6 py-2.5 rounded-full text-sm font-semibold transition-colors duration-200'
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMobileMenu}
              className={`${textColorClass} ${hoverTextColorClass} p-2 transition-colors duration-200 relative z-50`}
              aria-label='Toggle mobile menu'
            >
              {isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        <div
          className={`lg:hidden absolute top-full left-0 right-0 z-40 transition-all duration-300 ease-in-out ${
            isMobileMenuOpen
              ? 'opacity-100 translate-y-0 pointer-events-auto'
              : 'opacity-0 -translate-y-4 pointer-events-none'
          }`}
        >
          <div className='mx-4 px-6 pt-6 pb-8 space-y-1 bg-accent rounded-xl mt-2 shadow-2xl border border-gray-200/20 transform transition-all duration-300 ease-in-out'>
            {navItems.map((item, index) => {
              return (
                <Link
                  key={item.name}
                  href={item.href!}
                  className={`text-gray-800 hover:text-secondary hover:bg-gray-50 block px-4 py-3 text-base font-medium transition-all duration-200 rounded-lg transform ${
                    isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
                  }`}
                  style={{
                    transitionDelay: isMobileMenuOpen ? `${index * 50}ms` : '0ms',
                  }}
                  onClick={toggleMobileMenu}
                >
                  {item.name}
                </Link>
              );
            })}

            {/* Mobile Get Started Button */}
            <div
              className={`pt-4 transform transition-all duration-300 ease-in-out ${
                isMobileMenuOpen ? 'translate-x-0 opacity-100' : '-translate-x-4 opacity-0'
              }`}
              style={{
                transitionDelay: isMobileMenuOpen ? `${navItems.length * 50}ms` : '0ms',
              }}
            >
              <Link
                href='/get-started'
                className='bg-secondary hover:bg-secondary/90 text-white block px-6 py-3 rounded-full text-center text-base font-semibold transition-colors duration-200 shadow-lg'
                onClick={toggleMobileMenu}
              >
                Get Started
              </Link>
            </div>
          </div>
        </div>
      </div>

      {/* Backdrop for mobile menu */}
      <div
        className={`fixed inset-0 bg-black/50 backdrop-blur-md lg:hidden z-30 transition-all duration-300 ease-in-out ${
          isMobileMenuOpen ? 'opacity-100 pointer-events-auto' : 'opacity-0 pointer-events-none'
        }`}
        onClick={toggleMobileMenu}
      />
    </nav>
  );
};

export default Navbar;
