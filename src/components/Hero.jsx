import React, { useState, useEffect } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { ArrowRight, ChevronDown, Github, Linkedin, Mail } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { ImageWithFallback } from '@/lib/image-utils';

// Headshot image - Import your profile photo
import headshotImage from '@/images/profile.jpeg';

const Hero = () => {
  const [textIndex, setTextIndex] = useState(0);
  const texts = [
    "Building Scalable Web Apps",
    "Designing Clean APIs",
    "Integrating AI Solutions",
    "Optimizing Performance"
  ];

  useEffect(() => {
    const timer = setInterval(() => {
      setTextIndex((prev) => (prev + 1) % texts.length);
    }, 3000);
    return () => clearInterval(timer);
  }, []);

  const handleNavClick = (e, href) => {
    e.preventDefault();
    const element = document.querySelector(href);
    if (element) {
      element.scrollIntoView({ behavior: 'smooth' });
    }
  };

  return (
    <section id="home" className="min-h-screen flex items-center justify-center relative overflow-hidden pt-20">
      {/* Dynamic Background */}
      <div className="absolute inset-0 bg-white dark:bg-slate-950 transition-colors duration-300">
        <div className="absolute top-0 left-0 w-full h-full bg-[radial-gradient(ellipse_at_top,_var(--tw-gradient-stops))] from-slate-50 via-white to-white dark:from-slate-900 dark:via-slate-950 dark:to-slate-950"></div>
        <div className="absolute -top-40 -right-40 w-96 h-96 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-3xl animate-pulse"></div>
        <div className="absolute top-40 -left-20 w-72 h-72 bg-blue-600/10 dark:bg-blue-600/10 rounded-full blur-3xl animate-pulse delay-700"></div>
      </div>

      <div className="container mx-auto px-4 sm:px-6 lg:px-8 relative z-10">
        <div className="flex flex-col lg:flex-row items-center justify-between gap-8 sm:gap-12">
          
          <div className="flex-1 text-center lg:text-left">
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6 }}
              className="inline-flex items-center gap-2 px-3 py-1 rounded-full bg-gradient-to-r from-cyan-50 to-blue-50 dark:bg-slate-900/50 border border-cyan-200 dark:border-slate-800 text-sm text-cyan-700 dark:text-cyan-400 mb-8 backdrop-blur-sm shadow-sm dark:shadow-none mx-auto lg:mx-0"
            >
              <span className="w-2 h-2 rounded-full bg-cyan-400 animate-pulse"></span>
              Full-Stack Developer • Hackathon Winner • Available for opportunities
            </motion.div>

            <motion.h1
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.1 }}
              className="text-4xl sm:text-5xl md:text-6xl lg:text-7xl xl:text-8xl font-bold tracking-tight mb-4 sm:mb-6"
            >
              <span className="text-slate-900 dark:text-white">Rakesh</span>{' '}
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-600">
                Kumar
              </span>
            </motion.h1>

            <div className="h-10 sm:h-12 md:h-16 mb-6 sm:mb-8 relative w-full overflow-hidden">
              <AnimatePresence mode="wait">
                <motion.div
                  key={textIndex}
                  initial={{ opacity: 0, y: 40 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0, y: -40 }}
                  transition={{ duration: 0.5, ease: "backOut" }}
                  className="absolute inset-0 flex items-center justify-center lg:justify-start"
                >
                  <p className="text-xl sm:text-2xl md:text-3xl lg:text-4xl font-light text-slate-600 dark:text-slate-400">
                    {texts[textIndex]}
                  </p>
                </motion.div>
              </AnimatePresence>
            </div>

            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={{ opacity: 1, y: 0 }}
              transition={{ duration: 0.6, delay: 0.3 }}
              className="flex flex-col md:flex-row gap-4 mb-12 justify-center lg:justify-start"
            >
              <Button
                onClick={(e) => handleNavClick(e, '#projects')}
                className="h-14 px-8 text-lg rounded-full bg-cyan-500 hover:bg-cyan-400 text-slate-950 font-bold shadow-[0_0_20px_rgba(6,182,212,0.3)] hover:shadow-[0_0_30px_rgba(6,182,212,0.5)] transition-all duration-300"
              >
                View Projects
                <ArrowRight className="ml-2 w-5 h-5" />
              </Button>
              <Button
                onClick={(e) => handleNavClick(e, '#contact')}
                variant="outline"
                className="h-14 px-8 text-lg rounded-full border-2 border-slate-300 dark:border-slate-700 hover:bg-slate-100 dark:hover:bg-slate-800 text-slate-900 dark:text-white hover:text-cyan-600 dark:hover:text-cyan-400 transition-all duration-300 shadow-sm dark:shadow-none hover:shadow-md hover:shadow-cyan-500/10 dark:hover:shadow-none"
              >
                Hire Me
              </Button>
            </motion.div>

            <motion.div
              initial={{ opacity: 0 }}
              animate={{ opacity: 1 }}
              transition={{ duration: 0.6, delay: 0.6 }}
              className="flex gap-6 justify-center lg:justify-start"
            >
              {[
                { icon: Github, href: 'https://github.com', label: 'GitHub', target: '_blank' },
                { icon: Linkedin, href: 'https://linkedin.com', label: 'LinkedIn', target: '_blank' },
                { icon: Mail, href: 'mailto:rakesh.kr2604@gmail.com', label: 'Email' }
              ].map((social, index) => (
                <a
                  key={index}
                  href={social.href}
                  target={social.target || '_self'}
                  rel={social.target === '_blank' ? 'noopener noreferrer' : undefined}
                  className="group p-3 rounded-full bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500/50 hover:bg-cyan-50 dark:hover:bg-slate-800 transition-all duration-300 relative shadow-sm dark:shadow-none hover:shadow-md hover:shadow-cyan-500/10 dark:hover:shadow-none"
                  aria-label={social.label}
                >
                  <div className="absolute inset-0 bg-cyan-500/20 rounded-full blur-lg opacity-0 group-hover:opacity-100 transition-opacity"></div>
                  <social.icon className="w-6 h-6 text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 relative z-10" />
                </a>
              ))}
            </motion.div>
          </div>

          <motion.div
            initial={{ opacity: 0, scale: 0.8 }}
            animate={{ opacity: 1, scale: 1 }}
            transition={{ duration: 0.8 }}
            className="flex-1 relative max-w-md mx-auto lg:max-w-none"
          >
            <div className="relative w-64 h-64 sm:w-72 sm:h-72 md:w-80 md:h-80 lg:w-96 lg:h-96 mx-auto">
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-600/20 dark:from-cyan-500/10 dark:to-blue-600/10 rounded-full blur-3xl"></div>
              <div className="relative w-full h-full rounded-full border-4 border-cyan-100 dark:border-slate-800/50 overflow-hidden shadow-2xl shadow-cyan-500/20 dark:shadow-none ring-4 ring-cyan-50 dark:ring-slate-800/30">
                 <ImageWithFallback
                  src={headshotImage}
                  alt="Rakesh Kumar"
                  fallbackText="Rakesh Kumar"
                  className="w-full h-full"
                />
              </div>
              
              {/* Floating Tech Badges */}
              <motion.div 
                animate={{ y: [0, -10, 0] }}
                transition={{ duration: 3, repeat: Infinity, ease: "easeInOut" }}
                className="absolute -top-4 -right-4 bg-white dark:bg-slate-900/80 backdrop-blur-md border-2 border-cyan-200 dark:border-slate-700 p-3 rounded-xl shadow-lg shadow-cyan-500/10 dark:shadow-none"
              >
                <span className="text-cyan-400 font-bold">MERN</span> Stack
              </motion.div>
              <motion.div 
                animate={{ y: [0, 10, 0] }}
                transition={{ duration: 4, repeat: Infinity, ease: "easeInOut", delay: 1 }}
                className="absolute -bottom-4 -left-4 bg-white dark:bg-slate-900/80 backdrop-blur-md border-2 border-blue-200 dark:border-slate-700 p-3 rounded-xl shadow-lg shadow-blue-500/10 dark:shadow-none"
              >
                Full Stack <span className="text-blue-400 font-bold">Dev</span>
              </motion.div>
            </div>
          </motion.div>

        </div>

        <motion.div
          animate={{ y: [0, 10, 0] }}
          transition={{ duration: 2, repeat: Infinity }}
          className="absolute bottom-10 left-1/2 -translate-x-1/2 text-slate-400 dark:text-slate-500 hidden md:block"
        >
          <ChevronDown className="w-6 h-6" />
        </motion.div>
      </div>
    </section>
  );
};

export default Hero;