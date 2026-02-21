import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

export default function Hero() {
  const navigate = useNavigate();

  const heroProducts = useMemo(
    () => [
      {
        key: "ceramic-porcelain",
        title: "أفضل أنواع",
        highlight: "البورسلين",
        desc: "جودة عالية وتصاميم عالمية تمنح منزلك هيبة فاخرة — من أول نظرة حتى آخر تفصيلة.",
        badge: "✦ تشطيبات راقية • خامات أصلية • فخامة تدوم",
        to: "/products/ceramic-porcelain",
        image: "/images/4.jpg",
        bullets: ["مقاوم للخدش", "ألوان ثابتة", "مقاسات متنوعة"],
      },
      {
        key: "natural-marble",
        title: "أناقة",
        highlight: "الرخام الطبيعي",
        desc: "عروق طبيعية ولمعة فاخرة تعيش سنوات — اختيار مثالي للصالات والمداخل.",
        badge: "✦ خامات طبيعية • قصات دقيقة • لمسة فندقية",
        to: "/products/natural-marble",
        image: "/images/p16.jpg",
        bullets: ["مظهر طبيعي فاخر", "عروق فريدة", "تشطيب عالي"],
      },
      {
        key: "artificial-marble-sinks",
        title: "تصاميم",
        highlight: "أحواض رخـام صناعي",
        desc: "عملية وسهلة التنظيف مع خيارات ألوان وأشكال تناسب كل المطابخ والحمامات.",
        badge: "✦ مقاومة • عزل • أشكال مودرن",
        to: "/products/artificial-marble-sinks",
        image: "/images/M7.jpeg",
        bullets: ["مقاوم للبقع", "تنظيف سريع", "خيارات متعددة"],
      },
      {
        key: "facade-stones",
        title: "فخامة",
        highlight: "أحجار الواجهات",
        desc: "لمسة خارجية قوية وأنيقة — تمنح المبنى شخصية وهيبة مع تحمل عالي.",
        badge: "✦ تحمل للعوامل الجوية • شكل راقي",
        to: "/products/facade-stones",
        image: "/images/W11.jpeg",
        bullets: ["مقاوم للحرارة", "مظهر قوي", "ألوان طبيعية"],
      },
      {
        key: "outdoor-tiles",
        title: "اختيارات",
        highlight: "بلاط خارجي",
        desc: "مناسب للممرات والحدائق — مانع انزلاق وتحمل ممتاز.",
        badge: "✦ مقاوم للانزلاق • مناسب للخارج",
        to: "/products/outdoor-tiles",
        image: "/images/B11.jpeg",
        bullets: ["مانع للانزلاق", "تحمل عالي", "ملمس ثابت"],
      },
    ],
    []
  );

  const [index, setIndex] = useState(0);
  const current = heroProducts[index];

  // Auto-rotate
  useEffect(() => {
    const id = setInterval(() => {
      setIndex((i) => (i + 1) % heroProducts.length);
    }, 4500);
    return () => clearInterval(id);
  }, [heroProducts.length]);

  const goNext = () => setIndex((i) => (i + 1) % heroProducts.length);
  const goPrev = () =>
    setIndex((i) => (i - 1 + heroProducts.length) % heroProducts.length);

  return (
    <section className="luxHero">
      <div className="luxHero__overlay" />
      <div className="luxHero__glow luxHero__glow--a" />
      <div className="luxHero__glow luxHero__glow--b" />

      {/* خلفية صورة المنتج الحالي */}
      <div
        className="luxHero__bg"
        style={{ backgroundImage: `url(${current.image})` }}
        aria-hidden="true"
      />

      <div className="luxHero__container">
        <div className="luxHero__card" key={current.key}>
          <div className="luxHero__badge">{current.badge}</div>

          <h1 className="luxHero__title">
            {current.title} <span>{current.highlight}</span>
          </h1>

          <p className="luxHero__subtitle">{current.desc}</p>

          <div className="luxHero__actions">
            <button
              className="luxBtnGold"
              type="button"
              onClick={() => navigate(current.to)}
            >
              اكتشف مجموعاتنا
              <span className="luxBtnGlow" aria-hidden="true" />
            </button>

            <button
              className="luxBtnGhost"
              type="button"
              onClick={() => navigate("/products/")}
            >
              تصفّح كل المنتجات
            </button>
          </div>

          <div className="luxHero__highlights">
            {current.bullets.map((b) => (
              <div className="hItem" key={b}>
                <span className="hDot" />
                {b}
              </div>
            ))}
          </div>

          {/* Controls */}
          <div className="luxHero__nav">
            <button className="navBtn" onClick={goPrev} aria-label="Prev">
              ‹
            </button>

            <div className="dots" aria-label="Hero slides">
              {heroProducts.map((p, i) => (
                <button
                  key={p.key}
                  className={`dot ${i === index ? "isActive" : ""}`}
                  onClick={() => setIndex(i)}
                  aria-label={`Go to ${p.key}`}
                />
              ))}
            </div>

            <button className="navBtn" onClick={goNext} aria-label="Next">
              ›
            </button>
          </div>
        </div>
      </div>
    </section>
  );
}
