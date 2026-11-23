import FadeIn from '../FadeIn/FadeIn';
import FitText from '../FitText/FitText';
import './SectionHeading.css';

interface SectionHeadingProps {
  id: string;
  title: string;
  tone?: 'dark' | 'light';
  intro?: string;
}

/** `tone="dark"` = heading sits on the dark background (gradient text). */
export default function SectionHeading({ id, title, tone = 'dark', intro }: SectionHeadingProps) {
  return (
    <FadeIn y={40} className="section-heading">
      <h2 id={id} className="section-heading__title">
        <FitText className={tone === 'dark' ? 'hero-heading section-heading__text' : 'section-heading__text section-heading__text--ink'} minSize={32} maxSize={160}>
          {title}
        </FitText>
      </h2>
      {/* {intro && <p className="section-heading__intro">{intro}</p>} */}
    </FadeIn>
  );
}
