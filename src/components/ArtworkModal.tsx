import { useEffect, useCallback } from 'react';
import { cn } from '@/lib/utils';
import { Artwork } from '@/data/artworks';
import { X, Download, Share2, Facebook, Twitter, Link2 } from 'lucide-react';
import { toast } from 'sonner';

interface ArtworkModalProps {
  artwork: Artwork | null;
  onClose: () => void;
}

export const ArtworkModal = ({ artwork, onClose }: ArtworkModalProps) => {
  const handleDownload = useCallback(async () => {
    if (!artwork) return;
    
    try {
      const response = await fetch(artwork.image);
      const blob = await response.blob();
      const url = window.URL.createObjectURL(blob);
      const a = document.createElement('a');
      a.href = url;
      a.download = `${artwork.title.toLowerCase().replace(/\s+/g, '-')}.jpg`;
      document.body.appendChild(a);
      a.click();
      document.body.removeChild(a);
      window.URL.revokeObjectURL(url);
      toast.success('Download started!');
    } catch (error) {
      toast.error('Failed to download. Please try again.');
    }
  }, [artwork]);

  const handleShare = useCallback(async (platform: 'copy' | 'twitter' | 'facebook') => {
    if (!artwork) return;
    
    const shareUrl = window.location.href;
    const shareText = `Check out "${artwork.title}" - ${artwork.medium}`;

    switch (platform) {
      case 'copy':
        await navigator.clipboard.writeText(shareUrl);
        toast.success('Link copied to clipboard!');
        break;
      case 'twitter':
        window.open(`https://twitter.com/intent/tweet?text=${encodeURIComponent(shareText)}&url=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
      case 'facebook':
        window.open(`https://www.facebook.com/sharer/sharer.php?u=${encodeURIComponent(shareUrl)}`, '_blank');
        break;
    }
  }, [artwork]);

  useEffect(() => {
    const handleEsc = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    
    if (artwork) {
      document.body.style.overflow = 'hidden';
      window.addEventListener('keydown', handleEsc);
    }
    
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', handleEsc);
    };
  }, [artwork, onClose]);

  if (!artwork) return null;

  return (
    <div 
      className="fixed inset-0 z-50 flex items-center justify-center p-4 md:p-8"
      onClick={onClose}
    >
      {/* Backdrop */}
      <div className="absolute inset-0 bg-background/95 backdrop-blur-sm animate-fade-in" />
      
      {/* Modal content */}
      <div 
        className="relative z-10 max-w-6xl w-full max-h-[90vh] flex flex-col md:flex-row gap-8 animate-scale-in"
        onClick={(e) => e.stopPropagation()}
      >
        {/* Close button */}
        <button
          onClick={onClose}
          className="absolute -top-12 right-0 md:top-0 md:-right-12 p-2 text-muted-foreground hover:text-foreground transition-colors"
        >
          <X size={24} />
        </button>

        {/* Image */}
        <div className="flex-1 flex items-center justify-center">
          <img
            src={artwork.image}
            alt={artwork.title}
            className="max-w-full max-h-[60vh] md:max-h-[80vh] object-contain rounded-lg shadow-2xl"
          />
        </div>

        {/* Details */}
        <div className="w-full md:w-80 flex flex-col justify-center">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-2">
            {artwork.category}
          </p>
          <h2 className="font-display text-3xl md:text-4xl text-foreground mb-4">
            {artwork.title}
          </h2>
          
          <div className="space-y-3 mb-6">
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Medium</span>
              <span className="text-foreground">{artwork.medium}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Year</span>
              <span className="text-foreground">{artwork.year}</span>
            </div>
            <div className="flex justify-between text-sm">
              <span className="text-muted-foreground">Dimensions</span>
              <span className="text-foreground">{artwork.dimensions}</span>
            </div>
          </div>

          <p className="text-muted-foreground text-sm leading-relaxed mb-8">
            {artwork.description}
          </p>

          {/* Actions */}
          <div className="space-y-4">
            <button
              onClick={handleDownload}
              className="w-full btn-gold py-3 rounded-lg flex items-center justify-center gap-2"
            >
              <Download size={18} />
              <span>Download Artwork</span>
            </button>

            <div className="flex gap-3">
              <button
                onClick={() => handleShare('copy')}
                className="flex-1 py-3 bg-secondary text-secondary-foreground rounded-lg flex items-center justify-center gap-2 hover:bg-secondary/80 transition-colors"
              >
                <Link2 size={18} />
                <span>Copy Link</span>
              </button>
              <button
                onClick={() => handleShare('twitter')}
                className="p-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Twitter size={18} />
              </button>
              <button
                onClick={() => handleShare('facebook')}
                className="p-3 bg-secondary text-secondary-foreground rounded-lg hover:bg-secondary/80 transition-colors"
              >
                <Facebook size={18} />
              </button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
