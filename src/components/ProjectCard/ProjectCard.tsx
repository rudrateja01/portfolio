import { useRef } from 'react';
import { motion, useScroll, useTransform } from 'framer-motion';
import { Github, ExternalLink } from 'lucide-react';
import Button from '../Button/Button';
import { useMediaQuery } from '../../hooks/useMediaQuery';
import { profile } from '../../data/profile';
import type { Project } from '../../types';
import './ProjectCard.css';

interface ProjectCardProps { project: Project; index: number; total: number }

export default function ProjectCard({ project, index, total }: ProjectCardProps) {
  const wrap = useRef<HTMLDivElement>(null);
  const stacking = useMediaQuery('(min-width: 768px)');
  const { scrollYProgress } = useScroll({ target: wrap, offset: ['start end', 'start start'] });
  const targetScale = 1 - (total - 1 - index) * 0.03;
  const scale = useTransform(scrollYProgress, [index * 0.25, 1], [1, targetScale]);
  const Icon = project.icon;

  return (
    <div ref={wrap} className="project-wrap">
      <motion.article
        className="project-card"
        style={stacking ? { scale, ['--stack-offset' as string]: `${index * 28}px` } : undefined}
        aria-labelledby={`${project.id}-title`}
      >
        <header className="project-card__head">
          <span className="project-card__num hero-heading" aria-hidden="true">0{index + 1}</span>
          <div className="project-card__titles">
            <p className="project-card__meta">{project.category} · {project.period}</p>
            <h3 id={`${project.id}-title`} className="project-card__title">{project.title}</h3>
          </div>
          <div className="project-card__links">
            {project.repo && <Button variant="ghost" href={project.repo} icon={<Github />}>Code</Button>}
            {project.live && <Button variant="ghost" href={project.live} icon={<ExternalLink />}>Live</Button>}
            {!project.repo && !project.live && <Button variant="ghost" href={profile.github} icon={<Github />}>GitHub</Button>}
          </div>
        </header>
        <div className="project-card__body">
          <div className="project-card__text">
            {project.summary.map((s) => <p key={s}>{s}</p>)}
            <ul className="project-card__stack" aria-label="Technologies used">
              {project.stack.map((t) => <li key={t} className="tag">{t}</li>)}
            </ul>
          </div>
          <div className={`project-card__visual project-card__visual--${index % 4}`} aria-hidden="true">
            <Icon strokeWidth={1.25} />
            <span>{project.category}</span>
          </div>
        </div>
      </motion.article>
    </div>
  );
}
