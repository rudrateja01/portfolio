import { ArrowUp, Github, Linkedin, Mail } from 'lucide-react';
import { profile } from '../../data/profile';
import './Footer.css';

export default function Footer() {
  return (
    <footer className="footer">
      <div className="footer__inner">
        <p className="footer__copy">© {new Date().getFullYear()} {profile.fullName}</p>
        <ul className="footer__links">
          <li><a href={profile.github} target="_blank" rel="noopener noreferrer" aria-label="GitHub profile"><Github /></a></li>
          <li><a href={profile.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn profile"><Linkedin /></a></li>
          <li><a href={`mailto:${profile.email}`} aria-label="Send an email"><Mail /></a></li>
          <li><a href="#top" aria-label="Back to top"><ArrowUp /></a></li>
        </ul>
      </div>
    </footer>
  );
}
