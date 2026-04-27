'use client';

import { MobileBottomBar } from '@/components/editorial/MobileBottomBar';

export function RandevuBottomBar({
  locale,
  labels,
}: {
  locale: string;
  labels: {
    home: string;
    cv: string;
    contact: string;
    meeting: string;
  };
}) {
  return (
    <MobileBottomBar
      locale={locale}
      labels={labels}
      onCvAction={() => {
        window.location.href = `/${locale}?cv=1`;
      }}
    />
  );
}
