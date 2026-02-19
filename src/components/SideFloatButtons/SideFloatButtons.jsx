import React, { useMemo } from "react";
import "./side-float-buttons.css";

const Icon = {
  WhatsApp: (props) => (
    <svg viewBox="0 0 32 32" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M19.11 17.35c-.22-.11-1.3-.64-1.5-.72-.2-.07-.35-.11-.5.11-.15.22-.57.72-.7.87-.13.15-.26.17-.48.06-.22-.11-.93-.34-1.77-1.08-.65-.58-1.09-1.3-1.22-1.52-.13-.22-.01-.34.1-.45.1-.1.22-.26.33-.39.11-.13.15-.22.22-.37.07-.15.04-.28-.02-.39-.06-.11-.5-1.2-.69-1.64-.18-.44-.36-.38-.5-.39h-.43c-.15 0-.39.06-.6.28-.2.22-.78.76-.78 1.86s.8 2.16.91 2.31c.11.15 1.58 2.41 3.82 3.38.53.23.94.36 1.26.46.53.17 1.02.15 1.4.09.43-.06 1.3-.53 1.49-1.04.19-.52.19-.96.13-1.04-.06-.09-.2-.15-.42-.26z"
      />
      <path
        fill="currentColor"
        d="M16.02 3C8.85 3 3.02 8.83 3.02 16c0 2.27.6 4.49 1.74 6.45L3 29l6.72-1.74A12.9 12.9 0 0 0 16.02 29C23.19 29 29.02 23.17 29.02 16 29.02 8.83 23.19 3 16.02 3zm0 23.6c-2.06 0-4.09-.55-5.88-1.59l-.42-.25-3.99 1.03 1.07-3.89-.27-.4A10.6 10.6 0 1 1 16.02 26.6z"
      />
    </svg>
  ),
  Location: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M12 2c-3.87 0-7 3.13-7 7 0 5.25 7 13 7 13s7-7.75 7-13c0-3.87-3.13-7-7-7zm0 9.5A2.5 2.5 0 1 1 12 6a2.5 2.5 0 0 1 0 5.5z"
      />
    </svg>
  ),
  Call: (props) => (
    <svg viewBox="0 0 24 24" aria-hidden="true" {...props}>
      <path
        fill="currentColor"
        d="M6.62 10.79a15.05 15.05 0 0 0 6.59 6.59l2.2-2.2c.27-.27.67-.36 1.02-.24 1.12.37 2.33.57 3.57.57.55 0 1 .45 1 1V20c0 .55-.45 1-1 1C10.85 21 3 13.15 3 3c0-.55.45-1 1-1h3.5c.55 0 1 .45 1 1 0 1.25.2 2.45.57 3.57.11.35.03.74-.25 1.02l-2.2 2.2z"
      />
    </svg>
  ),
};

export default function SideFloatButtons({
  side = "right",
  phone = "201001234567",
  whatsapp = "201001234567",
  locationUrl = "https://maps.google.com/?q=30.0444,31.2357",
  offsetTop = 220,
  brand = "CERAMIC",
}) {
  const sideClass = side === "left" ? "left" : "right";

  const waHref = useMemo(() => {
    const clean = String(whatsapp).replace(/[^\d]/g, "");
    return `https://wa.me/${clean}`;
  }, [whatsapp]);

  const callHref = useMemo(() => {
    const clean = String(phone).replace(/[^\d+]/g, "");
    return `tel:${clean}`;
  }, [phone]);

  return (
    <aside
      className={`sfPro ${sideClass}`}
      style={{ top: offsetTop }}
      aria-label="Quick actions"
    >
      <div className="sfPro__rail" aria-hidden="true" />

      <a
        className="sfPro__btn wa"
        href={waHref}
        target="_blank"
        rel="noreferrer"
        aria-label="WhatsApp"
      >
        <span className="sfPro__icon">
          <Icon.WhatsApp className="sfPro__svg" />
        </span>
        <span className="sfPro__label">واتساب</span>
        <span className="sfPro__hint">رد سريع خلال دقائق</span>
      </a>

      <a
        className="sfPro__btn loc"
        href={locationUrl}
        target="_blank"
        rel="noreferrer"
        aria-label="Location"
      >
        <span className="sfPro__icon">
          <Icon.Location className="sfPro__svg" />
        </span>
        <span className="sfPro__label">الموقع</span>
        <span className="sfPro__hint">افتح الخريطة مباشرة</span>
      </a>

      <a className="sfPro__btn call" href={callHref} aria-label="Call">
        <span className="sfPro__icon">
          <Icon.Call className="sfPro__svg" />
        </span>
        <span className="sfPro__label">اتصال</span>
        <span className="sfPro__hint">جاهزين لمساعدتك</span>
      </a>
    </aside>
  );
}
