import React from "react";
import "./about.css";
import CountUp from "./CountUp";
export default function About() {
  return (
    <main className="aboutPage">
      {/* HERO */}
      <section className="aboutHero">
        <div className="aboutHero__glow" />
        <div className="aboutHero__container">
          <div className="aboutHero__badge">من نحن</div>

          <h1 className="aboutHero__title">
            فخامة السيراميك والبورسلين… <span>بمقاييس استثنائية</span>
          </h1>

          <p className="aboutHero__subtitle">
            نحن لا نبيع منتجًا فقط — نحن نصنع تجربة. من اختيار الخامات حتى أدق
            التفاصيل في التشطيب، هدفنا أن يتحول كل مشروع إلى تحفة معمارية تستحق
            الإعجاب.
          </p>

          <div className="aboutHero__actions">
            <a className="btnPrimary" href="/contact">
              تواصل معنا
            </a>
            <a className="btnGhost" href="/#products">
              اكتشف المنتجات
            </a>
          </div>

          <div className="aboutHero__stats">
            <div className="statCard">
              <div className="statCard__num">
                <CountUp value="+12" duration={1200} />
              </div>
              <div className="statCard__label">سنة خبرة</div>
            </div>

            <div className="statCard">
              <div className="statCard__num">
                <CountUp value="+4,800" duration={1400} />
              </div>
              <div className="statCard__label">مشروع مُنجز</div>
            </div>

            <div className="statCard">
              <div className="statCard__num">
                <CountUp value="98%" duration={1200} />
              </div>
              <div className="statCard__label">رضا العملاء</div>
            </div>

            <div className="statCard">
              <div className="statCard__num">
                <CountUp value="24/7" />
              </div>
              <div className="statCard__label">دعم واستشارات</div>
            </div>
          </div>
        </div>
      </section>

      {/* STORY */}
      <section className="aboutSection">
        <div className="aboutSection__container grid2">
          <div>
            <h2 className="sectionTitle">قصتنا</h2>
            <p className="sectionText">
              بدأت رحلتنا برؤية بسيطة: تقديم خامات فاخرة تستحق أن تُعرض لا أن
              تُستخدم فقط. على مدار سنوات، بنينا شبكة موردين موثوقة، ومعايير
              اختيار صارمة، وفريقًا يفهم الذوق المصري الحديث ويترجمُه إلى حلول
              عملية ومبهرة.
            </p>
            <p className="sectionText">
              اليوم، نفخر بأننا شريك أساسي للمصممين والمقاولين وأصحاب الذوق
              الرفيع—لأننا نهتم بما يراه الناس… وبما لا يرونه أيضًا: الجودة التي
              تعيش لعُمر.
            </p>
          </div>

          <div className="formCard">
            <div className="luxCard__top">
              <div className="luxChip">ماذا يميزنا؟</div>
              <h3 className="luxCard__title">تفاصيل تُشبه الفن</h3>
              <p className="luxCard__text">
                كل قطعة نختارها تخضع لمعايير اللون، المتانة، مقاومة الخدش،
                وسهولة التنظيف… لأن الفخامة لا تكتمل بدون راحة.
              </p>
            </div>

            <div className="luxCard__list">
              <div className="luxItem">
                <span className="luxDot" />
                <div>
                  <div className="luxItem__title">خامات منتقاة</div>
                  <div className="luxItem__desc">
                    بورسلين وسيراميك بمواصفات عالية للمنزل والمشاريع.
                  </div>
                </div>
              </div>

              <div className="luxItem">
                <span className="luxDot" />
                <div>
                  <div className="luxItem__title">استشارة ذكية</div>
                  <div className="luxItem__desc">
                    نساعدك تختار الأنسب حسب المساحة والإضاءة والاستخدام.
                  </div>
                </div>
              </div>

              <div className="luxItem">
                <span className="luxDot" />
                <div>
                  <div className="luxItem__title">تسليم منظم</div>
                  <div className="luxItem__desc">
                    تجربة شراء سلسة، وتغليف آمن، ومتابعة حتى الاستلام.
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* VALUES */}
      <section className="aboutSection muted">
        <div className="aboutSection__container">
          <h2 className="sectionTitle center">قيمنا التي لا تتغير</h2>
          <p className="sectionHint center">
            معاييرنا هي وعدنا. وما وعدناه—نلتزم به.
          </p>

          <div className="cardsGrid">
            <div className="featureCard">
              <div className="featureIcon">✦</div>
              <h3 className="featureTitle">الجودة أولًا</h3>
              <p className="featureText">
                نفحص ونختار بعناية حتى تصل إليك خامات تستحق الثقة.
              </p>
            </div>

            <div className="featureCard">
              <div className="featureIcon">⟡</div>
              <h3 className="featureTitle">الشفافية</h3>
              <p className="featureText">
                تفاصيل واضحة، أسعار عادلة، ومعلومات دقيقة بلا مبالغة.
              </p>
            </div>

            <div className="featureCard">
              <div className="featureIcon">⌁</div>
              <h3 className="featureTitle">ذوق راقٍ</h3>
              <p className="featureText">
                تشكيلة تناسب الكلاسيك والمودرن… مع لمسة فخامة ثابتة.
              </p>
            </div>

            <div className="featureCard">
              <div className="featureIcon">☉</div>
              <h3 className="featureTitle">التزام بالمواعيد</h3>
              <p className="featureText">
                لأن الوقت جزء من جودة المشروع—نحترمه بدقة.
              </p>
            </div>
          </div>
        </div>
      </section>

      {/* TIMELINE */}
      <section className="aboutSection">
        <div className="aboutSection__container">
          <h2 className="sectionTitle">رحلتنا باختصار</h2>
          <div className="timeline">
            <div className="timelineItem">
              <div className="timelineYear">2013</div>
              <div className="timelineBody">
                <div className="timelineTitle">البداية</div>
                <div className="timelineText">
                  انطلقنا بمنتجات مختارة بعناية وخدمة قريبة من العميل.
                </div>
              </div>
            </div>

            <div className="timelineItem">
              <div className="timelineYear">2017</div>
              <div className="timelineBody">
                <div className="timelineTitle">توسّع التشكيلة</div>
                <div className="timelineText">
                  ضفنا خطوط بورسلين فاخرة تناسب المشاريع السكنية والتجارية.
                </div>
              </div>
            </div>

            <div className="timelineItem">
              <div className="timelineYear">2021</div>
              <div className="timelineBody">
                <div className="timelineTitle">خدمة تصميم ومطابقة</div>
                <div className="timelineText">
                  صرنا نساعد في اختيار الألوان والملمس والمقاسات حسب الإضاءة
                  والمساحة.
                </div>
              </div>
            </div>

            <div className="timelineItem">
              <div className="timelineYear">اليوم</div>
              <div className="timelineBody">
                <div className="timelineTitle">شريك للفخامة</div>
                <div className="timelineText">
                  نواصل التطوير لنكون الوجهة الأولى لكل من يبحث عن الجودة
                  والهيبة.
                </div>
              </div>
            </div>
          </div>
        </div>
      </section>

      {/* CTA */}
      <section className="aboutCTA">
        <div className="aboutCTA__container">
          <h2 className="aboutCTA__title">جاهز لمشروع يليق بذوقك؟</h2>
          <p className="aboutCTA__text">
            تواصل معنا الآن، وخلي فريقنا يقترح لك حلولاً فاخرة تناسب احتياجك
            وميزانيتك.
          </p>

          <div className="aboutCTA__actions">
            <a className="btnPrimary" href="/contact">
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
