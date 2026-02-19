import React, { useEffect, useMemo, useRef, useState } from "react";
import "./CeramicPorcelen.css";

export default function CeramicPorcelain() {
  const WHATSAPP_NUMBER = "201069514877";

  const waLink = (text) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  const heroSlides = useMemo(
    () => [
      { src: "/images/p4.jpg", alt: "سيراميك وبورسلين - 4" },
      { src: "/images/p5.jpg", alt: "سيراميك وبورسلين - 5" },
      { src: "/images/p9.jpg", alt: "سيراميك وبورسلين - 9" },
      { src: "/images/p11.jpg", alt: "سيراميك وبورسلين - 11" },
      { src: "/images/p15.jpg", alt: "سيراميك وبورسلين - 15" },
      { src: "/images/p18.jpg", alt: "سيراميك وبورسلين - 18" },
      { src: "/images/p20.jpg", alt: "سيراميك وبورسلين - 20" },
    ],
    []
  );

  // ===== Products (غيّر الداتا حسب منتجاتك) =====
  const products = useMemo(
    () => [
      {
        id: "cp-001",
        title: "بورسلين رمادي 60×120",
        badge: "بورسلين",
        price: "السعر عند الطلب",
        size: "60×120",
        finish: "مط",
        usage: "أرضيات",
        images: ["/images/p2.jpg", "/images/p1.jpg", "/images/p12.jpg"],
      },
      {
        id: "cp-002",
        title: "سيراميك حوائط رخامي 30×60",
        badge: "حوائط",
        price: "السعر عند الطلب",
        size: "30×60",
        finish: "لامع",
        usage: "حوائط",
        images: ["/images/p9.jpg", "/images/p19.jpg", "/images/p20.jpg"],
      },
      {
        id: "cp-003",
        title: "بورسلين بيج 60×60",
        badge: "بورسلين",
        price: "السعر عند الطلب",
        size: "60×60",
        finish: "نصف مط",
        usage: "أرضيات",
        images: ["/images/p4.jpg", "/images/p7.jpg", "/images/p8.jpg"],
      },
      {
        id: "cp-004",
        title: "سيراميك أرضيات مودرن 60×60",
        badge: "أرضيات",
        price: "السعر عند الطلب",
        size: "60×60",
        finish: "مط",
        usage: "أرضيات",
        images: [
          "/images/p14.jpg",
          "/images/p16.jpg",
          "/images/p18.jpg",
          "/images/p3.jpg",
        ],
      },
      {
        id: "cp-005",
        title: "بورسلين أبيض 60×120",
        badge: "بورسلين",
        price: "السعر عند الطلب",
        size: "60×120",
        finish: "لامع",
        usage: "أرضيات/حوائط",
        images: [
          "/images/p5.jpg",
          "/images/p17.jpg",
          "/images/p19.jpg",
          "/images/p20.jpg",
          "/images/p6.jpg",
        ],
      },
      {
        id: "cp-006",
        title: "سيراميك حوائط كلاسيك 30×60",
        badge: "حوائط",
        price: "السعر عند الطلب",
        size: "30×60",
        finish: "لامع",
        usage: "حوائط",
        images: [
          "/images/p10.jpg",
          "/images/p12.jpg",
          "/images/p19.jpg",
          "/images/p20.jpg",
          "/images/p11.jpg",
        ],
      },
    ],
    []
  );

  // ===== Hero autoplay =====
  const [slideIndex, setSlideIndex] = useState(0);
  const hoverPause = useRef(false);

  useEffect(() => {
    const id = setInterval(() => {
      if (hoverPause.current) return;
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 1000);
    return () => clearInterval(id);
  }, [heroSlides.length]);

  const filtered = products;

  const [active, setActive] = useState(null); // product
  const [activeImg, setActiveImg] = useState(0);

  useEffect(() => {
    document.body.style.overflow = active ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [active]);

  const openProduct = (p) => {
    setActive(p);
    setActiveImg(0);
  };

  const closeProduct = () => setActive(null);

  return (
    <div className="luxProdPage">
      {/* ===== HERO ===== */}
      <section
        className="luxProdHero"
        onMouseEnter={() => (hoverPause.current = true)}
        onMouseLeave={() => (hoverPause.current = false)}
      >
        <div className="luxHeroGrid">
          <div className="luxHeroCopy">
            <div className="luxHeroKicker">LUX TILES</div>
            <h1 className="luxHeroTitle">سيراميك وبورسلين</h1>
            <p className="luxHeroDesc">
              تشطيبات فاخرة • مقاسات متنوعة • خامات قوية مناسبة للمنازل
              والمشاريع. اكتشف أحدث الموديلات واختار اللي يناسب ذوقك.
            </p>

            <div className="luxHeroStats">
              <div className="luxStat">
                <div className="luxStatNum">+200</div>
                <div className="luxStatLabel">موديل</div>
              </div>
              <div className="luxStat">
                <div className="luxStatNum">5</div>
                <div className="luxStatLabel">مقاسات أساسية</div>
              </div>
              <div className="luxStat">
                <div className="luxStatNum">مط/لامع</div>
                <div className="luxStatLabel">تشطيبات</div>
              </div>
            </div>

            <div className="luxHeroActions">
              <a
                className="luxCtaGold"
                href={waLink(
                  "انا مهتم بمنتج السيراميك والبورسلين وعايز عرض السعر"
                )}
                target="_blank"
                rel="noreferrer"
              >
                اطلب عرض سعر
                <span className="luxGlow" aria-hidden="true" />
              </a>

              <button
                className="luxCtaGhost"
                type="button"
                onClick={() => {
                  const el = document.getElementById("catalog");
                  el?.scrollIntoView({ behavior: "smooth" });
                }}
              >
                استعرض الكتالوج
              </button>
            </div>
          </div>

          {/* Slider */}
          <div className="luxHeroSlider" aria-label="Ceramic hero slider">
            <div className="luxSliderFrame">
              {heroSlides.map((s, i) => (
                <img
                  key={s.src}
                  src={s.src}
                  alt={s.alt}
                  className={`luxSlide ${i === slideIndex ? "isActive" : ""}`}
                  loading={i < 2 ? "eager" : "lazy"}
                />
              ))}
              <div className="luxSliderShade" aria-hidden="true" />
            </div>

            <div className="luxDots" role="tablist" aria-label="Slides">
              {heroSlides.map((_, i) => (
                <button
                  key={i}
                  className={`luxDot ${i === slideIndex ? "on" : ""}`}
                  onClick={() => setSlideIndex(i)}
                  aria-label={`Slide ${i + 1}`}
                  type="button"
                />
              ))}
            </div>

            <div className="luxSliderArrows">
              <button
                type="button"
                className="luxArrow"
                aria-label="Previous slide"
                onClick={() =>
                  setSlideIndex(
                    (i) => (i - 1 + heroSlides.length) % heroSlides.length
                  )
                }
              >
                ‹
              </button>
              <button
                type="button"
                className="luxArrow"
                aria-label="Next slide"
                onClick={() =>
                  setSlideIndex((i) => (i + 1) % heroSlides.length)
                }
              >
                ›
              </button>
            </div>
          </div>
        </div>
      </section>

      {/* ===== TOOLBAR ===== */}
      <section className="luxToolbar" id="catalog">
        <div className="luxToolbarInner">
          <div className="luxToolbarTitle">كتالوج سيراميك وبورسلين</div>
        </div>
      </section>

      {/* ===== GRID ===== */}
      <section className="luxCatalog">
        <div className="luxCatalogInner">
          <div className="luxGrid">
            {filtered.map((p) => (
              <button
                key={p.id}
                type="button"
                className="luxCard"
                onClick={() => openProduct(p)}
              >
                <div className="luxCardMedia">
                  <img src={p.images[0]} alt={p.title} loading="lazy" />
                  <div className="luxBadge">{p.badge}</div>
                </div>

                <div className="luxCardBody">
                  <div className="luxCardTitle">{p.title}</div>

                  <div className="luxMetaRow">
                    <div className="luxMeta">
                      <b>المقاس</b>
                      <span>{p.size}</span>
                    </div>
                    <div className="luxMeta">
                      <b>التشطيب</b>
                      <span>{p.finish}</span>
                    </div>
                    <div className="luxMeta">
                      <b>الاستخدام</b>
                      <span>{p.usage}</span>
                    </div>
                  </div>

                  <div className="luxCardFoot">
                    <div className="luxPrice">{p.price}</div>
                    <span className="luxMore">عرض التفاصيل</span>
                  </div>
                </div>
              </button>
            ))}
          </div>

          {filtered.length === 0 && (
            <div className="luxEmpty">
              مفيش نتائج مطابقة.. جرّب كلمة مختلفة أو اختار فلتر تاني.
            </div>
          )}
        </div>
      </section>

      {/* ===== MODAL ===== */}
      {active && (
        <div className="luxModal" role="dialog" aria-modal="true">
          <div className="luxModalBackdrop" onClick={closeProduct} />
          <div className="luxModalPanel">
            <div className="luxModalTop">
              <div>
                <div className="luxModalTitle">{active.title}</div>
                <div className="luxModalSub">
                  <span>{active.size}</span> • <span>{active.finish}</span> •{" "}
                  <span>{active.usage}</span>
                </div>
              </div>
              <button
                className="luxModalClose"
                onClick={closeProduct}
                aria-label="Close"
              >
                ✕
              </button>
            </div>

            <div className="luxModalGrid">
              <div className="luxModalMainImg">
                <img src={active.images[activeImg]} alt={active.title} />
              </div>

              <div className="luxModalSide">
                <div className="luxThumbs">
                  {active.images.map((src, i) => (
                    <button
                      key={src}
                      type="button"
                      className={`luxThumb ${i === activeImg ? "on" : ""}`}
                      onClick={() => setActiveImg(i)}
                      aria-label={`Image ${i + 1}`}
                    >
                      <img src={src} alt="" />
                    </button>
                  ))}
                </div>

                <div className="luxModalInfo">
                  <div className="luxInfoRow">
                    <b>السعر</b>
                    <span>{active.price}</span>
                  </div>
                  <div className="luxInfoRow">
                    <b>كود المنتج</b>
                    <span>{active.id}</span>
                  </div>

                  <div className="luxModalActions">
                    <a
                      className="luxCtaGold full"
                      href={waLink(
                        `انا مهتم بـ ${active.title} وعايز عرض سعر - صفحة: سيراميك وبورسلين`
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      اطلب عرض سعر
                      <span className="luxGlow" aria-hidden="true" />
                    </a>

                    <a
                      className="luxCtaGhost full"
                      href={waLink(
                        `عايز استفسار عن المنتج: ${active.title} - صفحة: سيراميك وبورسلين`
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      واتساب
                    </a>
                  </div>

                  <div className="luxHint">
                    * اضغط على الصور الصغيرة للتبديل — واطلب عرض السعر لو تحب.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
}
