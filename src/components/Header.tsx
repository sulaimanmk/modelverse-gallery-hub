
import React, { useState } from 'react';
import { Search, User, ShoppingBag, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  const [isSearchFocused, setIsSearchFocused] = useState(false);

  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo with hover animation */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2 group cursor-pointer">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center group-hover:scale-110 transition-transform duration-300 animate-glow-pulse">
                <span className="text-white font-bold text-sm">3D</span>
              </div>
              <span className="text-xl font-bold text-gradient group-hover:scale-105 transition-transform duration-300">ModelVault</span>
            </div>
          </div>

          {/* Navigation with hover effects */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              Browse
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              Categories
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              Creators
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-all duration-300 relative group">
              Blog
              <span className="absolute -bottom-1 left-0 w-0 h-0.5 bg-primary transition-all duration-300 group-hover:w-full"></span>
            </a>
          </nav>

          {/* Enhanced Search Bar */}
          <div className={`hidden lg:flex items-center bg-card/50 rounded-full px-4 py-2 transition-all duration-500 ${
            isSearchFocused ? 'w-96 bg-card/80 shadow-lg shadow-green-500/10' : 'w-80'
          }`}>
            <Search className={`w-4 h-4 mr-3 transition-colors duration-300 ${
              isSearchFocused ? 'text-green-400' : 'text-muted-foreground'
            }`} />
            <input 
              type="text" 
              placeholder="Search 3D models, creators..." 
              className="bg-transparent border-none outline-none flex-1 text-sm placeholder:text-muted-foreground"
              onFocus={() => setIsSearchFocused(true)}
              onBlur={() => setIsSearchFocused(false)}
            />
          </div>

          {/* Actions with enhanced animations */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2 btn-elastic hover:bg-green-500/10">
              <Upload className="w-4 h-4" />
              <span>Sell Models</span>
            </Button>
            
            <Button variant="ghost" size="icon" className="btn-elastic hover:bg-green-500/10">
              <User className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative btn-elastic hover:bg-green-500/10">
              <ShoppingBag className="w-4 h-4" />
              <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs bg-green-600 animate-pulse">
                3
              </Badge>
            </Button>
          </div>
        </div>
      </div>
    </header>
  );
};

export default Header;
