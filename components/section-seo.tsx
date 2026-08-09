"use client";

import { useEffect, useRef } from "react";

interface SectionSEOProps {
  title: string;
}

export function SectionSEO({ title }: SectionSEOProps) {
  const ref = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        entries.forEach((entry) => {
          if (entry.isIntersecting) {
            document.title = title;
          }
        });
      },
      {
        threshold: 0.5,
      }
    );

    if (ref.current) {
      observer.observe(ref.current);
    }

    return () => observer.disconnect();
  }, [title]);

  return (
    <div
      ref={ref}
      className="absolute top-0 left-0 w-full h-1 pointer-events-none -z-50"
    />
  );
}
