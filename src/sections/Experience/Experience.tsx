import FadeIn from '../../components/FadeIn/FadeIn';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { experience } from '../../data/experience';
import './Experience.css';

export default function Experience() {
  if (!experience.length) return null;
  return (
    <section id="experience" className="section section--light" aria-labelledby="experience-title">
      <div className="section__inner experience">
        <SectionHeading id="experience-title" title="Experience" tone="light" />
        <ol>
          {experience.map((item, i) => (
            <FadeIn as="li" key={item.id} delay={i * 0.1} className="list-row">
              <span className="list-row__num" aria-hidden="true">0{i + 1}</span>
              <div className="list-row__body">
                <h3 className="list-row__title">{item.role}</h3>
                <p className="list-row__sub">{item.company}{item.location ? ` · ${item.location}` : ''}</p>
                <p className="list-row__meta">
                  <span>{item.period}</span>
                  {item.current && <span className="experience__badge">Current</span>}
                </p>
                <ul className="experience__points">
                  {item.highlights.map((h) => <li key={h}>{h}</li>)}
                </ul>
                {item.stack && (
                  <ul className="experience__stack" aria-label="Technologies">
                    {item.stack.map((t) => <li key={t} className="tag">{t}</li>)}
                  </ul>
                )}
              </div>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
