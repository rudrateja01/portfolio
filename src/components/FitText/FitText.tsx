import { useEffect, useRef, useState, type ReactNode } from 'react';
import './FitText.css';

interface FitTextProps {
  children: ReactNode;
  className?: string;
  minSize?: number;
  maxSize?: number;
}

/** Scales a single line of text so it fills its container width (never above maxSize). */
export default function FitText({ children, className = '', minSize = 20, maxSize = 1000 }: FitTextProps) {
  const wrap = useRef<HTMLSpanElement>(null);
  const text = useRef<HTMLSpanElement>(null);
  const [size, setSize] = useState<number | null>(null);

  useEffect(() => {
    const fit = () => {
      const w = wrap.current;
      const t = text.current;
      if (!w || !t) return;
      t.style.fontSize = '100px';
      const natural = t.getBoundingClientRect().width;
      if (!natural) return;
      const next = Math.min(maxSize, Math.max(minSize, (100 * w.clientWidth) / natural));
      t.style.fontSize = `${next}px`;
      setSize(next);
    };
    fit();
    document.fonts?.ready.then(fit);
    const ro = new ResizeObserver(fit);
    if (wrap.current) ro.observe(wrap.current);
    return () => ro.disconnect();
  }, [minSize, maxSize, children]);

  return (
    <span ref={wrap} className="fit-text">
      <span ref={text} className={`fit-text__inner ${className}`.trim()} style={{ visibility: size ? 'visible' : 'hidden' }}>
        {children}
      </span>
    </span>
  );
}
