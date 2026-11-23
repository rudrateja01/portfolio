import { useRef } from 'react';
import { motion, useScroll, useTransform, type MotionValue } from 'framer-motion';
import './AnimatedText.css';

function Char({ char, i, n, progress }: { char: string; i: number; n: number; progress: MotionValue<number> }) {
  const opacity = useTransform(progress, [i / n, (i + 1) / n], [0.2, 1]);
  return (
    <span className="animated-text__char">
      <span className="animated-text__ghost">{char}</span>
      <motion.span className="animated-text__live" style={{ opacity }}>{char}</motion.span>
    </span>
  );
}

interface AnimatedTextProps { text: string; className?: string }

export default function AnimatedText({ text, className = '' }: AnimatedTextProps) {
  const ref = useRef<HTMLParagraphElement>(null);
  const { scrollYProgress } = useScroll({ target: ref, offset: ['start 0.8', 'end 0.2'] });
  const chars = Array.from(text);
  return (
    <p ref={ref} className={`animated-text ${className}`.trim()}>
      <span className="visually-hidden">{text}</span>
      <span aria-hidden="true">
        {chars.map((c, i) => (
          <Char key={i} char={c} i={i} n={chars.length} progress={scrollYProgress} />
        ))}
      </span>
    </p>
  );
}
