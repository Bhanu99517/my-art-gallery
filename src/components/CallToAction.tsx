import { Link } from 'react-router-dom';
import { Mail } from 'lucide-react';
import { motion } from 'framer-motion';

export const CallToAction = () => {
  return (
    <section className="py-24 relative overflow-hidden">
      <div className="container mx-auto px-6">
        <motion.div 
          className="relative rounded-2xl overflow-hidden"
          initial={{ opacity: 0, y: 50 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: "-100px" }}
          transition={{ duration: 0.7, ease: "easeOut" }}
        >
          {/* Background gradient */}
          <div className="absolute inset-0 bg-gradient-to-br from-gold/20 via-rose-500/10 to-violet-500/20" />
          <div className="absolute inset-0 bg-background/80 backdrop-blur-sm" />
          
          <div className="relative z-10 py-16 px-8 md:px-16 text-center">
            <motion.p 
              className="text-gold text-xs tracking-[0.3em] uppercase mb-4"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.2 }}
            >
              Let's Connect
            </motion.p>
            <motion.h2 
              className="font-display text-3xl md:text-4xl lg:text-5xl text-foreground mb-6"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.3 }}
            >
              Interested in a <span className="text-gradient italic">Commission</span>?
            </motion.h2>
            <motion.p 
              className="text-muted-foreground max-w-2xl mx-auto mb-10"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.4 }}
            >
              Whether you're looking for a custom portrait, a unique piece for your space, 
              or simply want to discuss art, I'd love to hear from you.
            </motion.p>
            <motion.div 
              className="flex flex-col sm:flex-row gap-4 justify-center"
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true }}
              transition={{ duration: 0.5, delay: 0.5 }}
            >
              <Link 
                to="/contact"
                className="inline-flex items-center justify-center gap-2 btn-gold px-8 py-4 rounded-full"
              >
                <Mail size={18} />
                <span>Get in Touch</span>
              </Link>
              <Link 
                to="/gallery"
                className="inline-flex items-center justify-center gap-2 px-8 py-4 border border-border text-foreground rounded-full hover:bg-secondary transition-colors"
              >
                <span>Browse Gallery</span>
              </Link>
            </motion.div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};