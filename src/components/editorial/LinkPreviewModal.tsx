'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { ExternalLink, X } from 'lucide-react';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { BlueskyIcon } from '@/components/icons/BlueskyIcon';
import { SubstackIcon } from '@/components/icons/SubstackIcon';

export type LinkTarget = {
  name: string;
  url: string;
};

function brandFor(name: string) {
  const n = name.toLowerCase();
  if (n.includes('github')) return { Icon: GitHubIcon, accent: '#24292f' };
  if (n.includes('linkedin')) return { Icon: LinkedInIcon, accent: '#0a66c2' };
  if (n.includes('bluesky') || n.includes('bsky')) return { Icon: BlueskyIcon, accent: '#0085ff' };
  if (n.includes('substack')) return { Icon: SubstackIcon, accent: '#ff6719' };
  return { Icon: null as null | React.ComponentType<{ className?: string }>, accent: '#444' };
}

function handleFromUrl(url: string): string {
  try {
    const u = new URL(url);
    const seg = u.pathname.split('/').filter(Boolean);
    if (!seg.length) return u.hostname;
    const last = seg[seg.length - 1];
    return last.startsWith('@') ? last : `@${last}`;
  } catch {
    return url;
  }
}

export function LinkPreviewModal({
  target,
  onClose,
}: {
  target: LinkTarget | null;
  onClose: () => void;
}) {
  React.useEffect(() => {
    if (!target) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') onClose();
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [target, onClose]);

  return (
    <AnimatePresence>
      {target ? (
        <motion.div
          className="link-preview-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.18 }}
        >
          <PreviewCard target={target} onClose={onClose} />
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}

function PreviewCard({ target, onClose }: { target: LinkTarget; onClose: () => void }) {
  const t = useTranslations();
  const { Icon, accent } = brandFor(target.name);
  const handle = handleFromUrl(target.url);
  const host = (() => {
    try {
      return new URL(target.url).hostname.replace(/^www\./, '');
    } catch {
      return target.url;
    }
  })();

  return (
    <motion.div
      className="link-preview-card"
      onClick={(e) => e.stopPropagation()}
      initial={{ opacity: 0, y: 16, scale: 0.96 }}
      animate={{ opacity: 1, y: 0, scale: 1 }}
      exit={{ opacity: 0, y: 16, scale: 0.96 }}
      transition={{ duration: 0.22, ease: [0.22, 1, 0.36, 1] }}
      role="dialog"
      aria-modal="true"
      aria-label={target.name}
    >
      <button
        type="button"
        className="link-preview-close"
        onClick={onClose}
        data-hover
        aria-label={t('common.close')}
      >
        <X />
      </button>

      <div className="link-preview-banner" style={{ background: accent }}>
        <div className="link-preview-icon">
          {Icon ? <Icon className="lp-svg" /> : <span className="mono">{target.name[0]}</span>}
        </div>
      </div>

      <div className="link-preview-body">
        <div className="lp-name">{target.name}</div>
        <div className="lp-handle">{handle}</div>
        <div className="lp-host mono">{host}</div>
        <div className="lp-url mono">{target.url}</div>

        <div className="lp-actions">
          <a
            href={target.url}
            target="_blank"
            rel="noreferrer"
            className="btn"
            data-hover
            onClick={onClose}
          >
            <ExternalLink className="lp-btn-ico" />
            <span>{t('common.open')} ↗</span>
          </a>
          <button type="button" className="btn ghost" onClick={onClose} data-hover>
            <span>{t('common.close')}</span>
          </button>
        </div>
      </div>
    </motion.div>
  );
}
