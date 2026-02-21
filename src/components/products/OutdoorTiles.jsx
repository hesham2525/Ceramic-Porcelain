import React, { useEffect, useMemo, useRef, useState } from "react";
import "./CeramicPorcelen.css";

export default function OutdoorTiles() {
  const PAGE_NAME = "بلاط أحواش";
  const WHATSAPP_NUMBER = "201069514877";

  const waLink = (text) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;

  // ===== Hero slider images =====
  const heroSlides = useMemo(
    () => [
      { src: "/images/B3.jpeg", alt: "بلاط أحواش - 1" },
      { src: "/images/B8.jpeg", alt: "بلاط أحواش - 2" },
      { src: "/images/B9.jpeg", alt: "بلاط أحواش - 3" },
      { src: "/images/B10.jpeg", alt: "بلاط أحواش - 4" },
      { src: "/images/B13.jpeg", alt: "بلاط أحواش - 1" },
      { src: "/images/B16.jpeg", alt: "بلاط أحواش - 2" },
      { src: "/images/B18.jpeg", alt: "بلاط أحواش - 3" },
      { src: "/images/B22.jpeg", alt: "بلاط أحواش - 4" },
    ],
    []
  );

  // ===== Products =====
  const products = useMemo(
    () => [
      {
        id: "ot-001",
        title: "بلاط انترلوك",
        badge: "انترلوك",
        price: "السعر عند الطلب",
        size: "مقاسات متعددة",
        finish: "خشن",
        usage: "أحواش/ممرات",
        images: [
          "/images/B13.jpeg",
          "/images/B4.jpeg",
          "/images/B5.jpeg",
          "/images/B7.jpeg",
          "/images/B8.jpeg",
          "/images/B9.jpeg",
        ],
      },
      {
        id: "ot-002",
        title: "بلاط خشن (مضاد للانزلاق)",
        badge: "مضاد للانزلاق",
        price: "السعر عند الطلب",
        size: "مقاسات متعددة",
        finish: "خشن",
        usage: "ممرات/ساحات",
        images: [
          "/images/B14.jpeg",
          "/images/B15.jpeg",
          "/images/B16.jpeg",
          "/images/B21.jpeg",
          "/images/B22.jpeg",
        ],
      },
      {
        id: "ot-003",
        title: "حلول الحدائق (ممرات/ساحات/جراجات)",
        badge: "حدائق",
        price: "السعر عند الطلب",
        size: "حسب التصميم",
        finish: "خارجي",
        usage: "حدائق/جراجات",
        images: [
          "/images/B18.jpeg",
          "/images/B17.jpeg",
          "/images/B19.jpeg",
          "/images/B20.jpeg",
          "/images/B23.jpeg",
        ],
      },
    ],
    []
  );

  // ===== Hero autoplay =====
  const [slideIndex, setSlideIndex] = useState(0);

  useEffect(() => {
    const id = setInterval(() => {
      setSlideIndex((i) => (i + 1) % heroSlides.length);
    }, 1500);
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
      <section className="luxProdHero">
        <div className="luxHeroGrid">
          <div className="luxHeroCopy">
            <div className="luxHeroKicker">LUX TILES</div>
            <h1 className="luxHeroTitle">{PAGE_NAME}</h1>
            <p className="luxHeroDesc">
              حلول خارجية قوية تتحمل الشمس والمياه • مضاد للانزلاق • مناسب
              للممرات والساحات والحدائق والجراجات. ابعت المساحة/المقاسات على
              واتساب ونرشحلك الأفضل.
            </p>

            <div className="luxHeroStats">
              <div className="luxStat">
                <div className="luxStatNum">تحمل عالي</div>
                <div className="luxStatLabel">شمس/مياه</div>
              </div>
              <div className="luxStat">
                <div className="luxStatNum">خشن</div>
                <div className="luxStatLabel">مضاد انزلاق</div>
              </div>
              <div className="luxStat">
                <div className="luxStatNum">ألوان</div>
                <div className="luxStatLabel">ومتعدد الأشكال</div>
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
          <div className="luxHeroSlider" aria-label="Outdoor tiles hero slider">
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
                    * ملاحظة: للتركيب الخارجي محتاج تسوية وطبقة تأسيس — ابعت
                    المساحة عشان نحدد الكمية.
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
