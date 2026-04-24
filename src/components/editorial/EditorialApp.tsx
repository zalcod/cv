'use client';

import React from 'react';
import { useTheme } from 'next-themes';
import { useTranslations } from 'next-intl';
import type { EditorialResume } from '@/lib/editorialContent';
import { useReveal } from './useReveal';
import { MobileBottomBar } from './MobileBottomBar';
import { CVDocument } from './CVDocument';
import { CVMenu, CVPreviewModal } from './CVActions';
import { LinkPreviewModal, type LinkTarget } from './LinkPreviewModal';
import { GitHubIcon } from '@/components/icons/GitHubIcon';
import { LinkedInIcon } from '@/components/icons/LinkedInIcon';
import { BlueskyIcon } from '@/components/icons/BlueskyIcon';
import { SubstackIcon } from '@/components/icons/SubstackIcon';
import { Globe, MapPin, Moon, Sun, Search } from 'lucide-react';

function Portrait({ src, alt }: { src: string; alt: string }) {
  const imgRef = React.useRef<HTMLImageElement | null>(null);
  const [loaded, setLoaded] = React.useState(false);
  React.useEffect(() => {
    const el = imgRef.current;
    if (el && el.complete && el.naturalWidth > 0) setLoaded(true);
  }, [src]);
  return (
    <div className={`portrait-wrap${loaded ? ' is-loaded' : ''}`}>
      {!loaded ? <div className="portrait-shimmer" aria-hidden="true" /> : null}
      <img
        ref={imgRef}
        className="portrait-img"
        src={src}
        alt={alt}
        onLoad={() => setLoaded(true)}
        onError={() => setLoaded(true)}
      />
    </div>
  );
}

function Atmosphere() {
  return (
    <div className="atmosphere" aria-hidden="true">
      <div className="mesh" />
      <div className="pattern" />
      <div className="grain" />
    </div>
  );
}

function Cursor() {
  const dotRef = React.useRef<HTMLDivElement | null>(null);
  const ringRef = React.useRef<HTMLDivElement | null>(null);

  React.useEffect(() => {
    let raf = 0;
    let x = 0;
    let y = 0;
    let rx = 0;
    let ry = 0;

    const onMove = (e: MouseEvent) => {
      x = e.clientX;
      y = e.clientY;
    };

    const onOver = (e: MouseEvent) => {
      const target = e.target as HTMLElement | null;
      const hover = !!target?.closest('a, button, [data-hover]');
      dotRef.current?.classList.toggle('hover', hover);
      ringRef.current?.classList.toggle('hover', hover);
    };

    const tick = () => {
      rx += (x - rx) * 0.16;
      ry += (y - ry) * 0.16;
      if (dotRef.current) dotRef.current.style.transform = `translate(${x}px, ${y}px)`;
      if (ringRef.current) ringRef.current.style.transform = `translate(${rx}px, ${ry}px)`;
      raf = requestAnimationFrame(tick);
    };

    window.addEventListener('mousemove', onMove, { passive: true });
    window.addEventListener('mouseover', onOver, { passive: true });
    raf = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener('mousemove', onMove);
      window.removeEventListener('mouseover', onOver);
      cancelAnimationFrame(raf);
    };
  }, []);

  return (
    <>
      <div ref={dotRef} className="cursor-dot" />
      <div ref={ringRef} className="cursor-ring" />
    </>
  );
}

type CmdItem = {
  group: string;
  id: string;
  label: string;
  icon?: React.ReactNode;
  shortcut?: string;
  run: () => void;
};

function CommandPalette({
  open,
  onClose,
  items,
  placeholder,
}: {
  open: boolean;
  onClose: () => void;
  items: CmdItem[];
  placeholder: string;
}) {
  const [q, setQ] = React.useState('');
  const [sel, setSel] = React.useState(0);
  const inputRef = React.useRef<HTMLInputElement | null>(null);

  React.useEffect(() => {
    if (!open) return;
    setQ('');
    setSel(0);
    const t = window.setTimeout(() => inputRef.current?.focus(), 60);
    return () => window.clearTimeout(t);
  }, [open]);

  const filtered = React.useMemo(() => {
    const qq = q.trim().toLowerCase();
    if (!qq) return items;
    return items.filter((i) => i.label.toLowerCase().includes(qq));
  }, [items, q]);

  const grouped = React.useMemo(() => {
    const m = new Map<string, CmdItem[]>();
    for (const it of filtered) {
      const arr = m.get(it.group) ?? [];
      arr.push(it);
      m.set(it.group, arr);
    }
    return Array.from(m.entries());
  }, [filtered]);

  React.useEffect(() => {
    if (!open) return;
    const onKey = (e: KeyboardEvent) => {
      if (e.key === 'Escape') {
        e.preventDefault();
        onClose();
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, [open, onClose]);

  const onKeyDown = (e: React.KeyboardEvent) => {
    if (e.key === 'ArrowDown') {
      e.preventDefault();
      setSel((s) => Math.min(filtered.length - 1, s + 1));
    }
    if (e.key === 'ArrowUp') {
      e.preventDefault();
      setSel((s) => Math.max(0, s - 1));
    }
    if (e.key === 'Enter') {
      e.preventDefault();
      filtered[sel]?.run();
    }
  };

  return (
    <div className={`cmdk-overlay${open ? ' open' : ''}`} onClick={onClose}>
      <div className="cmdk" onClick={(e) => e.stopPropagation()} onKeyDown={onKeyDown}>
        <input ref={inputRef} placeholder={placeholder} value={q} onChange={(e) => { setQ(e.target.value); setSel(0); }} />
        <div className="cmdk-list">
          {grouped.map(([g, arr]) => (
            <div key={g}>
              <div className="cmdk-group">{g}</div>
              {arr.map((it) => {
                const flatIndex = filtered.indexOf(it);
                return (
                  <div
                    key={it.id}
                    className={`cmdk-item${flatIndex === sel ? ' active' : ''}`}
                    onMouseEnter={() => setSel(flatIndex)}
                    onClick={it.run}
                    data-hover
                  >
                    {it.icon}
                    <span>{it.label}</span>
                    {it.shortcut ? <span className="shortcut">{it.shortcut}</span> : null}
                  </div>
                );
              })}
            </div>
          ))}
          {filtered.length === 0 ? <div className="cmdk-item" style={{ opacity: 0.5 }}>∅</div> : null}
        </div>
      </div>
    </div>
  );
}

function scrollToId(id: string) {
  const el = document.getElementById(id);
  if (!el) return;
  el.scrollIntoView({ behavior: 'smooth', block: 'start' });
}

function socialIcon(name: string) {
  const n = name.toLowerCase();
  if (n.includes('github')) return GitHubIcon;
  if (n.includes('linkedin')) return LinkedInIcon;
  if (n.includes('bluesky') || n.includes('bsky')) return BlueskyIcon;
  if (n.includes('substack')) return SubstackIcon;
  return null;
}

function classifySkill(skill: string): 'mobile' | 'web' | 'infrastructure' | 'business' | 'tools' | 'design' | 'other' {
  const s = skill.toLowerCase();
  if (/(flutter|dart|getx|riverpod|provider|android|ios)/.test(s)) return 'mobile';
  if (/(react|next|typescript|javascript|html|css|web|php|graphql)/.test(s)) return 'web';
  if (/(vps|cloudflare|ci\/cd|docker|kubernetes|devops|infra|git)/.test(s)) return 'infrastructure';
  if (/(requirement|process|analysis|analyst|bpmn|stakeholder|business)/.test(s)) return 'business';
  if (/(jira|bitbucket|clickup|notion|trello|tool)/.test(s)) return 'tools';
  if (/(ux|ui|design|clean code|algorithm)/.test(s)) return 'design';
  return 'other';
}

export function EditorialApp({
  resume,
  locale,
}: {
  resume: EditorialResume;
  locale: string;
}) {
  useReveal();
  const t = useTranslations();
  const groupedWork = React.useMemo(() => {
    type WorkItem = NonNullable<EditorialResume['work']>[number];
    type Group = {
      company: string;
      link?: string;
      start?: string;
      end?: string;
      items: WorkItem[];
    };

    const work = resume.work ?? [];
    const groups: Group[] = [];

    for (const it of work) {
      const itLink = (it as any)?.link ? String((it as any).link) : '';
      const prev = groups[groups.length - 1];
      if (prev && prev.company === it.company && (prev.link ?? '') === itLink) {
        prev.items.push(it);
        continue;
      }

      groups.push({
        company: it.company,
        link: itLink || undefined,
        start: it.start,
        end: it.end,
        items: [it],
      });
    }

    return groups;
  }, [resume.work]);
  const { theme, resolvedTheme, setTheme } = useTheme();
  const [mounted, setMounted] = React.useState(false);
  React.useEffect(() => setMounted(true), []);
  const [cmdOpen, setCmdOpen] = React.useState(false);
  const [previewOpen, setPreviewOpen] = React.useState(false);
  const [linkPreview, setLinkPreview] = React.useState<LinkTarget | null>(null);
  const [modKey, setModKey] = React.useState<'⌘' | 'Ctrl/⌘'>('Ctrl/⌘');

  const downloadCV = React.useCallback(() => window.print(), []);
  const viewCV = React.useCallback(() => setPreviewOpen(true), []);
  const openLinkPreview = React.useCallback((target: LinkTarget) => setLinkPreview(target), []);

  React.useEffect(() => {
    const onKey = (e: KeyboardEvent) => {
      if ((e.metaKey || e.ctrlKey) && e.key.toLowerCase() === 'k') {
        e.preventDefault();
        setCmdOpen((v) => !v);
      }
    };
    window.addEventListener('keydown', onKey);
    return () => window.removeEventListener('keydown', onKey);
  }, []);

  React.useEffect(() => {
    const isMac = typeof navigator !== 'undefined' && /Mac/.test(navigator.userAgent);
    setModKey(isMac ? '⌘' : 'Ctrl/⌘');
  }, []);

  const skillsByCat = React.useMemo(() => {
    const cats: Record<string, string[]> = {
      mobile: [],
      web: [],
      infrastructure: [],
      business: [],
      tools: [],
      design: [],
      other: [],
    };
    for (const sk of resume.skills) cats[classifySkill(sk)].push(sk);
    return cats;
  }, [resume.skills]);

  const cmdItems: CmdItem[] = React.useMemo(() => {
    return [
      { group: t('commands.links'), id: 'home', label: t('navigation.home'), shortcut: '', run: () => { scrollToId('home'); setCmdOpen(false); } },
      { group: t('commands.links'), id: 'about', label: t('sections.about'), run: () => { scrollToId('about'); setCmdOpen(false); } },
      { group: t('commands.links'), id: 'work', label: t('sections.workExperience'), run: () => { scrollToId('work'); setCmdOpen(false); } },
      { group: t('commands.links'), id: 'projects', label: t('sections.projects'), run: () => { scrollToId('projects'); setCmdOpen(false); } },
      { group: t('commands.links'), id: 'contact', label: t('navigation.contact'), run: () => { scrollToId('contact'); setCmdOpen(false); } },
      {
        group: t('commands.actions'),
        id: 'theme',
        label: `${t('commands.actions')}: ${t('theme.dark')} / ${t('theme.light')}`,
        shortcut: `${modKey}K`,
        run: () => {
          setTheme((theme ?? 'light') === 'dark' ? 'light' : 'dark');
          setCmdOpen(false);
        },
      },
      {
        group: t('commands.actions'),
        id: 'cv-view',
        label: t('commands.viewCV'),
        run: () => {
          setCmdOpen(false);
          viewCV();
        },
      },
      {
        group: t('commands.actions'),
        id: 'cv-download',
        label: t('commands.downloadCV'),
        run: () => {
          setCmdOpen(false);
          downloadCV();
        },
      },
    ];
  }, [downloadCV, modKey, setTheme, t, theme, viewCV]);

  const year = new Date().getFullYear();

  return (
    <>
      <Atmosphere />

      <div className="app">
        <nav className="nav">
          <div className="nav-tools">
            <div
              className="nav-search"
              role="button"
              tabIndex={0}
              onClick={() => setCmdOpen(true)}
              onKeyDown={(e) => {
                if (e.key === 'Enter' || e.key === ' ') setCmdOpen(true);
              }}
              data-hover
              aria-label={t('commands.title')}
            >
              <Search />
              <span>{t('commands.search')}</span>
              <kbd>{modKey}K</kbd>
            </div>
            <button
              className="tool-btn tool-ico"
              type="button"
              onClick={() => setTheme((theme ?? 'light') === 'dark' ? 'light' : 'dark')}
              data-hover
              aria-label="Tema değiştir"
              data-mode={theme ?? 'light'}
            >
              {(() => {
                const currentTheme = mounted ? (resolvedTheme ?? theme ?? 'light') : 'light';
                return currentTheme === 'dark' ? <Moon /> : <Sun />;
              })()}
            </button>
          </div>
        </nav>

        <header id="home" className="hero">
          <div className="hero-sub">
            <Portrait src={resume.avatarUrl} alt={resume.name} />
            <div className="hero-col">
              <div className="hero-role">{resume.about}</div>
              <div className="hero-name">
                {resume.name} <span className="dot" aria-hidden="true" />
              </div>
              <div className="tagline">{resume.homeSummary}</div>
              <div className="hero-locations">
                <div className="loc">
                  <MapPin className="pin" />
                  <div className="loc-items">
                    <span className="loc-current">{resume.cities?.[0] ?? resume.location}</span>
                    {resume.cities?.slice(1).length ? (
                      <span className="loc-more">· {resume.cities.slice(1).join(' · ')}</span>
                    ) : null}
                  </div>
                </div>
              </div>
              <div className="social-row" aria-label="Sosyal bağlantılar">
                {resume.contact.social.map((s) => {
                  const Icon = socialIcon(s.name);
                  return (
                    <button
                      key={s.name}
                      type="button"
                      onClick={() => openLinkPreview({ name: s.name, url: s.url })}
                      data-hover
                      className="social-ico"
                      aria-label={s.name}
                    >
                      {Icon ? <Icon className="ico" /> : <span className="mono">{s.name}</span>}
                    </button>
                  );
                })}
              </div>

              <div className="cta-row">
                <CVMenu onView={viewCV} onDownload={downloadCV} />
                <a className="btn ghost" href={`mailto:${resume.contact.email}`} data-hover>
                  {t('navigation.contact')}
                </a>
              </div>
            </div>
          </div>
        </header>

        <section id="about" className="section reveal">
          <div className="section-head">
            <h2>
              {t('sections.about')}
            </h2>
          </div>
          <div className="about-body">
            <div>
              <p>{resume.summary}</p>
            </div>
          </div>
        </section>

        <section id="work" className="section">
          <div className="section-head reveal">
            <h2>{t('sections.workExperience')}</h2>
          </div>
          <div className="timeline">
            <div className="timeline-track">
              {groupedWork.map((g, i) => (
                <div key={`${g.company}-${g.start}-${g.end}-${i}`} className="tl-item reveal">
                  <div className="row">
                    <h3>{g.company}</h3>
                    {g.start || g.end ? (
                      <span className="when">{g.start} – {g.end}</span>
                    ) : null}
                  </div>
                  {g.items.map((it, j) => (
                    <div key={`${it.title}-${it.start}-${it.end}-${j}`} className="tl-roleblock">
                      <div className="role">{it.title}</div>
                      <p>{it.description}</p>
                    </div>
                  ))}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="skills" className="section reveal">
          <div className="section-head">
            <h2>{t('sections.skills')}</h2>
          </div>
          <div className="skills-grid">
            <div className="skills-cats">
              {([
                ['mobile', t('skillCategories.mobile'), 'FLUTTER · DART'],
                ['web', t('skillCategories.web'), 'FULL-STACK'],
                ['infrastructure', t('skillCategories.infrastructure'), 'VPS · CI/CD'],
                ['business', t('skillCategories.business'), 'BA · BPMN'],
                ['tools', t('skillCategories.tools'), 'PM'],
                ['design', t('skillCategories.design'), 'UX · QUALITY'],
              ] as const).map(([k, title, hint]) => (
                <div key={k} className="skill-cat" data-hover>
                  <h4>{title}</h4>
                  <div className="hint">{hint}</div>
                  <div className="tags">
                    {(skillsByCat[k] ?? []).slice(0, 10).map((tg) => (
                      <span key={tg} className="chip chip-sm">{tg}</span>
                    ))}
                  </div>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="projects" className="section">
          <div className="section-head reveal">
            <h2>
              {t('sections.projects')}
            </h2>
          </div>
          <div className="projects-grid">
            {resume.projects.map((p, idx) => (
              <ProjectCard key={`${p.title}-${idx}`} idx={idx} total={resume.projects.length} p={p} />
            ))}
          </div>
        </section>

        <section id="education" className="section">
          <div className="section-head reveal">
            <h2>{t('sections.education')}</h2>
          </div>
          <div className="timeline">
            <div className="timeline-track">
              {resume.education.map((it, i) => (
                <div key={`${it.school}-${it.start}-${i}`} className="tl-item reveal">
                  <div className="row">
                    <h3>{it.school}</h3>
                    <span className="when">{it.start} – {it.end}</span>
                  </div>
                  <div className="role">{it.degree}</div>
                  {it.additionalInfo ? <p>{it.additionalInfo}</p> : null}
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="certs" className="section reveal">
          <div className="section-head">
            <h2>{t('sections.certifications')}</h2>
          </div>
          <ul className="chips" role="list">
            {resume.certifications.map((c) => (
              <li key={c} className="chip">
                {c}
              </li>
            ))}
          </ul>
        </section>

        <section id="volunteer" className="section">
          <div className="section-head reveal">
            <h2>{t('sections.extracurricular')}</h2>
          </div>
          <div className="timeline">
            <div className="timeline-track">
              {resume.extracurricularActivities.map((it, i) => (
                <div key={`${it.organization}-${it.role}-${i}`} className="tl-item reveal">
                  <div className="row">
                    <h3>{it.organization}</h3>
                    <span className="when">{it.start} – {it.end}</span>
                  </div>
                  <div className="role">{it.role}</div>
                  <p>{it.description}</p>
                </div>
              ))}
            </div>
          </div>
        </section>

        <section id="languages" className="section reveal">
          <div className="section-head">
            <h2>{t('sections.languages')}</h2>
          </div>
          <div className="chips" role="list" aria-label={t('sections.languages')}>
            {resume.languages.map((lang) => (
              <span key={lang} className="chip">
                {lang}
              </span>
            ))}
          </div>
        </section>

        <section id="contact" className="contact reveal">
          <div>
            <div className="big">
              {t('navigation.contact')}<br />
              <a href={`mailto:${resume.contact.email}`} data-hover>{resume.contact.email}</a>
            </div>
            <div className="links">
              {resume.contact.social.map((s) => (
                <button
                  key={s.name}
                  type="button"
                  className="plain-link"
                  onClick={() => openLinkPreview({ name: s.name, url: s.url })}
                  data-hover
                >
                  {s.name} ↗
                </button>
              ))}
              <CVMenu onView={viewCV} onDownload={downloadCV} variant="link" />
            </div>
          </div>
        </section>

        <footer className="footer">
          <span>© {year} {resume.name}</span>
          <span className="mono upper">
            {t('commands.press')} <span style={{ opacity: 0.8 }}>{modKey}K</span> {t('commands.toOpen')}
          </span>
          <span>{t('footer.allRightsReserved')}</span>
        </footer>
      </div>

      <MobileBottomBar
        locale={locale}
        labels={{
          home: t('navigation.home'),
          cv: t('navigation.cv'),
          contact: t('navigation.contact'),
          about: t('sections.about'),
          work: t('sections.workExperience'),
          projects: t('sections.projects'),
        }}
        onCvAction={viewCV}
      />

      <CVPreviewModal
        open={previewOpen}
        onClose={() => setPreviewOpen(false)}
        onDownload={downloadCV}
        resume={resume}
      />

      <LinkPreviewModal target={linkPreview} onClose={() => setLinkPreview(null)} />

      <CVDocument resume={resume} />

      <CommandPalette
        open={cmdOpen}
        onClose={() => setCmdOpen(false)}
        items={cmdItems}
        placeholder={t('commands.search')}
      />
    </>
  );
}

function ProjectCard({
  p,
  idx,
  total,
}: {
  p: EditorialResume['projects'][number];
  idx: number;
  total: number;
}) {
  const ref = React.useRef<HTMLElement | null>(null);
  const canHoverFine = React.useMemo(() => {
    if (typeof window === 'undefined') return false;
    return window.matchMedia?.('(hover: hover) and (pointer: fine)')?.matches ?? false;
  }, []);

  const onMove = (e: React.MouseEvent) => {
    if (!canHoverFine) return;
    const el = ref.current;
    if (!el) return;
    const r = el.getBoundingClientRect();
    const px = (e.clientX - r.left) / r.width;
    const py = (e.clientY - r.top) / r.height;
    const rx = (py - 0.5) * -8;
    const ry = (px - 0.5) * 10;
    el.style.transform = `perspective(1000px) rotateX(${rx}deg) rotateY(${ry}deg) translateZ(0)`;
    el.style.setProperty('--mx', `${px * 100}%`);
    el.style.setProperty('--my', `${py * 100}%`);
  };
  const onLeave = () => {
    if (!canHoverFine) return;
    if (ref.current) ref.current.style.transform = '';
  };

  return (
    <article
      ref={ref}
      onMouseMove={onMove}
      onMouseLeave={onLeave}
      className="project-card"
      data-hover
    >
      <div className="num">{String(idx + 1).padStart(2, '0')} / {String(total).padStart(2, '0')}</div>
      <h3>
        {p.title}
      </h3>
      <p>{p.description}</p>
      <div className="footer">
        <div className="stack">{p.techStack.map((s) => <span key={s} className="chip chip-sm">{s}</span>)}</div>
        {p.link?.href ? (
          <a className="link" href={p.link.href} target="_blank" rel="noreferrer" data-hover>
            {p.link.label}
            <svg viewBox="0 0 16 16" fill="none" stroke="currentColor" strokeWidth="1.6">
              <path d="M5 11 11 5m0 0H6m5 0v5" />
            </svg>
          </a>
        ) : null}
      </div>
    </article>
  );
}

