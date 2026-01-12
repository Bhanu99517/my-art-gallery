import { Link } from 'react-router-dom';
import { cn } from '@/lib/utils';

export const Hero = () => {
  return (
    <section className="relative min-h-screen flex items-center justify-center overflow-hidden">
      {/* Colorful animated background */}
      <div className="absolute inset-0">
        <div className="absolute inset-0 bg-background" />
        <div className="absolute top-0 left-0 w-[800px] h-[800px] bg-gradient-to-br from-gold/25 via-amber-500/15 to-transparent rounded-full blur-3xl animate-pulse" />
        <div className="absolute top-0 right-0 w-[600px] h-[600px] bg-gradient-to-bl from-rose-500/20 via-pink-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '0.5s' }} />
        <div className="absolute bottom-0 left-1/4 w-[700px] h-[700px] bg-gradient-to-tr from-violet-500/20 via-purple-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1s' }} />
        <div className="absolute bottom-0 right-0 w-[600px] h-[600px] bg-gradient-to-tl from-cyan-500/20 via-teal-500/15 to-transparent rounded-full blur-3xl animate-pulse" style={{ animationDelay: '1.5s' }} />
        <div className="absolute top-1/2 left-1/2 -translate-x-1/2 -translate-y-1/2 w-[500px] h-[500px] bg-gradient-to-r from-coral-500/15 via-orange-500/10 to-amber-500/15 rounded-full blur-3xl animate-pulse" style={{ animationDelay: '2s' }} />
      </div>
      
      {/* Content */}
      <div className="relative z-10 container mx-auto px-6 text-center">
        <p className="text-gold text-sm tracking-[0.3em] uppercase mb-4 animate-fade-up opacity-0 stagger-1">
          Original Artworks & Portraits
        </p>
        <h1 className="font-display text-5xl md:text-7xl lg:text-8xl font-light text-foreground mb-6 animate-fade-up opacity-0 stagger-2">
          Art That <span className="text-gradient italic">Speaks</span>
        </h1>
        <p className="text-muted-foreground text-lg md:text-xl max-w-2xl mx-auto mb-10 animate-fade-up opacity-0 stagger-3">
          Discover a curated collection of original drawings, portraits, and paintings. 
          Each piece tells a unique story, available for download and sharing.
        </p>
        <Link 
          to="/gallery"
          className="inline-flex items-center gap-2 btn-gold px-8 py-4 rounded-full animate-fade-up opacity-0 stagger-4"
        >
          <span>Explore Gallery</span>
          <svg xmlns="http://www.w3.org/2000/svg" width="20" height="20" viewBox="0 0 24 24" fill="none" stroke="currentColor" strokeWidth="2" strokeLinecap="round" strokeLinejoin="round">
            <path d="M12 5v14M19 12l-7 7-7-7"/>
          </svg>
        </Link>
      </div>
    </section>
  );
};
