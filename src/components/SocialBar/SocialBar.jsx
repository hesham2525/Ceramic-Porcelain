import React from "react";
import "./social-bar.css";

const Icon = {
  facebook: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M13.5 22v-8h2.7l.4-3h-3.1V9.1c0-.9.3-1.5 1.6-1.5h1.7V5c-.3 0-1.4-.1-2.6-.1-2.6 0-4.3 1.6-4.3 4.5V11H7v3h2.9v8h3.6z"
      />
    </svg>
  ),
  instagram: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M7.5 2h9A5.5 5.5 0 0 1 22 7.5v9A5.5 5.5 0 0 1 16.5 22h-9A5.5 5.5 0 0 1 2 16.5v-9A5.5 5.5 0 0 1 7.5 2Zm0 2A3.5 3.5 0 0 0 4 7.5v9A3.5 3.5 0 0 0 7.5 20h9A3.5 3.5 0 0 0 20 16.5v-9A3.5 3.5 0 0 0 16.5 4h-9ZM12 7a5 5 0 1 1 0 10a5 5 0 0 1 0-10Zm0 2a3 3 0 1 0 0 6a3 3 0 0 0 0-6Zm6.2-.9a1.1 1.1 0 1 1-2.2 0a1.1 1.1 0 0 1 2.2 0Z"
      />
    </svg>
  ),
  whatsapp: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M20.5 12a8.5 8.5 0 0 1-12.9 7.3L3 21l1.8-4.4A8.5 8.5 0 1 1 20.5 12Zm-8.5-6.5A6.5 6.5 0 0 0 6.2 15l.2.4l-1 2.5l2.6-.9l.4.2A6.5 6.5 0 1 0 12 5.5Zm3.7 9.1c-.2.6-1.2 1.1-1.6 1.1c-.4.1-.9.1-1.4-.1c-.3-.1-.7-.2-1.2-.4c-2.1-.9-3.5-3.1-3.6-3.2c-.1-.2-.9-1.2-.9-2.2c0-1 .5-1.6.7-1.8c.2-.2.4-.2.5-.2h.4c.1 0 .3 0 .4.4l.6 1.4c.1.3.1.4 0 .6l-.2.3c-.1.2-.2.3-.1.5c.2.4.8 1.3 1.7 2c1.2 1 2.2 1.3 2.5 1.4c.2.1.4.1.6-.1l.7-.8c.2-.2.4-.2.6-.1l1.4.7c.2.1.4.2.4.4c0 .2 0 .6-.1.8Z"
      />
    </svg>
  ),
  tiktok: (
    <svg viewBox="0 0 24 24" aria-hidden="true">
      <path
        fill="currentColor"
        d="M16 3c.6 2.7 2.4 4.5 5 5v3.2c-1.9 0-3.6-.6-5-1.7v6.5c0 3.4-2.7 6-6.1 6c-3.4 0-6.1-2.7-6.1-6.1c0-3.4 2.7-6.1 6.1-6.1c.4 0 .8 0 1.2.1v3.4c-.4-.2-.8-.3-1.2-.3c-1.5 0-2.7 1.2-2.7 2.7c0 1.5 1.2 2.7 2.7 2.7c1.7 0 2.8-1.3 2.8-3.2V3h3.3Z"
      />
    </svg>
  ),
};

export default function SocialBar() {
  const links = [
    { name: "Facebook", href: "https://facebook.com/", icon: Icon.facebook },
    { name: "Instagram", href: "https://instagram.com/", icon: Icon.instagram },
    { name: "WhatsApp", href: "https://wa.me/2010XXXXXXX", icon: Icon.whatsapp },
    { name: "TikTok", href: "https://tiktok.com/", icon: Icon.tiktok },
  ];

  return (
    <section className="socialX" aria-label="Company social links">
      <div className="socialX__wrap">
        <div className="socialX__head">
          <div className="socialX__badge">
            <span className="socialX__dot" aria-hidden="true" />
            تواصل معنا
          </div>

          <div className="socialX__title">
            تابعنا على <span>السوشيال</span>
          </div>
        </div>

        <div className="socialX__grid">
          {links.map((l) => (
            <a
              key={l.name}
              className="socialX__btn"
              href={l.href}
              target="_blank"
              rel="noreferrer"
              aria-label={l.name}
              title={l.name}
            >
              <span className="socialX__ico" aria-hidden="true">
                {l.icon}
              </span>
              <span className="socialX__name">{l.name}</span>
              <span className="socialX__arrow" aria-hidden="true">
                ↗
              </span>
              <span className="socialX__shine" aria-hidden="true" />
            </a>
          ))}
        </div>
      </div>
    </section>
  );
}
