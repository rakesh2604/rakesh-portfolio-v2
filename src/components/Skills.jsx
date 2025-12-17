import React, { useRef } from 'react';
import { motion, useMotionTemplate, useMotionValue, useSpring } from 'framer-motion';
import { Code2, Server, Globe, Wrench } from 'lucide-react';

const TiltCard = ({ title, icon: Icon, skills, color }) => {
  const ref = useRef(null);

  const x = useMotionValue(0);
  const y = useMotionValue(0);

  const mouseXSpring = useSpring(x);
  const mouseYSpring = useSpring(y);

  const rotateX = useMotionTemplate`${mouseYSpring}deg`;
  const rotateY = useMotionTemplate`${mouseXSpring}deg`;

  const handleMouseMove = (e) => {
    if (!ref.current) return;

    const rect = ref.current.getBoundingClientRect();

    const width = rect.width;
    const height = rect.height;

    const mouseX = e.clientX - rect.left;
    const mouseY = e.clientY - rect.top;

    const xPct = mouseX / width - 0.5;
    const yPct = mouseY / height - 0.5;

    x.set(xPct * 20);
    y.set(yPct * -20);
  };

  const handleMouseLeave = () => {
    x.set(0);
    y.set(0);
  };

  return (
    <motion.div
      ref={ref}
      onMouseMove={handleMouseMove}
      onMouseLeave={handleMouseLeave}
      style={{
        rotateY,
        rotateX,
        transformStyle: "preserve-3d",
      }}
      className="relative h-full rounded-2xl bg-white dark:bg-slate-900/50 border-2 border-slate-200 dark:border-slate-800 p-6 sm:p-8 shadow-xl shadow-slate-200/50 dark:shadow-none hover:shadow-2xl hover:shadow-cyan-500/10 dark:hover:shadow-none transition-shadow duration-300"
    >
      <div 
        style={{ transform: "translateZ(50px)" }} 
        className="absolute inset-3 sm:inset-4 rounded-xl border border-slate-200/50 dark:border-white/5 bg-slate-50/50 dark:bg-slate-900/50 backdrop-blur-sm pointer-events-none"
      />
      <div style={{ transform: "translateZ(75px)" }} className="relative z-10">
        <div className={`w-12 h-12 sm:w-14 sm:h-14 rounded-xl bg-gradient-to-br ${color} flex items-center justify-center mb-4 sm:mb-6 shadow-lg`}>
          <Icon className="w-6 h-6 sm:w-7 sm:h-7 text-white" />
        </div>
        <h3 className="text-xl sm:text-2xl font-bold text-slate-900 dark:text-white mb-4 sm:mb-6">{title}</h3>
        <div className="flex flex-wrap gap-2 sm:gap-3">
          {skills.map((skill, i) => (
            <span
              key={i}
              className="px-2 sm:px-3 py-1 sm:py-1.5 text-xs sm:text-sm font-medium text-slate-700 dark:text-slate-300 bg-slate-100 dark:bg-slate-800/80 rounded-lg border border-slate-300 dark:border-slate-700/50 shadow-sm dark:shadow-none"
            >
              {skill}
            </span>
          ))}
        </div>
      </div>
    </motion.div>
  );
};

const Skills = () => {
  const categories = [
    {
      title: 'Frontend Engineering',
      icon: Code2,
      color: 'from-blue-600 to-cyan-500',
      skills: ['React.js', 'Next.js', 'Tailwind CSS', 'Bootstrap', 'Framer Motion', 'HTML5', 'CSS3']
    },
    {
      title: 'Backend Architecture',
      icon: Server,
      color: 'from-purple-600 to-indigo-500',
      skills: ['Node.js', 'Express.js', 'FastAPI', 'RESTful APIs', 'JWT Authentication', 'Google Apps Script']
    },
    {
      title: 'Database & Cloud',
      icon: Globe,
      color: 'from-emerald-500 to-teal-500',
      skills: ['MongoDB', 'MySQL', 'Google Sheets API', 'AWS S3', 'Vercel', 'Render']
    },
    {
      title: 'Languages & Tools',
      icon: Wrench,
      color: 'from-orange-500 to-red-500',
      skills: ['JavaScript', 'Python', 'C++', 'SQL', 'Git', 'GitHub', 'Postman', 'VS Code']
    }
  ];

  return (
    <section id="skills" className="py-16 sm:py-20 lg:py-24 relative overflow-hidden bg-white dark:bg-slate-950 transition-colors duration-300">
       <div className="absolute top-0 inset-x-0 h-px bg-gradient-to-r from-transparent via-cyan-500/50 to-transparent"></div>
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <motion.span 
            initial={{ opacity: 0 }}
            whileInView={{ opacity: 1 }}
            className="text-cyan-400 font-medium tracking-wider text-xs sm:text-sm uppercase"
          >
            Technical Proficiency
          </motion.span>
          <motion.h2 
            initial={{ opacity: 0, y: 20 }}
            whileInView={{ opacity: 1, y: 0 }}
            className="text-3xl sm:text-4xl md:text-5xl font-bold mt-2"
          >
            The Tech <span className="text-transparent bg-clip-text bg-gradient-to-r from-cyan-600 to-blue-600 dark:from-cyan-400 dark:to-blue-600">Stack</span>
          </motion.h2>
        </div>

        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-4 sm:gap-6 lg:gap-8 perspective-1000">
          {categories.map((cat, idx) => (
            <div key={idx} className="h-full">
              <TiltCard {...cat} />
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;