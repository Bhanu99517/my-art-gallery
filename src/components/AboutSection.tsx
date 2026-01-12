import { Palette, Heart, Award } from 'lucide-react';
import { motion } from 'framer-motion';

export const AboutSection = () => {
  const features = [
    {
      icon: Palette,
      title: 'Hand-Crafted Art',
      description: 'Every piece is meticulously created with traditional techniques and modern vision.'
    },
    {
      icon: Heart,
      title: 'Made with Passion',
      description: 'Art born from genuine emotion and dedication to the craft of visual storytelling.'
    },
    {
      icon: Award,
      title: 'Original Works',
      description: 'Unique, one-of-a-kind pieces that bring character and soul to any space.'
    }
  ];

  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <div className="grid lg:grid-cols-2 gap-16 items-center">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true, margin: "-100px" }}
            transition={{ duration: 0.7, ease: "easeOut" }}
          >
            <p className="text-gold text-xs tracking-[0.3em] uppercase mb-4">
              About the Artist
            </p>
            <h2 className="font-display text-4xl md:text-5xl text-foreground mb-6">
              Creating Art That <span className="text-gradient italic">Resonates</span>
            </h2>
            <p className="text-muted-foreground mb-6 leading-relaxed">
              With years of dedication to the craft, each artwork represents a journey 
              of exploration and expression. From delicate pencil portraits to vibrant 
              landscapes, the collection spans various mediums and styles.
            </p>
            <p className="text-muted-foreground leading-relaxed">
              Every piece in this gallery is available for personal use and sharing. 
              The goal is simple: to create art that moves people and brings beauty 
              into everyday life.
            </p>
          </motion.div>

          <div className="space-y-6">
            {features.map((feature, index) => (
              <motion.div 
                key={feature.title}
                initial={{ opacity: 0, x: 50 }}
                whileInView={{ opacity: 1, x: 0 }}
                viewport={{ once: true, margin: "-50px" }}
                transition={{ duration: 0.5, delay: index * 0.15, ease: "easeOut" }}
                className="flex gap-4 p-6 rounded-xl bg-secondary/30 border border-border/50 hover:border-gold/30 transition-colors duration-300"
              >
                <div className="flex-shrink-0 w-12 h-12 rounded-lg bg-gold/10 flex items-center justify-center">
                  <feature.icon className="w-6 h-6 text-gold" />
                </div>
                <div>
                  <h3 className="font-display text-lg text-foreground mb-1">{feature.title}</h3>
                  <p className="text-muted-foreground text-sm">{feature.description}</p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};
