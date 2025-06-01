'use client';

import React, { useState } from 'react';
import Image from 'next/image';

import arrowPattern from '@/assets/patterns/arrowPattern.svg';
import plusPattern from '@/assets/patterns/plusPattern.svg';
import { Button } from '@/components/Button';

const JoinSection = () => {
  const [email, setEmail] = useState('');

  const handleSubmit = () => {
    // Handle form submission
    console.log('Email submitted:', email);
  };

  return (
    <div className='relative bg-white flex items-center justify-center px-4 py-32 overflow-hidden'>
      {/* Left Pattern */}
      <div className='absolute left-28 top-72 hidden md:block'>
        <Image src={arrowPattern} alt='' className='w-full h-auto' />
      </div>

      {/* Right Pattern */}
      <div className='absolute right-28 top-28 hidden md:block'>
        <Image src={plusPattern} alt='' className='w-full h-auto' />
      </div>

      {/* Main Content */}
      <div className='relative z-10 max-w-4xl mx-auto text-center space-y-4'>
        {/* No Spam Promise Badge */}
        <span className='text-secondary font-bold text-sm'>No Spam Promise</span>

        {/* Main Heading */}
        <h2 className='text-3xl sm:text-4xl font-extrabold '>Are you a homeowner?</h2>

        {/* Description */}
        <p className='text-md text-muted max-w-2xl mx-auto leading-relaxed'>
          Discover ways to increase your home&apos;s value and get listed. No Spam.
        </p>

        {/* Email Form */}
        <div className='max-w-lg mx-auto'>
          <form className='flex  py-3 px-4 rounded-full border border-primary text-muted bg-accent'>
            <input
              type='text'
              value={email}
              required
              onChange={e => setEmail(e.target.value)}
              placeholder='Enter your Phone No. e.g 0786266073'
              className='w-full outline-none border-none px-2 placeholder-muted'
            />
            <Button type='submit' size='sm' onClick={handleSubmit}>
              Submit
            </Button>
          </form>
        </div>

        {/* Community Stats */}
        <p className='text-muted text-md'>
          Join <span className='font-semibold text-secondary'>10,000+</span> other homeowner in our estatery community.
        </p>
      </div>
    </div>
  );
};

export default JoinSection;
