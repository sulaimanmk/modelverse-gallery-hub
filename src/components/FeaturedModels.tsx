
import React from 'react';
import ModelCard from './ModelCard';

const FeaturedModels = () => {
  // Mock data - in real app this would come from API
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
      imageUrl: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=400&fit=crop',
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
      imageUrl: 'https://images.unsplash.com/photo-1578662996442-48f60103fc96?w=400&h=400&fit=crop',
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
      imageUrl: 'https://images.unsplash.com/photo-1586023492125-27b2c045efd7?w=400&h=400&fit=crop',
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
      imageUrl: 'https://images.unsplash.com/photo-1614028674026-a65e31bfd27c?w=400&h=400&fit=crop',
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
      imageUrl: 'https://images.unsplash.com/photo-1441974231531-c6227db76b6e?w=400&h=400&fit=crop',
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
      imageUrl: 'https://images.unsplash.com/photo-1551431009-a802eeec77b1?w=400&h=400&fit=crop',
      tags: ['Abstract', 'Geometric', 'Motion Graphics', 'Clean']
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Featured <span className="text-gradient">3D Models</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Discover handpicked premium models from our top creators. 
            Perfect for your next project.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredModels.map((model) => (
            <ModelCard key={model.id} {...model} />
          ))}
        </div>
        
        <div className="text-center mt-12">
          <button className="btn-gradient px-8 py-3 rounded-lg font-semibold hover-glow transition-all duration-300">
            View All Models
          </button>
        </div>
      </div>
    </section>
  );
};

export default FeaturedModels;
