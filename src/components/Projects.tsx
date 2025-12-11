import React, { useState } from "react";
import { motion, AnimatePresence } from "motion/react";
import { useInView } from "./hooks/useInView";
import {
  ExternalLink,
  Github,
  ChevronRight,
} from "lucide-react";

export function Projects() {
  const [ref, isInView] = useInView({ threshold: 0.1 });
  const [selectedCategory, setSelectedCategory] =
    useState("all");

  const categories = [
    "all",
    "Computer Vision",
    "NLP",
    "Data Science",
  ];

  const projects = [
    {
      title: "Face Mask Detection",
      category: "Computer Vision",
      description:
        "Built a deep learning model using CNNs to classify images with 95% accuracy. Implemented transfer learning with ResNet50.",
      image:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2NTE2OTU0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["CNN", "TenserFlow", "OpenCV", "Flask", "Docker"],
      github: "https://github.com/RoysrX/FaceMaskDetection",
      demo: "https://example.com",
    },
    {
      title:
        "Comparision study between Custom CNN model & Pretrained mobilenet model",
      category: "Computer Vision",
      description:
        "A comparative analysis evaluating the performance gap between a custom CNN and a pretrained deep learning model for banana ripeness classification.",
      image:
        "https://unsplash.com/photos/closeup-photo-of-eyeglasses-w7ZyuGYNpRQ",
      tech: ["CNN", "TenserFlow", "OpenCV", "mobilenet"],
      github:
        "https://github.com/RoysrX/Comparison_Study_CNN_vs_MobileNe",
      demo: "https://example.com",
    },
    {
      title: "RAG Based Youtube Chatbot",
      category: "Gen-AI & NLP",
      description:
        "Built a multi-source RAG chatbot using Groq AI, FAISS, and FastAPI to answer questions from YouTube videos, PDFs, DOCX files through semantic retrieval and LLM-based reasoning.",
      image:
        "https://images.unsplash.com/photo-1653179241439-c4c10083879a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUxNjk1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: [
        "Langchain",
        "FAISS",
        "Groq AI (LLaMA 3)",
        "Transformers",
        "HuggingFace",
        "Python",
        "Streamlit",
      ],
      github: "https://colab.research.google.com/drive/1pat55z_iiLqzInsLi3sWS2wekFCXprQW?usp=sharing",
      demo: "https://example.com",
    },
    {
      title: "Super Store Sales Dashboard",
      category: "Power Bi",
      description:
        "Dashboard and forecasting of super store sale.",
      image:
        "https://images.unsplash.com/photo-1761740533449-b8d4385e60b0?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxuZXVyYWwlMjBuZXR3b3JrJTIwdmlzdWFsaXphdGlvbnxlbnwxfHx8fDE3NjUxNjQ2Mjh8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["power bi","DAX"],
      github: "https://github.com/RoysrX/Super-Store-Sales-Dashboard",
      demo: "https://example.com",
    },
    {
      title: "Multivariate Stock price prediction",
      category: "Data Science",
      description:
        "Time series forecasting model using LSTM networks to predict sales trends with high accuracy.",
      image:
        "https://images.unsplash.com/photo-1697577418970-95d99b5a55cf?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxhcnRpZmljaWFsJTIwaW50ZWxsaWdlbmNlJTIwdGVjaG5vbG9neXxlbnwxfHx8fDE3NjUxMzEzNDF8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["LSTM", "Pandas", "NumPy", "Plotly"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Chatbot Assistant",
      category: "NLP",
      description:
        "Conversational AI chatbot using GPT-based architecture for customer support automation.",
      image:
        "https://images.unsplash.com/photo-1526378722484-bd91ca387e72?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxtYWNoaW5lJTIwbGVhcm5pbmclMjBjb2RlfGVufDF8fHx8MTc2NTE2OTU0MXww&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["OpenAI", "LangChain", "FastAPI", "React"],
      github: "https://github.com",
      demo: "https://example.com",
    },
    {
      title: "Customer Segmentation",
      category: "Data Science",
      description:
        "Unsupervised learning project using K-means clustering to segment customers based on behavior patterns.",
      image:
        "https://images.unsplash.com/photo-1653179241439-c4c10083879a?crop=entropy&cs=tinysrgb&fit=max&fm=jpg&ixid=M3w3Nzg4Nzd8MHwxfHNlYXJjaHwxfHxkYXRhJTIwc2NpZW5jZSUyMHdvcmtzcGFjZXxlbnwxfHx8fDE3NjUxNjk1NDJ8MA&ixlib=rb-4.1.0&q=80&w=1080",
      tech: ["Scikit-learn", "Pandas", "Seaborn", "Jupyter"],
      github: "https://github.com",
      demo: "https://example.com",
    },
  ];

  const filteredProjects =
    selectedCategory === "all"
      ? projects
      : projects.filter(
          (project) => project.category === selectedCategory,
        );

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
            Featured Projects
          </h2>
          <div className="w-20 h-1 bg-gradient-to-r from-cyan-400 to-blue-500 mx-auto rounded-full mb-8" />
          <p className="text-gray-400 max-w-2xl mx-auto">
            A showcase of my AI/ML projects demonstrating
            practical applications of machine learning and deep
            learning techniques
          </p>
        </motion.div>

        {/* Category Filter */}
        <motion.div
          initial={{ opacity: 0, y: 20 }}
          animate={isInView ? { opacity: 1, y: 0 } : {}}
          transition={{ duration: 0.6, delay: 0.2 }}
          className="flex flex-wrap justify-center gap-4 mb-12"
        >
          {categories.map((category) => (
            <button
              key={category}
              onClick={() => setSelectedCategory(category)}
              className={`px-6 py-2 rounded-full transition-all ${
                selectedCategory === category
                  ? "bg-gradient-to-r from-cyan-500 to-blue-500 text-white shadow-lg shadow-cyan-500/50"
                  : "bg-slate-800/50 text-gray-300 border border-slate-700/50 hover:border-cyan-500/50"
              }`}
            >
              {category.charAt(0).toUpperCase() +
                category.slice(1)}
            </button>
          ))}
        </motion.div>

        {/* Projects Grid */}
        <AnimatePresence mode="wait">
          <motion.div
            key={selectedCategory}
            initial={{ opacity: 0 }}
            animate={{ opacity: 1 }}
            exit={{ opacity: 0 }}
            transition={{ duration: 0.3 }}
            className="grid md:grid-cols-2 lg:grid-cols-3 gap-8"
          >
            {filteredProjects.map((project, index) => (
              <motion.div
                key={index}
                initial={{ opacity: 0, y: 30 }}
                animate={{ opacity: 1, y: 0 }}
                transition={{
                  duration: 0.6,
                  delay: index * 0.1,
                }}
                className="bg-slate-800/50 backdrop-blur-sm rounded-2xl overflow-hidden border border-slate-700/50 hover:border-cyan-500/50 transition-all group"
              >
                {/* Project Image */}
                <div className="relative h-48 overflow-hidden">
                  <img
                    src={project.image}
                    alt={project.title}
                    className="w-full h-full object-cover group-hover:scale-110 transition-transform duration-500"
                  />
                  <div className="absolute inset-0 bg-gradient-to-t from-slate-900 to-transparent opacity-60" />
                </div>

                {/* Project Info */}
                <div className="p-6">
                  <div className="mb-2">
                    <span className="text-xs text-cyan-400 bg-cyan-500/10 px-3 py-1 rounded-full">
                      {project.category}
                    </span>
                  </div>
                  <h3 className="text-white mb-3 group-hover:text-cyan-400 transition-colors">
                    {project.title}
                  </h3>
                  <p className="text-gray-400 text-sm mb-4">
                    {project.description}
                  </p>

                  {/* Tech Stack */}
                  <div className="flex flex-wrap gap-2 mb-4">
                    {project.tech.map((tech, i) => (
                      <span
                        key={i}
                        className="text-xs text-gray-400 bg-slate-700/50 px-2 py-1 rounded"
                      >
                        {tech}
                      </span>
                    ))}
                  </div>

                  {/* Links */}
                  <div className="flex items-center gap-4">
                    <a
                      href={project.github}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1 text-sm"
                    >
                      <Github size={16} />
                      Code
                    </a>
                    <a
                      href={project.demo}
                      target="_blank"
                      rel="noopener noreferrer"
                      className="text-gray-400 hover:text-cyan-400 transition-colors flex items-center gap-1 text-sm"
                    >
                      <ExternalLink size={16} />
                      Demo
                    </a>
                    <button className="ml-auto text-cyan-400 hover:text-cyan-300 transition-colors">
                      <ChevronRight size={20} />
                    </button>
                  </div>
                </div>
              </motion.div>
            ))}
          </motion.div>
        </AnimatePresence>
      </div>
    </div>
  );
}