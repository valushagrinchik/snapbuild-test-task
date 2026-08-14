'use client';

import { useIntersectionObserver } from '../../hooks/useIntersectionObserver';

interface AnimatedSectionProps {
  children: React.ReactNode;
  className?: string;
  id?: string;
  threshold?: number;
}

export default function AnimatedSection({ children, className = '', id, threshold = 0.1 }: AnimatedSectionProps) {
  const [ref, isVisible] = useIntersectionObserver(threshold);

  return (
    <section
      ref={ref}
      className={`animated-section ${isVisible ? 'is-visible' : ''} ${className}`}
      id={id}
    >
      {children}
    </section>
  );
}
