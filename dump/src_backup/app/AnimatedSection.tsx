'use client';

import { useIntersectionObserver } from './useIntersectionObserver';

interface AnimatedSectionProps extends React.HTMLAttributes<HTMLDivElement> {
  children: React.ReactNode;
  threshold?: number;
}

export default function AnimatedSection({ 
  children, 
  className = '', 
  threshold = 0.1,
  ...props 
}: AnimatedSectionProps) {
  const sectionRef = useIntersectionObserver(threshold);

  return (
    <div ref={sectionRef} className={`reveal-section ${className}`} {...props}>
      {children}
    </div>
  );
}
