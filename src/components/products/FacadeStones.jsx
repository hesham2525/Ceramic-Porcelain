import React, { useEffect, useMemo, useRef, useState } from "react";
import "./CeramicPorcelen.css";

export default function FacadeStones() {
  const PAGE_NAME = "أحجار وجهات";
  const WHATSAPP_NUMBER = "201069514877";

  const waLink = (text) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  // ===== Hero slider images =====
  const heroSlides = useMemo(
    () => [
      { src: "/images/W1.jpeg", alt: "أحجار وجهات - 1" },
      { src: "/images/W2.jpeg", alt: "أحجار وجهات - 2" },
      { src: "/images/W3.jpeg", alt: "أحجار وجهات - 3" },
      { src: "/images/W4.jpeg", alt: "أحجار وجهات - 4" },
    ],
    []
  );

  // ===== Products =====
  const products = useMemo(
    () => [
      {
        id: "fs-001",
        title: "حجر طبيعي للواجهات",
        badge: "طبيعي",
        price: "السعر عند الطلب",
        size: "قص حسب الطلب",
        finish: "ناعم/خشن",
        usage: "واجهات",
        images: ["/images/W1.jpeg", "/images/W2.jpeg"],
      },
      {
        id: "fs-002",
        title: "حجر ديكوري داخلي/خارجي",
        badge: "ديكوري",
        price: "السعر عند الطلب",
        size: "ألواح/قطع",
        finish: "تصميمات متعددة",
        usage: "حوائط/مداخل",
        images: ["/images/W3.jpeg", "/images/W4.jpeg"],
      },
      {
        id: "fs-003",
        title: "تشطيبات حجر (قصات متنوعة)",
        badge: "تشطيبات",
        price: "السعر عند الطلب",
        size: "حسب المقاس",
        finish: "قصات متنوعة",
        usage: "واجهات/ديكور",
        images: ["/images/W2.jpeg", "/images/W3.jpeg"],
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
    }, 1800);
    return () => clearInterval(id);
  }, [heroSlides.length]);

  const filtered = products;

  // ===== Modal =====
  const [active, setActive] = useState(null);
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
            <h1 className="luxHeroTitle">{PAGE_NAME}</h1>
            <p className="luxHeroDesc">
              قوة وتحمل • أشكال وتشطيبات متعددة • مناسب للواجهات والديكور الداخلي
              والخارجي. ابعت صورة الواجهة/المقاسات على واتساب ونطلعلك أفضل اختيار.
            </p>

            <div className="luxHeroStats">
              <div className="luxStat">
                <div className="luxStatNum">طبيعي/ديكوري</div>
                <div className="luxStatLabel">أنواع</div>
              </div>
              <div className="luxStat">
                <div className="luxStatNum">ناعم/خشن</div>
                <div className="luxStatLabel">تشطيبات</div>
              </div>
              <div className="luxStat">
                <div className="luxStatNum">قصات</div>
                <div className="luxStatLabel">متعددة</div>
              </div>
            </div>

            <div className="luxHeroActions">
              <a
                className="luxCtaGold"
                href={waLink(`انا مهتم بـ ${PAGE_NAME} وعايز عرض سعر`)}
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
          <div className="luxHeroSlider" aria-label="Facade stones hero slider">
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
                  setSlideIndex((i) => (i - 1 + heroSlides.length) % heroSlides.length)
                }
              >
                ‹
              </button>
              <button
                type="button"
                className="luxArrow"
                aria-label="Next slide"
                onClick={() => setSlideIndex((i) => (i + 1) % heroSlides.length)}
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
          <div className="luxToolbarTitle">كتالوج {PAGE_NAME}</div>
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
            <div className="luxEmpty">مفيش منتجات حالياً في القسم ده.</div>
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
              <button className="luxModalClose" onClick={closeProduct} aria-label="Close">
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
                        `انا مهتم بـ ${active.title} وعايز عرض سعر - صفحة: ${PAGE_NAME} (كود: ${active.id})`
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
                        `عايز استفسار عن: ${active.title} - صفحة: ${PAGE_NAME} (كود: ${active.id})`
                      )}
                      target="_blank"
                      rel="noreferrer"
                    >
                      واتساب
                    </a>
                  </div>

                  <div className="luxHint">
                    * ابعت صورة المكان/واجهة المبنى + المقاسات على واتساب عشان نديك اقتراحات أدق.
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
