'use client';

import React from 'react';
import Cal, { getCalApi } from '@calcom/embed-react';

const CAL_NAMESPACE = 'online-randevu-inline';
const CAL_LINK = 'zalsolmus/online-randevu';

export function MeetEmbed() {
  React.useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();
  }, []);

  return (
    <div className="meet-embed-wrap">
      <Cal
        namespace={CAL_NAMESPACE}
        calLink={CAL_LINK}
        style={{ width: '100%', height: '100%', overflow: 'auto' }}
        config={{ layout: 'month_view' }}
      />
    </div>
  );
}
