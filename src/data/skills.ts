import type { SkillGroup } from '../types';

export const skillGroups: SkillGroup[] = [
  { title: 'Programming Languages', items: ['Java', 'JavaScript'] },
  { title: 'Frontend', items: ['HTML5', 'CSS3', 'React.js'] },
  { title: 'Backend', items: ['Node.js', 'Express.js', 'RESTful API Development'] },
  { title: 'Databases', items: ['MongoDB', 'MySQL'] },
  {
    title: 'Soft Skills',
    items: ['Quick Learner', 'Team Collaboration', 'Effective Communication', 'Adaptability'],
  },
  {
    title: 'Tools & Technologies',
    items: ['Git', 'GitHub', 'Postman', 'JWT Authentication'],
  },
];

/** Technical skills shown in the scrolling marquee. */
export const marqueeRow1 = ['Java', 'JavaScript', 'React.js', 'Node.js', 'HTML5', 'CSS3'];
export const marqueeRow2 = ['Express.js', 'MongoDB', 'MySQL', 'MERN Stack', 'REST APIs'];
