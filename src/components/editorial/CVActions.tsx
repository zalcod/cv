'use client';

import React from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import { useTranslations } from 'next-intl';
import { Eye, Download, FileText, X, Printer, Maximize2, Minimize2 } from 'lucide-react';
import type { EditorialResume } from '@/lib/editorialContent';
import { CVDocument } from './CVDocument';

type Variant = 'primary' | 'ghost' | 'link';

export function CVMenu({
  onView,
  onDownload,
  variant = 'primary',
  label,
}: {
  onView: () => void;
  onDownload: () => void;
  variant?: Variant;
  label?: string;
}) {
  const t = useTranslations();
  const [open, setOpen] = React.useState(false);
  const wrapRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    const onClick = (e: MouseEvent) => {
      if (!wrapRef.current?.contains(e.target as Node)) setOpen(false);
    };
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') setOpen(false);
    };
    window.addEventListener('mousedown', onClick);
    window.addEventListener('keydown', onKey);
    return () => {
      window.removeEventListener('mousedown', onClick);
      window.removeEventListener('keydown', onKey);
    };
  }, [open]);

  const triggerCls =
    variant === 'link'
      ? 'cv-menu-trigger cv-menu-trigger-link'
      : variant === 'ghost'
      ? 'btn ghost cv-menu-trigger'
      : 'btn cv-menu-trigger';

  return (
    <div className="cv-menu" ref={wrapRef}>
      <button
        type="button"
        className={triggerCls}
        onClick={() => setOpen((v) => !v)}
        data-hover
        aria-haspopup="menu"
        aria-expanded={open}
      >
        <FileText className="cv-menu-ico" />
        <span>{label ?? t('navigation.cv')}</span>
        <span className={`cv-menu-caret${open ? ' open' : ''}`} aria-hidden="true">
          ▾
        </span>
      </button>
      <AnimatePresence>
        {open ? (
          <motion.div
            className="cv-menu-pop"
            role="menu"
            initial={{ opacity: 0, y: -6, scale: 0.96 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: -6, scale: 0.96 }}
            transition={{ duration: 0.18, ease: [0.22, 1, 0.36, 1] }}
          >
            <button
              type="button"
              className="cv-menu-item"
              onClick={() => {
                setOpen(false);
                onView();
              }}
              data-hover
              role="menuitem"
            >
              <Eye />
              <span>{t('cv.view')}</span>
            </button>
            <button
              type="button"
              className="cv-menu-item"
              onClick={() => {
                setOpen(false);
                onDownload();
              }}
              data-hover
              role="menuitem"
            >
              <Download />
              <span>{t('cv.download')}</span>
            </button>
          </motion.div>
        ) : null}
      </AnimatePresence>
    </div>
  );
}

export function CVPreviewModal({
  open,
  onClose,
  onDownload,
  resume,
}: {
  open: boolean;
  onClose: () => void;
  onDownload: () => void;
  resume: EditorialResume;
}) {
  const t = useTranslations();
  const [fullscreen, setFullscreen] = React.useState(false);

  React.useEffect(() => {
    if (!open) {
      setFullscreen(false);
      return;
    }
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        if (fullscreen) setFullscreen(false);
        else onClose();
      }
    };
    document.body.style.overflow = 'hidden';
    window.addEventListener('keydown', onKey);
    return () => {
      document.body.style.overflow = '';
      window.removeEventListener('keydown', onKey);
    };
  }, [open, onClose, fullscreen]);

  return (
    <AnimatePresence>
      {open ? (
        <motion.div
          className="cv-preview-overlay"
          onClick={onClose}
          initial={{ opacity: 0 }}
          animate={{ opacity: 1 }}
          exit={{ opacity: 0 }}
          transition={{ duration: 0.2 }}
        >
          <motion.div
            className={`cv-preview-shell${fullscreen ? ' is-fullscreen' : ''}`}
            onClick={(e) => e.stopPropagation()}
            initial={{ opacity: 0, y: 24, scale: 0.98 }}
            animate={{ opacity: 1, y: 0, scale: 1 }}
            exit={{ opacity: 0, y: 24, scale: 0.98 }}
            transition={{ duration: 0.25, ease: [0.22, 1, 0.36, 1] }}
            role="dialog"
            aria-modal="true"
          >
            <div className="cv-preview-bar">
              <span className="cv-preview-title">{t('cv.view')} · CV</span>
              <div className="cv-preview-actions">
                <button
                  type="button"
                  className="cv-preview-close"
                  onClick={() => setFullscreen((v) => !v)}
                  data-hover
                  aria-label={fullscreen ? t('common.close') : t('common.view')}
                  title={fullscreen ? t('common.close') : t('common.view')}
                >
                  {fullscreen ? <Minimize2 /> : <Maximize2 />}
                </button>
                <button
                  type="button"
                  className="btn ghost"
                  onClick={onDownload}
                  data-hover
                >
                  <Printer className="cv-menu-ico" />
                  <span>{t('cv.download')}</span>
                </button>
                <button
                  type="button"
                  className="cv-preview-close"
                  onClick={onClose}
                  data-hover
                  aria-label={t('common.close')}
                >
                  <X />
                </button>
              </div>
            </div>
            <div className="cv-preview-scroll">
              <CVDocument resume={resume} className="print-cv cv-preview-doc" />
            </div>
          </motion.div>
        </motion.div>
      ) : null}
    </AnimatePresence>
  );
}
