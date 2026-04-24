'use client';

import React from 'react';

export function useReveal() {
  React.useEffect(() => {
    const els = Array.from(document.querySelectorAll<HTMLElement>('.reveal'));
    if (els.length === 0) return;

    const reduceMotion =
      typeof window !== 'undefined' &&
      window.matchMedia?.('(prefers-reduced-motion: reduce)')?.matches;

    if (reduceMotion) {
      for (const el of els) el.classList.add('in');
      return;
    }

    const io = new IntersectionObserver(
      (entries) => {
        for (const e of entries) {
          if (e.isIntersecting) (e.target as HTMLElement).classList.add('in');
        }
      },
      { threshold: 0.15 }
    );

    for (const el of els) io.observe(el);
    return () => io.disconnect();
  }, []);
}

