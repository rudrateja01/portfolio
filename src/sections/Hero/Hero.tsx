import { Download } from 'lucide-react';
import FadeIn from '../../components/FadeIn/FadeIn';
import FitText from '../../components/FitText/FitText';
import LivingPortrait from '../../components/LivingPortrait/LivingPortrait';
import Button from '../../components/Button/Button';
import { profile } from '../../data/profile';
import './Hero.css';

export default function Hero() {
  return (
    <section id="top" className="hero" aria-label="Introduction">
      <div className="hero__title-wrap">
        <FadeIn delay={0.15} y={40}>
          <h1 className="hero__title">
            <FitText className="hero-heading hero__title-text">Hi, i’m {profile.name}</FitText>
          </h1>
        </FadeIn>
      </div>

      <div className="hero__bottom">
        <FadeIn delay={0.35} y={20}>
          <p className="hero__tagline">{profile.heroTagline}</p>
        </FadeIn>
        <FadeIn delay={0.5} y={20}>
          <div className="hero__actions">
            <Button href="#contact" className="contact-btn">Contact Me</Button>
            <Button variant="ghost" href={profile.resumeUrl} download icon={<Download />}>Resume</Button>
          </div>
        </FadeIn>
      </div>
      <LivingPortrait />
    </section>
  );
}
