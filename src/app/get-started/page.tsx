'use client';

import Image from 'next/image';
import { useRouter } from 'next/navigation';
import Tenant from '@/assets/images/tenant.jpg';
import Homeowner from '@/assets/images/homeowner.jpg';
import { Button } from '@/components/Button';

const GetStarted = () => {
  const router = useRouter();

  const handleSelection = (type: string) => {
    if (type === 'homeowner') {
      router.push('/register/homeowner');
    } else if (type === 'tenant') {
      router.push('/register/tenant');
    }
  };

  return (
    <div className='min-h-screen flex items-center justify-center bg-accent pt-[6rem] px-4'>
      <div className='max-w-4xl w-full p-6 md:p-12'>
        {/* Header */}
        <div className='text-center mb-12'>
          <h1 className='text-3xl md:text-4xl font-bold mb-4'>Let’s Get You Started</h1>
          <p className='text-sm md:text-base mb-4'>
            Welcome to Rent Plus, your trusted platform for smart renting, effortless property management, and rewarding
            experiences for tenants.
          </p>
          <div className='w-24 h-1 bg-secondary mx-auto rounded-full'></div>
        </div>

        {/* Selection Cards */}
        <div className='grid md:grid-cols-2 gap-8 max-w-3xl mx-auto'>
          {/* Homeowner Card */}
          <div
            onClick={() => handleSelection('homeowner')}
            className='bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:scale-[1.01] group'
          >
            <div className='text-left flex flex-col h-full'>
              <div className='w-full h-40 bg-gray-200 rounded-lg mb-6 overflow-hidden'>
                <Image
                  src={Homeowner}
                  alt='Homeowner'
                  width={400}
                  height={300}
                  className='w-full h-full object-cover group-hover:scale-[1.01] transition-transform duration-500 ease-out'
                  placeholder='blur'
                />
              </div>
              <h3 className='text-xl font-bold mb-2'>Homeowner</h3>
              <p className='text-sm mb-6'>
                List rentals, screen tenants, track payments, and manage everything, all from one dashboard.
              </p>
              <Button
                onClick={e => {
                  e.stopPropagation();
                  handleSelection('homeowner');
                }}
                className='w-full py-1.5'
              >
                I’m a homeowner
              </Button>
            </div>
          </div>

          {/* Tenant Card */}
          <div
            onClick={() => handleSelection('tenant')}
            className='bg-white border border-gray-200 rounded-2xl p-6 cursor-pointer transition-all duration-500 hover:scale-[1.01] group'
          >
            <div className='text-left flex flex-col h-full'>
              <div className='w-full h-40 bg-gray-200 rounded-lg mb-6 overflow-hidden'>
                <Image
                  src={Tenant}
                  alt='Tenant'
                  width={400}
                  height={300}
                  className='w-full h-full object-cover object-top group-hover:scale-[1.01] transition-transform duration-500 ease-out'
                  placeholder='blur'
                />
              </div>
              <h3 className='text-xl font-bold  mb-2'>Tenant</h3>
              <p className='text-sm mb-6'>
                Find homes, apply fast, stay updated, and enjoy loyalty rewards for being a great tenant.
              </p>
              <Button
                onClick={e => {
                  e.stopPropagation();
                  handleSelection('tenant');
                }}
                className='w-full py-1.5'
              >
                I’m a tenant
              </Button>
            </div>
          </div>
        </div>

        {/* Login Prompt */}
        <div className='mt-12 text-center'>
          <p className='text-sm '>
            Already have an account?{' '}
            <span
              onClick={() => router.push('/login')}
              className='text-secondary underline cursor-pointer hover:text-secondary/90 transition-colors duration-200 font-semibold'
            >
              Login here
            </span>
          </p>
        </div>
      </div>
    </div>
  );
};

export default GetStarted;
