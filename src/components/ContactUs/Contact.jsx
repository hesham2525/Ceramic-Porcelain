import React from "react";
import "./contact.css";

export default function Contact() {
  const handleSubmit = (e) => {
    e.preventDefault();

    const form = e.target;

    const name = form.name.value;
    const phone = form.phone.value;
    const projectType = form.projectType.value;
    const message = form.message.value;

    const whatsappMessage = `
  مرحبا، لدي استفسار جديد:
  
  👤 الاسم: ${name}
  📞 الهاتف: ${phone}
  🏗️ نوع المشروع: ${projectType}
  
  📝 التفاصيل:
  ${message}
    `;

    const whatsappURL = `https://wa.me/201069514877?text=${encodeURIComponent(
      whatsappMessage
    )}`;

    window.open(whatsappURL, "_blank");
  };
  return (
    <main className="contactPage">
      {/* HERO */}
      <section className="contactHero">
        <div className="contactHero__glow" />
        <div className="contactHero__container">
          <div className="contactHero__badge">اتصل بنا</div>

          <h1 className="contactHero__title">
            تواصل معنا… <span>ودعنا نحوّل ذوقك إلى واقع</span>
          </h1>

          <p className="contactHero__subtitle">
            فريقنا جاهز للرد على استفساراتك، ومساعدتك في اختيار الأنسب لمساحتك
            من السيراميك والبورسلين — بخطوات بسيطة وتجربة راقية.
          </p>

          <div className="contactHero__actions">
            <a className="btnPrimary" href="#contact-form">
              ارسل رسالة
            </a>
            <a className="btnGhost" href="#contact-info">
              بيانات التواصل
            </a>
          </div>

          <div className="contactHero__stats">
            <div className="statCard">
              <div className="statCard__num">15 دقيقة</div>
              <div className="statCard__label">متوسط وقت الرد</div>
            </div>
            <div className="statCard">
              <div className="statCard__num">24/7</div>
              <div className="statCard__label">استشارات</div>
            </div>
            <div className="statCard">
              <div className="statCard__num">+4,800</div>
              <div className="statCard__label">عميل سعيد</div>
            </div>
            <div className="statCard">
              <div className="statCard__num">98%</div>
              <div className="statCard__label">رضا العملاء</div>
            </div>
          </div>
        </div>
      </section>

      {/* CONTENT */}
      <section className="contactSection" id="contact-info">
        <div className="contactSection__container grid2">
          {/* INFO CARD */}
          <div className="formCard">
            <div className="luxCard__top">
              <div className="luxChip">بيانات التواصل</div>
              <h2 className="sectionTitle">نحن قريبون منك</h2>
              <p className="sectionText">
                تواصل بالطريقة اللي تناسبك. ولو حابب، ابعت تفاصيل مشروعك ونقترح
                عليك خيارات فخمة تناسب الإضاءة والمساحة والاستخدام.
              </p>
            </div>

            <div className="infoList">
              <div className="infoRow">
                <span className="infoIcon">☎</span>
                <div>
                  <div className="infoTitle">الهاتف</div>
                  <div className="infoDesc">+20 000 000 0000</div>
                </div>
              </div>

              <div className="infoRow">
                <span className="infoIcon">✉</span>
                <div>
                  <div className="infoTitle">البريد</div>
                  <div className="infoDesc">info@yourbrand.com</div>
                </div>
              </div>

              <div className="infoRow">
                <span className="infoIcon">⌁</span>
                <div>
                  <div className="infoTitle">العنوان</div>
                  <div className="infoDesc">القاهرة — (أضف العنوان هنا)</div>
                </div>
              </div>

              <div className="infoRow">
                <span className="infoIcon">⟡</span>
                <div>
                  <div className="infoTitle">ساعات العمل</div>
                  <div className="infoDesc">يوميًا من 10 ص إلى 10 م</div>
                </div>
              </div>
            </div>

            <div className="miniCTA">
              <a
                className="btnGhost onDark"
                href="https://wa.me/200000000000"
                target="_blank"
                rel="noreferrer"
              >
                واتساب مباشر
              </a>
              <a className="btnPrimary" href="/#products">
                استعرض المنتجات
              </a>
            </div>
          </div>

          {/* FORM */}
          <div className="formCard" id="contact-form">
            <div className="formHead">
              <div className="luxChip">أرسل رسالة</div>
              <h3 className="formTitle">احجز استشارة سريعة</h3>
              <p className="formHint">
                اكتب بياناتك واحتياجك، وسنرجع لك بأفضل اقتراحات تناسب ذوقك.
              </p>
            </div>

            <form className="contactForm" onSubmit={handleSubmit}>
              <div className="formGrid">
                <label className="field">
                  <span className="label">الاسم</span>
                  <input
                    className="input"
                    type="text"
                    name="name"
                    placeholder="اكتب اسمك"
                    required
                  />
                </label>

                <label className="field">
                  <span className="label">رقم الهاتف</span>
                  <input
                    className="input"
                    type="tel"
                    name="phone"
                    placeholder="مثال: 01xxxxxxxxx"
                    required
                  />
                </label>

                <label className="field">
                  <span className="label">نوع المشروع</span>
                  <select className="input" name="projectType" required>
                    <option value="سكني">سكني</option>
                    <option value="تجاري">تجاري</option>
                    <option value="تشطيبات / تجديد">تشطيبات / تجديد</option>
                    <option value="أخرى">أخرى</option>
                  </select>
                </label>

                <label className="field fieldFull">
                  <span className="label">الرسالة</span>
                  <textarea
                    className="input textarea"
                    name="message"
                    placeholder="اكتب تفاصيل المساحة، الإضاءة، الاستخدام، والميزانية إن أمكن…"
                    required
                  />
                </label>
              </div>
              <div className="formActions">
                <button className="btnPrimary" type="submit">
                  ارسال الآن
                </button>
              </div>
              <div className="formNote">
                بالضغط على “ارسال الآن” أنت توافق على التواصل معك بخصوص طلبك.
              </div>
            </form>
          </div>
        </div>
      </section>

      {/* MAP / PLACEHOLDER */}
      <section className="contactSection muted">
        <div className="contactSection__container">
          <h2 className="sectionTitle center">موقعنا على الخريطة</h2>
          <p className="sectionHint center">
            ضع هنا خريطة Google أو صورة للمعرض — بنفس ستايل الفخامة.
          </p>

          <div className="mapCard">
            <div className="mapCard__shine" />
            <div className="mapCard__text">
              <div className="mapTitle">خريطة / صورة المعرض</div>
              <div className="mapHint">
                استبدل هذا البلوك بـ iframe Google Maps أو صورة بانوراما للمعرض.
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="contactCTA">
        <div className="contactCTA__container">
          <h2 className="contactCTA__title">جاهز تختار خامة تليق بالمكان؟</h2>
          <p className="contactCTA__text">
            ابعتلنا تفاصيل مشروعك، وخلي فريقنا يقترح لك تشكيلة فاخرة تناسب ذوقك
            وميزانيتك.
          </p>

          <div className="contactCTA__actions">
            <a className="btnPrimary" href="#contact-form">
              احجز استشارة
            </a>
            <a className="btnGhost onDark" href="/#projects">
              شاهد مشاريعنا
            </a>
          </div>
        </div>
      </section>
    </main>
  );
}
