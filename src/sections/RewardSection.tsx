import React from 'react';
import Image from 'next/image';
import HotelIcon from '@/assets/icons/hotel.svg';
import FlightIcon from '@/assets/icons/flight.svg';
import CashbackIcon from '@/assets/icons/cashback.svg';
import DiscountIcon from '@/assets/icons/discount.svg';
import RewardImage from '@/assets/images/reward.png';

const RewardSection = () => {
  const rewards = [
    {
      icon: HotelIcon,
      title: 'Hotels weekend stays',
      description: 'Get rewarded with weekend stays or holiday trips. Rent now, relax later.',
    },
    {
      icon: FlightIcon,
      title: 'Best Flights',
      description: 'Turn consistent rent payments into travel perks. Fly for less with our airline partners.',
    },
    {
      icon: CashbackIcon,
      title: 'Cashback up to 10% per month',
      description: "Earn real money back every month just by paying rent on time. Use it to save or spend—it's yours.",
    },
    {
      icon: DiscountIcon,
      title: 'Discounts at Simba Supermarket',
      description:
        'Unlock exclusive deals at top retailers and supermarkets. Your rent payments bring instant savings.',
    },
  ];

  return (
    <section className='py-16 md:py-24'>
      <div className='container mx-auto px-6 lg:px-12'>
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center'>
          {/* Left Content */}
          <div className='space-y-5'>
            <div>
              <h2 className='text-3xl sm:text-4xl font-extrabold '>
                <span className='text-secondary'>Get rewarded</span> for being <br className='hidden md:block' />a
                responsible renter
              </h2>
            </div>

            <p className='text-md  leading-relaxed'>
              At RentPlus, paying your rent on time doesn&apos;t just mean staying on track, it means unlocking real
              value. Every verified property comes with built-in rewards designed to recognize your consistency. From
              travel perks and cash-back to everyday discounts, RentPlus turns good rental habits into great monthly
              benefits.
            </p>

            {/* Rewards List */}
            <div className='space-y-4'>
              {rewards.map((reward, index) => (
                <div key={index} className='flex items-start space-x-4'>
                  {/* Icon Container */}
                  <div className='flex-shrink-0 w-10 h-10 bg-secondary rounded-xl flex items-center justify-center'>
                    <Image src={reward.icon} alt={reward.title} className='w-full h-full' />
                  </div>

                  {/* Content */}
                  <div className='flex-1'>
                    <h3 className='text-lg font-bold'>{reward.title}</h3>
                    <p>{reward.description}</p>
                  </div>
                </div>
              ))}
            </div>
          </div>

          {/* Right Image */}
          <div className='relative order-first lg:order-last'>
            <Image
              src={RewardImage}
              alt='Happy person showing rewards'
              className='w-full h-auto object-cover'
              priority
            />
          </div>
        </div>
      </div>
    </section>
  );
};

export default RewardSection;
