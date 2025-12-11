import { Context } from 'npm:hono';

// Portfolio knowledge base - this will be used for RAG
const portfolioKnowledge = {
  personal: {
    name: "Shirsendu Roy",
    role: "AI/ML Student & Future Innovator",
    description: "Passionate about leveraging artificial intelligence and machine learning to solve real-world problems. Exploring deep learning, computer vision, and natural language processing.",
    email: "shirsenduroysr@gmail.com",
    phone: "+91 7479232605",
    location: "India",
    github: "https://github.com/RoysrX",
    linkedin: "https://www.linkedin.com/in/shirsendu-roy-1690a0319/",
  },
  skills: {
    development: ["React", "FastApi", "CSS", "NEXT.js", "MySQL"],
    machineLearning: ["TensorFlow", "PyTorch", "Scikit-learn", "Keras"],
    programming: ["Python", "C++", "JavaScript", "Java"],
    dataScience: ["Pandas", "Power-BI", "NumPy", "Matplotlib", "Seaborn"],
    deepLearning: ["Computer Vision", "NLP", "GANs", "Transformers"],
    analyticalSkills: ["Statistics", "Probability", "DSA"],
    tools: ["Git & GitHub", "Jupyter Notebook", "Docker", "AWS", "Power-bi", "Google Colab", "SQL", "MongoDB", "FastAPI"],
  },
  projects: [
    {
      title: "Image Classification System",
      category: "Computer Vision",
      description: "Built a deep learning model using CNNs to classify images with 95% accuracy. Implemented transfer learning with ResNet50.",
      tech: ["PyTorch", "OpenCV", "Flask", "Docker"],
    },
    {
      title: "Sentiment Analysis Tool",
      category: "NLP",
      description: "Developed a sentiment analysis model using transformers (BERT) to analyze customer reviews and social media posts.",
      tech: ["Transformers", "HuggingFace", "Python", "Streamlit"],
    },
    {
      title: "Object Detection System",
      category: "Computer Vision",
      description: "Real-time object detection using YOLO v8 for identifying and tracking objects in video streams.",
      tech: ["YOLO", "TensorFlow", "OpenCV", "Python"],
    },
    {
      title: "Sales Forecasting Model",
      category: "Data Science",
      description: "Time series forecasting model using LSTM networks to predict sales trends with high accuracy.",
      tech: ["LSTM", "Pandas", "NumPy", "Plotly"],
    },
    {
      title: "Chatbot Assistant",
      category: "NLP",
      description: "Conversational AI chatbot using GPT-based architecture for customer support automation.",
      tech: ["OpenAI", "LangChain", "FastAPI", "React"],
    },
    {
      title: "Customer Segmentation",
      category: "Data Science",
      description: "Unsupervised learning project using K-means clustering to segment customers based on behavior patterns.",
      tech: ["Scikit-learn", "Pandas", "Seaborn", "Jupyter"],
    },
  ],
  experience: [
    {
      title: "AI/ML Intern",
      organization: "Tech Company Inc.",
      period: "Jun 2024 - Present",
      description: "Working on computer vision projects using PyTorch and TensorFlow. Developed object detection models and improved existing ML pipelines.",
      achievements: [
        "Improved model accuracy by 15%",
        "Optimized inference time by 40%",
        "Collaborated with cross-functional teams",
      ],
    },
    {
      title: "Research Assistant",
      organization: "University AI Lab",
      period: "Jan 2024 - May 2024",
      description: "Assisted in NLP research projects focusing on transformer models and their applications in text generation.",
      achievements: [
        "Co-authored research paper",
        "Implemented BERT-based models",
        "Conducted literature review",
      ],
    },
  ],
  education: {
    degree: "Bachelor of Technology",
    field: "Artificial Intelligence & Machine Learning",
    institution: "Your University",
    period: "2022 - 2026",
    cgpa: "8.5/10",
  },
  certifications: [
    "Deep Learning Specialization - Coursera (DeepLearning.AI) - 2024",
    "TensorFlow Developer Certificate - Google - 2024",
    "Machine Learning Engineering - Coursera (AWS) - 2023",
  ],
};

// Simple keyword-based retrieval for RAG
function retrieveRelevantInfo(query: string): string {
  const lowerQuery = query.toLowerCase();
  const relevantInfo: string[] = [];

  // Check for skills-related queries
  if (lowerQuery.includes('skill') || lowerQuery.includes('technology') || lowerQuery.includes('know')) {
    relevantInfo.push(`Skills:\n- Machine Learning: ${portfolioKnowledge.skills.machineLearning.join(', ')}\n- Programming: ${portfolioKnowledge.skills.programming.join(', ')}\n- Deep Learning: ${portfolioKnowledge.skills.deepLearning.join(', ')}\n- Tools: ${portfolioKnowledge.skills.tools.join(', ')}`);
  }

  // Check for project-related queries
  if (lowerQuery.includes('project') || lowerQuery.includes('work') || lowerQuery.includes('build') || lowerQuery.includes('portfolio')) {
    const projectInfo = portfolioKnowledge.projects.map(p => 
      `${p.title} (${p.category}): ${p.description} Tech: ${p.tech.join(', ')}`
    ).join('\n\n');
    relevantInfo.push(`Projects:\n${projectInfo}`);
  }

  // Check for experience-related queries
  if (lowerQuery.includes('experience') || lowerQuery.includes('work') || lowerQuery.includes('internship') || lowerQuery.includes('job')) {
    const expInfo = portfolioKnowledge.experience.map(e =>
      `${e.title} at ${e.organization} (${e.period}): ${e.description} Achievements: ${e.achievements.join(', ')}`
    ).join('\n\n');
    relevantInfo.push(`Experience:\n${expInfo}`);
  }

  // Check for education-related queries
  if (lowerQuery.includes('education') || lowerQuery.includes('university') || lowerQuery.includes('degree') || lowerQuery.includes('study')) {
    relevantInfo.push(`Education:\n${portfolioKnowledge.education.degree} in ${portfolioKnowledge.education.field} from ${portfolioKnowledge.education.institution} (${portfolioKnowledge.education.period}). CGPA: ${portfolioKnowledge.education.cgpa}`);
  }

  // Check for certification queries
  if (lowerQuery.includes('certification') || lowerQuery.includes('certificate') || lowerQuery.includes('course')) {
    relevantInfo.push(`Certifications:\n${portfolioKnowledge.certifications.join('\n')}`);
  }

  // Check for personal info
  if (lowerQuery.includes('who') || lowerQuery.includes('about') || lowerQuery.includes('intro') || relevantInfo.length === 0) {
    relevantInfo.push(`About: ${portfolioKnowledge.personal.name} is a ${portfolioKnowledge.personal.role}. ${portfolioKnowledge.personal.description}`);
  }

  // Check for specific tech stack queries
  const techTerms = ['tensorflow', 'pytorch', 'python', 'opencv', 'bert', 'yolo', 'lstm', 'cnn', 'nlp', 'computer vision'];
  for (const term of techTerms) {
    if (lowerQuery.includes(term)) {
      const relatedProjects = portfolioKnowledge.projects.filter(p => 
        p.tech.some(t => t.toLowerCase().includes(term)) || 
        p.description.toLowerCase().includes(term)
      );
      if (relatedProjects.length > 0) {
        const projectNames = relatedProjects.map(p => p.title).join(', ');
        relevantInfo.push(`Projects using ${term}: ${projectNames}`);
      }
    }
  }

  return relevantInfo.join('\n\n') || `General info: ${portfolioKnowledge.personal.name} is passionate about AI/ML with experience in various projects and technologies.`;
}

// Generate response based on retrieved information
function generateResponse(query: string, context: string): string {
  const lowerQuery = query.toLowerCase();

  // Greeting
  if (lowerQuery.includes('hello') || lowerQuery.includes('hi') || lowerQuery.includes('hey')) {
    return `Hello! I'm Shirsendu's AI assistant. I can help you learn about his skills, projects, experience, and education in AI/ML. What would you like to know?`;
  }

  // Thank you
  if (lowerQuery.includes('thank')) {
    return `You're welcome! Feel free to ask me anything else about Shirsendu's portfolio.`;
  }

  // Contact info
  if (lowerQuery.includes('contact') || lowerQuery.includes('email') || lowerQuery.includes('reach')) {
    return `You can reach Shirsendu through the contact form on this portfolio website, or connect with him on LinkedIn and GitHub. Check out the Contact section below!`;
  }

  // General response with context
  const responses = [
    `Based on Shirsendu's portfolio:\n\n${context}\n\nIs there anything specific you'd like to know more about?`,
    `Here's what I found:\n\n${context}\n\nWould you like more details on any particular aspect?`,
    `From Shirsendu's experience:\n\n${context}\n\nFeel free to ask for more information!`,
  ];

  return responses[Math.floor(Math.random() * responses.length)];
}

export async function handleChat(c: Context) {
  try {
    const { message } = await c.req.json();

    if (!message || typeof message !== 'string') {
      return c.json({ error: 'Invalid message' }, 400);
    }

    // Retrieve relevant information (RAG retrieval step)
    const context = retrieveRelevantInfo(message);

    // Generate response (RAG generation step)
    const response = generateResponse(message, context);

    return c.json({ response });
  } catch (error) {
    console.error('Error in chat handler:', error);
    return c.json({ error: 'Failed to process message' }, 500);
  }
}