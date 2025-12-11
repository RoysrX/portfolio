import React from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import { Code, Brain, Sparkles, Target } from "lucide-react";

export function About() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const highlights = [
    {
      icon: Brain,
      title: "AI Enthusiast",
      description:
        "Deep passion for neural networks and deep learning architectures",
    },
    {
      icon: Code,
      title: "Problem Solver",
      description:
        "Building intelligent solutions using cutting-edge ML frameworks",
    },
    {
      icon: Sparkles,
      title: "Continuous Learner",
      description:
        "Staying updated with latest research papers and technologies",
    },
    {
      icon: Target,
      title: "Goal-Oriented",
      description:
        "Focused on creating impactful AI applications for real-world use",
    },
  ];

  return (
    <div
      ref={ref}
      className="min-h-screen flex items-center justify-center py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-cyan-400 mb-4">About Me</h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12 items-center">
          {/* Image */}
          <motion.div
            initial={{ opacity: 0, x: -50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.2 }}
            className="relative"
          >
            <div className="relative rounded-2xl overflow-hidden shadow-2xl">
              <img
                src="https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUxMzEzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080"
                alt="AI Technology"
                className="w-full h-[500px] object-cover"
              />
              <div className="absolute inset-0 bg-gradient-to-tr from-cyan-500/20 to-blue-500/20" />
            </div>
            {/* Decorative elements */}
            <div className="absolute -top-4 -left-4 w-24 h-24 bg-cyan-500/20 rounded-full blur-2xl" />
            <div className="absolute -bottom-4 -right-4 w-32 h-32 bg-blue-500/20 rounded-full blur-2xl" />
          </motion.div>

          {/* Content */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.3 }}
            className="space-y-6"
          >
            <p className="text-gray-300">
              I’m Shirsendu, a 4th-year CSE student specializing
              in AI/ML with a strong foundation in mathematics,
              statistics, and programming. My journey in
              artificial intelligence began with a fascination
              for how machines can learn and make intelligent
              decisions.After that I explore the full-stack
              development.
            </p>
            <p className="text-gray-300">
              Currently, I'm focused on exploring various
              domains of AI including gen-AI, RAGs, Agentic AI
              and reinforcement learning. I believe in the power
              of AI to transform industries and improve lives.
            </p>

            <div className="grid sm:grid-cols-2 gap-6 mt-8">
              {highlights.map((item, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.4 + index * 0.1,
                  }}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors"
                >
                  <item.icon className="w-8 h-8 text-cyan-400 mb-3" />
                  <h3 className="text-white mb-2">
                    {item.title}
                  </h3>
                  <p className="text-gray-400 text-sm">
                    {item.description}
                  </p>
                </motion.div>
              ))}
            </div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}