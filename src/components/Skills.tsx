import React from 'react';
import { motion } from 'motion/react';
import { useInView } from './hooks/useInView';

export function Skills() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const skillCategories = [
    {
      title: 'Development',
      skills: [
        { name: 'React', level: 85 },
        { name: 'FastApi', level: 80 },
        { name: 'CSS', level: 90 },
        { name: 'NEXT.js', level: 85 },
        { name: 'mysql', level: 85 },
      ],
    },
    {
      title: 'Machine Learning',
      skills: [
        { name: 'TensorFlow', level: 85 },
        { name: 'PyTorch', level: 80 },
        { name: 'Scikit-learn', level: 90 },
        { name: 'Keras', level: 85 },
      ],
    },
    {
      title: 'Programming Languages',
      skills: [
        { name: 'Python', level: 95 },
        { name: 'C++', level: 90 },
        { name: 'JavaScript', level: 70 },
        { name: 'Java', level: 65 },
      ],
    },
    {
      title: 'Data Science & Analytics',
      skills: [
        { name: 'Pandas', level: 90 },
        { name: 'Power-bi', level: 75 },
        { name: 'NumPy', level: 90 },
        { name: 'Matplotlib', level: 85 },
        { name: 'Seaborn', level: 80 },
      ],
    },
    {
      title: 'Deep Learning',
      skills: [
        { name: 'Computer Vision', level: 80 },
        { name: 'NLP', level: 75 },
        { name: 'GANs', level: 85 },
        { name: 'Transformers', level: 75 },
      ],
    },
    {
      title: 'Analytical Skills & Problem Solving',
      skills: [
        { name: 'Statistics', level: 80 },
        { name: 'Probability', level: 75 },
        { name: 'DSA', level: 85 },
      ],
    },
  ];

  const tools = [
    'Git & GitHub',
    'Jupyter Notebook',
    'Docker',
    'AWS',
    'Power-bi',
    'Google Colab',
    'SQL',
    'MongoDB',
    'FastAPI',
  ];

  return (
    <div ref={ref} className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8">
      <div className="max-w-7xl mx-auto w-full">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-cyan-400 mb-4">Skills & Expertise</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        {/* Skill Categories */}
        <div className="grid md:grid-cols-2 gap-8 mb-16">
          {skillCategories.map((category, catIndex) => (
            <motion.div
              key={catIndex}
              initial={{ opacity: 0, y: 30 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: catIndex * 0.1 }}
              className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
            >
              <h3 className="text-white mb-6">{category.title}</h3>
              <div className="space-y-4">
                {category.skills.map((skill, skillIndex) => (
                  <div key={skillIndex}>
                    <div className="flex justify-between mb-2">
                      <span className="text-gray-300">{skill.name}</span>
                      <span className="text-cyan-400">{skill.level}%</span>
                    </div>
                    <div className="h-2 bg-slate-700 rounded-full overflow-hidden">
                      <motion.div
                        initial={{ width: 0 }}
                        animate={isInView ? { width: `${skill.level}%` } : {}}
                        transition={{ duration: 1, delay: 0.2 + catIndex * 0.1 + skillIndex * 0.1 }}
                        className="h-full bg-gradient-to-r from-cyan-400 to-blue-500 rounded-full"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          ))}
        </div>

        {/* Tools & Technologies */}
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.4 }}
          className="bg-slate-800/50 backdrop-blur-sm p-8 rounded-2xl border border-slate-700/50"
        >
          <h3 className="text-white mb-6 text-center">Tools & Technologies</h3>
          <div className="flex flex-wrap justify-center gap-4">
            {tools.map((tool, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, scale: 0.8 }}
                animate={isInView ? { opacity: 1, scale: 1 } : {}}
                transition={{ duration: 0.4, delay: 0.5 + index * 0.05 }}
                className="px-6 py-3 bg-slate-700/50 rounded-full border border-cyan-500/30 hover:border-cyan-500 hover:bg-slate-700 transition-all cursor-default"
              >
                <span className="text-gray-300">{tool}</span>
              </motion.div>
            ))}
          </div>
        </motion.div>
      </div>
    </div>
  );
}