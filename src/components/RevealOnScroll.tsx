"use client";

import React, { ReactNode, useEffect, useRef, useState } from 'react';

export interface RevealOnScrollProps {
  children: ReactNode;
  className?: string;
  delay?: number;
  duration?: number;
  yOffset?: number;
  id?: string;
}

/**
 * RevealOnScroll
 * High-performance, hardware-accelerated scroll reveal using native browser
 * IntersectionObserver and pure CSS compositor transitions.
 * Automatically disconnects observer after reveal for 0% scroll CPU overhead.
 */
export const RevealOnScroll: React.FC<RevealOnScrollProps> = ({
  children,
  className = '',
  delay = 0,
  duration = 500,
  yOffset = 20,
  id,
}) => {
  const ref = useRef<HTMLDivElement>(null);
  const [isVisible, setIsVisible] = useState(false);
  const [hasCompleted, setHasCompleted] = useState(false);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    // If IntersectionObserver is not supported, reveal immediately
    if (typeof IntersectionObserver === 'undefined') {
      setIsVisible(true);
      setHasCompleted(true);
      return;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.disconnect(); // Disconnect immediately once revealed - zero overhead!

          // After transition completes, release GPU layer to free memory and prevent stacking context issues
          const timer = setTimeout(() => {
            setHasCompleted(true);
          }, duration + delay * 1000 + 40);

          return () => clearTimeout(timer);
        }
      },
      {
        threshold: 0.04,
        rootMargin: '0px 0px -20px 0px',
      }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay, duration]);

  // Once animated, style becomes undefined so the element returns to 100% natural DOM rendering
  const dynamicStyle = hasCompleted
    ? undefined
    : {
        transitionProperty: 'opacity, transform',
        transitionDuration: `${duration}ms`,
        transitionDelay: `${delay * 1000}ms`,
        transform: isVisible ? 'translateY(0)' : `translateY(${yOffset}px)`,
        opacity: isVisible ? 1 : 0,
        transitionTimingFunction: 'cubic-bezier(0.16, 1, 0.3, 1)',
        willChange: isVisible ? 'opacity, transform' : 'auto',
      };

  return (
    <div
      ref={ref}
      id={id}
      style={dynamicStyle}
      className={`w-full ${className}`}
    >
      {children}
    </div>
  );
};
