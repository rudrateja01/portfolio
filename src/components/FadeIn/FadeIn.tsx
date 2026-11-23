import { useMemo, type ElementType, type ReactNode } from 'react';
import { motion, useReducedMotion } from 'framer-motion';
import './FadeIn.css';

interface FadeInProps {
  children: ReactNode;
  delay?: number;
  duration?: number;
  x?: number;
  y?: number;
  as?: ElementType;
  className?: string;
}

export default function FadeIn({ children, delay = 0, duration = 0.7, x = 0, y = 30, as = 'div', className }: FadeInProps) {
  const reduce = useReducedMotion();
  // eslint-disable-next-line @typescript-eslint/no-explicit-any
  const Tag: any = useMemo(() => motion.create(as as any), [as]);
  return (
    <Tag
      className={`fade-in ${className ?? ''}`.trim()}
      initial={reduce ? false : { opacity: 0, x, y }}
      whileInView={{ opacity: 1, x: 0, y: 0 }}
      viewport={{ once: true, margin: '50px', amount: 0 }}
      transition={{ duration, delay, ease: [0.25, 0.1, 0.25, 1] }}
    >
      {children}
    </Tag>
  );
}
