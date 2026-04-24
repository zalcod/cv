'use server';

import fs from 'node:fs/promises';
import path from 'node:path';
import matter from 'gray-matter';

export type EditorialResume = {
  name: string;
  initials: string;
  location: string;
  locationLink?: string;
  cities: string[];
  workModes: ('onSite' | 'hybrid' | 'remote')[];
  about: string;
  summary: string;
  homeSummary: string;
  avatarUrl: string;
  personalWebsiteUrl?: string;
  personalWebsiteVisibleCv?: boolean;
  contact: {
    email: string;
    tel?: string;
    social: { name: string; url: string; isVisibleCv?: boolean }[];
  };
  certifications: string[];
  education: {
    school: string;
    degree: string;
    start: string;
    end: string;
    additionalInfo?: string;
  }[];
  work: {
    company: string;
    link?: string;
    badges?: string[];
    title: string;
    start: string;
    end: string;
    description: string;
  }[];
  skills: string[];
  projects: {
    title: string;
    techStack: string[];
    description: string;
    link?: { label: string; href: string };
  }[];
  extracurricularActivities: {
    role: string;
    organization: string;
    start: string;
    end: string;
    description: string;
  }[];
  languages: string[];
  blogPosts: { title: string; description: string; url: string }[];
};

type MdDoc<T> = { data: Partial<T>; content: string };

async function readMd<T>(filePath: string): Promise<MdDoc<T>> {
  const raw = await fs.readFile(filePath, 'utf8');
  const parsed = matter(raw);
  return { data: (parsed.data ?? {}) as Partial<T>, content: parsed.content ?? '' };
}

function contentRoot() {
  return path.join(process.cwd(), 'src', 'content');
}

export async function loadEditorialResume(locale: string): Promise<EditorialResume> {
  const root = path.join(contentRoot(), locale);

  const profile = await readMd<EditorialResume>(path.join(root, 'profile.md'));
  const work = await readMd<Pick<EditorialResume, 'work'>>(path.join(root, 'work.md'));
  const projects = await readMd<Pick<EditorialResume, 'projects'>>(path.join(root, 'projects.md'));
  const education = await readMd<Pick<EditorialResume, 'education'>>(path.join(root, 'education.md'));
  const certifications = await readMd<Pick<EditorialResume, 'certifications'>>(path.join(root, 'certifications.md'));
  const skills = await readMd<Pick<EditorialResume, 'skills'>>(path.join(root, 'skills.md'));
  const extracurricular = await readMd<Pick<EditorialResume, 'extracurricularActivities'>>(
    path.join(root, 'extracurricular.md')
  );
  const languages = await readMd<Pick<EditorialResume, 'languages'>>(path.join(root, 'languages.md'));
  const blog = await readMd<Pick<EditorialResume, 'blogPosts'>>(path.join(root, 'blog.md'));

  const merged: EditorialResume = {
    name: String(profile.data.name ?? ''),
    initials: String(profile.data.initials ?? ''),
    location: String(profile.data.location ?? ''),
    locationLink: profile.data.locationLink ? String(profile.data.locationLink) : undefined,
    cities: Array.isArray(profile.data.cities) ? (profile.data.cities as string[]) : [],
    workModes: Array.isArray(profile.data.workModes) ? (profile.data.workModes as any) : [],
    about: String(profile.data.about ?? ''),
    summary: String(profile.data.summary ?? ''),
    homeSummary: String(profile.data.homeSummary ?? ''),
    avatarUrl: String(profile.data.avatarUrl ?? ''),
    personalWebsiteUrl: profile.data.personalWebsiteUrl ? String(profile.data.personalWebsiteUrl) : undefined,
    personalWebsiteVisibleCv: Boolean((profile.data as any).personalWebsiteVisibleCv),
    contact: {
      email: String((profile.data as any)?.contact?.email ?? ''),
      tel: (profile.data as any)?.contact?.tel ? String((profile.data as any).contact.tel) : undefined,
      social: Array.isArray((profile.data as any)?.contact?.social)
        ? ((profile.data as any).contact.social as { name: string; url: string; isVisibleCv?: boolean }[])
        : [],
    },
    certifications: Array.isArray((certifications.data as any).certifications) ? ((certifications.data as any).certifications as string[]) : [],
    education: Array.isArray((education.data as any).education) ? ((education.data as any).education as any) : [],
    work: Array.isArray((work.data as any).work) ? ((work.data as any).work as any) : [],
    skills: Array.isArray((skills.data as any).skills) ? ((skills.data as any).skills as string[]) : [],
    projects: Array.isArray((projects.data as any).projects) ? ((projects.data as any).projects as any) : [],
    extracurricularActivities: Array.isArray((extracurricular.data as any).extracurricularActivities)
      ? ((extracurricular.data as any).extracurricularActivities as any)
      : [],
    languages: Array.isArray((languages.data as any).languages) ? ((languages.data as any).languages as string[]) : [],
    blogPosts: Array.isArray((blog.data as any).blogPosts) ? ((blog.data as any).blogPosts as any) : [],
  };

  return merged;
}

