import React, { useMemo, useState } from "react";
import "./testimonials.css";

const DATA = [
  {
    id: 1,
    name: "م/ أحمد السيد",
    role: "مقاول تشطيبات",
    text: "جودة ممتازة وخدمة راقية جدًا. خامات مضمونة وتسليم في المعاد.",
    rating: 5,
  },
  {
    id: 2,
    name: "د/ سارة محمود",
    role: "مصممة ديكور",
    text: "تشكيلة فخمة فعلًا وذوق عالي. ساعدوني في اختيار اللون والملمس حسب الإضاءة.",
    rating: 5,
  },
  {
    id: 3,
    name: "أ/ خالد إبراهيم",
    role: "عميل",
    text: "تعامل محترم وسعر مناسب مقابل الجودة. أنصح بالتعامل معهم وبقوة.",
    rating: 4,
  },
  {
    id: 4,
    name: "م/ مروان علي",
    role: "مهندس معماري",
    text: "التفاصيل دقيقة جدًا، والخامات شكلها ممتاز بعد التركيب. تجربة شراء مريحة.",
    rating: 5,
  },
];

function Stars({ count = 5 }) {
  return (
    <div className="tStars" aria-label={`${count} stars`}>
      {Array.from({ length: 5 }).map((_, i) => (
        <span key={i} className={`tStar ${i < count ? "on" : ""}`}>
          ★
        </span>
      ))}
    </div>
  );
}

export default function Testimonials() {
  const [active, setActive] = useState(0);

  const current = useMemo(() => DATA[active], [active]);

  const prev = () => setActive((v) => (v - 1 + DATA.length) % DATA.length);
  const next = () => setActive((v) => (v + 1) % DATA.length);

  return (
    <section className="luxTesti" aria-label="Testimonials">
      <div className="luxTesti__glow" />

      <div className="luxTesti__wrap">
        {/* Header */}
        <div className="luxTesti__head">
          <span className="luxTesti__badge">✦ ثقة العملاء</span>
          <h2 className="luxTesti__title">
            آراء <span>عملائنا</span>
          </h2>
          <p className="luxTesti__subtitle">
            كلمات بسيطة… لكنها تعكس جودة نحرص عليها من أول اختيار حتى التسليم.
          </p>
        </div>

        {/* Featured */}
        <div className="luxTesti__featured">
          <div className="quoteMark">“</div>

          <div className="featuredTop">
            <div className="avatar" aria-hidden="true">
              {current.name?.slice(0, 1)}
            </div>

            <div className="who">
              <div className="whoName">{current.name}</div>
              <div className="whoRole">{current.role}</div>
            </div>

            <div className="rating">
              <Stars count={current.rating} />
              <span className="ratingText">{current.rating}.0</span>
            </div>
          </div>

          <p className="featuredText">{current.text}</p>

          <div className="featuredActions">
            <button className="navBtn" onClick={prev} type="button">
              ◀ السابق
            </button>
            <button className="navBtn gold" onClick={next} type="button">
              التالي ▶
              <span className="btnGlow" aria-hidden="true" />
            </button>
          </div>
        </div>

        {/* Grid */}
        <div className="luxTesti__grid">
          {DATA.map((t, i) => (
            <button
              key={t.id}
              type="button"
              className={`miniCard ${i === active ? "active" : ""}`}
              onClick={() => setActive(i)}
              aria-label={`Open testimonial ${i + 1}`}
            >
              <div className="miniTop">
                <div className="miniAvatar">{t.name.slice(0, 1)}</div>
                <div className="miniWho">
                  <div className="miniName">{t.name}</div>
                  <div className="miniRole">{t.role}</div>
                </div>
                <Stars count={t.rating} />
              </div>

              <div className="miniText">{t.text}</div>
              <span className="miniSheen" aria-hidden="true" />
            </button>
          ))}
        </div>
      </div>
    </section>
  );
}
