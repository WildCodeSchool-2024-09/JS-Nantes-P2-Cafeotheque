import { Link } from "react-router-dom";
import "../pages/HomePage/HomeCards.css";

function HomeCards() {
  return (
    <>
      <section className="container-home-cards">
        <Link to="/coffees">
          <figure>
            <img src="../public/images/Café-cards.jpg" alt="" />
            <figcaption id="second-card">Café</figcaption>
          </figure>
        </Link>
        <Link to="/recipes">
          <figure>
            <img src="/images/coffee-recipe-card.jpg" alt="" />
            <figcaption id="third-card">Recette</figcaption>
          </figure>
        </Link>
      </section>
    </>
  );
}

export default HomeCards;
