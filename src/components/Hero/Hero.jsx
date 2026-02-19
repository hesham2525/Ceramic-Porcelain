import React, { useEffect, useMemo, useState } from "react";
import { useNavigate } from "react-router-dom";
import "./hero.css";

export default function Hero() {
  const navigate = useNavigate();

  // منتجات الهيرو (عدّل النص/الصور/المسارات براحتك)
  const heroProducts = useMemo(
    () => [
      {
        key: "ceramic-porcelain",
        title: "أفضل أنواع",
        highlight: "البورسلين",
        desc: "جودة عالية وتصاميم عالمية تمنح منزلك هيبة فاخرة — من أول نظرة حتى آخر تفصيلة.",
        badge: "✦ تشطيبات راقية • خامات أصلية • فخامة تدوم",
        to: "/products/ceramic-porcelain",
        image:
          "https://images.unsplash.com/photo-1582582494700-5d5c2a0c0b83?auto=format&fit=crop&w=1400&q=80",
        bullets: ["مقاوم للخدش", "ألوان ثابتة", "مقاسات متنوعة"],
      },
      {
        key: "natural-marble",
        title: "أناقة",
        highlight: "الرخام الطبيعي",
        desc: "عروق طبيعية ولمعة فاخرة تعيش سنوات — اختيار مثالي للصالات والمداخل.",
        badge: "✦ خامات طبيعية • قصات دقيقة • لمسة فندقية",
        to: "/products/natural-marble",
        image:
          "https://images.unsplash.com/photo-1615873968403-89e068629265?auto=format&fit=crop&w=1400&q=80",
        bullets: ["مظهر طبيعي فاخر", "عروق فريدة", "تشطيب عالي"],
      },
      {
        key: "artificial-marble-sinks",
        title: "تصاميم",
        highlight: "أحواض رخـام صناعي",
        desc: "عملية وسهلة التنظيف مع خيارات ألوان وأشكال تناسب كل المطابخ والحمامات.",
        badge: "✦ مقاومة • عزل • أشكال مودرن",
        to: "/products/artificial-marble-sinks",
        image:
          "https://images.unsplash.com/photo-1600566753051-f0d5a6d73d39?auto=format&fit=crop&w=1400&q=80",
        bullets: ["مقاوم للبقع", "تنظيف سريع", "خيارات متعددة"],
      },
      {
        key: "facade-stones",
        title: "فخامة",
        highlight: "أحجار الواجهات",
        desc: "لمسة خارجية قوية وأنيقة — تمنح المبنى شخصية وهيبة مع تحمل عالي.",
        badge: "✦ تحمل للعوامل الجوية • شكل راقي",
        to: "/products/facade-stones",
        image:
          "https://images.unsplash.com/photo-1523413651479-597eb2da0ad6?auto=format&fit=crop&w=1400&q=80",
        bullets: ["مقاوم للحرارة", "مظهر قوي", "ألوان طبيعية"],
      },
      {
        key: "outdoor-tiles",
        title: "اختيارات",
        highlight: "بلاط خارجي",
        desc: "مناسب للممرات والحدائق — مانع انزلاق وتحمل ممتاز.",
        badge: "✦ مقاوم للانزلاق • مناسب للخارج",
        to: "/products/outdoor-tiles",
        image:
          "https://images.unsplash.com/photo-1528747008803-1c2d02b31076?auto=format&fit=crop&w=1400&q=80",
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
