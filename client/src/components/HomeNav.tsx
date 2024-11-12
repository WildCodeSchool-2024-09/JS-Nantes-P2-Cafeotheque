import { Link } from "react-router-dom";
import "../pages/HomePage/homeNav.css";

function HomeNav() {
  return (
    <>
      <nav className="navigation-home-page">
        <Link to="/coffees">
          <figure className="banniere-home">
            <h2>Découvre les cafés</h2>
            <img
              src="/images/Grain-de-café.jpg"
              alt="bannière de grain de café"
            />
          </figure>
        </Link>
        <section className="container-banniere">
          <Link to="/the-history-of-coffee">
            <figure>
              <h2>L'histoire du café</h2>
              <img
                className="first"
                src="images/livre-img.jpg"
                alt="un café à côté d'un livre"
              />
            </figure>
          </Link>
          <Link to="/world-coffees">
            <figure>
              <h2>Le monde du café</h2>
              <img
                className="second"
                src="/images/Café-world.jpg"
                alt="un plateau avec la carte du monde et un café à côté"
              />
            </figure>
          </Link>
        </section>
      </nav>
    </>
  );
}

export default HomeNav;
