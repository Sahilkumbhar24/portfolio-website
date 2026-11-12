// Single source of truth for everything the site says.
// Edit this file to update the portfolio; components only render it.

import github from './github.json';

export const person = {
  name: 'Sahil Kumbhar',
  role: 'Java Full Stack Developer',
  company: '',
  companyUrl: '',
  location: 'Pune, India',
  timezone: 'IST, UTC+5:30',
  email: 'kumbharsahil717@gmail.com',
  photo: 'sahil',
  languages: ['English', 'Hindi', 'Marathi'],
  links: {
    github: 'https://github.com/Sahilkumbhar24',
    linkedin: 'https://www.linkedin.com/in/sahilkumbhar24/',
    youtube: 'https://www.youtube.com/@sahilkumbhar24',
    leetcode: 'https://leetcode.com/sahilkumbhar24',
  },
  headline: 'Java Full Stack Developer | Spring Boot, Microservices, React & Cloud',
  description:
    'Sahil Kumbhar is a Java Full Stack Developer specializing in distributed microservices architectures with Java, Spring Boot, and Spring Cloud, event-driven streaming with Apache Kafka, robust OAuth2/JWT security, and modern frontends with React.',
};

export const hero = {
  lede: 'Building enterprise-grade microservices, event-driven backends, and responsive full-stack applications with Java, Spring Boot, and React.',
};

export const toolkit = [
  'Java',
  'Spring Boot',
  'Spring Cloud',
  'ReactJS',
  'Microservices',
  'Apache Kafka',
  'Hibernate',
  'Docker',
];

export type Project = {
  name: string;
  summary: string;
  body: string;
  stack: string[];
  repo: string;
  stars?: number;
  links?: { label: string; url: string }[];
};

const stars = (full: string) => (github.stars as Record<string, number>)[full] ?? 0;

export const projects: Project[] = [
  {
    name: 'AI-Powered Fitness Tracker',
    summary: 'A 6-service microservices platform with event-driven AI workout generation.',
    body: 'Built an enterprise-scale 6-service microservices platform leveraging Spring Cloud Gateway, Eureka Service Discovery, and centralized Config Server. Designed an asynchronous, event-driven AI pipeline using Apache Kafka to generate personalized workout routines via Google Gemini. Secured endpoints with OAuth2 PKCE and Keycloak JWT authentication with token interceptors.',
    stack: ['Java', 'Spring Boot', 'Spring Cloud', 'React', 'Docker', 'Apache Kafka', 'Keycloak', 'MongoDB'],
    repo: 'https://github.com/Sahilkumbhar24/ai-fitness-app',
    stars: stars('Sahilkumbhar24/ai-fitness-app'),
  },
  {
    name: 'AR Interior Decorator App',
    summary: 'Full-stack augmented reality system with Spring Boot backend and Android AR client.',
    body: 'Engineered a scalable RESTful backend in Spring Boot with Hibernate ORM and MySQL to manage product catalogs and user accounts. Developed a native Android Java client using ARCore and Sceneform for real-time 3D model rendering and plane detection. Built role-based auth (Admin/Customer) and an administrative portal featuring automated 3D asset optimization.',
    stack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Android SDK', 'ARCore', 'Sceneform', 'REST APIs'],
    repo: 'https://github.com/Sahilkumbhar24/AR-Powered-Interior-Decorator-',
    stars: stars('Sahilkumbhar24/AR-Powered-Interior-Decorator-'),
  },
  {
    name: 'E-Commerce Shopping Cart System',
    summary: 'Java backend application with comprehensive shopping cart workflows.',
    body: 'Designed and implemented an e-commerce backend in Java featuring item catalog management, dynamic shopping cart calculation, checkout pipelines, and transaction validation. Demonstrates solid Object-Oriented Design (OOP) principles, clean service layer architecture, and unit testing.',
    stack: ['Java', 'OOP', 'Data Structures', 'REST APIs', 'Unit Testing'],
    repo: 'https://github.com/Sahilkumbhar24/E-Commerce-Shopping-Cart',
    stars: stars('Sahilkumbhar24/E-Commerce-Shopping-Cart'),
  },
  {
    name: 'Hotel Booking & Reservation System',
    summary: 'Full-stack hotel management system for room bookings and operations.',
    body: 'Built an end-to-end hotel reservation management platform in Java. Implemented room inventory tracking, availability checking, customer reservations, and billing workflows with persistent database storage.',
    stack: ['Java', 'JDBC', 'MySQL', 'Design Patterns'],
    repo: 'https://github.com/Sahilkumbhar24/Hotel-Booking-System',
    stars: stars('Sahilkumbhar24/Hotel-Booking-System'),
  },
  {
    name: 'AI Resume Ranker',
    summary: 'Automated candidate screening and resume scoring tool powered by NLP.',
    body: 'Developed an intelligent resume evaluation system that parses resumes against technical job descriptions using NLP and semantic matching to score and rank candidates accurately.',
    stack: ['Python', 'NLP', 'Machine Learning', 'REST APIs'],
    repo: 'https://github.com/Sahilkumbhar24/AI-Resume-Ranker',
    stars: stars('Sahilkumbhar24/AI-Resume-Ranker'),
  },
  {
    name: 'Movie Recommendation System',
    summary: 'Machine learning recommendation engine with interactive web interface.',
    body: 'Implemented content-based filtering algorithms using vector embeddings and cosine similarity over movie metadata, delivering instant personalized recommendations.',
    stack: ['Python', 'Scikit-Learn', 'Pandas', 'Streamlit'],
    repo: 'https://github.com/Sahilkumbhar24/Movie-Recommendation-System',
    stars: stars('Sahilkumbhar24/Movie-Recommendation-System'),
  },
];

export const moreProjects: { name: string; body: string; url: string; demo?: string }[] = [
  {
    name: 'AI Interior Designer',
    body: 'Generative AI room remodeling and 3D space visualization.',
    url: 'https://github.com/Sahilkumbhar24/AI-Interior-Designer',
  },
  {
    name: 'AI Plagiarism Detector',
    body: 'Semantic plagiarism and cross-language similarity analysis with deep learning.',
    url: 'https://github.com/Sahilkumbhar24/AI-Based-Plagiarism-Detection-System',
  },
  {
    name: 'Money Tracker Full-Stack',
    body: 'Full-stack personal finance and expense tracking web app.',
    url: 'https://github.com/Sahilkumbhar24/Money-Tracker',
  },
  {
    name: 'Advanced Chatbot in Java',
    body: 'Interactive Java-based conversational system with intent processing.',
    url: 'https://github.com/Sahilkumbhar24/Advanced-Chatbot',
  },
  {
    name: 'Steganography Tool',
    body: 'LSB-based image data hiding and encryption utility.',
    url: 'https://github.com/Sahilkumbhar24/Steganography',
  },
];

export type Role = {
  title: string;
  org: string;
  kind: 'Full-time' | 'Internship' | 'Education';
  start: string;
  end: string;
  place?: string;
  note?: string;
  points?: string[];
};

export const experience: Role[] = [
  {
    title: 'B.E. Computer Engineering',
    org: 'Genba Sopanrao Moze College of Engineering, Savitribai Phule Pune University',
    kind: 'Education',
    start: '2022',
    end: '2026',
    place: 'Pune',
    note: 'CGPA 8.29',
  },
];

export const achievements = [
  {
    title: 'Content Creator on YouTube (3K+ Subs)',
    body: 'Over 3,000 subscribers and growing, sharing tutorials on Java Full Stack development, Spring Boot, data structures, and project walkthroughs.',
    url: 'https://www.youtube.com/@sahilkumbhar24',
  },
  {
    title: '300+ DSA Problems Solved',
    body: 'Solved 300+ algorithmic problems across LeetCode & GeeksforGeeks, with a strong focus on graphs, trees, dynamic programming, and system design fundamentals.',
  },
];

export const certifications = [
  { title: 'Java Full Stack Development', by: 'Vibrantmind Technology' },
];

export const skills = {
  backend: [
    'Java (Core & Advanced)',
    'Spring Boot',
    'Spring Cloud',
    'Hibernate / JPA',
    'Microservices Architecture',
    'RESTful Web Services',
    'JDBC',
  ],
  frontend: [
    'ReactJS',
    'JavaScript (ES6+)',
    'HTML5',
    'CSS3',
    'Responsive Design',
    'REST API Integration',
  ],
  distributed: [
    'Spring Cloud Gateway',
    'Eureka Service Discovery',
    'Spring Cloud Config',
    'Apache Kafka',
    'Event-Driven Architecture',
  ],
  database: [
    'MySQL',
    'MongoDB',
    'Database Schema Design',
    'ACID Transactions',
    'ORM & Hibernate Mappings',
  ],
  security: [
    'Spring Security',
    'OAuth2 & OpenID Connect',
    'JWT (JSON Web Tokens)',
    'Keycloak',
    'Role-Based Access Control (RBAC)',
  ],
  tools: [
    'Docker',
    'Git & GitHub',
    'Postman',
    'Maven',
    'Eclipse IDE',
    'Linux / Shell Scripting',
  ],
};

export const contact = {
  formEndpoint: '', // Add your Formspree endpoint when ready (e.g., https://formspree.io/f/xyz)
};
