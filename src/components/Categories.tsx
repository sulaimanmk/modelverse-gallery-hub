
import React from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';

const Categories = () => {
  const categories = [
    {
      name: 'Game Assets',
      count: '12,450',
      icon: '🎮',
      description: 'Game-ready models and environments',
      gradient: 'from-purple-500 to-pink-500'
    },
    {
      name: 'Characters',
      count: '8,320',
      icon: '👤',
      description: 'Rigged and animated characters',
      gradient: 'from-blue-500 to-cyan-500'
    },
    {
      name: 'Architecture',
      count: '15,670',
      icon: '🏢',
      description: 'Buildings and interior designs',
      gradient: 'from-green-500 to-emerald-500'
    },
    {
      name: 'Vehicles',
      count: '6,890',
      icon: '🚗',
      description: 'Cars, planes, and transportation',
      gradient: 'from-red-500 to-orange-500'
    },
    {
      name: 'Nature',
      count: '9,540',
      icon: '🌲',
      description: 'Trees, rocks, and landscapes',
      gradient: 'from-green-600 to-lime-500'
    },
    {
      name: 'Sci-Fi',
      count: '4,230',
      icon: '🚀',
      description: 'Futuristic and space objects',
      gradient: 'from-indigo-500 to-purple-500'
    }
  ];

  return (
    <section className="py-16 bg-card/20">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Browse by <span className="text-gradient">Category</span>
          </h2>
          <p className="text-lg text-muted-foreground">
            Find exactly what you need for your creative projects
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {categories.map((category, index) => (
            <Card 
              key={index}
              className="glass-card hover-glow group cursor-pointer transition-all duration-300 p-6 relative overflow-hidden"
            >
              {/* Background gradient */}
              <div className={`absolute inset-0 bg-gradient-to-br ${category.gradient} opacity-10 group-hover:opacity-20 transition-opacity duration-300`}></div>
              
              <div className="relative z-10">
                <div className="flex items-center justify-between mb-4">
                  <div className="text-4xl">{category.icon}</div>
                  <Badge variant="secondary" className="bg-white/10">
                    {category.count} models
                  </Badge>
                </div>
                
                <h3 className="text-xl font-bold mb-2 group-hover:text-green-400 transition-colors">
                  {category.name}
                </h3>
                
                <p className="text-muted-foreground text-sm">
                  {category.description}
                </p>
              </div>
            </Card>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Categories;
