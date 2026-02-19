import React, { useEffect, useRef, useState } from "react";
import { NavLink, useLocation } from "react-router-dom";
import "./navbar.css";

export default function Navbar() {
  const [open, setOpen] = useState(false);

  // NEW: products dropdown/accordion
  const [prodOpen, setProdOpen] = useState(false);
  const prodRef = useRef(null);

  const location = useLocation();

  useEffect(() => {
    setOpen(false);
    setProdOpen(false); // close products on route change
  }, [location.pathname]);

  useEffect(() => {
    document.body.style.overflow = open ? "hidden" : "";
    return () => (document.body.style.overflow = "");
  }, [open]);

  // NEW: close dropdown on outside click / ESC
  useEffect(() => {
    const onDown = (e) => {
      if (!prodRef.current) return;
      if (!prodRef.current.contains(e.target)) setProdOpen(false);
    };
    const onKey = (e) => {
      if (e.key === "Escape") setProdOpen(false);
    };

    document.addEventListener("mousedown", onDown);
    document.addEventListener("keydown", onKey);
    return () => {
      document.removeEventListener("mousedown", onDown);
      document.removeEventListener("keydown", onKey);
    };
  }, []);

  const products = [
    { label: "سيراميك وبورسلين", to: "/products/ceramic-porcelain" },
    { label: "رخام طبيعي", to: "/products/natural-marble" },
    { label: "رخام صناعي ومغاسل", to: "/products/artificial-marble-sinks" },
    { label: "احجار وجهات", to: "/products/facade-stones" },
    { label: "بلاط احواش", to: "/products/outdoor-tiles" },
  ];

  return (
    <>
      <header className="luxNavWrap">
        <nav className="luxNav" aria-label="Main Navigation">
          {/* Brand */}
          <div className="luxBrand">
            <div className="luxMark" aria-hidden="true">
              ✦
            </div>
            <div className="luxBrandText">
              <div className="luxBrandName">اسم الشركة</div>
              <div className="luxBrandTag">سيراميك • بورسلين • فخامة</div>
            </div>
          </div>

          {/* Desktop Links */}
          <div className="luxLinks">
            <NavItem to="/" end label="الرئيسية" />

            {/* NEW: Products Dropdown (Desktop) */}
            <div className="luxDrop" ref={prodRef}>
              <button
                type="button"
                className={`luxLink luxDropBtn ${prodOpen ? "active" : ""}`}
                aria-haspopup="menu"
                aria-expanded={prodOpen}
                onClick={() => setProdOpen((v) => !v)}
              >
                <span className="luxLinkText">المنتجات</span>
                <span className="luxCaret" aria-hidden="true">▾</span>
                <span className="luxUnderline" aria-hidden="true" />
              </button>

              <div className={`luxMenu ${prodOpen ? "show" : ""}`} role="menu">
                {products.map((p) => (
                  <NavLink
                    key={p.to}
                    to={p.to}
                    role="menuitem"
                    className={({ isActive }) =>
                      `luxMenuItem ${isActive ? "active" : ""}`
                    }
                    onClick={() => setProdOpen(false)}
                  >
                    {p.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavItem to="/about" label="من نحن" />
            <NavItem to="/contact" label="اتصل بنا" />
          </div>

          {/* Actions */}
          <div className="luxActions">
         
            <button className="luxBtnGold" type="button">
              اطلب عرض سعر
              <span className="luxBtnGlow" aria-hidden="true" />
            </button>

            {/* Mobile Toggle */}
            <button
              className={`luxBurger ${open ? "isOpen" : ""}`}
              type="button"
              aria-label="Toggle menu"
              aria-expanded={open}
              onClick={() => setOpen((v) => !v)}
            >
              <span />
              <span />
              <span />
            </button>
          </div>
        </nav>
      </header>

      {/* Mobile Drawer */}
      <div className={`luxDrawer ${open ? "show" : ""}`} role="dialog" aria-modal="true">
        <div className="luxDrawerBackdrop" onClick={() => setOpen(false)} />
        <div className="luxDrawerPanel">
          <div className="luxDrawerTop">
            <div className="luxDrawerBrand">
              <span className="luxMark">✦</span>
              <span className="luxDrawerTitle">اسم الشركة</span>
            </div>
            <button className="luxClose" onClick={() => setOpen(false)} aria-label="Close">
              ✕
            </button>
          </div>

          <div className="luxDrawerLinks">
            <NavItem to="/" end label="الرئيسية" mobile />

            {/* NEW: Products Accordion (Mobile) */}
            <div className="luxAcc">
              <button
                type="button"
                className={`luxDrawerLink luxAccBtn ${prodOpen ? "active" : ""}`}
                aria-expanded={prodOpen}
                onClick={() => setProdOpen((v) => !v)}
              >
                <span>المنتجات</span>
                <span className={`luxAccCaret ${prodOpen ? "rot" : ""}`} aria-hidden="true">
                  ▾
                </span>
              </button>

              <div className={`luxAccPanel ${prodOpen ? "show" : ""}`}>
                {products.map((p) => (
                  <NavLink
                    key={p.to}
                    to={p.to}
                    className="luxAccItem"
                    onClick={() => setProdOpen(false)}
                  >
                    {p.label}
                  </NavLink>
                ))}
              </div>
            </div>

            <NavItem to="/about" label="من نحن" mobile />
            <NavItem to="/contact" label="اتصل بنا" mobile />
          </div>

          <div className="luxDrawerActions">
            <button className="luxBtnOutline full" type="button">
              كتالوج
            </button>
            <button className="luxBtnGold full" type="button">
              اطلب عرض سعر
              <span className="luxBtnGlow" aria-hidden="true" />
            </button>
          </div>

          <div className="luxDrawerFoot">
            <div className="luxMiniInfo">📞 0123456789</div>
            <div className="luxMiniInfo">✉ info@company.com</div>
          </div>
        </div>
      </div>
    </>
  );
}

function NavItem({ to, label, end, mobile }) {
  return (
    <NavLink
      to={to}
      end={end}
      className={({ isActive }) =>
        mobile
          ? `luxDrawerLink ${isActive ? "active" : ""}`
          : `luxLink ${isActive ? "active" : ""}`
      }
    >
      <span className="luxLinkText">{label}</span>
      {!mobile && <span className="luxUnderline" aria-hidden="true" />}
    </NavLink>
  );
}
