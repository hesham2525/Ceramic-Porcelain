import React from "react";
import { Link } from "react-router-dom";
import "./footer.css";

export default function Footer() {
  const year = new Date().getFullYear();

  return (
    <footer className="luxFooter">
      {/* Top glow */}
      <div className="luxFooter__glow" />

      <div className="luxFooter__container">
        {/* Brand */}
        <div className="luxFooter__brand">
          <div className="luxFooter__logo">
            <img className="luxFooter__logoMark" src="./images/logo.jpeg"/>
            <span className="luxFooter__logoText"> الاثاث الثابت المميز </span>
          </div>

          <p className="luxFooter__desc">
            نقدم أفضل أنواع السيراميك والبورسلين بجودة عالية وتصاميم راقية…
            لنمنح مشاريعك لمسة فخامة تعيش لسنوات.
          </p>

          <div className="luxFooter__chips">
            <span className="chip">بورسلين فاخر</span>
            <span className="chip">توريد للمشاريع</span>
            <span className="chip">استشارات اختيار</span>
          </div>
        </div>

        {/* Links */}
        <div className="luxFooter__col">
          <h4 className="luxFooter__title">روابط سريعة</h4>
          <ul className="luxFooter__links">
            <li><Link to="/" className="luxLink">الرئيسية</Link></li>
            <li><Link to="/about" className="luxLink">من نحن</Link></li>
            <li><Link to="/contact" className="luxLink">اتصل بنا</Link></li>
            {/* لو عندك صفحة منتجات */}
            {/* <li><Link to="/products" className="luxLink">المنتجات</Link></li> */}
          </ul>
        </div>

        {/* Contact */}
        <div className="luxFooter__col">
          <h4 className="luxFooter__title">تواصل معنا</h4>

          <div className="luxFooter__contact">
            <div className="contactRow">
              <span className="iconBubble">☎</span>
              <a className="luxLink" href="tel:0123456789">0123456789</a>
            </div>

            <div className="contactRow">
              <span className="iconBubble">✉</span>
              <a className="luxLink" href="mailto:info@company.com">info@company.com</a>
            </div>

            <div className="contactRow">
              <span className="iconBubble">⌁</span>
              <span className="contactText">123 شارع الملك، القاهرة</span>
            </div>
          </div>

          <div className="luxFooter__social">
            <a className="socialBtn" href="#" aria-label="Facebook">f</a>
            <a className="socialBtn" href="#" aria-label="Instagram">⌁</a>
            <a className="socialBtn" href="#" aria-label="WhatsApp">✆</a>
          </div>
        </div>

        {/* Newsletter */}
        <div className="luxFooter__col">
          <h4 className="luxFooter__title">اشترك في النشرة</h4>
          <p className="luxFooter__small">
            عروض حصرية وتشكيلات جديدة — تصلك أولًا بأول.
          </p>

          <form
            className="luxFooter__form"
            onSubmit={(e) => e.preventDefault()}
          >
            <input
              type="email"
              className="luxInput"
              placeholder="اكتب بريدك الإلكتروني"
              required
            />
            <button className="luxBtn" type="submit">
              اشتراك
            </button>
          </form>

          <div className="luxFooter__note">
            بالاشتراك أنت توافق على سياسة الخصوصية.
          </div>
        </div>
      </div>

      {/* Bottom */}
      <div className="luxFooter__bottom">
        <div className="luxFooter__bottomInner">
          <span>© {year} جميع الحقوق محفوظة | الاثاث الثابت المميز </span>

          <div className="luxFooter__legal">
            <a className="luxLink" href="#">سياسة الخصوصية</a>
            <span className="dot" />
            <a className="luxLink" href="#">الشروط والأحكام</a>
          </div>
        </div>
      </div>
    </footer>
  );
}
