import { Header } from '@/components/Header';
import { Gallery } from '@/components/Gallery';
import { Footer } from '@/components/Footer';
import { PaintingBackground } from '@/components/PaintingBackground';
import { PageTransition } from '@/components/PageTransition';

const GalleryPage = () => {
  return (
    <PageTransition>
      <div className="min-h-screen relative overflow-hidden">
        <PaintingBackground />
        <Header />
        <main className="pt-20 relative z-10">
          <Gallery />
        </main>
        <Footer />
      </div>
    </PageTransition>
  );
};

export default GalleryPage;
