import bruschetta from "../../bruschetta.jpg";
import greekSalad from "../../greek_salad.jpg";
import lemonDessert from "../../lemon_dessert.jpg";

import "./Specials.css";

const specials = [
  {
    id: 1,
    title: "Greek Salad",
    price: "$12.99",
    desc: "Crisp lettuce, peppers, olives and our Chicago-style feta.",
    image: greekSalad,
  },
  {
    id: 2,
    title: "Bruschetta",
    price: "$5.99",
    desc: "Grilled bread with garlic and seasoned tomatoes.",
    image: bruschetta,
  },
  {
    id: 3,
    title: "Lemon Dessert",
    price: "$5.00",
    desc: "A sweet finish with our signature lemon flavor.",
    image: lemonDessert,
  },
];

export default function Specials() {
  return (
    <section className="specials" id="specials">
      <div className="container">
        <div className="specials__header">
          <h2>This week’s specials!</h2>
          <button className="btn" type="button">
            Online Menu
          </button>
        </div>

        <div className="specials__grid">
          {specials.map((item) => (
            <article key={item.id} className="card">
              <img className="card__img" src={item.image} alt="Varied food option"></img>
              <div className="card__body">
                <div className="card__top">
                  <h3 className="card__title">{item.title}</h3>
                  <span className="card__price">{item.price}</span>
                </div>
                <p className="card__desc">{item.desc}</p>
                <button className="card__cta" type="button">
                  Order a delivery
                </button>
              </div>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
