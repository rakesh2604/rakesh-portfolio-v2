
import React from 'react';
import { motion } from 'framer-motion';
import { ExternalLink, Github, Database, Layers, ArrowUpRight } from 'lucide-react';
import { Button } from '@/components/ui/button';
import { useToast } from '@/components/ui/use-toast';
import placedAiImage from '@/images/PlacedAI.png';
import resumifyImage from '@/images/Resumify.png';
import books4sbuImage from '@/images/Books4SBU.png';

const Projects = () => {
  const { toast } = useToast();

  const handleLink = (e, url, type) => {
    e.preventDefault();
    if (url) {
      window.open(url, '_blank', 'noopener,noreferrer');
    } else {
      toast({
        title: "Link Unavailable",
        description: `${type} link is not available for this project.`,
      });
    }
  };

  const projects = [
    {
      title: 'Placed AI - AI-Powered Placement Assistant',
      type: 'Full Stack AI Application',
      desc: 'Developed full-stack AI platform in 24-hour Tech-Pragati Hackathon featuring 10+ modules including intelligent resume parser, job matcher, and AI-powered mock interview system.',
      architecture: 'MVC Pattern • REST API • AI Integration',
      database: 'MongoDB',
      tech: ['React', 'Node.js', 'Express', 'MongoDB', 'FastAPI', 'Gemini AI', 'TensorFlow'],
      image: placedAiImage,
      liveUrl: 'https://placedai-eight.vercel.app/',
      githubUrl: 'https://github.com/rakesh2604/PlaceAI',
      highlights: [
        'Integrated Gemini API and TensorFlow for real-time ATS scoring and personalized job recommendations, improving match accuracy by 35%',
        'Implemented JWT-based authentication with secure cookie sessions, protecting user data and ensuring role-based access control',
        'Deployed scalable architecture on Vercel (frontend) and Render (backend), achieving 30% improvement in user engagement',
        'Built comprehensive AI mock interview system with natural language processing capabilities'
      ],
      date: 'Jul – Aug 2025',
      hackathon: 'Tech-Pragati Hackathon (24-hour)',
      impact: '35% match accuracy improvement • 30% user engagement increase'
    },
    {
      title: 'Resumify - AI Resume Optimization Platform',
      type: 'Next.js SaaS Application',
      desc: 'Built Single Page Application serving 50+ active student users with AI-driven resume optimization that increases interview callback rates.',
      architecture: 'Next.js SSR • REST API • AWS Integration',
      database: 'MongoDB • AWS S3',
      tech: ['Next.js', 'Node.js', 'Express', 'MongoDB', 'AWS S3', 'Gemini AI'],
      image: resumifyImage,
      highlights: [
        'Achieved 95% Mobile and 100% Desktop Lighthouse scores through performance optimization and SEO implementation',
        'Deployed AI chatbot handling 100+ FAQs with natural language processing, reducing support queries by 45%',
        'Increased user interview callback rates by 30% through AI-driven ATS keyword optimization and formatting suggestions',
        'Seamless AWS S3 integration for secure document storage and retrieval'
      ],
      date: 'Apr – May 2025',
      impact: '50+ active users • 30% callback rate increase • 45% support query reduction'
    },
    {
      title: 'Books4SBU - Student Book Exchange Platform',
      type: 'Web Application',
      desc: 'Developed registration portal with real-time data synchronization for 50+ participants using Google Sheets API integration and automated backend processing.',
      architecture: 'Google Apps Script • Client-Side',
      database: 'Google Sheets API',
      tech: ['JavaScript', 'Google Apps Script', 'HTML/CSS', 'AOS.js'],
      image: books4sbuImage,
      liveUrl: 'https://rakesh2604.github.io/Books4SBU/',
      githubUrl: 'https://github.com/rakesh2604/Books4SBU',
      highlights: [
        'Automated backend form processing and validation using Google Apps Script, eliminating manual data entry',
        'Enhanced user experience with scroll-triggered animations (AOS.js) and responsive design, deployed on GitHub Pages',
        'Real-time data synchronization for seamless book exchange workflow',
        'Streamlined registration process for 50+ student participants'
      ],
      date: 'Jan – Feb 2025',
      impact: '50+ participants • Automated backend • Zero manual data entry'
    }
  ];

  return (
    <section id="projects" className="py-16 sm:py-20 lg:py-24 bg-white dark:bg-slate-950 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 sm:mb-6 text-slate-900 dark:text-white">
            Featured <span className="text-cyan-600 dark:text-cyan-400">Projects</span>
          </h2>
          <p className="text-slate-600 dark:text-slate-400 max-w-2xl text-base sm:text-lg">
             Real-world projects demonstrating full-stack capabilities, AI integration, and measurable impact. Built with production-grade architecture and deployed at scale.
          </p>
        </div>

        <div className="grid gap-8 sm:gap-10 lg:gap-12">
          {projects.map((project, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: "-100px" }}
              transition={{ duration: 0.6 }}
              className="group relative rounded-2xl sm:rounded-3xl bg-white dark:bg-slate-900/40 border-2 border-slate-200 dark:border-slate-800 overflow-hidden hover:border-cyan-300 dark:hover:border-slate-700 transition-all duration-300 shadow-lg dark:shadow-none hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-none"
            >
              <div className="grid lg:grid-cols-2 gap-0">
                {/* Image Section */}
                <div className="relative h-64 sm:h-80 lg:h-auto overflow-hidden bg-slate-100 dark:bg-slate-900">
                  <div className="w-full h-full transform group-hover:scale-105 transition-transform duration-700">
                    <img
                      src={project.image}
                      alt={project.title}
                      className="w-full h-full object-cover"
                      loading="lazy"
                      onError={(e) => {
                        e.target.style.display = 'none';
                        e.target.nextElementSibling.style.display = 'flex';
                      }}
                    />
                    <div className="hidden absolute inset-0 flex items-center justify-center bg-slate-200 dark:bg-slate-800 text-slate-500 dark:text-slate-400">
                      <span className="text-sm">{project.title}</span>
                    </div>
                  </div>
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-950/30 via-transparent to-transparent lg:opacity-0 lg:group-hover:opacity-100 transition-opacity duration-300 pointer-events-none"></div>
                </div>

                {/* Content Section */}
                <div className="p-6 sm:p-8 lg:p-10 flex flex-col justify-between">
                  <div>
                    <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-3 sm:gap-0 mb-4">
                      <div className="flex flex-col gap-1">
                        <span className="text-cyan-600 dark:text-cyan-400 text-xs sm:text-sm font-semibold tracking-wider uppercase">
                          {project.type}
                        </span>
                        <div className="flex flex-wrap items-center gap-2">
                          {project.date && (
                            <span className="text-slate-600 dark:text-slate-500 text-xs">{project.date}</span>
                          )}
                          {project.hackathon && (
                            <>
                              <span className="text-slate-600">•</span>
                              <span className="text-slate-500 text-xs">{project.hackathon}</span>
                            </>
                          )}
                        </div>
                      </div>
                      <div className="flex gap-2">
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={(e) => handleLink(e, project.githubUrl, 'GitHub')} 
                          className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400"
                          title="View on GitHub"
                        >
                          <Github className="w-5 h-5" />
                        </Button>
                        <Button 
                          variant="ghost" 
                          size="icon" 
                          onClick={(e) => handleLink(e, project.liveUrl, 'Live Demo')} 
                          className="rounded-full hover:bg-slate-100 dark:hover:bg-slate-800 hover:text-cyan-600 dark:hover:text-cyan-400"
                          title="View Live Demo"
                        >
                          <ExternalLink className="w-5 h-5" />
                        </Button>
                      </div>
                    </div>

                    <h3 className="text-2xl sm:text-3xl font-bold text-slate-900 dark:text-white mb-3 sm:mb-4 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors">
                      {project.title}
                    </h3>
                    <p className="text-slate-600 dark:text-slate-400 mb-4 text-sm sm:text-base leading-relaxed">
                      {project.desc}
                    </p>
                    {project.impact && (
                      <div className="mb-4 sm:mb-6 p-3 rounded-lg bg-gradient-to-r from-cyan-50 to-blue-50 dark:bg-cyan-500/10 border-2 border-cyan-200 dark:border-cyan-500/20 shadow-sm dark:shadow-none">
                        <p className="text-cyan-700 dark:text-cyan-400 text-xs sm:text-sm font-medium">{project.impact}</p>
                      </div>
                    )}

                    <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4 mb-6 sm:mb-8">
                      <div className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-2">
                          <Layers className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400" /> Architecture
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">{project.architecture}</div>
                      </div>
                      <div className="p-3 sm:p-4 rounded-xl bg-slate-50 dark:bg-slate-800/50 border-2 border-slate-200 dark:border-slate-700/50 shadow-sm dark:shadow-none">
                        <div className="flex items-center gap-2 text-xs sm:text-sm text-slate-700 dark:text-slate-300 mb-2">
                          <Database className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-400" /> Database
                        </div>
                        <div className="text-xs sm:text-sm font-medium text-slate-900 dark:text-white">{project.database}</div>
                      </div>
                    </div>

                    <div className="space-y-2 sm:space-y-3 mb-6 sm:mb-8">
                      {project.highlights.map((highlight, i) => (
                        <div key={i} className="flex items-start gap-2 sm:gap-3 text-xs sm:text-sm text-slate-600 dark:text-slate-400">
                          <ArrowUpRight className="w-3 h-3 sm:w-4 sm:h-4 text-cyan-600 dark:text-cyan-500 mt-0.5 shrink-0" />
                          <span>{highlight}</span>
                        </div>
                      ))}
                    </div>
                  </div>

                  <div className="flex flex-wrap gap-2">
                    {project.tech.map((t, i) => (
                      <span key={i} className="px-2 sm:px-3 py-1 text-xs font-semibold text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-950 rounded-full border border-slate-300 dark:border-slate-800 shadow-sm dark:shadow-none">
                        {t}
                      </span>
                    ))}
                  </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;