"use client";

import { useEffect, useRef, ReactNode } from "react";

interface Props {
  children: ReactNode;
  className?: string;
  delay?: number;
  animation?: "up" | "left" | "right" | "scale" | "fade";
}

export default function AnimateIn({
  children,
  className = "",
  delay = 0,
  animation = "up",
}: Props) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const el = ref.current;
    if (!el) return;

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          const t = setTimeout(() => el.classList.add("is-visible"), delay);
          observer.unobserve(el);
          return () => clearTimeout(t);
        }
      },
      { threshold: 0.1 }
    );

    observer.observe(el);
    return () => observer.disconnect();
  }, [delay]);

  return (
    <div ref={ref} data-animate={animation} className={className}>
      {children}
    </div>
  );
}
