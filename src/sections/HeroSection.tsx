'use client';

import React from 'react';
import Image from 'next/image';
import { Search } from 'lucide-react';

import DashboardMockup from '@/assets/images/dashboard.png';
import OwnerVerifiedIcon from '@/assets/icons/owner-verified.svg';
import RewardsEligibleIcon from '@/assets/icons/rewards-eligible.svg';
import Response24hIcon from '@/assets/icons/24h-response.svg';

// Mobile Hero Component (< 768px)
const MobileHeroSection: React.FC = () => {
  return (
    <>
      <section className='relative min-h-screen overflow-visible flex flex-col items-center justify-center px-4'>
        {/* Hero Building Background */}
        <div className='absolute inset-0'>
          <Image
            src='/hero.jpg'
            alt='Modern building architecture'
            fill
            priority
            quality={100}
            sizes='100vw'
            className='object-cover object-center'
          />
        </div>

        {/* Darker overlay for mobile readability */}
        <div className='absolute inset-0 bg-primary/75'></div>

        {/* Content Container */}
        <div className='relative z-10 w-full max-w-sm mx-auto text-center space-y-6 pt-8'>
          {/* Main Heading - Mobile optimized */}
          <h1 className='text-3xl font-bold text-white leading-tight'>
            Property Management
            <br />
            <span className='text-secondary'>Made Simple</span>
          </h1>

          {/* Subtitle - Concise for mobile */}
          <p className='text-base text-white/90 leading-relaxed'>
            Find trusted homes, manage rentals easily, and get rewarded for responsibility.
          </p>

          {/* Search Bar - Same as desktop */}
          <div className='relative w-full max-w-sm'>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <Search className='h-5 w-5 text-gray-400' />
              </div>
              <input
                type='text'
                placeholder='Browse Properties'
                className='w-full pl-12 pr-16 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent transition-all duration-200'
              />
              <div className='absolute inset-y-0 right-0 pr-2 flex items-center'>
                <button className='bg-secondary hover:bg-secondary/90 text-white p-2.5 rounded-full transition-all duration-300'>
                  <Search className='h-4 w-4' />
                </button>
              </div>
            </div>
          </div>

          {/* Feature Badges - Same as desktop */}
          <div className='flex flex-wrap justify-center gap-3 pt-4'>
            <div className='flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
              <Image src={OwnerVerifiedIcon} alt='Owner Verified' width={16} height={16} className='mr-2' />
              <span className='text-white text-sm font-medium'>Owner Verified</span>
            </div>
            <div className='flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
              <Image src={RewardsEligibleIcon} alt='Rewards Eligible' width={16} height={16} className='mr-2' />
              <span className='text-white text-sm font-medium'>Rewards Eligible</span>
            </div>
            <div className='flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
              <Image src={Response24hIcon} alt='24h Response' width={16} height={16} className='mr-2' />
              <span className='text-white text-sm font-medium'>24h Response</span>
            </div>
          </div>
        </div>

        {/* Curved bottom */}
        <div className='absolute bottom-0 left-0 right-0 w-full h-16 overflow-hidden'>
          <svg viewBox='0 0 1440 120' fill='none' className='w-full h-full' preserveAspectRatio='none'>
            <path d='M0,120 L0,60 Q720,0 1440,60 L1440,120 Z' fill='white' />
          </svg>
        </div>
      </section>

      {/* Dashboard Mockup - Mobile positioned */}
      <div className='relative -mt-20 z-20 w-full px-4 pb-8'>
        <div className='w-full max-w-sm mx-auto'>
          <Image
            src={DashboardMockup}
            alt='Property Management Dashboard'
            width={400}
            height={300}
            priority
            quality={95}
            className='w-full h-auto object-contain drop-shadow-xl rounded-lg'
          />
        </div>
      </div>
    </>
  );
};

// Tablet Hero Component (768px - 1024px)
const TabletHeroSection: React.FC = () => {
  return (
    <>
      <section className='relative min-h-screen overflow-visible flex flex-col items-center justify-center px-8'>
        {/* Hero Building Background */}
        <div className='absolute inset-0'>
          <Image
            src='/hero.jpg'
            alt='Modern building architecture'
            fill
            priority
            quality={100}
            sizes='100vw'
            className='object-cover object-center'
          />
        </div>

        {/* Overlay */}
        <div className='absolute inset-0 bg-primary/65'></div>

        {/* Content Container */}
        <div className='relative z-10 w-full max-w-2xl mx-auto text-center space-y-8 pt-12'>
          {/* Main Heading */}
          <h1 className='text-4xl md:text-5xl font-bold text-white leading-tight'>
            The Future Of Property Management
            <br />
            <span className='text-secondary'>Built For Rwanda</span>
          </h1>

          {/* Subtitle */}
          <p className='text-lg text-white/95 leading-relaxed max-w-xl mx-auto'>
            An all-in-one platform that helps property owners manage rentals easily, supports residents in finding
            trusted homes, and rewards responsibility.
          </p>

          {/* Search Bar - Same as desktop */}
          <div className='relative w-full max-w-lg'>
            <div className='relative'>
              <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                <Search className='h-5 w-5 text-gray-400' />
              </div>
              <input
                type='text'
                placeholder='Browse Properties'
                className='w-full pl-12 pr-16 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent transition-all duration-200'
              />
              <div className='absolute inset-y-0 right-0 pr-2 flex items-center'>
                <button className='bg-secondary hover:bg-secondary/90 text-white p-2.5 rounded-full transition-all duration-300'>
                  <Search className='h-4 w-4' />
                </button>
              </div>
            </div>
          </div>

          {/* Feature Badges - Same as desktop */}
          <div className='flex flex-wrap justify-center gap-4'>
            <div className='flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
              <Image src={OwnerVerifiedIcon} alt='Owner Verified' width={16} height={16} className='mr-2' />
              <span className='text-white text-sm font-medium'>Owner Verified</span>
            </div>
            <div className='flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
              <Image src={RewardsEligibleIcon} alt='Rewards Eligible' width={16} height={16} className='mr-2' />
              <span className='text-white text-sm font-medium'>Rewards Eligible</span>
            </div>
            <div className='flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
              <Image src={Response24hIcon} alt='24h Response' width={16} height={16} className='mr-2' />
              <span className='text-white text-sm font-medium'>24h Response</span>
            </div>
          </div>
        </div>

        {/* Curved bottom */}
        <div className='absolute bottom-0 left-0 right-0 w-full h-24 overflow-hidden'>
          <svg viewBox='0 0 1440 120' fill='none' className='w-full h-full' preserveAspectRatio='none'>
            <path d='M0,120 L0,60 Q720,0 1440,60 L1440,120 Z' fill='white' />
          </svg>
        </div>
      </section>

      {/* Dashboard Mockup - Tablet positioned */}
      <div className='relative -mt-32 z-20 w-full px-8 pb-12'>
        <div className='w-full max-w-2xl mx-auto'>
          <Image
            src={DashboardMockup}
            alt='Property Management Dashboard'
            width={600}
            height={450}
            priority
            quality={95}
            className='w-full h-auto object-contain drop-shadow-2xl rounded-lg'
          />
        </div>
      </div>
    </>
  );
};

// Desktop Hero Component - Your original component
const DesktopHeroSection: React.FC = () => {
  return (
    <>
      <section className='relative min-h-screen overflow-visible flex flex-col items-center justify-start pt-16 md:pt-24'>
        {/* Hero Building Background - High resolution with optimized settings */}
        <div className='absolute inset-0'>
          <Image
            src='/hero.jpg'
            alt='Modern building architecture'
            fill
            priority
            quality={100}
            sizes='100vw'
            className='object-cover object-center'
            style={{
              objectFit: 'cover',
              objectPosition: 'center',
            }}
          />
        </div>

        {/* Lighter Overlay to preserve building curvature visibility */}
        <div className='absolute inset-0 bg-primary/60'></div>

        {/* Curved bottom shape - full width smooth curve */}
        <div className='absolute bottom-0 left-0 right-0 w-full h-32 overflow-hidden'>
          <svg viewBox='0 0 1440 120' fill='none' className='w-full h-full' preserveAspectRatio='none'>
            <path d='M0,120 L0,60 Q720,0 1440,60 L1440,120 Z' fill='white' />
          </svg>
        </div>

        {/* Main Content - moved higher up with top padding */}
        <div className='container mx-auto px-4 sm:px-6 lg:px-8 relative z-10 mt-8 md:mt-12'>
          <div className='flex flex-col items-center text-center space-y-8'>
            {/* Main Heading */}
            <h1 className='max-w-3xl text-4xl md:text-3xl lg:text-4xl font-extrabold text-white leading-tight pt-8'>
              The Future Of Property Management Built For <span className='text-secondary'>Rwanda</span>
            </h1>

            {/* Subtitle */}
            <p className='text-md md:text-lg text-white max-w-2xl'>
              An all-in-one platform that helps property owners manage rentals easily, supports residents in finding
              trusted homes, and rewards responsibility to create a stronger rental culture.
            </p>

            {/* Search Bar */}
            <div className='relative w-full max-w-lg'>
              <div className='relative'>
                <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
                  <Search className='h-5 w-5 text-gray-400' />
                </div>
                <input
                  type='text'
                  placeholder='Browse Properties'
                  className='w-full pl-12 pr-16 py-3 bg-white/10 backdrop-blur-sm border border-white/20 rounded-full text-white placeholder-gray-300 focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent transition-all duration-200'
                />
                <div className='absolute inset-y-0 right-0 pr-2 flex items-center'>
                  <button className='bg-secondary hover:bg-secondary/90 text-white p-2.5 rounded-full transition-all duration-300'>
                    <Search className='h-4 w-4' />
                  </button>
                </div>
              </div>
            </div>

            {/* Feature Badges */}
            <div className='flex flex-wrap justify-center gap-4'>
              <div className='flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
                <Image src={OwnerVerifiedIcon} alt='Owner Verified' width={16} height={16} className='mr-2' />
                <span className='text-white text-sm font-medium'>Owner Verified</span>
              </div>
              <div className='flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
                <Image src={RewardsEligibleIcon} alt='Rewards Eligible' width={16} height={16} className='mr-2' />
                <span className='text-white text-sm font-medium'>Rewards Eligible</span>
              </div>
              <div className='flex items-center bg-white/10 backdrop-blur-sm rounded-full px-4 py-2 border border-white/20'>
                <Image src={Response24hIcon} alt='24h Response' width={16} height={16} className='mr-2' />
                <span className='text-white text-sm font-medium'>24h Response</span>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* Dashboard Mockup - Properly centered with responsive positioning */}
      <div className='relative -mt-64 z-20 w-full flex justify-center items-center px-4 sm:px-6 lg:px-8'>
        <div className='w-full max-w-6xl flex justify-center'>
          <div className='relative w-full max-w-4xl flex justify-center'>
            <Image
              src={DashboardMockup}
              alt='Property Management Dashboard'
              width={800}
              height={600}
              priority
              quality={95}
              className='w-full max-w-3xl h-auto object-contain drop-shadow-2xl mx-auto'
              sizes='(max-width: 768px) 90vw, (max-width: 1200px) 70vw, 60vw'
            />
          </div>
        </div>
      </div>
    </>
  );
};

// Main responsive component that renders based on screen size
const ResponsiveHeroSection: React.FC = () => {
  return (
    <>
      {/* Mobile Component */}
      <div className='block md:hidden'>
        <MobileHeroSection />
      </div>

      {/* Tablet Component */}
      <div className='hidden md:block lg:hidden'>
        <TabletHeroSection />
      </div>

      {/* Desktop Component */}
      <div className='hidden lg:block'>
        <DesktopHeroSection />
      </div>
    </>
  );
};

export { MobileHeroSection, TabletHeroSection, DesktopHeroSection, ResponsiveHeroSection };
export default ResponsiveHeroSection;
