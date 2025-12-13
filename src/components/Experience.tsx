import React from "react";
import { motion } from "motion/react";
import { useInView } from "./hooks/useInView";
import {
  Briefcase,
  GraduationCap,
  Award,
  Calendar,
} from "lucide-react";

export function Experience() {
  const [ref, isInView] = useInView({ threshold: 0.2 });

  const experiences = [
    {
      type: "work",
      title: "Research Intern",
      organization: "IEEE Silchar Subsection – IS3IP 2024",
      period: "Jun 2024 - Sep 2024",
      location: "Silchar, Cachar, Assam – 788010",
      description:
        "Research internship focused on analyzing hallucination in Large Language Models (LLMs) and developing mitigation techniques for improving factual accuracy.",
      achievements: [
        "Studied and evaluated different types of hallucinations in LLMs",
        "Implemented RAG-based grounding to reduce incorrect responses",
        "Improved overall response reliability through prompt engineering strategies",
        "Developed a small evaluation pipeline for hallucination detection",
      ],
    },

    {
      type: "work",
      title: "AI/ML Intern",
      organization: "IEM Labs",
      period: "Jun 2025 - Sep 2025",
      description:
        "Cloud-based Intrusion Detection System (IDS) using Hybrid Deep Learning.",
      achievements: [
        "Improved model accuracy by 15%",
        "Optimized inference time by 40%",
        "Collaborated with cross-functional teams",
      ],
    },
  ];

  const education = [
    {
      degree: "Bachelor of Technology",
      field: "Artificial Intelligence & Machine Learning",
      institution: "IEM Kolkata",
      period: "2022 - 2026",
      achievements: [
        "CGPA: 8.5/10",
        "Relevant Coursework: Deep Learning, Computer Vision, NLP, Data Structures",
        "Dean's List - 2023, 2024",
      ],
    },
    {
      degree: "Higher Secondary Education",
      field: "Science (WBCHSE Board)",
      institution: "Nalhati Hari Prasad High School",
      period: "2020 - 2022",
      achievements: [
        "Scored 90% in Higher Secondary Examination",
        "Completed coursework in Physics, Chemistry, Mathematics, and Computer Science",
      ],
    },
  ];

  const certifications = [
    {
      title: "Cybersecurity Foundations",
      issuer: "Linkedin Learning",
      period: "2024",
    },
    {
      title: "The Cybersecurity Threat LandscapeThe Cybersecurity Threat Landscap",
      issuer: "Linkedin Learning",
      period: "2025",
    },
    {
      title: "Machine Learning Engineering",
      issuer: "Coursera - AWS",
      period: "2023",
    },
  ];

  return (
    <div
      ref={ref}
      className="min-h-screen py-20 px-4 sm:px-6 lg:px-8"
    >
      <div className="max-w-7xl mx-auto">
        <motion.div
          initial={{ opacity: 0, y: 30 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6 }}
          className="text-center mb-16"
        >
          <h2 className="text-cyan-400 mb-4">
            Experience & Education
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full" />
        </motion.div>

        <div className="grid lg:grid-cols-2 gap-12">
          {/* Left Column - Experience & Education */}
          <div className="space-y-8">
            {/* Work Experience */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.2 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <Briefcase
                  className="text-cyan-400"
                  size={24}
                />
                <h3 className="text-white">Work Experience</h3>
              </div>
              <div className="space-y-6">
                {experiences.map((exp, index) => (
                  <div
                    key={index}
                    className="relative pl-8 pb-8 border-l-2 border-slate-700 last:pb-0"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-400" />
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                      <div className="flex items-start justify-between mb-2">
                        <h4 className="text-white">
                          {exp.title}
                        </h4>
                      </div>
                      <p className="text-cyan-400 text-sm mb-2">
                        {exp.organization}
                      </p>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                        <Calendar size={14} />
                        {exp.period}
                      </div>
                      <p className="text-gray-300 text-sm mb-3">
                        {exp.description}
                      </p>
                      <ul className="space-y-1">
                        {exp.achievements.map(
                          (achievement, i) => (
                            <li
                              key={i}
                              className="text-gray-400 text-sm flex items-start gap-2"
                            >
                              <span className="text-cyan-400 mt-1">
                                •
                              </span>
                              {achievement}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>

            {/* Education */}
            <motion.div
              initial={{ opacity: 0, x: -50 }}
              animate={isInView ? { opacity: 1, x: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.3 }}
            >
              <div className="flex items-center gap-3 mb-6">
                <GraduationCap
                  className="text-cyan-400"
                  size={24}
                />
                <h3 className="text-white">Education</h3>
              </div>
              <div className="space-y-6">
                {education.map((edu, index) => (
                  <div
                    key={index}
                    className="relative pl-8 border-l-2 border-slate-700"
                  >
                    <div className="absolute left-[-9px] top-0 w-4 h-4 rounded-full bg-cyan-400" />
                    <div className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-colors">
                      <h4 className="text-white mb-1">
                        {edu.degree}
                      </h4>
                      <p className="text-cyan-400 text-sm mb-2">
                        {edu.field}
                      </p>
                      <p className="text-gray-300 mb-2">
                        {edu.institution}
                      </p>
                      <div className="flex items-center gap-2 text-gray-400 text-sm mb-3">
                        <Calendar size={14} />
                        {edu.period}
                      </div>
                      <ul className="space-y-1">
                        {edu.achievements.map(
                          (achievement, i) => (
                            <li
                              key={i}
                              className="text-gray-400 text-sm flex items-start gap-2"
                            >
                              <span className="text-cyan-400 mt-1">
                                •
                              </span>
                              {achievement}
                            </li>
                          ),
                        )}
                      </ul>
                    </div>
                  </div>
                ))}
              </div>
            </motion.div>
          </div>

          {/* Right Column - Certifications */}
          <motion.div
            initial={{ opacity: 0, x: 50 }}
            animate={isInView ? { opacity: 1, x: 0 } : {}}
            transition={{ duration: 0.6, delay: 0.4 }}
          >
            <div className="flex items-center gap-3 mb-6">
              <Award className="text-cyan-400" size={24} />
              <h3 className="text-white">Certifications</h3>
            </div>
            <div className="space-y-4">
              {certifications.map((cert, index) => (
                <motion.div
                  key={index}
                  initial={{ opacity: 0, y: 20 }}
                  animate={isInView ? { opacity: 1, y: 0 } : {}}
                  transition={{
                    duration: 0.6,
                    delay: 0.5 + index * 0.1,
                  }}
                  className="bg-slate-800/50 backdrop-blur-sm p-6 rounded-xl border border-slate-700/50 hover:border-cyan-500/50 transition-all group cursor-pointer"
                >
                  <div className="flex items-start justify-between">
                    <div className="flex-1">
                      <h4 className="text-white mb-2 group-hover:text-cyan-400 transition-colors">
                        {cert.title}
                      </h4>
                      <p className="text-gray-400 text-sm mb-2">
                        {cert.issuer}
                      </p>
                      <div className="flex items-center gap-2 text-gray-500 text-sm">
                        <Calendar size={14} />
                        {cert.period}
                      </div>
                    </div>
                    <Award
                      className="text-cyan-400/50 group-hover:text-cyan-400 transition-colors"
                      size={32}
                    />
                  </div>
                </motion.div>
              ))}
            </div>

            {/* Additional Info */}
            <motion.div
              initial={{ opacity: 0, y: 20 }}
              animate={isInView ? { opacity: 1, y: 0 } : {}}
              transition={{ duration: 0.6, delay: 0.8 }}
              className="mt-8 bg-gradient-to-br from-cyan-500/10 to-blue-500/10 backdrop-blur-sm p-6 rounded-xl border border-cyan-500/30"
            >
              <h4 className="text-white mb-3">
                Publications & Research
              </h4>
              <ul className="text-white">
                <li>
              <p className="text-gray-300 text-sm mb-2">
                "CropTrendx: Predicting Agricultural Commodity
                Price Volatility with Multivariate Learning"
              </p>
              <p className="text-gray-400 text-sm">
                Presented at RAAISA 2025
              </p>
                  </li>
                <li>
              <p className="text-gray-300 text-sm mb-2">
                "Towards Minimal-Telemetry VM Rightsizing: A
                Lifecycle-Anchored Morphology Approach"
              </p>
              <p className="text-gray-400 text-sm">
                International Conference on Intelligent
                Embedded, MicroElectronics, Communication and
                Optical Networks (IEMECON 2025)
              </p>
                  </li>
                <li>
              <p className="text-gray-300 text-sm mb-2">
                "Stocks in Sync: Cluster-Aware Deep Learning for
                Multi-Stock Forecasting in Financial Market"
              </p>
              <p className="text-gray-400 text-sm">
                International Conference on Applied Algorithms
                (ICAA 2026)
              </p>
                  </li>
              </ul>
            </motion.div>
          </motion.div>
        </div>
      </div>
    </div>
  );
}