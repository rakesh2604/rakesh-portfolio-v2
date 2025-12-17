import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { Trophy, Calendar, MapPin, ChevronLeft, ChevronRight, Award } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/lib/image-utils';
import hackathonBadge from '@/images/1.jpg';
import hackathonTeam from '@/images/2.jpg';
import hackathonCertificate from '@/images/3.jpg';
import hackathonEvent from '@/images/4.jpg';

const Achievements = () => {
  const images = [
    hackathonBadge,
    hackathonTeam,
    hackathonCertificate,
    hackathonEvent
  ];

  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    // Only auto-rotate if images are valid to avoid flicker on load
    const timer = setInterval(() => {
      setCurrentIndex((prev) => (prev + 1) % images.length);
    }, 4000);
    return () => clearInterval(timer);
  }, [images.length]);

  const nextImage = () => {
    setCurrentIndex((prev) => (prev + 1) % images.length);
  };

  const prevImage = () => {
    setCurrentIndex((prev) => (prev - 1 + images.length) % images.length);
  };

  return (
    <section id="achievements" className="py-16 sm:py-20 lg:py-24 bg-slate-100 dark:bg-slate-900/30 relative overflow-hidden transition-colors duration-300">
      <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/20 to-transparent"></div>
      
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.div
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 dark:bg-cyan-500/10 border-2 border-cyan-200 dark:border-cyan-500/20 text-cyan-700 dark:text-cyan-400 text-sm mb-4 shadow-sm dark:shadow-none"
          >
            <Trophy className="w-4 h-4" />
            <span>Major Achievement</span>
          </motion.div>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true }}
            transition={{ delay: 0.1 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white"
          >
            Innovate-A-Thon <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-600">3.0</span>
          </motion.h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Showcasing technical excellence and teamwork at one of the region's premier hackathons.
          </p>
        </div>

        <motion.div
          initial={{ opacity: 0, scale: 0.95 }}
          whileInView={{ opacity: 1, scale: 1 }}
          viewport={{ once: true }}
          className="max-w-6xl mx-auto bg-white dark:bg-slate-950 border-2 border-slate-200 dark:border-slate-800 rounded-2xl sm:rounded-3xl overflow-hidden shadow-2xl shadow-slate-200/50 dark:shadow-none"
        >
          <div className="grid lg:grid-cols-2 gap-0">
            {/* Image Gallery */}
            <div className="relative h-64 sm:h-80 md:h-96 lg:h-auto overflow-hidden bg-slate-100 dark:bg-slate-900 group">
              <AnimatePresence mode="wait">
                <motion.div
                  key={currentIndex}
                  initial={{ opacity: 0, scale: 1.1 }}
                  animate={{ opacity: 1, scale: 1 }}
                  exit={{ opacity: 0 }}
                  transition={{ duration: 0.5 }}
                  className="absolute inset-0 w-full h-full"
                >
                   <ImageWithFallback
                      src={images[currentIndex]}
                      alt={`Hackathon moment ${currentIndex + 1}`}
                      fallbackText="Hackathon Photo"
                      className="w-full h-full"
                    />
                </motion.div>
              </AnimatePresence>
              
              <div className="absolute inset-0 bg-gradient-to-t from-slate-950/40 via-transparent to-transparent pointer-events-none"></div>

              {/* Navigation Controls */}
              <div className="absolute bottom-6 right-6 flex gap-2 z-20">
                <Button 
                  size="icon" 
                  onClick={prevImage}
                  variant="outline" 
                  className="rounded-full bg-slate-950/50 border-slate-700 hover:bg-slate-900 text-white hover:text-cyan-400 backdrop-blur-sm"
                >
                  <ChevronLeft className="w-5 h-5" />
                </Button>
                <Button 
                  size="icon" 
                  onClick={nextImage}
                  variant="outline" 
                  className="rounded-full bg-slate-950/50 border-slate-700 hover:bg-slate-900 text-white hover:text-cyan-400 backdrop-blur-sm"
                >
                  <ChevronRight className="w-5 h-5" />
                </Button>
              </div>

              {/* Image Indicators */}
              <div className="absolute bottom-6 left-6 flex gap-2 z-20">
                {images.map((_, idx) => (
                  <button
                    key={idx}
                    onClick={() => setCurrentIndex(idx)}
                    className={`h-1.5 rounded-full transition-all duration-300 ${
                      idx === currentIndex ? 'w-8 bg-cyan-400' : 'w-2 bg-slate-600 hover:bg-slate-500'
                    }`}
                  />
                ))}
              </div>
            </div>

            {/* Content */}
            <div className="p-8 lg:p-12 flex flex-col justify-center relative">
              <div className="absolute top-0 right-0 p-6 opacity-10">
                <Trophy className="w-32 h-32 text-cyan-500" />
              </div>

              <div className="relative z-10">
                <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-gradient-to-r from-yellow-50 to-amber-50 dark:bg-yellow-500/10 border-2 border-yellow-300 dark:border-yellow-500/20 text-yellow-700 dark:text-yellow-400 text-xs font-bold uppercase tracking-wider mb-6 shadow-sm dark:shadow-none">
                  <Award className="w-4 h-4" />
                  2nd Place Winner
                </div>

                <h3 className="text-3xl font-bold text-slate-900 dark:text-white mb-4">
                  Team <span className="text-cyan-600 dark:text-cyan-400">Airavat</span>
                </h3>
                
                <div className="space-y-4 mb-8 text-slate-600 dark:text-slate-400">
                  <div className="flex items-center gap-3">
                    <MapPin className="w-5 h-5 text-slate-500 dark:text-slate-500" />
                    <span>BIT Meshra Campus, Ranchi</span>
                  </div>
                  <div className="flex items-center gap-3">
                    <Calendar className="w-5 h-5 text-slate-500 dark:text-slate-500" />
                    <span>29th - 31st August, 2025</span>
                  </div>
                </div>

                <div className="space-y-4 mb-8">
                  <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                    Secured the <strong className="text-slate-900 dark:text-white">2nd Runner Up</strong> position among 50+ participating teams nationwide at BIT Mesra's Innovate-A-Thon 3.0. Our team "Airavat" developed a <strong className="text-slate-900 dark:text-white">blockchain-based healthcare solution</strong> in a Web3 hackathon, addressing real-time healthcare data management challenges.
                  </p>
                  <p className="leading-relaxed text-slate-700 dark:text-slate-300">
                    The solution demonstrated robust architecture, scalable backend design, and practical implementation potential, earning recognition from the panel of industry judges for innovation in healthcare technology.
                  </p>
                </div>

                <div className="flex flex-wrap gap-2">
                  <span className="px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-300 dark:border-slate-800 shadow-sm dark:shadow-none">
                    Blockchain
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-300 dark:border-slate-800 shadow-sm dark:shadow-none">
                    Web3
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-300 dark:border-slate-800 shadow-sm dark:shadow-none">
                    Full Stack Dev
                  </span>
                  <span className="px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-900 rounded-full border border-slate-300 dark:border-slate-800 shadow-sm dark:shadow-none">
                    Healthcare Tech
                  </span>
                </div>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default Achievements;