
import React from 'react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';
import { ArrowDown } from 'lucide-react';
import AnimatedCounter from './AnimatedCounter';
import { useScrollReveal } from '@/hooks/useScrollReveal';

const Hero = () => {
  const { ref: heroRef, isVisible } = useScrollReveal();

  return (
    <section ref={heroRef} className="relative py-20 overflow-hidden">
      {/* Background Elements */}
      <div className="absolute inset-0 bg-gradient-to-b from-green-900/10 to-transparent"></div>
      <div className="absolute top-20 left-10 w-32 h-32 bg-green-500/10 rounded-full blur-3xl animate-float"></div>
      <div className="absolute bottom-20 right-10 w-48 h-48 bg-blue-500/10 rounded-full blur-3xl animate-float" style={{animationDelay: '2s'}}></div>
      
      <div className="container mx-auto px-4 text-center relative z-10">
        <Badge className={`mb-6 bg-green-500/20 text-green-400 border-green-500/30 ${isVisible ? 'fade-in-up' : 'opacity-0'}`}>
          Premium 3D Assets Marketplace
        </Badge>
        
        <h1 className={`text-4xl md:text-6xl lg:text-7xl font-bold mb-6 leading-tight ${isVisible ? 'fade-in-up stagger-1' : 'opacity-0'}`}>
          Discover Premium
          <br />
          <span className="text-gradient">3D Models</span>
          <br />
          for Creatives
        </h1>
        
        <p className={`text-xl text-muted-foreground mb-8 max-w-2xl mx-auto ${isVisible ? 'fade-in-up stagger-2' : 'opacity-0'}`}>
          From game-ready assets to motion graphics elements. Find, buy, and sell 
          high-quality 3D models created by talented artists worldwide.
        </p>
        
        <div className={`flex flex-col sm:flex-row gap-4 justify-center mb-12 ${isVisible ? 'fade-in-up stagger-3' : 'opacity-0'}`}>
          <Button size="lg" className="btn-gradient btn-elastic text-lg px-8 py-4 hover-glow">
            Browse Collection
          </Button>
          
          <Button size="lg" variant="outline" className="btn-elastic text-lg px-8 py-4 border-green-500/30 hover:bg-green-500/10">
            Start Selling
          </Button>
        </div>
        
        {/* Enhanced Animated Stats */}
        <div className={`grid grid-cols-2 md:grid-cols-4 gap-8 max-w-2xl mx-auto ${isVisible ? 'fade-in-up stagger-4' : 'opacity-0'}`}>
          <div className="group">
            <AnimatedCounter 
              end={50000} 
              suffix="+" 
              className="text-2xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300"
            />
            <div className="text-sm text-muted-foreground">3D Models</div>
          </div>
          <div className="group">
            <AnimatedCounter 
              end={12000} 
              suffix="+" 
              className="text-2xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300"
            />
            <div className="text-sm text-muted-foreground">Creators</div>
          </div>
          <div className="group">
            <AnimatedCounter 
              end={1000000} 
              suffix="+" 
              className="text-2xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300"
            />
            <div className="text-sm text-muted-foreground">Downloads</div>
          </div>
          <div className="group">
            <div className="text-2xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">4.9★</div>
            <div className="text-sm text-muted-foreground">Rating</div>
          </div>
        </div>
      </div>
      
      {/* Enhanced scroll indicator */}
      <div className="absolute bottom-8 left-1/2 transform -translate-x-1/2 animate-bounce">
        <div className="w-6 h-10 border-2 border-muted-foreground/50 rounded-full flex justify-center">
          <div className="w-1 h-3 bg-muted-foreground/50 rounded-full mt-2 animate-pulse"></div>
        </div>
      </div>
    </section>
  );
};

export default Hero;
