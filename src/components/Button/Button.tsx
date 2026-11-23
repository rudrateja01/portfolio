import type { ReactNode } from 'react';
import './Button.css';

interface ButtonProps {
  children: ReactNode;
  href?: string;
  variant?: 'primary' | 'ghost';
  download?: boolean;
  icon?: ReactNode;
  className?: string;
  onClick?: () => void;
}

export default function Button({ children, href, variant = 'primary', download, icon, className = '', onClick }: ButtonProps) {
  const cls = `btn btn--${variant} ${className}`.trim();
  const content = (
    <>
      {icon}
      <span>{children}</span>
    </>
  );
  if (href) {
    const external = /^https?:\/\//.test(href);
    return (
      <a
        className={cls}
        href={href}
        download={download ? '' : undefined}
        target={external ? '_blank' : undefined}
        rel={external ? 'noopener noreferrer' : undefined}
      >
        {content}
      </a>
    );
  }
  return (
    <button type="button" className={cls} onClick={onClick}>
      {content}
    </button>
  );
}
