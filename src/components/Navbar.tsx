'use client';

import React, { useState } from 'react';
import Link from 'next/link';
import Image from 'next/image';
import { ChevronDown, Menu, X } from 'lucide-react';
import RentPlusLogo from '@/assets/images/logo.png';

interface NavbarProps {
  className?: string;
}

const Navbar: React.FC<NavbarProps> = ({ className = '' }) => {
  const [isMobileMenuOpen, setIsMobileMenuOpen] = useState(false);
  const [isSolutionsOpen, setIsSolutionsOpen] = useState(false);

  const toggleMobileMenu = () => {
    setIsMobileMenuOpen(!isMobileMenuOpen);
  };

  const toggleSolutions = () => {
    setIsSolutionsOpen(!isSolutionsOpen);
  };

  return (
    <nav className={`fixed top-0 left-0 right-0 bg-transparent backdrop-blur-sm z-50 ${className}`}>
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
            <div className='ml-10 flex items-baseline space-x-8'>
              {/* Solutions Dropdown */}
              <div className='relative'>
                <button
                  onClick={toggleSolutions}
                  className='text-white hover:text-orange-300 px-3 py-2 text-sm font-medium flex items-center transition-colors duration-200'
                  aria-expanded={isSolutionsOpen}
                >
                  Solutions
                  <ChevronDown
                    className={`ml-1 h-4 w-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`}
                  />
                </button>

                {isSolutionsOpen && (
                  <div className='absolute top-full left-0 mt-2 w-56 bg-white rounded-lg shadow-lg py-2 z-50'>
                    <Link
                      href='/solutions/property-management'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200'
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      Property Management
                    </Link>
                    <Link
                      href='/solutions/tenant-rewards'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200'
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      Tenant Rewards
                    </Link>
                    <Link
                      href='/solutions/rental-platform'
                      className='block px-4 py-2 text-sm text-gray-700 hover:bg-gray-100 transition-colors duration-200'
                      onClick={() => setIsSolutionsOpen(false)}
                    >
                      Rental Platform
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href='/find-homes'
                className='text-white hover:text-orange-300 px-3 py-2 text-sm font-medium transition-colors duration-200'
              >
                Find Homes
              </Link>

              <Link
                href='/rewards'
                className='text-white hover:text-orange-300 px-3 py-2 text-sm font-medium transition-colors duration-200'
              >
                Rewards
              </Link>

              <Link
                href='/for-you'
                className='text-white hover:text-orange-300 px-3 py-2 text-sm font-medium transition-colors duration-200'
              >
                For You
              </Link>
            </div>
          </div>

          {/* Get Started Button - Desktop */}
          <div className='hidden lg:block'>
            <Link
              href='/get-started'
              className='bg-orange-500 hover:bg-orange-600 text-white px-6 py-2.5 rounded-full text-sm font-medium transition-colors duration-200'
            >
              Get Started
            </Link>
          </div>

          {/* Mobile menu button */}
          <div className='lg:hidden'>
            <button
              onClick={toggleMobileMenu}
              className='text-white hover:text-orange-300 p-2 transition-colors duration-200'
              aria-label='Toggle mobile menu'
            >
              {isMobileMenuOpen ? <X className='h-6 w-6' /> : <Menu className='h-6 w-6' />}
            </button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {isMobileMenuOpen && (
          <div className='lg:hidden'>
            <div className='px-2 pt-2 pb-3 space-y-1 bg-white/10 backdrop-blur-sm rounded-lg mt-2'>
              {/* Mobile Solutions */}
              <div>
                <button
                  onClick={toggleSolutions}
                  className='text-white hover:text-orange-300 px-3 py-2 text-base font-medium w-full text-left flex items-center justify-between transition-colors duration-200'
                >
                  Solutions
                  <ChevronDown
                    className={`h-4 w-4 transition-transform duration-200 ${isSolutionsOpen ? 'rotate-180' : ''}`}
                  />
                </button>
                {isSolutionsOpen && (
                  <div className='pl-4 space-y-1'>
                    <Link
                      href='/solutions/property-management'
                      className='text-white/80 hover:text-white block px-3 py-2 text-sm transition-colors duration-200'
                      onClick={toggleMobileMenu}
                    >
                      Property Management
                    </Link>
                    <Link
                      href='/solutions/tenant-rewards'
                      className='text-white/80 hover:text-white block px-3 py-2 text-sm transition-colors duration-200'
                      onClick={toggleMobileMenu}
                    >
                      Tenant Rewards
                    </Link>
                    <Link
                      href='/solutions/rental-platform'
                      className='text-white/80 hover:text-white block px-3 py-2 text-sm transition-colors duration-200'
                      onClick={toggleMobileMenu}
                    >
                      Rental Platform
                    </Link>
                  </div>
                )}
              </div>

              <Link
                href='/find-homes'
                className='text-white hover:text-orange-300 block px-3 py-2 text-base font-medium transition-colors duration-200'
                onClick={toggleMobileMenu}
              >
                Find Homes
              </Link>

              <Link
                href='/rewards'
                className='text-white hover:text-orange-300 block px-3 py-2 text-base font-medium transition-colors duration-200'
                onClick={toggleMobileMenu}
              >
                Rewards
              </Link>

              <Link
                href='/for-you'
                className='text-white hover:text-orange-300 block px-3 py-2 text-base font-medium transition-colors duration-200'
                onClick={toggleMobileMenu}
              >
                For You
              </Link>

              {/* Mobile Get Started Button */}
              <div className='pt-4'>
                <Link
                  href='/get-started'
                  className='bg-orange-500 hover:bg-orange-600 text-white block px-4 py-2.5 rounded-full text-center text-sm font-medium transition-colors duration-200'
                  onClick={toggleMobileMenu}
                >
                  Get Started
                </Link>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Backdrop for mobile menu */}
      {isMobileMenuOpen && (
        <div className='fixed inset-0 bg-black/20 backdrop-blur-sm lg:hidden z-40' onClick={toggleMobileMenu} />
      )}
    </nav>
  );
};

export default Navbar;
