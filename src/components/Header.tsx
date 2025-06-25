
import React from 'react';
import { Search, User, ShoppingBag, Upload } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { Badge } from '@/components/ui/badge';

const Header = () => {
  return (
    <header className="sticky top-0 z-50 border-b border-white/10 bg-background/80 backdrop-blur-lg">
      <div className="container mx-auto px-4 py-4">
        <div className="flex items-center justify-between">
          {/* Logo */}
          <div className="flex items-center space-x-4">
            <div className="flex items-center space-x-2">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">3D</span>
              </div>
              <span className="text-xl font-bold text-gradient">ModelVault</span>
            </div>
          </div>

          {/* Navigation */}
          <nav className="hidden md:flex items-center space-x-8">
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Browse</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Categories</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Creators</a>
            <a href="#" className="text-muted-foreground hover:text-primary transition-colors">Blog</a>
          </nav>

          {/* Search Bar */}
          <div className="hidden lg:flex items-center bg-card/50 rounded-full px-4 py-2 w-80">
            <Search className="w-4 h-4 text-muted-foreground mr-3" />
            <input 
              type="text" 
              placeholder="Search 3D models, creators..." 
              className="bg-transparent border-none outline-none flex-1 text-sm placeholder:text-muted-foreground"
            />
          </div>

          {/* Actions */}
          <div className="flex items-center space-x-4">
            <Button variant="ghost" size="sm" className="hidden md:flex items-center space-x-2">
              <Upload className="w-4 h-4" />
              <span>Sell Models</span>
            </Button>
            
            <Button variant="ghost" size="icon">
              <User className="w-4 h-4" />
            </Button>
            
            <Button variant="ghost" size="icon" className="relative">
              <ShoppingBag className="w-4 h-4" />
              <Badge className="absolute -top-2 -right-2 px-1.5 py-0.5 text-xs bg-green-600">
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
