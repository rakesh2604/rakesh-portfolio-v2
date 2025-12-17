import React from 'react';
import { motion } from 'framer-motion';
import { GraduationCap, Award } from 'lucide-react';
const Education = () => {
  const education = [
    {
      degree: 'Minor in Computer Science Engineering',
      institution: 'Indian Institute of Technology, Mandi',
      location: 'Mandi, India',
      year: 'Expected Dec 2025',
      cgpa: 'CGPA: 8.3/10',
      description: 'Focused on advanced computer science concepts, data structures, algorithms, and system design.'
    },
    {
      degree: 'Master of Computer Applications',
      institution: 'Sarala Birla University',
      location: 'Ranchi, India',
      year: 'Expected Jul 2026',
      cgpa: 'CGPA: 7.43/10',
      description: 'Comprehensive study of software development, database management, and modern web technologies.'
    }
  ];
  const certifications = [{
    name: 'Full Stack Web Development',
    issuer: 'InternShala',
    year: '2023',
  }, {
    name: 'Cybersecurity Essentials',
    issuer: 'NPTEL',
    year: '2025',
  }, {
    name: 'Networking Basics',
    issuer: 'CISCO',
    year: '2025',
  }, {
    name: 'DSA with Java',
    issuer: 'Apna College',
    year: '2025',
  }];
  return <section id="education" className="py-16 sm:py-20 relative bg-slate-50 dark:bg-slate-900/30 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <motion.div initial={{
        opacity: 0,
        y: 20
      }} whileInView={{
        opacity: 1,
        y: 0
      }} viewport={{
        once: true
      }} transition={{
        duration: 0.5
      }} className="text-center mb-10 sm:mb-12">
          <h2 className="text-3xl sm:text-4xl md:text-5xl font-bold mb-4 text-slate-900 dark:text-white">
            Education & <span className="bg-gradient-to-r from-blue-600 to-cyan-600 dark:from-blue-400 dark:to-cyan-400 bg-clip-text text-transparent">Certifications</span>
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-blue-500 to-cyan-500 mx-auto"></div>
        </motion.div>

        <div className="max-w-4xl mx-auto space-y-6 sm:space-y-8">
          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5
        }}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-blue-500 to-cyan-500 flex items-center justify-center">
                <GraduationCap className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Education</h3>
            </div>

            <div className="space-y-4 sm:space-y-6">
              {education.map((edu, index) => <motion.div key={index} initial={{
            opacity: 0,
            x: -20
          }} whileInView={{
            opacity: 1,
            x: 0
          }} viewport={{
            once: true
          }} transition={{
            duration: 0.5,
            delay: 0.1 * (index + 1)
          }} className="bg-white dark:bg-slate-900/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-800/50 rounded-2xl p-5 sm:p-6 shadow-xl shadow-slate-200/50 dark:shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10 transition-all duration-300">
                <div className="flex flex-col sm:flex-row sm:items-center sm:justify-between gap-2 mb-3">
                  <h4 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white">{edu.degree}</h4>
                  <span className="text-blue-600 dark:text-blue-400 font-medium text-sm sm:text-base">{edu.year}</span>
                </div>
                <p className="text-slate-700 dark:text-slate-300 font-medium mb-1 text-sm sm:text-base">{edu.institution}</p>
                <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-2">{edu.location} • {edu.cgpa}</p>
                <p className="text-slate-600 dark:text-slate-400 text-sm sm:text-base">{edu.description}</p>
              </motion.div>)}
            </div>
          </motion.div>

          <motion.div initial={{
          opacity: 0,
          y: 20
        }} whileInView={{
          opacity: 1,
          y: 0
        }} viewport={{
          once: true
        }} transition={{
          duration: 0.5,
          delay: 0.2
        }}>
            <div className="flex items-center gap-3 mb-4 sm:mb-6">
              <div className="w-10 h-10 sm:w-12 sm:h-12 rounded-xl bg-gradient-to-br from-cyan-500 to-teal-500 flex items-center justify-center">
                <Award className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
              </div>
              <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white">Certifications</h3>
            </div>

            <div className="grid grid-cols-1 sm:grid-cols-2 gap-3 sm:gap-4">
              {certifications.map((cert, index) => <motion.div key={index} initial={{
              opacity: 0,
              scale: 0.9
            }} whileInView={{
              opacity: 1,
              scale: 1
            }} viewport={{
              once: true 
            }} transition={{
              duration: 0.3,
              delay: index * 0.05
            }} className="bg-white dark:bg-slate-900/50 backdrop-blur-sm border-2 border-slate-200 dark:border-slate-800/50 rounded-xl p-4 sm:p-5 shadow-xl shadow-slate-200/50 dark:shadow-blue-500/5 hover:shadow-2xl hover:shadow-blue-500/10 dark:hover:shadow-blue-500/10 hover:border-blue-400 dark:hover:border-blue-500/30 transition-all duration-300">
                  <h4 className="text-base sm:text-lg font-bold text-slate-900 dark:text-white mb-2">{cert.name}</h4>
                  <p className="text-slate-600 dark:text-slate-400 text-xs sm:text-sm mb-1">{cert.issuer}</p>
                  <p className="text-blue-600 dark:text-blue-400 text-xs sm:text-sm font-medium">{cert.year}</p>
                </motion.div>)}
            </div>
          </motion.div>
        </div>
      </div>
    </section>;
};
export default Education;