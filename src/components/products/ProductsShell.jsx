import React from "react";
import { NavLink } from "react-router-dom";

export default function ProductsShell() {
  const tabs = [
    { label: "سيراميك وبورسلين", to: "/products/ceramic-porcelain" },
    { label: "رخام طبيعي", to: "/products/natural-marble" },
    { label: "رخام صناعي ومغاسل", to: "/products/artificial-marble-sinks" },
    { label: "احجار وجهات", to: "/products/facade-stones" },
    { label: "بلاط احواش", to: "/products/outdoor-tiles" },
  ];

  return (
    <section className="prodHero">
      <div className="prodHeroInner">
        <div className="prodTitle">المنتجات</div>
        <div className="prodSub">
          اختار القسم المناسب وشوف الأنواع والمقاسات والتشطيبات المتاحة.
        </div>

        <div
          className="prodTabs"
          role="tablist"
          aria-label="Product categories"
        >
          {tabs.map((t) => (
            <NavLink
              key={t.to}
              to={t.to}
              className={({ isActive }) =>
                `prodTab ${isActive ? "active" : ""}`
              }
            >
              {t.label}
            </NavLink>
          ))}
        </div>
      </div>
    </section>
  );
}
