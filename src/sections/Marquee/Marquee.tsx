import { useEffect, useRef } from 'react';
import { marqueeRow1, marqueeRow2 } from '../../data/skills';
import './Marquee.css';

function Row({ items, rowRef }: { items: string[]; rowRef: React.RefObject<HTMLDivElement> }) {
  return (
    <div className="marquee__row" ref={rowRef} aria-hidden="true">
      {[...items, ...items, ...items].map((item, i) => (
        <span key={i} className="marquee__tile">{item}</span>
      ))}
    </div>
  );
}

/** Two rows of skills that slide sideways as the page scrolls. */
export default function Marquee() {
  const section = useRef<HTMLElement>(null);
  const row1 = useRef<HTMLDivElement>(null);
  const row2 = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const update = () => {
      const s = section.current;
      if (!s || !row1.current || !row2.current) return;
      const top = s.getBoundingClientRect().top + window.scrollY;
      const offset = (window.scrollY - top + window.innerHeight) * 0.3;
      // Rows start on the middle copy (-33.333%), so they never reveal empty space.
      row1.current.style.transform = `translateX(calc(-33.333% + ${offset - 200}px))`;
      row2.current.style.transform = `translateX(calc(-33.333% + ${-(offset - 200)}px))`;
    };
    update();
    window.addEventListener('scroll', update, { passive: true });
    window.addEventListener('resize', update);
    return () => {
      window.removeEventListener('scroll', update);
      window.removeEventListener('resize', update);
    };
  }, []);

  return (
    <section ref={section} className="marquee" aria-label="Technical skills">
      <p className="visually-hidden">Skills: {[...marqueeRow1, ...marqueeRow2].join(', ')}</p>
      <Row items={marqueeRow1} rowRef={row1} />
      <Row items={marqueeRow2} rowRef={row2} />
    </section>
  );
}
