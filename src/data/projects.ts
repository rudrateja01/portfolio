import { HeartPulse, MessageSquare, ScanLine, StickyNote, Dumbbell } from 'lucide-react';
import type { Project } from '../types';

// Add `repo` and/or `live` URLs per project and the matching buttons appear.
export const projects: Project[] = [
  {
    id: 'hubly-crm',
    title: 'Hubly CRM – Customer Support Chatbot',
    category: 'Full-Stack · MERN',
    period: 'November 2025',
    summary: [
      'Designed and developed a scalable MERN stack web application using React, Node.js, Express.js and MongoDB, with RESTful APIs for ticket and message management.',
      'Implemented real-time chat and automated ticket generation, improving customer query handling efficiency and the overall user experience.',
    ],
    stack: ['React.js', 'Javascript', 'Node.js', 'Express.js', 'MongoDB', 'Postman', 'Axios','JWT', 'Vercel'],
    icon: MessageSquare,
  },
  {
    id: 'workout-logger',
    title: 'WorkoutLogger – Fitness Tracking Application',
    category: 'Full-Stack Development · MERN',
    period: '2025',
    summary: [
      'Developed a full-stack MERN application enabling users to securely register, log in, and manage their workout routines.',
      'Implemented complete CRUD functionality for authenticated users to create, view, update, and delete workout records, with JWT-based authentication and MongoDB data management.',
    ],
    stack: ['React.js', 'Javascript', 'Node.js', 'Express.js', 'JWT', 'MongoDB', 'REST APIs', 'Tailwind CSS','Postman'],
    icon: Dumbbell,
  },
  {
    id: 'react-pocket-notes',
    title: 'React Pocket Notes',
    category: 'Frontend · React',
    period: 'December 2025',
    summary: [
      'Developed a minimalistic note-taking web application using React functional components and Hooks (useState, useEffect) to create, view and manage notes.',
      'Implemented local storage–based persistence so notes survive across sessions, focusing on clean UI, performance and usability.',
    ],
    stack: ['HTML5', 'CSS3', 'React.js', 'JavaScript', 'React Hooks', 'Local Storage', 'Responsive Design'],
    icon: StickyNote,
  },
  {
    id: 'emphysema-classification',
    title: 'Automated Classification of Emphysema',
    category: 'Deep Learning · Academic',
    period: 'July 2024 – December 2024',
    summary: [
      'Created an automated system for emphysema detection from CT scan images using CNN models.',
      'Aimed to improve emphysema diagnosis by enabling accurate detection from lung images.',
    ],
    stack: ['Python', 'Deep Learning', 'CNN', 'TensorFlow / Keras', 'Medical Image Processing', 'CT Scan Images', 'Image Preprocessing'],
    icon: ScanLine,
  },
  {
    id: 'multiple-disease-prediction',
    title: 'Multiple Disease Prediction System',
    category: 'Machine Learning · Academic',
    period: 'January 2025 – April 2025',
    summary: [
      'Built a machine learning system that predicts diseases from user symptoms using SVM, Random Forest and Logistic Regression.',
      'Designed and deployed a Flask-based web application with real-time predictions, including data preprocessing and model evaluation.',
    ],
    stack: [
    'Python',
    'Flask',
    'Scikit-learn',
    'Random Forest',
    'Pandas', 'Numpy', 'SVM',
    'Logistic Regression',
    'Data Preprocessing',
    'Model Evaluation',
  ],
    icon: HeartPulse,
  },
  
];
