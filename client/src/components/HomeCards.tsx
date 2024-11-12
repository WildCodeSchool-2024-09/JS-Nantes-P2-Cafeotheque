import { Link } from "react-router-dom";
import "../pages/HomePage/HomeCards.css";

function HomeCards() {
  return (
    <>
      <section className="container-home-cards">
        <Link to="/coffees">
          <figure>
            <img src="../public/images/Cafetière.jpg" alt="" />
            <figcaption id="first-card">Cafetière</figcaption>
          </figure>
        </Link>
        <Link to="/coffees">
          <figure>
            <img src="/images/Café-cards.jpg" alt="" />
            <figcaption id="second-card">Café</figcaption>
          </figure>
        </Link>
        <Link to="/recipes">
          <figure>
            <img src="/images/livre-coffee.jpg" alt="" />
          </figure>
        </Link>
      </section>
    </>
  );
}

export default HomeCards;
