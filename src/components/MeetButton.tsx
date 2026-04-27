'use client';

import React from 'react';
import { getCalApi } from '@calcom/embed-react';
import { CalendarDays } from 'lucide-react';

const CAL_NAMESPACE = 'online-randevu-popup';
const CAL_LINK = 'zalsolmus/online-randevu';

const SHADOW_OVERRIDES = `
  .my-backdrop {
    background-color: rgba(10, 10, 10, 0.35) !important;
    backdrop-filter: blur(6px) saturate(120%);
    -webkit-backdrop-filter: blur(6px) saturate(120%);
  }
  .modal-box {
    max-width: min(1100px, calc(100vw - 64px));
    background: transparent !important;
    border: 0 !important;
    box-shadow: none !important;
    border-radius: 0 !important;
    padding: 0 !important;
  }
  .header {
    position: fixed !important;
    top: 16px !important;
    right: 16px !important;
    left: auto !important;
    float: none !important;
    z-index: 2147483647;
  }
  .close {
    left: 0 !important;
    top: 0 !important;
    color: #fff !important;
    background: rgba(0, 0, 0, 0.5);
    border: 1px solid rgba(255, 255, 255, 0.15);
    border-radius: 999px;
    width: 36px;
    height: 36px;
    line-height: 32px;
    text-align: center;
    font-size: 22px !important;
  }
`;

function injectShadowStyles() {
  const host = document.querySelector('cal-modal-box') as HTMLElement | null;
  if (!host || !host.shadowRoot) return false;
  if (host.shadowRoot.querySelector('style[data-cal-overrides]')) return true;
  const style = document.createElement('style');
  style.setAttribute('data-cal-overrides', 'true');
  style.textContent = SHADOW_OVERRIDES;
  host.shadowRoot.appendChild(style);
  return true;
}

export function MeetButton({
  label,
  className = 'btn ghost',
}: {
  label: string;
  className?: string;
}) {
  React.useEffect(() => {
    (async () => {
      const cal = await getCalApi({ namespace: CAL_NAMESPACE });
      cal('ui', { hideEventTypeDetails: false, layout: 'month_view' });
    })();

    const observer = new MutationObserver(() => {
      injectShadowStyles();
    });
    observer.observe(document.body, { childList: true, subtree: false });

    return () => observer.disconnect();
  }, []);

  return (
    <button
      type="button"
      data-cal-namespace={CAL_NAMESPACE}
      data-cal-link={CAL_LINK}
      data-cal-config='{"layout":"month_view"}'
      className={className}
      data-hover
      aria-label={label}
    >
      <CalendarDays style={{ width: 16, height: 16, marginRight: 6, verticalAlign: -3 }} />
      {label}
    </button>
  );
}
