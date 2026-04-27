import { getTranslations } from 'next-intl/server';
import { MeetEmbed } from '@/components/MeetEmbed';
import { RandevuBottomBar } from './RandevuBottomBar';

export default async function RandevuPage({
  params,
}: {
  params: Promise<{ locale: string }>;
}) {
  const { locale } = await params;
  const t = await getTranslations({ locale });

  return (
    <>
      <MeetEmbed />
      <RandevuBottomBar
        locale={locale}
        labels={{
          home: t('navigation.home'),
          cv: t('navigation.cv'),
          contact: t('navigation.contact'),
          meeting: t('navigation.meeting'),
        }}
      />
    </>
  );
}
