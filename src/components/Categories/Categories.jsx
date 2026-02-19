import React from "react";
import categoriesData from "./categories.json";
import "./categories.css";

export default function Categories() {
  return (
    <section className="luxCats" aria-label="Categories">
      <div className="luxCats__head">
        <div className="luxCats__badge">✦ تصنيفات مختارة</div>
        <h2 className="luxCats__title">
          اكتشف <span>المجموعات</span> الأكثر فخامة
        </h2>
        <p className="luxCats__subtitle">
          تشكيلة متنوعة تناسب كل ذوق — مع خامات أصلية وتشطيبات راقية.
        </p>
      </div>

      <div className="luxCats__grid">
        {categoriesData.map((item, i) => (
          <article key={i} className="luxCatCard">
            <div className="luxCatCard__media">
              <img src={item.image} alt={item.name} loading="lazy" />
              <div className="luxCatCard__overlay" />

              <div className="luxCatCard__chip">
                <span className="chipDot" />
                Premium
              </div>

              <div className="luxCatCard__index">
                {String(i + 1).padStart(2, "0")}
              </div>
            </div>

            <div className="luxCatCard__body">
              <h3 className="luxCatCard__name">{item.name}</h3>
              <p className="luxCatCard__desc">{item.description}</p>

              <div className="luxCatCard__actions">
                <button className="luxBtnGhost" type="button">
                  تفاصيل
                </button>

                <button className="luxBtnGold" type="button">
                  اطلب عرض
                  <span className="luxBtnGlow" aria-hidden="true" />
                </button>
              </div>
            </div>

            <div className="luxCatCard__shine" aria-hidden="true" />
          </article>
        ))}
      </div>
    </section>
  );
}
