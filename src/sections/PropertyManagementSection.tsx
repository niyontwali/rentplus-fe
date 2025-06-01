import React from 'react';
import Image from 'next/image';
import NumberOneIcon from '@/assets/icons/number1.svg';
import NumberTwoIcon from '@/assets/icons/number2.svg';
import NumberThreeIcon from '@/assets/icons/number3.svg';
import NumberFourIcon from '@/assets/icons/number4.svg';
import NumberFiveIcon from '@/assets/icons/number5.svg';
import NumberSixIcon from '@/assets/icons/number6.svg';
import BadgeIcon from '@/assets/icons/badge.svg';
import PlayImage from '@/assets/images/video.png';

const PropertyManagementSection = () => {
  const features = [
    {
      number: NumberOneIcon,
      title: 'Automated Rent Collection',
      description:
        'Track payments in real-time and receive funds directly to your preferred bank account. Late payment reminders are automated, and receipts are generated instantly.',
      badge: 'Faster, Hands-Off Payments',
    },
    {
      number: NumberTwoIcon,
      title: 'Smart Vacancy Management',
      description:
        'Units automatically update to "available" when leases end or residents vacate. No manual relisting, your portfolio stays up-to-date with zero downtime.',
      badge: 'Auto-Relist Enabled',
    },
    {
      number: NumberThreeIcon,
      title: 'Digital Lease Administration',
      description:
        'Create and manage lease agreements online with e-signatures and secure storage. Contracts stay accessible and compliant, with less paperwork.',
      badge: 'E-Signature Ready',
    },
    {
      number: NumberFourIcon,
      title: 'Maintenance Coordination',
      description:
        'Track repair requests digitally, connect with approved service providers, and monitor resolution progress from submission to completion.',
      badge: 'Verified Technician Network',
    },
    {
      number: NumberFiveIcon,
      title: 'Portfolio Analytics',
      description:
        'Visualize your rental performance with dashboards showing income trends, occupancy, and ROI forecasts — all updated in real-time.',
      badge: 'Real-Time Insights',
    },
    {
      number: NumberSixIcon,
      title: 'Compliance Vault',
      description:
        'Store all legal documents, payment receipts, and tenancy records in one secure, searchable archive, audit-ready anytime.',
      badge: 'Secure & Compliant Storage',
    },
  ];

  return (
    <section className='py-16 md:py-24 bg-white'>
      <div className='container mx-auto px-6 lg:px-12'>
        {/* Header Section */}
        <div className='grid grid-cols-1 lg:grid-cols-2 gap-12 lg:gap-16 items-center mb-16'>
          {/* Left Content */}
          <div className='space-y-4'>
            <h2 className='text-3xl sm:text-4xl font-extrabold'>
              <span className='text-secondary'>Professional</span> Property <br className='hidden md:block' />
              Management, Done <br className='hidden md:block' />
              for You
            </h2>

            <p className='text-md md:text-lg'>
              Let Rent Plus handle the details — so you can focus on returns, not repairs.We manage rent collection,
              tenant rewards, digital leases, and maintenance end-to-end.Reliable, efficient, and tailored to help your
              properties perform at their best.
            </p>
          </div>

          {/* Right Image */}
          <div className='rounded-3xl overflow-hidden'>
            <Image
              src={PlayImage}
              alt='Professional property manager'
              className='w-full h-auto object-cover'
              priority
            />
          </div>
        </div>

        {/* Features Grid */}
        <div className='grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-8'>
          {features.map((feature, index) => (
            <div key={index} className='space-y-4'>
              {/* Number Icon */}
              <div className='w-12 h-12 flex-shrink-0'>
                <Image src={feature.number} alt={`Step ${index + 1}`} className='w-full h-full object-contain' />
              </div>

              {/* Content */}
              <div className='space-y-3'>
                <h3 className='text-xl font-semibold '>{feature.title}</h3>

                <p className=''>{feature.description}</p>

                {/* Badge */}
                <div className='inline-flex items-center space-x-2 px-4 py-2 bg-secondary/5 border border-secondary rounded-lg font-semibold'>
                  <Image src={BadgeIcon} alt='Award' className='w-5 h-5' />
                  <span className='text-sm font-semibold text-secondary'>{feature.badge}</span>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default PropertyManagementSection;
