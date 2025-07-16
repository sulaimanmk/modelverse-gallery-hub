import React, { useState } from 'react';
import { Card } from '@/components/ui/card';
import { Badge } from '@/components/ui/badge';
import { Button } from '@/components/ui/button';
import { Heart, Download, Star, Eye } from 'lucide-react';

interface ModelCardProps {
  id: string;
  title: string;
  creator: string;
  price: number;
  originalPrice?: number;
  category: string;
  rating: number;
  downloads: number;
  imageUrl: string;
  tags: string[];
  isLiked?: boolean;
}

const ModelCard: React.FC<ModelCardProps> = ({
  title,
  creator,
  price,
  originalPrice,
  category,
  rating,
  downloads,
  imageUrl,
  tags,
  isLiked = false
}) => {
  const [liked, setLiked] = useState(isLiked);
  const [isHovered, setIsHovered] = useState(false);

  return (
    <Card 
      className="glass-card hover-glow card-3d group cursor-pointer transition-all duration-500 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container with enhanced hover effects */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-all duration-700 group-hover:scale-110 group-hover:brightness-110"
          onError={(e) => {
            // Updated fallback to a working 3D/tech image
            e.currentTarget.src = 'https://images.unsplash.com/photo-1551818255-e6e10975bc17?w=400&h=400&fit=crop&crop=center&auto=format';
          }}
        />
        
        {/* Shimmer effect */}
        <div className={`absolute inset-0 animate-shimmer opacity-0 group-hover:opacity-100 transition-opacity duration-500`}></div>
        
        {/* Overlay on Hover */}
        <div className={`absolute inset-0 bg-gradient-to-t from-black/80 via-black/20 to-transparent backdrop-blur-sm transition-all duration-500 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button size="sm" className="btn-gradient btn-elastic transform translate-y-4 group-hover:translate-y-0 transition-transform duration-300">
            <Eye className="w-4 h-4 mr-2" />
            Quick View
          </Button>
        </div>
        
        {/* Top-right actions */}
        <div className="absolute top-3 right-3 flex space-x-2 transform translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
          <Button 
            size="icon" 
            variant="ghost" 
            className="w-8 h-8 bg-black/50 backdrop-blur-sm hover:bg-black/70 btn-elastic"
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
          >
            <Heart className={`w-4 h-4 transition-colors duration-300 ${liked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
          </Button>
        </div>
        
        {/* Category Badge */}
        <Badge className="absolute top-3 left-3 bg-green-600/90 backdrop-blur-sm transform -translate-x-4 group-hover:translate-x-0 transition-transform duration-300">
          {category}
        </Badge>
        
        {/* Discount Badge */}
        {originalPrice && (
          <Badge className="absolute bottom-3 left-3 bg-red-600/90 backdrop-blur-sm animate-pulse">
            -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
          </Badge>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4 space-y-3">
        <div className="transform group-hover:translate-y-0 translate-y-1 transition-transform duration-300">
          <h3 className="font-semibold text-lg mb-1 line-clamp-1 group-hover:text-green-400 transition-colors duration-300">{title}</h3>
          <p className="text-sm text-muted-foreground mb-3">by {creator}</p>
        </div>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3 transform group-hover:translate-y-0 translate-y-1 transition-transform duration-300 delay-75">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs hover:bg-green-500/20 transition-colors duration-200">
              {tag}
            </Badge>
          ))}
          {tags.length > 3 && (
            <Badge variant="secondary" className="text-xs">
              +{tags.length - 3}
            </Badge>
          )}
        </div>
        
        {/* Stats */}
        <div className="flex items-center justify-between mb-4 transform group-hover:translate-y-0 translate-y-1 transition-transform duration-300 delay-100">
          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
            <div className="flex items-center group/stat hover:text-yellow-400 transition-colors duration-200">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1 group-hover/stat:scale-110 transition-transform duration-200" />
              <span>{rating}</span>
            </div>
            <div className="flex items-center group/stat hover:text-green-400 transition-colors duration-200">
              <Download className="w-4 h-4 mr-1 group-hover/stat:scale-110 transition-transform duration-200" />
              <span>{downloads.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        {/* Price and Actions */}
        <div className="flex items-center justify-between transform group-hover:translate-y-0 translate-y-1 transition-transform duration-300 delay-150">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-green-400 group-hover:scale-110 transition-transform duration-300">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
            )}
          </div>
          
          <Button size="sm" className="btn-gradient btn-elastic">
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ModelCard;
