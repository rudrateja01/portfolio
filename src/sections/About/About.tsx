import FadeIn from '../../components/FadeIn/FadeIn';
import FitText from '../../components/FitText/FitText';
import AnimatedText from '../../components/AnimatedText/AnimatedText';
import Button from '../../components/Button/Button';
import { Download } from 'lucide-react';
import { profile } from '../../data/profile';
import { experience } from '../../data/experience';
import './About.css';

const BASE = 'https://shrug-person-78902957.figma.site/_components/v2/ebb2b8f25d8e24d5f0a5ca8af4c950de81aa2fd7/';

const decor = [
  { src: 'moon_icon.11395d36.png', cls: 'about__decor--tl', delay: 0.1, x: -80 },
  { src: 'p59_1.4659672e.png', cls: 'about__decor--bl', delay: 0.25, x: -80 },
  { src: 'lego_icon-1.703bb594.png', cls: 'about__decor--tr', delay: 0.15, x: 80 },
  { src: 'Group_134-1.2e04f3ce.png', cls: 'about__decor--br', delay: 0.3, x: 80 },
];

export default function About() {
  const current = experience.find((e) => e.current);
  const paragraphs = current
    ? [
        `${profile.summary[0]} I’m currently working as ${current.role} at ${current.company}.`,
        ...profile.summary.slice(1),
      ]
    : profile.summary;

  return (
    <section id="about" className="about" aria-labelledby="about-title">
      {decor.map((d) => (
        <div key={d.src} className={`about__decor ${d.cls}`} aria-hidden="true">
          <FadeIn delay={d.delay} x={d.x} y={0} duration={0.9}>
            <img src={BASE + d.src} alt="" loading="lazy" />
          </FadeIn>
        </div>
      ))}

      <div className="about__content">
        <FadeIn y={40}>
          <h2 id="about-title" className="about__title">
            <FitText className="hero-heading about__title-text" minSize={36} maxSize={160}>About me</FitText>
          </h2>
        </FadeIn>
        <div className="about__text">
          {paragraphs.map((p) => (
            <AnimatedText key={p} text={p} />
          ))}
        </div>
      </div>

      <div className="about__cta">
        <Button href="#contact">Contact Me</Button>
        <Button variant="ghost" href={profile.resumeUrl} download icon={<Download />}>Resume</Button>
      </div>
    </section>
  );
}
