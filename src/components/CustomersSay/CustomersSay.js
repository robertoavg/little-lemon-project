import "./CustomersSay.css";

const testimonials = [
  {
    id: 1,
    name: "Alex",
    rating: 5,
    quote: "Amazing food and quick service!",
    role: "Local Guide",
  },
  {
    id: 2,
    name: "Maria",
    rating: 4,
    quote: "Great vibe and friendly staff.",
    role: "Food Lover",
  },
  {
    id: 3,
    name: "Jordan",
    rating: 5,
    quote: "The lemon dessert is a must.",
    role: "Regular",
  },
  {
    id: 4,
    name: "Sam",
    rating: 4,
    quote: "Best Mediterranean in Chicago.",
    role: "Visitor",
  },
];

function Stars({ value }) {
  const stars = Array.from({ length: 5 }, (_, i) =>
    i < value ? "★" : "☆"
  ).join("");
  return (
    <div className="stars" aria-label={`${value} out of 5 stars`}>
      {stars}
    </div>
  );
}

export default function CustomersSay() {
  return (
    <section className="testimonials">
      <div className="container">
        <h2 className="testimonials__title">What our customers say</h2>

        <div className="testimonials__grid">
          {testimonials.map((t) => (
            <article key={t.id} className="tcard">
              <Stars value={t.rating} />
              <div className="tcard__user">
                <div className="tcard__avatar" aria-hidden="true">
                  {t.name[0]}
                </div>
                <div>
                  <p className="tcard__name">{t.name}</p>
                  <p className="tcard__role">{t.role}</p>
                </div>
              </div>
              <p className="tcard__quote">“{t.quote}”</p>
            </article>
          ))}
        </div>
      </div>
    </section>
  );
}
