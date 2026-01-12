import { cn } from '@/lib/utils';
import { Artwork } from '@/data/artworks';
import { Download, Share2, Eye } from 'lucide-react';

interface ArtworkCardProps {
  artwork: Artwork;
  onView: (artwork: Artwork) => void;
  index: number;
}

export const ArtworkCard = ({ artwork, onView, index }: ArtworkCardProps) => {
  return (
    <div 
      className="artwork-card group cursor-pointer opacity-0 animate-fade-up"
      style={{ animationDelay: `${index * 0.1}s` }}
      onClick={() => onView(artwork)}
    >
      <div className="relative aspect-[1/1.414] overflow-hidden">
        <img
          src={artwork.image}
          alt={artwork.title}
          className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
        />
        
        {/* Overlay */}
        <div className="absolute inset-0 gallery-overlay opacity-0 group-hover:opacity-100 transition-opacity duration-500">
          <div className="absolute bottom-0 left-0 right-0 p-6">
            <p className="text-gold text-xs tracking-widest uppercase mb-2">
              {artwork.category}
            </p>
            <h3 className="font-display text-2xl text-foreground mb-1">
              {artwork.title}
            </h3>
            <p className="text-muted-foreground text-sm">
              {artwork.medium}, {artwork.year}
            </p>
            
            {/* Quick actions */}
            <div className="flex gap-3 mt-4">
              <button 
                className="p-2 bg-secondary/50 rounded-full hover:bg-primary hover:text-primary-foreground transition-colors"
                onClick={(e) => {
                  e.stopPropagation();
                  onView(artwork);
                }}
              >
                <Eye size={16} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
