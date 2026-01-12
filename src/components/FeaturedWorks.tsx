import { Link } from 'react-router-dom';
import { artworks } from '@/data/artworks';

export const FeaturedWorks = () => {
  const featured = artworks.slice(0, 3);

  return (
    <section className="py-24 relative">
      <div className="container mx-auto px-6">
        <div className="text-center mb-16">
          <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
            Featured Collection
          </p>
          <h2 className="font-display text-4xl md:text-5xl text-foreground mb-4">
            Selected Works
          </h2>
          <p className="text-muted-foreground max-w-xl mx-auto">
            A glimpse into the most cherished pieces from the collection
          </p>
        </div>

        <div className="grid md:grid-cols-3 gap-8">
          {featured.map((artwork, index) => (
            <div 
              key={artwork.id}
              className="group relative overflow-hidden rounded-lg"
              style={{ animationDelay: `${index * 0.1}s` }}
            >
              <div className="aspect-[1/1.414] overflow-hidden">
                <img 
                  src={artwork.image} 
                  alt={artwork.title}
                  className="w-full h-full object-cover transition-transform duration-700 group-hover:scale-110"
                />
              </div>
              <div className="absolute inset-0 bg-gradient-to-t from-background/90 via-background/20 to-transparent opacity-0 group-hover:opacity-100 transition-opacity duration-500" />
              <div className="absolute bottom-0 left-0 right-0 p-6 translate-y-full group-hover:translate-y-0 transition-transform duration-500">
                <h3 className="font-display text-xl text-foreground mb-1">{artwork.title}</h3>
                <p className="text-muted-foreground text-sm">{artwork.category}</p>
              </div>
            </div>
          ))}
        </div>

        <div className="text-center mt-12">
          <Link 
            to="/gallery"
            className="inline-flex items-center gap-2 text-gold hover:text-gold/80 transition-colors"
          >
            <span>View All Works</span>
            <svg xmlns="http://www.w3.org/2000/svg" width="18" height="18" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
              <path d="M5 12h14M12 5l7 7-7 7"/>
            </svg>
          </Link>
        </div>
      </div>
    </section>
  );
};