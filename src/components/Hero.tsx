
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown } from 'lucide-react';

const Hero = () => {
  return (
    <section className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-transparent"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <Badge className="mb-6 bg-green-500/20 text-green-400 border-green-500/30">
          Premium 3D Assets Marketplace
        </Badge>
        
        <h1 className="text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight">
          Discover Premium
          <br />
          <span className="text-gradient">3D Models</span>
          <br />
          for Creatives
        </h1>
        
        <p className="text-xl text-muted-foreground mb-8 max-w-2xl mx-auto">
          From game-ready assets to motion graphics elements. Find, buy, and sell 
          high-quality 3D models created by talented artists worldwide.
        </p>
        
        <div className="flex flex-col sm:flex-row gap-4 justify-center mb-12">
          <Button size="lg" className="btn-gradient text-lg px-8 py-4 hover-glow">
            Browse Collection
          </Button>
          
          <Button size="lg" variant="outline" className="text-lg px-8 py-4 border-green-500/30 hover:bg-green-500/10">
            Start Selling
          </Button>
        </div>
        
        {/* Stats */}
        <div className="grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto">
          <div>
            <div className="text-2xl font-bold text-green-400">50K+</div>
            <div className="text-sm text-muted-foreground">3D Models</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">12K+</div>
            <div className="text-sm text-muted-foreground">Creators</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">1M+</div>
            <div className="text-sm text-muted-foreground">Downloads</div>
          </div>
          <div>
            <div className="text-2xl font-bold text-green-400">4.9★</div>
            <div className="text-sm text-muted-foreground">Rating</div>
          </div>
        </div>
      </div>
      
      {/* Scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <ArrowDown className="w-6 h-6 text-muted-foreground" />
      </div>
    </section>
  );
};

export default Hero;
