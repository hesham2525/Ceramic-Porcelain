import React, { useEffect, useMemo, useRef, useState } from "react";

export default function NaturalMarble() {
  const WHATSAPP_NUMBER = "201069514877";

  const waLink = (text) =>
    `https://wa.me/${WHATSAPP_NUMBER}?text=${encodeURIComponent(text)}`;
  const heroSlides = useMemo(
    () => [
      { src: "/images/p1.jpg", alt: "رخام طبيعي - 1" },
      { src: "/images/p2.jpg", alt: "رخام طبيعي - 2" },
      { src: "/images/p3.jpg", alt: "رخام طبيعي - 3" },
      { src: "/images/p4.jpg", alt: "رخام طبيعي - 4" },
      { src: "/images/p5.jpg", alt: "رخام طبيعي - 5" },
    ],
    []
  );

  // ===== Products (داتا الرخام) =====
  const products = useMemo(
    () => [
      {
        id: "nm-001",
        title: "رخام أرضيات — كريم",
        badge: "أرضيات",
        price: "السعر عند الطلب",
        size: "ألواح/بلاطات",
        finish: "تلميع / مط",
        usage: "أرضيات",
        images: ["/images/p1.jpg", "/images/p2.jpg", "/images/p3.jpg"],
      },
      {
        id: "nm-002",
        title: "رخام سلالم — مضاد للانزلاق",
        badge: "سلالم",
        price: "السعر عند الطلب",
        size: "حسب المقاس",
        finish: "مضاد انزلاق",
        usage: "سلالم",
        images: ["/images/p4.jpg", "/images/p2.jpg", "/images/p5.jpg"],
      },
      {
        id: "nm-003",
        title: "رخام ديكوري — شرائح / ألواح",
        badge: "ديكوري",
        price: "السعر عند الطلب",
        size: "ألواح/شرائح",
        finish: "تلميع",
        usage: "ديكور",
        images: ["/images/p3.jpg", "/images/p1.jpg", "/images/p5.jpg"],
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
    }, 2800);
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
            <div className="luxHeroKicker">LUX STONE</div>
            <h1 className="luxHeroTitle">رخام طبيعي</h1>
            <p className="luxHeroDesc">
              خامات طبيعية • ألوان فخمة • تلميع احترافي. مناسب للأرضيات والسلالم
              والديكور — مع توريد وتركيب حسب المقاس والموقع.
            </p>

            <div className="luxHeroStats">
              <div className="luxStat">
                <div className="luxStatNum">+50</div>
                <div className="luxStatLabel">نوع/لون</div>
              </div>
              <div className="luxStat">
                <div className="luxStatNum">ألواح</div>
                <div className="luxStatLabel">ومقاسات مخصصة</div>
              </div>
              <div className="luxStat">
                <div className="luxStatNum">تلميع/مط</div>
                <div className="luxStatLabel">تشطيبات</div>
              </div>
            </div>

            <div className="luxHeroActions">
              <a
                className="luxCtaGold"
                href={waLink("انا مهتم بمنتج الرخام الطيبعي وعايز عرض السعر")}
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

            {/* ملاحظات (بدون ستايل جديد — نفس الثيم) */}
            <div
              style={{
                marginTop: 14,
                color: "rgba(255,255,255,.66)",
                fontSize: 12,
                lineHeight: 1.9,
              }}
            >
              <div>
                •{" "}
                <b style={{ color: "rgba(255,255,255,.9)" }}>
                  التوريد والتركيب:
                </b>{" "}
                حسب المقاس والموقع
              </div>
              <div>
                • <b style={{ color: "rgba(255,255,255,.9)" }}>العناية:</b> يفضل
                مواد تنظيف مخصصة للرخام
              </div>
            </div>
          </div>

          {/* Slider */}
          <div
            className="luxHeroSlider"
            aria-label="Natural marble hero slider"
          >
            <div className="luxSliderFrame">
              {heroSlides.map((s, i) => (
                <img
                  key={`${s.src}-${i}`}
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
          <div className="luxToolbarTitle">كتالوج الرخام الطبيعي</div>
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
            <div className="luxEmpty">لا توجد منتجات حالياً.</div>
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
                      key={`${src}-${i}`}
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
                        `انا مهتم بـ ${active.title} وعايز عرض السعر - صفحة: الرخام الطبيعي `
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
                        `عايز استفسار عن المنتج: ${active.title} - صفحة: الرخام الطبيعي `
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
