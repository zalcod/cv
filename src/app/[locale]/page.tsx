import { EditorialApp } from "@/components/editorial/EditorialApp";
import { loadEditorialResume } from "@/lib/editorialContent";

export default async function Home({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const resumeData = await loadEditorialResume(locale);
  return <EditorialApp resume={resumeData} locale={locale} />;
}