
import React from 'react';
import Header from '@/components/Header';
import Hero from '@/components/Hero';
import Categories from '@/components/Categories';
import FeaturedModels from '@/components/FeaturedModels';
import CreatorSpotlight from '@/components/CreatorSpotlight';
import Footer from '@/components/Footer';

const Index = () => {
  return (
    <div className="min-h-screen bg-background">
      <Header />
      <main>
        <Hero />
        <Categories />
        <FeaturedModels />
        <CreatorSpotlight />
      </main>
      <Footer />
    </div>
  );
};

export default Index;
