
import React from 'react';
import { Card } from '@/components/ui/card';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { Star, Users, Download } from 'lucide-react';

const CreatorSpotlight = () => {
  const featuredCreators = [
    {
      id: '1',
      name: 'Alex Chen',
      username: '@alexchen3d',
      specialty: 'Game Environments',
      rating: 4.9,
      followers: 12500,
      totalDownloads: 45600,
      avatar: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop&crop=center',
      verified: true,
      recentModels: [
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=80&h=80&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=80&h=80&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=80&h=80&fit=crop&crop=center'
      ]
    },
    {
      id: '2',
      name: 'Sarah Miller',
      username: '@sarahmiller',
      specialty: 'Character Design',
      rating: 4.8,
      followers: 8900,
      totalDownloads: 32100,
      avatar: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=100&h=100&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=400&h=200&fit=crop&crop=center',
      verified: true,
      recentModels: [
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=80&h=80&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1488590528505-98d2b5aba04b?w=80&h=80&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=80&h=80&fit=crop&crop=center'
      ]
    },
    {
      id: '3',
      name: 'Marcus Johnson',
      username: '@marcusj',
      specialty: 'Architectural Viz',
      rating: 4.7,
      followers: 15200,
      totalDownloads: 28900,
      avatar: 'https://images.unsplash.com/photo-1461749280684-dccba630e2f6?w=100&h=100&fit=crop&crop=face',
      coverImage: 'https://images.unsplash.com/photo-1486312338219-ce68d2c6f44d?w=400&h=200&fit=crop&crop=center',
      verified: true,
      recentModels: [
        'https://images.unsplash.com/photo-1518770660439-4636190af475?w=80&h=80&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=80&h=80&fit=crop&crop=center',
        'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=80&h=80&fit=crop&crop=center'
      ]
    }
  ];

  return (
    <section className="py-16">
      <div className="container mx-auto px-4">
        <div className="text-center mb-12">
          <h2 className="text-3xl md:text-4xl font-bold mb-4">
            Creator <span className="text-gradient">Spotlight</span>
          </h2>
          <p className="text-lg text-muted-foreground max-w-2xl mx-auto">
            Meet the talented artists behind our premium 3D models. 
            Follow your favorites and discover new creators.
          </p>
        </div>
        
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-6">
          {featuredCreators.map((creator) => (
            <Card key={creator.id} className="glass-card hover-glow group cursor-pointer transition-all duration-300 overflow-hidden">
              {/* Cover Image */}
              <div className="relative h-32 overflow-hidden">
                <img 
                  src={creator.coverImage} 
                  alt={`${creator.name} cover`}
                  className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
                  onError={(e) => {
                    e.currentTarget.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=400&h=200&fit=crop&crop=center';
                  }}
                />
                <div className="absolute inset-0 bg-gradient-to-t from-black/50 to-transparent"></div>
              </div>
              
              {/* Profile Section */}
              <div className="p-6 -mt-8 relative z-10">
                <div className="flex items-start justify-between mb-4">
                  <div className="flex items-center space-x-3">
                    <div className="relative">
                      <img 
                        src={creator.avatar} 
                        alt={creator.name}
                        className="w-16 h-16 rounded-full border-4 border-background object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1649972904349-6e44c42644a7?w=100&h=100&fit=crop&crop=face';
                        }}
                      />
                      {creator.verified && (
                        <div className="absolute -bottom-1 -right-1 w-6 h-6 bg-green-500 rounded-full flex items-center justify-center">
                          <span className="text-white text-xs">✓</span>
                        </div>
                      )}
                    </div>
                    <div>
                      <h3 className="font-bold text-lg">{creator.name}</h3>
                      <p className="text-sm text-muted-foreground">{creator.username}</p>
                    </div>
                  </div>
                  
                  <Button size="sm" variant="outline" className="btn-gradient border-0">
                    Follow
                  </Button>
                </div>
                
                <Badge variant="secondary" className="mb-4">
                  {creator.specialty}
                </Badge>
                
                {/* Stats */}
                <div className="grid grid-cols-3 gap-4 mb-4 text-center">
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Star className="w-4 h-4 text-yellow-400 mr-1" />
                      <span className="font-semibold">{creator.rating}</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Rating</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Users className="w-4 h-4 text-blue-400 mr-1" />
                      <span className="font-semibold">{(creator.followers / 1000).toFixed(1)}K</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Followers</p>
                  </div>
                  <div>
                    <div className="flex items-center justify-center mb-1">
                      <Download className="w-4 h-4 text-green-400 mr-1" />
                      <span className="font-semibold">{(creator.totalDownloads / 1000).toFixed(1)}K</span>
                    </div>
                    <p className="text-xs text-muted-foreground">Downloads</p>
                  </div>
                </div>
                
                {/* Recent Models Preview */}
                <div>
                  <p className="text-sm font-medium mb-2">Recent Models</p>
                  <div className="flex space-x-2">
                    {creator.recentModels.map((modelImage, index) => (
                      <img 
                        key={index}
                        src={modelImage} 
                        alt={`Recent model ${index + 1}`}
                        className="w-12 h-12 rounded-lg object-cover"
                        onError={(e) => {
                          e.currentTarget.src = 'https://images.unsplash.com/photo-1518709268805-4e9042af2176?w=80&h=80&fit=crop&crop=center';
                        }}
                      />
                    ))}
                  </div>
                </div>
              </div>
            </Card>
          ))}
        </div>
        
        <div className="text-center mt-12">
          <Button className="btn-gradient px-8 py-3 hover-glow">
            View All Creators
          </Button>
        </div>
      </div>
    </section>
  );
};

export default CreatorSpotlight;
