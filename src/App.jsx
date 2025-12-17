import React from 'react';
import { Helmet } from 'react-helmet';
import { ThemeProvider } from '@/contexts/ThemeContext';
import Navbar from '@/components/Navbar';
import Hero from '@/components/Hero';
import About from '@/components/About';
import Skills from '@/components/Skills';
import Workflow from '@/components/Workflow';
import Achievements from '@/components/Achievements';
import Projects from '@/components/Projects';
import Education from '@/components/Education';
import Contact from '@/components/Contact';
import Footer from '@/components/Footer';
import { Toaster } from '@/components/ui/toaster';

function App() {
  return (
    <ThemeProvider>
      <Helmet>
        <title>Rakesh Kumar | Full Stack Developer | MERN Stack Specialist</title>
        <meta name="description" content="Full-Stack Developer with 1.5+ years of experience building scalable web applications and RESTful APIs. Specializing in MERN stack, AI integration, and modern cloud deployment." />
      </Helmet>
      <div className="min-h-screen bg-white dark:bg-slate-950 text-slate-900 dark:text-white selection:bg-cyan-500/30 selection:text-cyan-200 transition-colors duration-300">
        <Navbar />
        <Hero />
        <About />
        <Skills />
        <Achievements />
        <Workflow />
        <Projects />
        <Education />
        <Contact />
        <Footer />
        <Toaster />
      </div>
    </ThemeProvider>
  );
}

export default App;