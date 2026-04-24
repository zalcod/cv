'use client';

import React from 'react';
import { useTranslations } from 'next-intl';
import type { EditorialResume } from '@/lib/editorialContent';

export function CVDocument({
  resume,
  className,
}: {
  resume: EditorialResume;
  className?: string;
}) {
  const t = useTranslations();
  const visibleSocials = resume.contact.social.filter((s) => s.isVisibleCv);
  const showWebsite = !!resume.personalWebsiteUrl && resume.personalWebsiteVisibleCv;
  const groupedWork = React.useMemo(() => {
    type WorkItem = NonNullable<EditorialResume['work']>[number];
    type Group = { company: string; start?: string; end?: string; items: WorkItem[] };

    const work = resume.work ?? [];
    const groups: Group[] = [];
    for (const it of work) {
      const prev = groups[groups.length - 1];
      if (prev && prev.company === it.company) {
        prev.items.push(it);
      } else {
        groups.push({ company: it.company, start: it.start, end: it.end, items: [it] });
      }
    }
    return groups;
  }, [resume.work]);

  const contactLine = [resume.contact.email, resume.contact.tel, resume.location]
    .filter(Boolean)
    .join(' · ');

  const linkLine = [
    showWebsite ? resume.personalWebsiteUrl!.replace(/^https?:\/\//, '') : null,
    ...visibleSocials.map((s) => s.url.replace(/^https?:\/\//, '')),
  ]
    .filter(Boolean)
    .join(' · ');

  return (
    <div className={className ?? 'print-cv'} aria-hidden={className ? undefined : true}>
      <header className="pcv-head">
        <h1>{resume.name}</h1>
        <div className="pcv-role">{resume.about}</div>
        <div className="pcv-contact">
          {contactLine}
          {linkLine ? (
            <>
              <br />
              {linkLine}
            </>
          ) : null}
        </div>
      </header>

      {resume.summary ? (
        <section className="pcv-section">
          <h2>{t('sections.about')}</h2>
          <p>{resume.summary}</p>
        </section>
      ) : null}

      {resume.work?.length ? (
        <section className="pcv-section">
          <h2>{t('sections.workExperience')}</h2>
          {groupedWork.map((g, i) => (
            <div key={`pcv-wg-${i}`} className="pcv-entry">
              <div className="pcv-row">
                <strong>{g.company}</strong>
                {g.start || g.end ? <span>{g.start} – {g.end}</span> : null}
              </div>
              {g.items.map((j, k) => (
                <div key={`pcv-w-${i}-${k}`} className="pcv-work-role">
                  <div className="pcv-work-title">{j.title}</div>
                  {j.description ? <p>{j.description}</p> : null}
                </div>
              ))}
            </div>
          ))}
        </section>
      ) : null}

      {resume.education?.length ? (
        <section className="pcv-section">
          <h2>{t('sections.education')}</h2>
          {resume.education.map((e, i) => (
            <div key={`pcv-e-${i}`} className="pcv-entry">
              <div className="pcv-row">
                <strong>{e.school} — {e.degree}</strong>
                <span>{e.start} – {e.end}</span>
              </div>
              {e.additionalInfo ? <div className="pcv-sub">{e.additionalInfo}</div> : null}
            </div>
          ))}
        </section>
      ) : null}

      {resume.skills?.length ? (
        <section className="pcv-section">
          <h2>{t('sections.skills')}</h2>
          <p>{resume.skills.join(', ')}</p>
        </section>
      ) : null}

      {resume.projects?.length ? (
        <section className="pcv-section">
          <h2>{t('sections.projects')}</h2>
          {resume.projects.map((p, i) => (
            <div key={`pcv-p-${i}`} className="pcv-entry">
              <strong>{p.title}</strong>
              {p.techStack?.length ? <div className="pcv-sub">{p.techStack.join(', ')}</div> : null}
              {p.description ? <p>{p.description}</p> : null}
            </div>
          ))}
        </section>
      ) : null}

      {resume.extracurricularActivities?.length ? (
        <section className="pcv-section">
          <h2>{t('sections.extracurricular')}</h2>
          {resume.extracurricularActivities.map((it, i) => (
            <div key={`pcv-x-${i}`} className="pcv-entry">
              <div className="pcv-row">
                <strong>{it.role} — {it.organization}</strong>
                <span>{it.start} – {it.end}</span>
              </div>
              {it.description ? <p>{it.description}</p> : null}
            </div>
          ))}
        </section>
      ) : null}

      {resume.certifications?.length ? (
        <section className="pcv-section">
          <h2>{t('sections.certifications')}</h2>
          <p>{resume.certifications.join(' · ')}</p>
        </section>
      ) : null}

      {resume.languages?.length ? (
        <section className="pcv-section">
          <h2>{t('sections.languages')}</h2>
          <p>{resume.languages.join(', ')}</p>
        </section>
      ) : null}
    </div>
  );
}
