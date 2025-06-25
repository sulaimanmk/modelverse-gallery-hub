
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
      className="glass-card hover-glow group cursor-pointer transition-all duration-300 overflow-hidden"
      onMouseEnter={() => setIsHovered(true)}
      onMouseLeave={() => setIsHovered(false)}
    >
      {/* Image Container */}
      <div className="relative aspect-square overflow-hidden">
        <img 
          src={imageUrl} 
          alt={title}
          className="w-full h-full object-cover transition-transform duration-500 group-hover:scale-110"
        />
        
        {/* Overlay on Hover */}
        <div className={`absolute inset-0 bg-black/50 backdrop-blur-sm transition-opacity duration-300 flex items-center justify-center ${isHovered ? 'opacity-100' : 'opacity-0'}`}>
          <Button size="sm" className="btn-gradient">
            <Eye className="w-4 h-4 mr-2" />
            Quick View
          </Button>
        </div>
        
        {/* Top-right actions */}
        <div className="absolute top-3 right-3 flex space-x-2">
          <Button 
            size="icon" 
            variant="ghost" 
            className="w-8 h-8 bg-black/50 backdrop-blur-sm hover:bg-black/70"
            onClick={(e) => {
              e.stopPropagation();
              setLiked(!liked);
            }}
          >
            <Heart className={`w-4 h-4 ${liked ? 'fill-red-500 text-red-500' : 'text-white'}`} />
          </Button>
        </div>
        
        {/* Category Badge */}
        <Badge className="absolute top-3 left-3 bg-green-600/90 backdrop-blur-sm">
          {category}
        </Badge>
        
        {/* Discount Badge */}
        {originalPrice && (
          <Badge className="absolute bottom-3 left-3 bg-red-600/90 backdrop-blur-sm">
            -{Math.round(((originalPrice - price) / originalPrice) * 100)}%
          </Badge>
        )}
      </div>
      
      {/* Content */}
      <div className="p-4">
        <h3 className="font-semibold text-lg mb-1 line-clamp-1">{title}</h3>
        <p className="text-sm text-muted-foreground mb-3">by {creator}</p>
        
        {/* Tags */}
        <div className="flex flex-wrap gap-1 mb-3">
          {tags.slice(0, 3).map((tag, index) => (
            <Badge key={index} variant="secondary" className="text-xs">
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
        <div className="flex items-center justify-between mb-4">
          <div className="flex items-center space-x-3 text-sm text-muted-foreground">
            <div className="flex items-center">
              <Star className="w-4 h-4 fill-yellow-400 text-yellow-400 mr-1" />
              <span>{rating}</span>
            </div>
            <div className="flex items-center">
              <Download className="w-4 h-4 mr-1" />
              <span>{downloads.toLocaleString()}</span>
            </div>
          </div>
        </div>
        
        {/* Price and Actions */}
        <div className="flex items-center justify-between">
          <div className="flex items-center space-x-2">
            <span className="text-xl font-bold text-green-400">${price}</span>
            {originalPrice && (
              <span className="text-sm text-muted-foreground line-through">${originalPrice}</span>
            )}
          </div>
          
          <Button size="sm" className="btn-gradient">
            Add to Cart
          </Button>
        </div>
      </div>
    </Card>
  );
};

export default ModelCard;
