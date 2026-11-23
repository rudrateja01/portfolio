import { Download, Github, Linkedin, Mail, Phone } from 'lucide-react';
import FadeIn from '../../components/FadeIn/FadeIn';
import SectionHeading from '../../components/SectionHeading/SectionHeading';
import Button from '../../components/Button/Button';
import { profile } from '../../data/profile';
import './Contact.css';

const channels = [
  { label: 'Email', value: profile.email, href: `mailto:${profile.email}`, Icon: Mail },
  { label: 'Phone', value: profile.phone.replace(/^(\+91)(\d{5})(\d{5})$/, '$1 $2 $3'), href: `tel:${profile.phone}`, Icon: Phone },
  { label: 'LinkedIn', value: 'Rudra Teja Goud', href: profile.linkedin, Icon: Linkedin },
  { label: 'GitHub', value: 'rudrateja01', href: profile.github, Icon: Github },
];

export default function Contact() {
  return (
    <section id="contact" className="section section--dark" aria-labelledby="contact-title">
      <div className="section__inner contact">
        <SectionHeading id="contact-title" title="Contact" tone="dark" intro="I’m looking for entry-level opportunities where I can apply my full-stack skills and keep growing. Let’s talk." />
        <ul className="contact__grid">
          {channels.map(({ label, value, href, Icon }, i) => {
            const external = href.startsWith('http');
            return (
              <FadeIn as="li" key={label} delay={i * 0.08}>
                <a className="contact__card" href={href} target={external ? '_blank' : undefined} rel={external ? 'noopener noreferrer' : undefined}>
                  <Icon aria-hidden="true" />
                  <span className="contact__label">{label}</span>
                  <span className="contact__value">{value}</span>
                </a>
              </FadeIn>
            );
          })}
        </ul>
        <FadeIn className="contact__cta">
          <Button href={`mailto:${profile.email}`} icon={<Mail />}>Send an email</Button>
          <Button variant="ghost" href={profile.resumeUrl} download icon={<Download />}>Download resume</Button>
        </FadeIn>
      </div>
    </section>
  );
}
