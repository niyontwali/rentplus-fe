import React from 'react';

import HeroSection from '@/sections/HeroSection';
import PropertyManagementSection from '@/sections/PropertyManagementSection';
import ListingSection from '@/sections/ListingSection';
import RewardSection from '@/sections/RewardSection';
import CallToActionSection from '@/sections/CallToActionSection';
import JoinSection from '@/sections/JoinSection';

const Home = () => {
  return (
    <main>
      <HeroSection />
      <PropertyManagementSection />
      <ListingSection />
      <RewardSection />
      <CallToActionSection />
      <JoinSection />
    </main>
  );
};

export default Home;
