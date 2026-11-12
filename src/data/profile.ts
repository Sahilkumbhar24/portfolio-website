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
  headline: 'Java Full Stack Developer building scalable microservices and modern web apps',
  description:
    'Sahil Kumbhar is a Computer Engineering graduate from Pune, skilled in Java, Spring Boot, React, and microservices architecture. He builds production-grade applications with event-driven systems, AI integrations, and modern frontend frameworks.',
};

export const hero = {
  lede: 'I build scalable backend systems and full-stack applications from concept to production.',
};

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
    summary: 'A microservices-based fitness platform with AI-driven workout recommendations.',
    body: 'Built a 6-service microservices platform with Spring Cloud Gateway, Eureka Discovery, and centralized Config Server. Designed an event-driven AI pipeline using Apache Kafka to asynchronously generate personalized workout recommendations via Google Gemini. Secured all APIs with OAuth2 PKCE + Keycloak JWT authentication.',
    stack: ['Java', 'Spring Boot', 'Docker', 'React', 'Kafka', 'MongoDB'],
    repo: 'https://github.com/Sahilkumbhar24/ai-fitness-app',
    stars: stars('Sahilkumbhar24/ai-fitness-app'),
  },
  {
    name: 'AR Interior Decorator',
    summary: 'An AR-powered Android app for visualizing furniture in real-time.',
    body: 'Developed a native Android app using ARCore and Sceneform for real-time 3D model rendering and auto-surface placement. Implemented REST endpoints using Spring Boot and Hibernate for the product catalog. Built role-based auth with an admin dashboard featuring automated 3D asset optimization.',
    stack: ['Java', 'Spring Boot', 'Hibernate', 'MySQL', 'Android SDK', 'ARCore'],
    repo: 'https://github.com/Sahilkumbhar24/AR-Powered-Interior-Decorator-',
    stars: stars('Sahilkumbhar24/AR-Powered-Interior-Decorator-'),
  },
  {
    name: 'AI Resume Ranker',
    summary: 'An intelligent resume ranking system powered by NLP.',
    body: 'Uses natural language processing to parse, analyze, and rank resumes against job descriptions. Extracts key skills, experience, and qualifications to provide a match score, helping recruiters streamline their hiring process.',
    stack: ['Python', 'NLP', 'Machine Learning'],
    repo: 'https://github.com/Sahilkumbhar24/AI-Resume-Ranker',
    stars: stars('Sahilkumbhar24/AI-Resume-Ranker'),
  },
  {
    name: 'Movie Recommendation System',
    summary: 'A content-based movie recommendation engine using ML.',
    body: 'Applies content-based filtering with cosine similarity on movie metadata to suggest similar films. Uses TF-IDF vectorization on genres, keywords, cast, and crew data from the TMDb dataset to build a recommendation model.',
    stack: ['Python', 'Scikit-learn', 'Pandas', 'Streamlit'],
    repo: 'https://github.com/Sahilkumbhar24/Movie-Recommendation-System',
    stars: stars('Sahilkumbhar24/Movie-Recommendation-System'),
  },
  {
    name: 'AI Plagiarism Detector',
    summary: 'Semantic plagiarism detection using NLP and deep learning.',
    body: 'Uses NLP and semantic analysis to detect paraphrased and cross-language copying. Embeds text with transformer models and compares similarity scores, providing detailed reports on matched sections.',
    stack: ['Python', 'NLP', 'Transformers', 'Flask'],
    repo: 'https://github.com/Sahilkumbhar24/AI-Based-Plagiarism-Detection-System',
    stars: stars('Sahilkumbhar24/AI-Based-Plagiarism-Detection-System'),
  },
  {
    name: 'Steganography',
    summary: 'Hide secret messages inside images using Python.',
    body: 'Implements LSB (Least Significant Bit) steganography to encode and decode secret text messages within image files. Provides a simple interface for encoding messages into PNG images and extracting them back.',
    stack: ['Python', 'PIL', 'Cryptography'],
    repo: 'https://github.com/Sahilkumbhar24/Steganography',
    stars: stars('Sahilkumbhar24/Steganography'),
  },
];

export const moreProjects: { name: string; body: string; url: string; demo?: string }[] = [
  {
    name: 'AI Interior Designer',
    body: 'Room image generation through prompts, AR marketplace, 3D room builder, and panorama effects.',
    url: 'https://github.com/Sahilkumbhar24/AI-Interior-Designer',
  },
  {
    name: 'Facial Recognition',
    body: 'Face recognition system using FaceNet deep learning model.',
    url: 'https://github.com/Sahilkumbhar24/Facial-Recognition-using-Facenet',
  },
  {
    name: 'Money Tracker',
    body: 'Full-stack money tracker app for managing expenses and income with Node.js and MongoDB.',
    url: 'https://github.com/Sahilkumbhar24/Money-Tracker',
  },
  {
    name: 'Hotel Booking System',
    body: 'A Java-based hotel reservation and booking management system.',
    url: 'https://github.com/Sahilkumbhar24/Hotel-Booking-System',
  },
  {
    name: 'E-Commerce Shopping Cart',
    body: 'Java-based e-commerce shopping cart application.',
    url: 'https://github.com/Sahilkumbhar24/E-Commerce-Shopping-Cart',
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
    title: 'Content Creator on YouTube',
    body: 'Over 3K subscribers, sharing coding tutorials, project showcases, and problem-solving guides.',
    url: 'https://www.youtube.com/@sahilkumbhar24',
  },
  {
    title: '300+ DSA Problems Solved',
    body: 'Solved 300+ Data Structures and Algorithms problems on LeetCode & GeeksforGeeks.',
  },
];

export const certifications = [
  { title: 'Java Full Stack Development', by: 'Vibrantmind Technology' },
];

export const skills = {
  languages: ['Java', 'C++', 'Python'],
  frontend: ['HTML5', 'CSS3', 'JavaScript', 'ReactJS'],
  backend: ['Core Java', 'JDBC', 'REST APIs', 'Spring Boot', 'Hibernate'],
  database: ['MySQL', 'MongoDB'],
  tools: ['Git', 'GitHub', 'Eclipse IDE', 'Docker', 'Postman'],
  security: ['OAuth2', 'JWT', 'Keycloak', 'Spring Security'],
};

export const contact = {
  formEndpoint: '', // You can add a Formspree endpoint later
};
