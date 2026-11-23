import FadeIn from '../../components/FadeIn/FadeIn';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { education } from '../../data/education';
import './Education.css';

export default function Education() {
  return (
    <section id="education" className="section section--dark" aria-labelledby="education-title">
      <div className="section__inner">
        <SectionHeading id="education-title" title="Education" tone="dark" />
        <ol className="education__list">
          {education.map((item, i) => (
            <FadeIn as="li" key={item.id} delay={i * 0.1} className="list-row">
              <span className="list-row__num" aria-hidden="true">0{i + 1}</span>
              <div className="list-row__body">
                <h3 className="list-row__title">{item.title}</h3>
                <p className="list-row__sub">{item.institution}</p>
                <p className="list-row__meta">
                  <span>{item.period}</span>
                  <strong>{item.score}</strong>
                </p>
              </div>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
