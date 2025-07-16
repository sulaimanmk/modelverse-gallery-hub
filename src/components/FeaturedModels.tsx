import React from 'react';
import ModelCard from './ModelCard';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const FeaturedModels = () => {
  const { ref: sectionRef, isVisible } = useScrollReveal();

  // Updated with more specific and working 3D marketplace images
  const featuredModels = [
    {
      id: '1',
      title: 'Cyberpunk City Scene',
      creator: 'UrbanDesigner3D',
      price: 49.99,
      originalPrice: 79.99,
      category: 'Environment',
      rating: 4.9,
      downloads: 2840,
      imageUrl: 'https://images.unsplash.com/photo-1573767291321-c0af2eaf5266?q=80&w=1072&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Cyberpunk', 'Environment', 'Game Ready', 'Low Poly']
    },
    {
      id: '2',
      title: 'Stylized Character Pack',
      creator: 'CharacterCraft',
      price: 34.99,
      category: 'Characters',
      rating: 4.8,
      downloads: 1567,
      imageUrl: 'https://images.unsplash.com/photo-1680516426618-bde74c53723c?q=80&w=830&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Characters', 'Stylized', 'Rigged', 'Animation Ready']
    },
    {
      id: '3',
      title: 'Modern Furniture Set',
      creator: 'InteriorPro',
      price: 24.99,
      category: 'Architecture',
      rating: 4.7,
      downloads: 3241,
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop&crop=center&auto=format',
      tags: ['Furniture', 'Modern', 'Interior', 'High Quality']
    },
    {
      id: '4',
      title: 'Sci-Fi Weapon Collection',
      creator: 'WeaponForge',
      price: 39.99,
      originalPrice: 59.99,
      category: 'Props',
      rating: 5.0,
      downloads: 987,
      imageUrl: 'https://images.unsplash.com/photo-1687283915386-2d48cf000bf7?q=80&w=1740&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Weapons', 'Sci-Fi', 'Game Assets', 'PBR']
    },
    {
      id: '5',
      title: 'Fantasy Tree Pack',
      creator: 'NatureArtist',
      price: 19.99,
      category: 'Nature',
      rating: 4.6,
      downloads: 4532,
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop&crop=center&auto=format',
      tags: ['Trees', 'Fantasy', 'Environment', 'Vegetation']
    },
    {
      id: '6',
      title: 'Abstract Geometry Pack',
      creator: 'GeometricMind',
      price: 14.99,
      category: 'Abstract',
      rating: 4.4,
      downloads: 2156,
      imageUrl: 'https://images.unsplash.com/photo-1734613414358-66038a779fed?q=80&w=2064&auto=format&fit=crop&ixlib=rb-4.1.0&ixid=M3wxMjA3fDB8MHxwaG90by1wYWdlfHx8fGVufDB8fHx8fA%3D%3D',
      tags: ['Abstract', 'Geometric', 'Motion Graphics', 'Clean']
    }
  ];

  return (
    <section ref={sectionRef} className="py-16">
      <div className="container mx-auto px-4">
        <div className={`text-center mb-12 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">3D Models</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handpicked premium models from our top creators. 
            Perfect for your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredModels.map((model, index) => (
            <div
              key={model.id}
              className={`${isVisible ? 'fade-in-up' : 'opacity-0'}`}
              style={{ animationDelay: `${0.1 * (index + 1)}s` }}
            >
              <ModelCard {...model} />
            </div>
          ))}
        </div>
        
        <div className={`text-center mt-12 ${isVisible ? 'fade-in-up stagger-4' : 'opacity-0'}`}>
          <button className="btn-gradient btn-elastic px-8 py-3 rounded-lg font-semibold hover-glow transition-all duration-300">
            View All Models
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
