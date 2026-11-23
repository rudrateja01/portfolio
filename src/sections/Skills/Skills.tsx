import FadeIn from '../../components/FadeIn/FadeIn';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { skillGroups } from '../../data/skills';
import './Skills.css';

export default function Skills() {
  return (
    <section id="skills" className="section section--dark" aria-labelledby="skills-title">
      <div className="section__inner">
        <SectionHeading id="skills-title" title="Skills" tone="dark" />
        <div className="skills__grid">
          {skillGroups.map((g, i) => (
            <FadeIn key={g.title} delay={i * 0.08} className="skills__card">
              <h3 className="skills__title">{g.title}</h3>
              <ul className="skills__list">
                {g.items.map((item) => <li key={item} className="tag">{item}</li>)}
              </ul>
            </FadeIn>
          ))}
        </div>
      </div>
    </section>
  );
}
