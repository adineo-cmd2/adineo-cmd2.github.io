// data/content.js - All portfolio content in one place

export const personalInfo = {
  name: 'Aditya Yadav',
  username: 'adineo-cmd',
  title: 'Full-Stack Developer & AI/ML Engineer',
  description: 'Building clean, scalable web applications and exploring AI-powered solutions with a focus on RAG, NLP, and conversational systems.',
  email: 'theadityayadav107@gmail.com',
  location: 'Kolkata, India',
  github: 'https://github.com/adineo-cmd',
  linkedin: 'https://linkedin.com/in/aditya-yadav-cmd',
  leetcode: null,
  resumeUrl: '/Resume.pdf'
};

export const aboutText = `Full-stack developer with a strong foundation in Python, experienced in frontend frameworks (React, Astro, Angular) and backend systems (Node.js, FastAPI). Actively building real-world projects involving AI/ML (NLP, transformer models, RAG concepts), responsive UIs, and cloud-native architectures. Passionate about open-source contribution and creating user-centric, scalable applications.`;

export const certifications = [
  {
    title: 'Machine Learning and Deep Learning Specialization',
    issuer: 'Coursera',
    period: '2024 – 2025',
    description: 'Completed comprehensive training in ML algorithms, neural networks, and deep learning architectures. Applied supervised and unsupervised learning techniques to real-world datasets and projects.'
  },
  {
    title: 'Full Stack Web Development and Cybersecurity',
    issuer: 'LinkedIn Learning',
    period: '2023 – 2024',
    description: 'Gained hands-on experience building responsive web applications using React, Django, and modern web technologies. Studied cybersecurity fundamentals including network security, encryption, and vulnerability assessment.'
  }
];

export const education = [
  {
    degree: 'B.Tech in CSIT',
    institution: 'University of Engineering and Management',
    location: 'Newtown, Kolkata, India',
    period: '2023 – Expected 2027',
    description: 'CGPA: 8.24/10.0. Coursework includes AI/ML, full-stack development, and cloud technologies.'
  },
  {
    degree: 'ISC (Class XII) & ICSE (Class X)',
    institution: 'Orient Day School',
    location: 'Kolkata, India',
    period: '2013 – 2023',
    description: 'ISC: 69.5%, ICSE: 81.3%'
  }
];

export const skills = {
  'AI/ML': ['TensorFlow', 'PyTorch', 'Pandas', 'OpenCV', 'NLP', 'Deep Learning', 'RAG (conceptual)', 'Transformer Models'],
  'Languages': ['Python', 'TypeScript', 'JavaScript', 'Java', 'C', 'SQL'],
  'Frontend': ['Astro', 'React', 'Angular', 'Tailwind CSS', 'HTML', 'CSS'],
  'Backend': ['Node.js', 'FastAPI', 'Django', 'Express.js', 'REST API', 'Flask'],
  'Databases': ['MongoDB', 'MySQL', 'PostgreSQL', 'Oracle Database'],
  'Cloud & DevOps': ['AWS', 'Google Cloud Platform (GCP)', 'Docker', 'Kubernetes', 'Firebase', 'GitHub Actions', 'CI/CD'],
  'Tools': ['Git', 'GitHub', 'Vim', 'Linux', 'Ubuntu', 'Windows', 'VS Code']
};

export const projects = [
  {
    title: 'WebVault',
    description: 'A curated repository of websites and resources across domains with a clean, responsive UI. Features search, filtering, and domain-wise categorization for efficient discovery.',
    tags: ['Astro', 'Node.js', 'MongoDB', 'Tailwind CSS'],
    categories: ['full-stack', 'web-development'],
    githubUrl: 'https://github.com/adineo-cmd',
    liveUrl: null,
    featured: true
  },
  {
    title: 'RoadmapX',
    description: 'A structured learning platform offering step-by-step career roadmaps in business, finance, science, and management. Includes interactive progress dashboards and milestone tracking.',
    tags: ['Astro', 'FastAPI', 'PostgreSQL', 'Tailwind CSS'],
    categories: ['full-stack', 'education'],
    githubUrl: 'https://github.com/adineo-cmd',
    liveUrl: null,
    featured: true
  },
  {
    title: 'AI Chat Assistant',
    description: 'Conversational AI assistant that answers queries using a multi-domain knowledge base. Implemented with vector embeddings and transformer models, achieving ~85% semantic search accuracy.',
    tags: ['Python', 'TensorFlow', 'PyTorch', 'Flask', 'NLP'],
    categories: ['ai', 'machine-learning', 'nlp'],
    githubUrl: 'https://github.com/adineo-cmd',
    liveUrl: null,
    featured: true
  }
];