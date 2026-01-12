import { useState } from 'react';
import { cn } from '@/lib/utils';
import { artworks, categories, Artwork } from '@/data/artworks';
import { ArtworkCard } from './ArtworkCard';
import { ArtworkModal } from './ArtworkModal';

import artwork1 from '@/assets/artwork-1.jpg';
import artwork2 from '@/assets/artwork-2.jpg';
import artwork3 from '@/assets/artwork-3.jpg';
import artwork4 from '@/assets/artwork-4.jpg';
import artwork5 from '@/assets/artwork-5.jpg';
import artwork6 from '@/assets/artwork-6.jpg';
import artwork7 from '@/assets/artwork-7.jpg';
import artwork8 from '@/assets/artwork-8.jpg';
import artwork9 from '@/assets/artwork-9.jpg';
import artwork10 from '@/assets/artwork-10.jpg';
import artwork11 from '@/assets/artwork-11.jpg';
import artwork12 from '@/assets/artwork-12.jpg';
import artwork13 from '@/assets/artwork-13.jpg';
import artwork14 from '@/assets/artwork-14.jpg';
import artwork15 from '@/assets/artwork-15.jpg';
import artwork16 from '@/assets/artwork-16.jpg';
import artwork17 from '@/assets/artwork-17.jpg';
import artwork18 from '@/assets/artwork-18.jpg';
import artwork19 from '@/assets/artwork-19.jpg';
import artwork20 from '@/assets/artwork-20.jpg';
import artwork21 from '@/assets/artwork-21.jpg';
import artwork22 from '@/assets/artwork-22.jpg';
import artwork23 from '@/assets/artwork-23.jpg';
import artwork24 from '@/assets/artwork-24.jpg';
import artwork25 from '@/assets/artwork-25.jpg';
import artwork26 from '@/assets/artwork-26.jpg';
import artwork27 from '@/assets/artwork-27.jpg';
import artwork28 from '@/assets/artwork-28.jpg';
import artwork29 from '@/assets/artwork-29.jpg';
import artwork30 from '@/assets/artwork-30.jpg';

const artworkImages: Record<string, string> = {
  '/artwork-1.jpg': artwork1,
  '/artwork-2.jpg': artwork2,
  '/artwork-3.jpg': artwork3,
  '/artwork-4.jpg': artwork4,
  '/artwork-5.jpg': artwork5,
  '/artwork-6.jpg': artwork6,
  '/artwork-7.jpg': artwork7,
  '/artwork-8.jpg': artwork8,
  '/artwork-9.jpg': artwork9,
  '/artwork-10.jpg': artwork10,
  '/artwork-11.jpg': artwork11,
  '/artwork-12.jpg': artwork12,
  '/artwork-13.jpg': artwork13,
  '/artwork-14.jpg': artwork14,
  '/artwork-15.jpg': artwork15,
  '/artwork-16.jpg': artwork16,
  '/artwork-17.jpg': artwork17,
  '/artwork-18.jpg': artwork18,
  '/artwork-19.jpg': artwork19,
  '/artwork-20.jpg': artwork20,
  '/artwork-21.jpg': artwork21,
  '/artwork-22.jpg': artwork22,
  '/artwork-23.jpg': artwork23,
  '/artwork-24.jpg': artwork24,
  '/artwork-25.jpg': artwork25,
  '/artwork-26.jpg': artwork26,
  '/artwork-27.jpg': artwork27,
  '/artwork-28.jpg': artwork28,
  '/artwork-29.jpg': artwork29,
  '/artwork-30.jpg': artwork30,
};

export const Gallery = () => {
  const [activeCategory, setActiveCategory] = useState<string>('all');
  const [selectedArtwork, setSelectedArtwork] = useState<Artwork | null>(null);

  const filteredArtworks = activeCategory === 'all' 
    ? artworks 
    : artworks.filter(a => a.category === activeCategory);

  const getImageSrc = (artwork: Artwork) => {
    return artworkImages[artwork.image] || artwork.image;
  };

  return (
    <section id="gallery" className="py-24 relative">
      
      <div className="container mx-auto px-6 relative z-10">
        {/* Section header */}
        <div className="text-center mb-16">
          <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4">
            Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
            Featured Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            Browse through my collection of original artworks. Each piece is available for download and sharing.
          </p>
        </div>

        {/* Category filters */}
        <div className="flex flex-wrap justify-center gap-4 mb-12">
          {categories.map((category) => (
            <button
              key={category.id}
              onClick={() => setActiveCategory(category.id)}
              className={cn(
                "px-6 py-2 rounded-full text-sm font-medium transition-all duration-300",
                activeCategory === category.id
                  ? "bg-primary text-primary-foreground"
                  : "bg-secondary text-secondary-foreground hover:bg-secondary/80"
              )}
            >
              {category.label}
            </button>
          ))}
        </div>

        {/* Gallery grid */}
        <div className="grid grid-cols-3 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-5 xl:grid-cols-6 gap-2 md:gap-4 auto-rows-min">
          {filteredArtworks.map((artwork, index) => (
            <ArtworkCard
              key={artwork.id}
              artwork={{ ...artwork, image: getImageSrc(artwork) }}
              onView={(a) => setSelectedArtwork(a)}
              index={index}
            />
          ))}
        </div>
      </div>

      {/* Modal */}
      <ArtworkModal
        artwork={selectedArtwork}
        onClose={() => setSelectedArtwork(null)}
      />
    </section>
  );
};
