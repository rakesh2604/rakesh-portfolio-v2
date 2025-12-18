import React from 'react';
import { motion } from 'framer-motion';
import { Layout, Cpu, Database, GitBranch, Download, FileText } from 'lucide-react';
import { Button } from '@/components/ui/button';

const About = () => {
  const features = [
    {
      icon: Layout,
      title: "System Architecture",
      desc: "Designing scalable, maintainable systems with clean separation of concerns and modular patterns."
    },
    {
      icon: Database,
      title: "Data Modeling",
      desc: "Creating efficient database schemas and relationships optimized for performance and integrity."
    },
    {
      icon: Cpu,
      title: "Performance First",
      desc: "Writing optimized code with a focus on core web vitals, memory management, and fast execution."
    },
    {
      icon: GitBranch,
      title: "Clean Code",
      desc: "Adhering to SOLID principles and industry best practices for code that is easy to read and debug."
    }
  ];

  const handleDownloadResume = () => {
    // Resume PDF should be placed in public folder as Rakesh_Kumar_Resume.pdf
    const resumePath = '/Rakesh_Kumar_Resume.pdf';
    
    // Create a temporary anchor element to trigger download
    const link = document.createElement('a');
    link.href = resumePath;
    link.download = 'Rakesh_Kumar_Resume.pdf';
    link.target = '_blank';
    
    // Append to body, click, and remove
    document.body.appendChild(link);
    link.click();
    document.body.removeChild(link);
    
    // Fallback: open in new tab if download doesn't work
    setTimeout(() => {
      window.open(resumePath, '_blank');
    }, 100);
  };

  return (
    <section id="about" className="py-20 sm:py-24 relative bg-slate-50 dark:bg-slate-950/50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="grid lg:grid-cols-2 gap-10 lg:gap-12 xl:gap-16 items-start">
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: true }}
            transition={{ duration: 0.6 }}
            className="space-y-6"
          >
            <h2 className="text-4xl sm:text-5xl lg:text-6xl font-bold text-slate-900 dark:text-white leading-tight">
              Engineering <br />
              <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-600">
                Solutions at Scale
              </span>
            </h2>
            <div className="space-y-4">
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Full-Stack Developer with hands-on experience building scalable web applications and RESTful APIs. Proven track record in hackathon competitions and optimizing system performance, specializing in MERN stack development with a strong foundation in data structures, algorithms, and modern cloud deployment practices.

              </p>
              <p className="text-base sm:text-lg text-slate-600 dark:text-slate-400 leading-relaxed">
                Previously worked as <strong className="text-slate-900 dark:text-white">Full-Stack Developer at Digi Soul Tech Pvt. Ltd.</strong> where I architected and deployed RESTful APIs, integrated with 5+ third-party services, optimized database query performance (30% reduction in processing time), and implemented secure authentication reducing vulnerabilities by 40%.
              </p>
            </div>

          </motion.div>

          <div className="grid grid-cols-1 sm:grid-cols-2 gap-4 sm:gap-5 lg:gap-6">
            {features.map((feature, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 20 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.1 }}
                className="p-6 sm:p-7 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 hover:border-cyan-400 dark:hover:border-cyan-500/30 hover:bg-slate-50 dark:hover:bg-slate-800/80 transition-all duration-300 group shadow-lg dark:shadow-none hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-none"
              >
                <div className="w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br from-cyan-50 to-blue-50 dark:bg-slate-800 flex items-center justify-center mb-4 group-hover:bg-cyan-100 dark:group-hover:bg-cyan-500/20 transition-colors shadow-sm dark:shadow-none">
                  <feature.icon className="w-6 h-6 sm:w-7 sm:h-7 text-cyan-600 dark:text-slate-300 group-hover:text-cyan-700 dark:group-hover:text-cyan-400 transition-colors" />
                </div>
                <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-3">{feature.title}</h3>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base leading-relaxed">{feature.desc}</p>
              </motion.div>
            ))}
          </div>
        </div>

        {/* Experience, Leadership, Resume Cards - Full Width Section */}
        <motion.div
          initial={{ opacity: 0, y: 40 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
          className="mt-12 sm:mt-16 lg:mt-20"
        >
          <div className="grid grid-cols-1 md:grid-cols-3 gap-4 sm:gap-5 lg:gap-6 w-full">
            {/* Professional Experience Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-700/50 relative overflow-hidden group shadow-lg dark:shadow-none hover:shadow-xl hover:shadow-cyan-500/10 dark:hover:shadow-none transition-all duration-300 flex flex-col">
              {/* Gradient Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-cyan-500/10 dark:bg-cyan-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-cyan-500/20 dark:group-hover:bg-cyan-500/20 transition-colors duration-500"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10 mt-1">Professional Experience (Unpaid)</h3>
              <p className="text-slate-700 dark:text-slate-400 relative z-10 text-base sm:text-lg mb-4 font-medium">
                <strong className="text-slate-900 dark:text-white">Full-Stack Developer</strong> at Digi Soul Tech Pvt. Ltd. (Jul 2023 – Dec 2024)
              </p>
              <ul className="text-slate-600 dark:text-slate-400 relative z-10 text-base sm:text-lg space-y-2.5 list-none flex-grow">
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-600 dark:text-cyan-400 mt-1.5 flex-shrink-0 text-lg">•</span>
                  <span>Architected RESTful APIs integrating 5+ third-party services</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-600 dark:text-cyan-400 mt-1.5 flex-shrink-0 text-lg">•</span>
                  <span>Optimized database queries achieving 30% performance improvement</span>
                </li>
                <li className="flex items-start gap-2.5">
                  <span className="text-cyan-600 dark:text-cyan-400 mt-1.5 flex-shrink-0 text-lg">•</span>
                  <span>Reduced security vulnerabilities by 40%</span>
                </li>
              </ul>
            </div>
            
            {/* Leadership Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-700/50 relative overflow-hidden group shadow-lg dark:shadow-none hover:shadow-xl hover:shadow-blue-500/10 dark:hover:shadow-none transition-all duration-300 flex flex-col">
              {/* Gradient Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-blue-500 via-cyan-500 to-blue-500"></div>
              <div className="absolute top-0 right-0 w-32 h-32 bg-blue-500/10 dark:bg-blue-500/10 rounded-full blur-2xl -translate-y-1/2 translate-x-1/2 group-hover:bg-blue-500/20 dark:group-hover:bg-blue-500/20 transition-colors duration-500"></div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 relative z-10 mt-1">Leadership</h3>
              <p className="text-slate-700 dark:text-slate-400 relative z-10 text-base sm:text-lg mb-4 font-medium">
                <strong className="text-slate-900 dark:text-white">Co-Convener, SIIC</strong> (Startup Incubation & Innovation Cell)
              </p>
              <p className="text-slate-600 dark:text-slate-400 relative z-10 text-base sm:text-lg leading-relaxed flex-grow">
                Leading startup incubation initiatives and mentoring 15+ student entrepreneurs at university level.
              </p>
            </div>

            {/* Resume Card */}
            <div className="p-5 sm:p-6 rounded-2xl bg-gradient-to-br from-cyan-50 via-blue-50 to-cyan-50 dark:from-slate-900 dark:via-slate-800 dark:to-slate-900 border-2 border-cyan-200 dark:border-slate-800 relative group hover:border-cyan-400 dark:hover:border-cyan-500/30 transition-all cursor-pointer overflow-hidden shadow-lg dark:shadow-none hover:shadow-xl hover:shadow-cyan-500/20 dark:hover:shadow-none flex flex-col" onClick={handleDownloadResume}>
              {/* Gradient Top Bar */}
              <div className="absolute top-0 left-0 right-0 h-2 bg-gradient-to-r from-cyan-500 via-blue-500 to-cyan-500"></div>
              
              {/* Decorative Pattern */}
              <div className="absolute inset-0 opacity-5 dark:opacity-10">
                <div className="absolute top-4 right-4 w-24 h-24 bg-cyan-500 rounded-full blur-3xl"></div>
                <div className="absolute bottom-4 left-4 w-32 h-32 bg-blue-500 rounded-full blur-3xl"></div>
              </div>
              
              <div className="relative z-10 h-full flex flex-col justify-between">
                  <div className="flex-1 flex flex-col items-center justify-center mb-4">
                      <div className="w-20 h-20 sm:w-24 sm:h-24 rounded-2xl bg-gradient-to-br from-cyan-500 to-blue-600 flex items-center justify-center mb-4 shadow-lg shadow-cyan-500/30 group-hover:scale-110 transition-transform duration-300">
                          <FileText className="w-10 h-10 sm:w-12 sm:h-12 text-white" />
                      </div>
                      <h3 className="font-bold text-slate-900 dark:text-white text-xl sm:text-2xl mb-3 text-center">My Resume</h3>
                      <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 text-center px-2">
                        Download my latest resume in PDF format
                      </p>
                  </div>
                  <Button 
                      onClick={(e) => { e.stopPropagation(); handleDownloadResume(); }}
                      className="w-full bg-gradient-to-r from-cyan-600 to-blue-600 hover:from-cyan-700 hover:to-blue-700 text-white border-none shadow-lg shadow-cyan-500/30 dark:shadow-cyan-900/20 hover:shadow-xl hover:shadow-cyan-500/40 dark:hover:shadow-cyan-900/30 transition-all duration-300 text-sm sm:text-base py-2.5 sm:py-3 font-semibold group/btn"
                  >
                      <Download className="w-4 h-4 sm:w-5 sm:h-5 mr-2 group-hover/btn:translate-y-[-2px] transition-transform" /> Download PDF
                  </Button>
              </div>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
};

export default About;