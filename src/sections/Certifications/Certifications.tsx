import { ArrowUpRight } from 'lucide-react';
import FadeIn from '../../components/FadeIn/FadeIn';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import { certifications } from '../../data/certifications';
import './Certifications.css';

export default function Certifications() {
  return (
    <section id="certifications" className="section section--light" aria-labelledby="certifications-title">
      <div className="section__inner">
        <SectionHeading id="certifications-title" title="Certifications" tone="light" />
        <ol className="certs__list">
          {certifications.map((c, i) => (
            <FadeIn as="li" key={c.id} delay={i * 0.1} className="list-row">
              <span className="list-row__num" aria-hidden="true">0{i + 1}</span>
              <div className="list-row__body">
                <h3 className="list-row__title">{c.title}</h3>
                <p className="list-row__sub">{c.issuer}</p>
                {c.link && (
                  <a className="certs__link" href={c.link} target="_blank" rel="noopener noreferrer">
                    View certificate <ArrowUpRight aria-hidden="true" />
                  </a>
                )}
              </div>
            </FadeIn>
          ))}
        </ol>
      </div>
    </section>
  );
}
