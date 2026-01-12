import { useState } from 'react';
import { Header } from '@/components/Header';
import { Hero } from '@/components/Hero';
import { AboutSection } from '@/components/AboutSection';
import { CallToAction } from '@/components/CallToAction';
import { Footer } from '@/components/Footer';
import { IntroAnimation } from '@/components/IntroAnimation';
import { PaintingBackground } from '@/components/PaintingBackground';
import { PageTransition } from '@/components/PageTransition';

// Module-level flag - resets on page refresh, persists during SPA navigation
let introShownThisPageLoad = false;

const Home = () => {
  const [showIntro, setShowIntro] = useState(() => {
    if (introShownThisPageLoad) return false;
    introShownThisPageLoad = true;
    return true;
  });

  return (
    <>
      {showIntro && (
        <IntroAnimation onComplete={() => setShowIntro(false)} />
      )}
      <PageTransition>
        <div className={`min-h-screen relative overflow-hidden ${showIntro ? 'opacity-0' : ''}`}>
          <PaintingBackground />
          <Header />
          <main>
            <Hero />
            <AboutSection />
            <CallToAction />
          </main>
          <Footer />
        </div>
      </PageTransition>
    </>
  );
};

export default Home;
