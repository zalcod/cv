'use client';

import React from 'react';
import Link from 'next/link';
import { Home, Mail, FileText } from 'lucide-react';

type Item = {
  key: string;
  label: string;
  kind: 'scroll' | 'link' | 'action';
  href?: string;
  targetId?: string;
  onPress?: () => void;
};

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

export function MobileBottomBar({
  locale,
  labels,
  onCvAction,
}: {
  locale: string;
  labels: {
    home: string;
    cv: string;
    contact: string;
    about?: string;
    work?: string;
    projects?: string;
  };
  onCvAction?: () => void;
}) {
  const items: Item[] = [
    { key: 'home', label: labels.home, kind: 'scroll', targetId: 'home' },
    { key: 'cv', label: labels.cv, kind: 'action', onPress: onCvAction ?? (() => window.print()) },
    { key: 'contact', label: labels.contact, kind: 'scroll', targetId: 'contact' },
  ];

  return (
    <div className="mbar" role="navigation" aria-label="Mobil alt menü">
      {items.map((it) => {
        if (it.kind === 'link' && it.href) {
          return (
            <Link key={it.key} className="mbar-item" href={it.href} data-hover>
              <span className="mbar-ico" aria-hidden="true">{iconFor(it.key)}</span>
              <span className="mbar-label">{it.label}</span>
            </Link>
          );
        }

        return (
          <button
            key={it.key}
            className="mbar-item"
            type="button"
            onClick={() => {
              if (it.kind === 'scroll' && it.targetId) scrollToId(it.targetId);
              if (it.kind === 'action') it.onPress?.();
            }}
            data-hover
          >
            <span className="mbar-ico" aria-hidden="true">{iconFor(it.key)}</span>
            <span className="mbar-label">{it.label}</span>
          </button>
        );
      })}
    </div>
  );
}

function iconFor(key: string) {
  switch (key) {
    case 'home':
      return <Home className="mbar-svg" />;
    case 'contact':
      return <Mail className="mbar-svg" />;
    case 'cv':
      return <FileText className="mbar-svg" />;
    default:
      return null;
  }
}

