import React from 'react';
import { motion } from 'framer-motion';
import { PenTool, Code, TestTube, Rocket } from 'lucide-react';

const Workflow = () => {
  const steps = [
    {
      title: "Planning & Architecture",
      desc: "Analyzing requirements, designing database schemas, and planning API endpoints before writing a single line of code.",
      icon: PenTool
    },
    {
      title: "Development",
      desc: "Writing clean, modular code with a focus on component reusability and efficient backend logic.",
      icon: Code
    },
    {
      title: "Testing & Optimization",
      desc: "Ensuring robustness through error handling, performance profiling, and responsive design checks.",
      icon: TestTube
    },
    {
      title: "Deployment",
      desc: "CI/CD pipelines, environment configuration, and production monitoring for reliability.",
      icon: Rocket
    }
  ];

  return (
    <section id="workflow" className="py-16 sm:py-20 lg:py-24 bg-slate-50 dark:bg-slate-900/30 border-y border-slate-200 dark:border-slate-800/50 transition-colors duration-300">
      <div className="container mx-auto px-4 sm:px-6 lg:px-8">
        <div className="text-center mb-12 sm:mb-16">
          <h2 className="text-3xl sm:text-4xl font-bold mb-4 text-slate-900 dark:text-white">Development <span className="text-cyan-600 dark:text-cyan-400">Workflow</span></h2>
          <p className="text-sm sm:text-base text-slate-600 dark:text-slate-400 max-w-2xl mx-auto">
            Quality software is a result of a disciplined process. Here is how I bring ideas to life.
          </p>
        </div>

        <div className="relative max-w-5xl mx-auto">
          {/* Connecting Line */}
          <div className="absolute top-1/2 left-0 w-full h-1 bg-slate-300 dark:bg-slate-800 -translate-y-1/2 hidden md:block"></div>
          
          <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-8 relative z-10">
            {steps.map((step, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true }}
                transition={{ duration: 0.5, delay: index * 0.2 }}
                className="group relative"
              >
                <div className="flex flex-col items-center text-center">
                  <div className="w-14 h-14 sm:w-16 sm:h-16 rounded-full bg-white dark:bg-slate-900 border-4 border-slate-200 dark:border-slate-800 group-hover:border-cyan-500 dark:group-hover:border-cyan-500 transition-colors flex items-center justify-center mb-4 sm:mb-6 relative z-10 shadow-xl shadow-slate-200/50 dark:shadow-none">
                    <step.icon className="w-5 h-5 sm:w-6 sm:h-6 text-slate-600 dark:text-slate-400 group-hover:text-cyan-600 dark:group-hover:text-cyan-400 transition-colors" />
                  </div>
                  <h3 className="text-lg sm:text-xl font-bold text-slate-900 dark:text-white mb-2 sm:mb-3">{step.title}</h3>
                  <p className="text-xs sm:text-sm text-slate-600 dark:text-slate-400 leading-relaxed">
                    {step.desc}
                  </p>
                </div>
              </motion.div>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
};

export default Workflow;