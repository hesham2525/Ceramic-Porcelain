import productsData from "./products.json";
import "./Products.css";

export default function Products() {
  return (
    <section className="luxProducts" id="products">
      {/* Header */}
      <div className="luxProducts__head">
        <span className="luxProducts__badge">✦ منتجاتنا</span>
        <h2 className="luxProducts__title">
          أحدث <span>المنتجات</span>
        </h2>
        <p className="luxProducts__subtitle">
          تشكيلة مختارة بعناية تجمع بين الجودة، المتانة، والفخامة.
        </p>
      </div>

      {/* Grid */}
      <div className="luxProducts__grid">
        {productsData.map((item) => (
          <article key={item.id} className="luxProductCard">
            <div className="luxProductCard__media">
              <img src={item.image} alt={item.name} loading="lazy" />
              <div className="luxProductCard__overlay" />

              <span className="luxProductCard__tag">
                <span className="tagDot" />
                {item.tag}
              </span>
            </div>

            <div className="luxProductCard__body">
              <h3 className="luxProductCard__name">{item.name}</h3>
              <p className="luxProductCard__desc">{item.description}</p>

              <div className="luxProductCard__actions">
                <button className="luxBtnGhost">التفاصيل</button>

                <button className="luxBtnGold">
                  اطلب الآن
                  <span className="luxBtnGlow" />
                </button>
              </div>
            </div>

            <div className="luxProductCard__shine" />
          </article>
        ))}
      </div>
    </section>
  );
}
