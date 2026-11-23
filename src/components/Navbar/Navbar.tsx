import { useEffect, useMemo, useState } from 'react';
import { Menu, X } from 'lucide-react';
import { experience } from '../../data/experience';
import './Navbar.css';

export default function Navbar() {
  const links = useMemo(
    () => [
      { id: 'about', label: 'About' },
      ...(experience.length ? [{ id: 'experience', label: 'Experience' }] : []),
      { id: 'skills', label: 'Skills' },
      { id: 'projects', label: 'Projects' },
      { id: 'education', label: 'Education' },
      { id: 'contact', label: 'Contact' },
    ],
    []
  );
  const [open, setOpen] = useState(false);
  const [scrolled, setScrolled] = useState(false);
  const [active, setActive] = useState('');

  useEffect(() => {
    const onScroll = () => setScrolled(window.scrollY > 24);
    onScroll();
    window.addEventListener('scroll', onScroll, { passive: true });
    return () => window.removeEventListener('scroll', onScroll);
  }, []);

  useEffect(() => {
    const els = links.map((l) => document.getElementById(l.id)).filter(Boolean) as HTMLElement[];
    const io = new IntersectionObserver(
      (entries) => entries.forEach((e) => e.isIntersecting && setActive(e.target.id)),
      { rootMargin: '-45% 0px -50% 0px' }
    );
    els.forEach((el) => io.observe(el));
    return () => io.disconnect();
  }, [links]);

  useEffect(() => {
    document.body.style.overflow = open ? 'hidden' : '';
    const onKey = (e: KeyboardEvent) => e.key === 'Escape' && setOpen(false);
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  return (
    <header className={`navbar ${scrolled && !open ? 'navbar--solid' : ''} ${open ? 'navbar--open' : ''}`.trim()}>
      <a className="skip-link" href="#main">Skip to content</a>
      <nav className="navbar__bar" aria-label="Primary">
        <a href="#top" className="navbar__brand" aria-label="Back to top">RTG</a>
        <ul id="nav-links" className={`navbar__links ${open ? 'navbar__links--open' : ''}`}>
          {links.map((l) => (
            <li key={l.id}>
              <a href={`#${l.id}`} onClick={() => setOpen(false)} aria-current={active === l.id ? 'true' : undefined} className="navbar__link">
                {l.label}
              </a>
            </li>
          ))}
        </ul>
        <button type="button" className="navbar__toggle" aria-label={open ? 'Close menu' : 'Open menu'} aria-expanded={open} aria-controls="nav-links" onClick={() => setOpen((o) => !o)}>
          {open ? <X /> : <Menu />}
        </button>
      </nav>
    </header>
  );
}
