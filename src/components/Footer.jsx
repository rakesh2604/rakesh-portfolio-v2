import React from 'react';
import { Github, Linkedin, Mail } from 'lucide-react';

const Footer = () => {
  const currentYear = new Date().getFullYear();
  
  return (
    <footer className="py-10 sm:py-12 bg-white dark:bg-slate-950 border-t border-slate-200 dark:border-slate-900 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-6 sm:gap-8 mb-6 sm:mb-8">
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Rakesh Kumar</h3>
            <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm">
              Full-Stack Developer specializing in MERN stack, AI integration, and scalable web applications.
            </p>
          </div>
          
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Quick Links</h3>
            <ul className="space-y-2 text-xs sm:text-sm">
              <li><a href="#about" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">About</a></li>
              <li><a href="#projects" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Projects</a></li>
              <li><a href="#achievements" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Achievements</a></li>
              <li><a href="#contact" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors">Contact</a></li>
            </ul>
          </div>
          
          <div>
            <h3 className="text-slate-900 dark:text-white font-bold text-base sm:text-lg mb-3 sm:mb-4">Connect</h3>
            <div className="flex gap-4">
              <a href="https://github.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" aria-label="GitHub">
                <Github className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="https://linkedin.com" target="_blank" rel="noopener noreferrer" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" aria-label="LinkedIn">
                <Linkedin className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
              <a href="mailto:rakesh.kr2604@gmail.com" className="text-slate-600 dark:text-slate-400 hover:text-cyan-600 dark:hover:text-cyan-400 transition-colors" aria-label="Email">
                <Mail className="w-4 h-4 sm:w-5 sm:h-5" />
              </a>
            </div>
          </div>
        </div>
        
        <div className="pt-6 sm:pt-8 border-t border-slate-200 dark:border-slate-900 text-center">
          <p className="text-slate-600 dark:text-slate-500 text-xs sm:text-sm">
            © {currentYear} Rakesh Kumar. Built with 
            <span className="text-cyan-400 mx-1">React</span>, 
            <span className="text-cyan-400 mx-1">Tailwind CSS</span>, and 
            <span className="text-cyan-400 mx-1">Vite</span>.
          </p>
        </div>
      </div>
    </footer>
  );
};

export default Footer;