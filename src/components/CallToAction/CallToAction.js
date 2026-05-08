import { Link } from "react-router-dom";
import food from "../../food.jpg"
import lemon from "../../lemon.png"
import "./CallToAction.css";

export default function CallToAction() {
  return (
    <section className="hero">
      <div className="container hero__inner">
        <div className="hero__text">
          <h1 className="hero__title">Little Lemon</h1>
          <p className="hero__subtitle">Chicago</p>
          <p className="hero__desc">
            We are a family-owned Mediterranean restaurant, focused on
            traditional recipes served with a modern twist.
          </p>

          <Link to="/booking" className="btn">
            Reserve a table
          </Link>
        </div>

        <div className="hero__media" aria-hidden="true">
          <img className="hero__image" src={food} alt="Chef salting fries" loading="eager"></img>
          <img className="hero__lemon" src={lemon} alt="Little Lemon logo"></img>
        </div>
      </div>
    </section>
  );
}
