import React from 'react';
import Image from 'next/image';
import FacebookIcon from '@/assets/icons/facebook.svg';
import TwitterIcon from '@/assets/icons/twitter.svg';
import InstagramIcon from '@/assets/icons/instagram.svg';
import LinkedinIcon from '@/assets/icons/linkedin.svg';
import MailIcon from '@/assets/icons/mail.svg';
import PhoneIcon from '@/assets/icons/phone.svg';
import Logo from '@/assets/images/logo.png';

const Footer = () => {
  return (
    <footer className='bg-primary text-white py-12'>
      <div className='container mx-auto px-6 lg:px-12'>
        <div className='grid grid-cols-2 md:grid-cols-4 gap-6 md:gap-8'>
          {/* Logo and Tagline Section */}
          <div className='col-span-2 md:col-span-1 mb-6 md:mb-0'>
            <Image src={Logo} alt='Logo' className='w-[120px] h-auto' />
            <p className='text-md font-medium my-4'>Reliable- Easy - Rewarding</p>
            <div className='flex space-x-1'>
              <div className='w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity'>
                <Image src={FacebookIcon} alt='Facebook' className='w-7 h-auto object-contain' />
              </div>
              <div className='w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity'>
                <Image src={TwitterIcon} alt='Twitter' className='w-7 h-auto object-contain' />
              </div>
              <div className='w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity'>
                <Image src={InstagramIcon} alt='Instagram' className='w-6 h-auto object-contain' />
              </div>
              <div className='w-8 h-8 cursor-pointer hover:opacity-80 transition-opacity'>
                <Image src={LinkedinIcon} alt='LinkedIn' className='w-[21px] h-auto object-contain' />
              </div>
            </div>
          </div>

          {/* For You Section */}
          <div className='col-span-1'>
            <h3 className='text-lg md:text-xl font-semibold mb-3 md:mb-4'>For You</h3>
            <ul className='space-y-2 md:space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-sm md:text-base hover:text-secondary transition-colors ease-in-out duration-300'
                >
                  Homeowners
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm md:text-base hover:text-secondary transition-colors ease-in-out duration-300'
                >
                  Residence
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm md:text-base hover:text-secondary transition-colors ease-in-out duration-300'
                >
                  Pricing
                </a>
              </li>
            </ul>
          </div>

          {/* Quick Links Section */}
          <div className='col-span-1'>
            <h3 className='text-lg md:text-xl font-semibold mb-3 md:mb-4'>Quick Links</h3>
            <ul className='space-y-2 md:space-y-3'>
              <li>
                <a
                  href='#'
                  className='text-sm md:text-base hover:text-secondary transition-colors ease-in-out duration-300'
                >
                  Help Centre
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm md:text-base hover:text-secondary transition-colors ease-in-out duration-300'
                >
                  Support
                </a>
              </li>
              <li>
                <a
                  href='#'
                  className='text-sm md:text-base hover:text-secondary transition-colors ease-in-out duration-300'
                >
                  Privacy Policy
                </a>
              </li>
            </ul>
          </div>

          {/* Contact Section */}
          <div className='col-span-2 md:col-span-1'>
            <h3 className='text-lg md:text-xl font-semibold mb-3 md:mb-4'>Contact</h3>
            <div className='space-y-2 md:space-y-3'>
              <div className='flex items-center'>
                <div className='w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3 flex-shrink-0'>
                  <Image src={MailIcon} alt='Email' className='w-5 md:w-6 h-auto object-contain' />
                </div>
                <a
                  href='mailto:info@rentplus.rw'
                  className='text-sm md:text-base hover:text-secondary transition-colors ease-in-out duration-300 break-all'
                >
                  info@rentplus.rw
                </a>
              </div>
              <div className='flex items-center'>
                <div className='w-5 md:w-6 h-5 md:h-6 mr-2 md:mr-3 flex-shrink-0'>
                  <Image src={PhoneIcon} alt='Phone' className='w-5 md:w-6 h-auto object-contain' />
                </div>
                <a
                  href='tel:+250786266073'
                  className='text-sm md:text-base hover:text-secondary transition-colors ease-in-out duration-300'
                >
                  +250 786 266 073
                </a>
              </div>
            </div>
          </div>
        </div>

        {/* Copyright Section */}
        <div className='pt-8 md:pt-12 text-center border-t border-white/20 mt-8 md:mt-12'>
          <p className='text-xs md:text-sm opacity-80'>© {new Date().getFullYear()} RentPlus. All rights reserved.</p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
