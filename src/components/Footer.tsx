
import React from 'react';
import { Badge } from '@/components/ui/badge';

const Footer = () => {
  return (
    <footer className="bg-card/50 border-t border-white/10 mt-20">
      <div className="container mx-auto px-4 py-12">
        <div className="grid grid-cols-1 md:grid-cols-4 gap-8">
          {/* Logo & Description */}
          <div className="col-span-1 md:col-span-2">
            <div className="flex items-center space-x-2 mb-4">
              <div className="w-8 h-8 bg-gradient-to-br from-green-400 to-emerald-600 rounded-lg flex items-center justify-center">
                <span className="text-white font-bold text-sm">3D</span>
              </div>
              <span className="text-xl font-bold text-gradient">ModelVault</span>
            </div>
            <p className="text-muted-foreground mb-4 max-w-md">
              The premium marketplace for high-quality 3D models. 
              Discover, buy, and sell amazing 3D assets created by talented artists worldwide.
            </p>
            <div className="flex space-x-4">
              <Badge variant="secondary">Trusted by 50K+ Creators</Badge>
              <Badge variant="secondary">1M+ Downloads</Badge>
            </div>
          </div>
          
          {/* Quick Links */}
          <div>
            <h4 className="font-semibold mb-4">Marketplace</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Browse Models</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Categories</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Featured</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">New Releases</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Free Models</a></li>
            </ul>
          </div>
          
          {/* Creators */}
          <div>
            <h4 className="font-semibold mb-4">For Creators</h4>
            <ul className="space-y-2 text-sm text-muted-foreground">
              <li><a href="#" className="hover:text-primary transition-colors">Start Selling</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Creator Dashboard</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Pricing Guide</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Best Practices</a></li>
              <li><a href="#" className="hover:text-primary transition-colors">Community</a></li>
            </ul>
          </div>
        </div>
        
        <div className="border-t border-white/10 mt-8 pt-8 flex flex-col md:flex-row justify-between items-center">
          <p className="text-sm text-muted-foreground">
            © 2024 ModelVault. All rights reserved.
          </p>
          <div className="flex space-x-6 text-sm text-muted-foreground mt-4 md:mt-0">
            <a href="#" className="hover:text-primary transition-colors">Privacy Policy</a>
            <a href="#" className="hover:text-primary transition-colors">Terms of Service</a>
            <a href="#" className="hover:text-primary transition-colors">Licensing</a>
            <a href="#" className="hover:text-primary transition-colors">Support</a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;
