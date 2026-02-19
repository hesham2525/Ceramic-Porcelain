import React, { useMemo, useState } from "react";
import data from "./projects.json";
import "./Projects.css";

const FILTERS = ["الكل", "سكني", "تجاري", "فندقي"];

export default function Projects() {
  const [filter, setFilter] = useState("الكل");

  const items = useMemo(() => {
    if (filter === "الكل") return data;
    return data.filter((p) => p.type === filter);
  }, [filter]);

  return (
    <section className="luxProjects2" id="projects" aria-label="Projects">
      <div className="luxProjects2__wrap">
        <div className="luxProjects2__head">
          <div className="luxProjects2__badge">✦ بورتفوليو</div>
          <h2 className="luxProjects2__title">
            بعض <span>أعمالنا</span>
          </h2>
          <p className="luxProjects2__subtitle">
            لمسات فخامة على أرض الواقع — تنفيذ دقيق وتشطيبات تليق بالمكان.
          </p>

          <div className="luxProjects2__filters" role="tablist" aria-label="Project filters">
            {FILTERS.map((f) => (
              <button
                key={f}
                type="button"
                className={`pFilter ${filter === f ? "active" : ""}`}
                onClick={() => setFilter(f)}
                role="tab"
                aria-selected={filter === f}
              >
                {f}
              </button>
            ))}
          </div>
        </div>

        <div className="luxProjects2__grid">
          {items.map((p, idx) => (
            <article key={p.id} className={`pTile ${idx % 5 === 0 ? "tall" : ""}`}>
              <img src={p.image} alt={p.title} loading="lazy" />
              <div className="pTile__overlay" />

              <div className="pTile__top">
                <span className="pType">{p.type}</span>
                <span className="pYear">{p.year}</span>
              </div>

              <div className="pTile__info">
                <h3 className="pTitle">{p.title}</h3>
                <div className="pMeta">
                  <span>📍 {p.location}</span>
                  <span className="pDot" />
                  <span>تشطيب فاخر</span>
                </div>

                <button className="pBtn" type="button">
                  عرض المشروع
                  <span className="pBtnGlow" aria-hidden="true" />
                </button>
              </div>

              <span className="pSheen" aria-hidden="true" />
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
