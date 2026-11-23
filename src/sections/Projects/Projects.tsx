import SectionHeading from '../../components/SectionHeading/SectionHeading';
import ProjectCard from '../../components/ProjectCard/ProjectCard';
import { projects } from '../../data/projects';
import './Projects.css';

export default function Projects() {
  return (
    <section id="projects" className="section section--light projects" aria-labelledby="projects-title">
      <div className="section__inner">
        <SectionHeading id="projects-title" title="Projects" tone="light" intro="Selected work from my resume: full-stack web apps and machine learning projects." />
        {projects.map((p, i) => (
          <ProjectCard key={p.id} project={p} index={i} total={projects.length} />
        ))}
      </div>
    </section>
  );
}
