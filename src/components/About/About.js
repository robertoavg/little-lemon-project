import chefs from "../../chefs.jpg";
import restaurant from "../../restaurant.jpg";
import "./About.css";

export default function About() {
  return (
    <section className="about" id="about">
      <div className="container about__inner">
        <div className="about__media" aria-hidden="true">
          <img
            className="about__img about__img--front"
            src={chefs}
            alt="Chefs preparing the meal"
          ></img>
        </div>
        <div>
          <h2>Little Lemon</h2>
          <p className="about__location">Chicago</p>
          <p>
            Little Lemon is a charming neighborhood bistro that serves simple
            food and classic cocktails in a lively but casual environment.
          </p>
          <p>
            The restaurant features a locally sourced menu with Mediterranean
            flavors.
          </p>
        </div>
        <div className="about__media" aria-hidden="true">
          <img
            className="about__img about__img--back"
            src={restaurant}
            alt="Restaurant terrace view"
          ></img>
        </div>
      </div>
    </section>
  );
}
