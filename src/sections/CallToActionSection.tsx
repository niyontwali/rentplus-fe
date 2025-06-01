import Image from 'next/image';
import ctaImage from '@/assets/images/ctaHouse.png';
import { Button } from '@/components/Button';

const CallToActionSection = () => {
  return (
    <section className='bg-custom-gradient relative overflow-hidden'>
      <div className='container mx-auto px-6 lg:px-12'>
        {/* Mobile Layout */}
        <div className='lg:hidden'>
          <div className='relative min-h-[600px] flex flex-col'>
            {/* Image positioned absolutely to overlay */}
            <div className='absolute top-8 left-1/2 transform -translate-x-1/2 z-10'>
              <Image src={ctaImage} alt='Modern house architecture' className='w-48 h-auto sm:w-56' />
            </div>

            {/* Content positioned below image */}
            <div className='pt-56 pb-12 text-white text-center space-y-6'>
              <h2 className='text-3xl sm:text-4xl font-extrabold leading-tight'>
                Smarter Living
                <br />
                Starts with <span className='text-amber-300'>Rent Plus</span>
              </h2>

              <p className='text-base sm:text-lg leading-relaxed px-4 max-w-md mx-auto'>
                At RentPlus, paying your rent on time doesn&apos;t just mean staying on track, it means unlocking real
                value. Every verified property comes with built-in rewards designed to recognize your consistency. From
                travel perks
              </p>
              <Button>Get Started</Button>
            </div>
          </div>
        </div>

        {/* Desktop Layout */}
        <div className='hidden lg:block'>
          <div className='grid lg:grid-cols-2 gap-14 items-end'>
            {/* Left Content */}
            <div className='text-white max-w-2xl space-y-6 py-18'>
              <h1 className='text-3xl xl:text-4xl font-extrabold leading-tight'>
                Smarter Living
                <br />
                Starts with <span className='text-secondary'>Rent Plus</span>
              </h1>

              <p className='text-lg leading-normal '>
                At RentPlus, paying your rent on time doesn&apos;t just mean staying on track, it means unlocking real
                value. Every verified property comes with built-in rewards designed to recognize your consistency. From
                travel perks
              </p>
              <Button>Get Started</Button>
            </div>

            {/* Right Side - Image */}
            <div className='flex justify-center lg:justify-end'>
              <Image src={ctaImage} alt='Modern house architecture' className='block max-w-full h-auto' />
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default CallToActionSection;
