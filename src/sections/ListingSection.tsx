'use client';

import React, { useState, useCallback, useMemo } from 'react';
import Image from 'next/image';
import Link from 'next/link';
import { Heart } from 'lucide-react';
import SearchIcon from '@/assets/icons/search.svg';

import BedIcon from '@/assets/icons/bed.svg';
import BathroomIcon from '@/assets/icons/bathroom.svg';
import AreaIcon from '@/assets/icons/area.svg';
import PopularBadge from '@/assets/icons/popularBadge.svg';
import ChevronLeftIcon from '@/assets/icons/chevron-left.svg';
import ChevronRightIcon from '@/assets/icons/chevron-right.svg';

// Property Images
import Property1 from '@/assets/images/property-1.png';
import Property2 from '@/assets/images/property-2.png';
import Property3 from '@/assets/images/property-3.png';
import Property4 from '@/assets/images/property-4.png';
import Property5 from '@/assets/images/property-5.png';
import Property6 from '@/assets/images/property-6.png';
import { Button } from '@/components/Button';

interface Property {
  id: number;
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  image: any;
  price: string;
  period: string;
  title: string;
  location: string;
  beds: number;
  bathrooms: number;
  area: string;
  isPopular: boolean;
}

interface PropertyCardProps {
  property: Property;
  isFavorite: boolean;
  onToggleFavorite: (e: React.MouseEvent, propertyId: number) => void;
}

// Optimized Heart Icon Component
const HeartIcon = React.memo(({ filled }: { filled: boolean }) => {
  const heartClasses = useMemo(() => {
    const baseClasses = 'w-5 h-5 transition-colors duration-200 ease-in-out';
    const colorClasses = filled ? 'text-secondary' : 'text-secondary';
    return `${baseClasses} ${colorClasses}`;
  }, [filled]);

  return <Heart className={heartClasses} fill={filled ? 'currentColor' : 'none'} strokeWidth={filled ? 0 : 2} />;
});

HeartIcon.displayName = 'HeartIcon';

// Optimized PropertyCard with proper memoization
const PropertyCard = React.memo<PropertyCardProps>(
  ({ property, isFavorite, onToggleFavorite }) => {
    // Memoize the favorite button handler to prevent re-renders
    const handleFavoriteClick = useCallback(
      (e: React.MouseEvent) => {
        onToggleFavorite(e, property.id);
      },
      [onToggleFavorite, property.id]
    );

    // Memoize property details to prevent unnecessary recalculations
    const propertyDetails = useMemo(
      () => [
        { icon: BedIcon, alt: 'Beds', text: `${property.beds} Beds` },
        { icon: BathroomIcon, alt: 'Bathrooms', text: `${property.bathrooms} Bath` },
        { icon: AreaIcon, alt: 'Area', text: property.area },
      ],
      [property.beds, property.bathrooms, property.area]
    );

    return (
      <div className='relative'>
        <Link href={`/properties/${property.id}`} className='block cursor-pointer'>
          <div className='bg-white rounded-xl shadow-sm overflow-hidden h-full flex flex-col'>
            {/* Image Container */}
            <div className='relative'>
              <div className='rounded-t-xl overflow-hidden'>
                <Image src={property.image} alt={property.title} className='w-full h-48 sm:h-52 object-cover' />
              </div>
            </div>

            {/* Content */}
            <div className='p-4 flex-1 flex flex-col'>
              {/* Title and Heart Icon */}
              <div className='flex items-start justify-between mb-2'>
                <h3 className='text-md font-semibold flex-1 pr-2 truncate'>{property.title}</h3>
                <button
                  onClick={handleFavoriteClick}
                  className='flex-shrink-0 p-1 border border-gray-100 hover:bg-gray-100 rounded-full transition-colors duration-200'
                  type='button'
                  aria-label={isFavorite ? 'Remove from favorites' : 'Add to favorites'}
                >
                  <HeartIcon filled={isFavorite} />
                </button>
              </div>

              {/* Location */}
              <p className='text-sm mb-3 leading-tight'>{property.location}</p>

              {/* Price */}
              <div className='flex items-baseline mb-3'>
                <span className='text-md font-bold text-secondary'>{property.price}</span>
                <span className='text-sm ml-1'>{property.period}</span>
              </div>

              {/* Property Details */}
              <div className='flex items-center justify-between text-xs mt-auto'>
                {propertyDetails.map((detail, index) => (
                  <div key={index} className='flex items-center space-x-1'>
                    <Image src={detail.icon} alt={detail.alt} className='w-3.5 h-3.5' />
                    <span className='font-medium'>{detail.text}</span>
                  </div>
                ))}
              </div>
            </div>
          </div>
        </Link>

        {/* Popular Badge */}
        {property.isPopular && (
          <div className='absolute top-[200px] md:top-[215px] left-0 -translate-y-5 -translate-x-2 z-50'>
            <Image src={PopularBadge} alt='Popular Badge' className='h-8 w-auto' />
          </div>
        )}
      </div>
    );
  },
  (prevProps, nextProps) => {
    // Custom comparison function to prevent unnecessary re-renders
    return (
      prevProps.property.id === nextProps.property.id &&
      prevProps.isFavorite === nextProps.isFavorite &&
      prevProps.onToggleFavorite === nextProps.onToggleFavorite
    );
  }
);

PropertyCard.displayName = 'PropertyCard';

const ListingSection: React.FC = () => {
  const [searchTerm, setSearchTerm] = useState<string>('');
  const [favorites, setFavorites] = useState<Set<number>>(new Set());
  const [currentSlide, setCurrentSlide] = useState<number>(0);

  // Memoize properties with more items for better slider demonstration
  const properties: Property[] = useMemo(
    () => [
      {
        id: 1,
        image: Property1,
        price: 'Rwf 400,000',
        period: '/month',
        title: 'Mucyo Guest House',
        location: 'Kicukiro, Kagarama',
        beds: 3,
        bathrooms: 2,
        area: '5x7 m²',
        isPopular: false,
      },
      {
        id: 2,
        image: Property2,
        price: 'Rwf 350,000',
        period: '/month',
        title: 'Charming Home',
        location: 'Kimoronko, Bibare KG 145',
        beds: 4,
        bathrooms: 2,
        area: '6x7.5 m²',
        isPopular: true,
      },
      {
        id: 3,
        image: Property3,
        price: 'Rwf 1,000,000',
        period: '/month',
        title: 'Kigali Modern furnished',
        location: 'Kanombe',
        beds: 4,
        bathrooms: 3,
        area: '8x10 m²',
        isPopular: true,
      },
      {
        id: 4,
        image: Property4,
        price: 'Rwf 150,000',
        period: '/month',
        title: 'Kimironko Home',
        location: 'Kimironko, Inyamibwa',
        beds: 4,
        bathrooms: 2,
        area: '6x8 m²',
        isPopular: false,
      },
      {
        id: 5,
        image: Property5,
        price: 'Rwf 100,000',
        period: '/month',
        title: 'Kigali apartment',
        location: 'Kiyovu',
        beds: 2,
        bathrooms: 1,
        area: '5x7.5 m²',
        isPopular: false,
      },
      {
        id: 6,
        image: Property6,
        price: 'Rwf 550,000',
        period: '/month',
        title: 'Kigali Self-compound 2',
        location: 'Gisozi',
        beds: 3,
        bathrooms: 1,
        area: '5x7 m²',
        isPopular: false,
      },
      {
        id: 7,
        image: Property1,
        price: 'Rwf 450,000',
        period: '/month',
        title: 'Mucyo Guest House Premium',
        location: 'Kicukiro, Niboye',
        beds: 4,
        bathrooms: 3,
        area: '6x8 m²',
        isPopular: false,
      },
      {
        id: 8,
        image: Property2,
        price: 'Rwf 300,000',
        period: '/month',
        title: 'Charming Home Deluxe',
        location: 'Kimironko, Kabuga',
        beds: 3,
        bathrooms: 2,
        area: '5x7 m²',
        isPopular: true,
      },
      {
        id: 9,
        image: Property3,
        price: 'Rwf 800,000',
        period: '/month',
        title: 'Modern Villa',
        location: 'Remera',
        beds: 5,
        bathrooms: 4,
        area: '10x12 m²',
        isPopular: false,
      },
      {
        id: 10,
        image: Property4,
        price: 'Rwf 200,000',
        period: '/month',
        title: 'Cozy Studio',
        location: 'Nyamirambo',
        beds: 1,
        bathrooms: 1,
        area: '4x5 m²',
        isPopular: false,
      },
      {
        id: 11,
        image: Property5,
        price: 'Rwf 180,000',
        period: '/month',
        title: 'City Center Apartment',
        location: 'City Center',
        beds: 2,
        bathrooms: 1,
        area: '5x6 m²',
        isPopular: false,
      },
      {
        id: 12,
        image: Property6,
        price: 'Rwf 650,000',
        period: '/month',
        title: 'Family Compound',
        location: 'Kacyiru',
        beds: 4,
        bathrooms: 3,
        area: '8x9 m²',
        isPopular: true,
      },
      {
        id: 13,
        image: Property3,
        price: 'Rwf 275,000',
        period: '/month',
        title: 'Sunrise Residences',
        location: 'Gasabo, Kinyinya',
        beds: 2,
        bathrooms: 2,
        area: '5x6 m²',
        isPopular: false,
      },
      {
        id: 14,
        image: Property1,
        price: 'Rwf 750,000',
        period: '/month',
        title: 'Executive Villa',
        location: 'Nyarutarama',
        beds: 5,
        bathrooms: 4,
        area: '12x10 m²',
        isPopular: true,
      },
      {
        id: 15,
        image: Property5,
        price: 'Rwf 320,000',
        period: '/month',
        title: 'Garden View Apartment',
        location: 'Kibagabaga',
        beds: 3,
        bathrooms: 2,
        area: '6x7 m²',
        isPopular: false,
      },
      {
        id: 16,
        image: Property2,
        price: 'Rwf 480,000',
        period: '/month',
        title: 'Hillside Manor',
        location: 'Kacyiru, Kamatamu',
        beds: 4,
        bathrooms: 3,
        area: '8x8 m²',
        isPopular: true,
      },
    ],
    []
  );

  // Calculate items per slide based on screen size
  const getItemsPerSlide = useCallback(() => {
    if (typeof window === 'undefined') return 8; // Default for SSR
    if (window.innerWidth >= 1024) return 8; // lg: 4 columns x 2 rows = 8 items
    if (window.innerWidth >= 768) return 6; // md: 3 columns x 2 rows = 6 items
    return 4; // mobile: 2 columns x 2 rows = 4 items
  }, []);

  const [itemsPerSlide] = useState(getItemsPerSlide);

  // Group properties into slides
  const slides = useMemo(() => {
    const slideArray = [];
    for (let i = 0; i < properties.length; i += itemsPerSlide) {
      slideArray.push(properties.slice(i, i + itemsPerSlide));
    }
    return slideArray;
  }, [properties, itemsPerSlide]);

  const totalSlides = slides.length;

  // Stable toggle function
  const toggleFavorite = useCallback((e: React.MouseEvent, propertyId: number): void => {
    e.preventDefault();
    e.stopPropagation();

    setFavorites(prevFavorites => {
      const newFavorites = new Set(prevFavorites);
      if (newFavorites.has(propertyId)) {
        newFavorites.delete(propertyId);
      } else {
        newFavorites.add(propertyId);
      }
      return newFavorites;
    });
  }, []);

  // Navigation functions
  const goToSlide = useCallback((slideIndex: number) => {
    setCurrentSlide(slideIndex);
  }, []);

  const goToPrevSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === 0 ? totalSlides - 1 : prev - 1));
  }, [totalSlides]);

  const goToNextSlide = useCallback(() => {
    setCurrentSlide(prev => (prev === totalSlides - 1 ? 0 : prev + 1));
  }, [totalSlides]);

  return (
    <section className='py-12 md:py-20 bg-accent'>
      <div className='container mx-auto px-4 sm:px-6 lg:px-8'>
        {/* Header */}
        <div className='text-center mb-10'>
          <h2 className='text-2xl md:text-3xl lg:text-4xl font-extrabold mb-4'>Explore Verified Properties</h2>
          <p className='text-base md:text-md max-w-3xl mx-auto mb-6 leading-relaxed'>
            Browse rental listings from trusted landlords who are part of the Rent Plus+ network. Every property on our
            platform is eligible for tenant rewards, so your next home could earn you cashback, travel, or discounts
            each month.
          </p>

          {/* Search Bar */}
          <div className='relative max-w-md mx-auto'>
            <div className='absolute inset-y-0 left-0 pl-4 flex items-center pointer-events-none'>
              <Image src={SearchIcon} alt='Search' className='w-4 h-4' />
            </div>
            <input
              type='text'
              placeholder='Search by location e.g Kigali...'
              value={searchTerm}
              onChange={(e: React.ChangeEvent<HTMLInputElement>) => setSearchTerm(e.target.value)}
              className='w-full pl-11 pr-4 py-3 border border-gray-300 rounded-full focus:outline-none focus:ring-1 focus:ring-secondary focus:border-transparent text-sm transition-all duration-200'
            />
            <div className='absolute inset-y-0 right-0 pr-4 flex items-center pointer-events-none'>
              <Image src={ChevronRightIcon} alt='Right Icon' className='w-4 h-4' />
            </div>
          </div>
        </div>

        {/* Properties Slider */}
        <div className='relative overflow-hidden mb-10'>
          <div
            className='flex transition-transform duration-500 ease-in-out'
            style={{ transform: `translateX(-${currentSlide * 100}%)` }}
          >
            {slides.map((slide, slideIndex) => (
              <div key={slideIndex} className='w-full flex-shrink-0'>
                <div className='grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4 md:gap-6'>
                  {slide.map((property: Property) => (
                    <PropertyCard
                      key={property.id}
                      property={property}
                      isFavorite={favorites.has(property.id)}
                      onToggleFavorite={toggleFavorite}
                    />
                  ))}
                </div>
              </div>
            ))}
          </div>
        </div>

        {/* Navigation and Browse More */}
        <div className='flex flex-col sm:flex-row items-center justify-between gap-6'>
          {/* Pagination Dots */}
          <div className='flex items-center space-x-2'>
            {slides.map((_, index) => (
              <button
                key={index}
                onClick={() => goToSlide(index)}
                className={`w-2 h-2 rounded-full transition-colors duration-200 ${
                  currentSlide === index ? 'bg-secondary' : 'bg-gray-300'
                }`}
                aria-label={`Go to slide ${index + 1}`}
              />
            ))}
          </div>

          {/* Navigation Arrows */}
          <div className='flex items-center space-x-2'>
            <button
              type='button'
              onClick={goToPrevSlide}
              className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-200'
              aria-label='Previous slide'
            >
              <Image src={ChevronLeftIcon} alt='Previous' className='w-6 h-6' />
            </button>
            <button
              type='button'
              onClick={goToNextSlide}
              className='p-2 hover:bg-gray-100 rounded-full transition-colors duration-200'
              aria-label='Next slide'
            >
              <Image src={ChevronRightIcon} alt='Next' className='w-6 h-6' />
            </button>
          </div>

          {/* Browse More Button */}
          <Button type='button'>Browse more</Button>
        </div>
      </div>
    </section>
  );
};

export default ListingSection;
