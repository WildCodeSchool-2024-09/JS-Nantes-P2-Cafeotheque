import { useState } from "react";
import "./wolrdcoffee.css";

function WorldCoffeePage() {
  const [visible, setVisible] = useState<string | null>(null);
  const handleClick = (location: string | null) => {
    setVisible(location);
  };

  return (
    <>
      <section className="container-world-coffee">
        <section>
          <input type="text" placeholder="Trouve ton café dans le monde..." />
        </section>
        <figure className="container-world-image">
          <button
            onClick={() => handleClick("colombie")}
            className="colombie-button"
            type="button"
          >
            <p>Colombie</p>
            <img
              src="https://historias.starbucks.com/_next/image/?url=https%3A%2F%2Fstories.starbucks.com%2Fuploads%2Fsites%2F34%2F2024%2F01%2FColombia_narino_10_2.jpg&w=1920&q=75"
              alt=""
            />
          </button>
          {visible === "colombie" ? (
            <button
              onClick={() => handleClick(null)}
              className="colombie-button-click"
              type="button"
            >
              <p>Colombie</p>
              <img
                src="https://historias.starbucks.com/_next/image/?url=https%3A%2F%2Fstories.starbucks.com%2Fuploads%2Fsites%2F34%2F2024%2F01%2FColombia_narino_10_2.jpg&w=1920&q=75"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate, enim facere animi pariatur explicabo, corrupti
                dolores laboriosam libero aliquam, id placeat voluptate! Facilis
                minus atque veniam, ducimus dolores doloribus libero.
              </p>
            </button>
          ) : null}
          <button
            onClick={() => handleClick("grece")}
            className="grece-button"
            type="button"
          >
            <p>Grèce</p>
            <img
              src="https://i.etsystatic.com/48753366/r/il/b31283/5747435506/il_794xN.5747435506_r3m1.jpg"
              alt=""
            />
          </button>
          {visible === "grece" ? (
            <button
              onClick={() => handleClick(null)}
              className="grece-button-click"
              type="button"
            >
              <p>Grèce</p>
              <img
                src="https://i.etsystatic.com/48753366/r/il/b31283/5747435506/il_794xN.5747435506_r3m1.jpg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate, enim facere animi pariatur explicabo, corrupti
                dolores laboriosam libero aliquam, id placeat voluptate! Facilis
                minus atque veniam, ducimus dolores doloribus libero.
              </p>
            </button>
          ) : null}
          <button
            onClick={() => handleClick("vietnam")}
            className="vietnam-button"
            type="button"
          >
            <p>Vietnam</p>
            <img
              src="https://www.asiamarche.fr/cdn/shop/files/3132.jpg?v=1696256182"
              alt=""
            />
          </button>
          {visible === "vietnam" ? (
            <button
              onClick={() => handleClick(null)}
              className="vietnam-button-click"
              type="button"
            >
              <p>Vietnam</p>
              <img
                src="https://www.asiamarche.fr/cdn/shop/files/3132.jpg?v=1696256182"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate, enim facere animi pariatur explicabo, corrupti
                dolores laboriosam libero aliquam, id placeat voluptate! Facilis
                minus atque veniam, ducimus dolores doloribus libero.
              </p>
            </button>
          ) : null}
          <button
            onClick={() => handleClick("indonesie")}
            className="indonesie-button"
            type="button"
          >
            <p>Indonesie</p>
            <img
              src="https://produits.bienmanger.com/46313-0w0h0_Cafe_Grains_Bio_Indonesie_Sumatra_Arabica.jpg"
              alt=""
            />
          </button>
          {visible === "indonesie" ? (
            <button
              onClick={() => handleClick(null)}
              className="indonesie-button-click"
              type="button"
            >
              <p>Indonesie</p>
              <img
                src="https://produits.bienmanger.com/46313-0w0h0_Cafe_Grains_Bio_Indonesie_Sumatra_Arabica.jpg"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate, enim facere animi pariatur explicabo, corrupti
                dolores laboriosam libero aliquam, id placeat voluptate! Facilis
                minus atque veniam, ducimus dolores doloribus libero.
              </p>
            </button>
          ) : null}
          <button
            onClick={() => handleClick("kenya")}
            className="kenya-button"
            type="button"
          >
            <p>Kenya</p>
            <img
              src="https://labruleriedurendezvous.com/wp-content/uploads/2022/09/cafe-moulu-250-gr-fin-Kenya.webp"
              alt=""
            />
          </button>
          {visible === "kenya" ? (
            <button
              onClick={() => handleClick(null)}
              className="kenya-button-click"
              type="button"
            >
              <p>Kenya</p>
              <img
                src="https://labruleriedurendezvous.com/wp-content/uploads/2022/09/cafe-moulu-250-gr-fin-Kenya.webp"
                alt=""
              />
              <p>
                Lorem ipsum dolor sit, amet consectetur adipisicing elit.
                Cupiditate, enim facere animi pariatur explicabo, corrupti
                dolores laboriosam libero aliquam, id placeat voluptate! Facilis
                minus atque veniam, ducimus dolores doloribus libero.
              </p>
            </button>
          ) : null}
          <img
            src="images/world-coffee.jpg"
            alt="La carte du monde pour trouver sont café"
          />
        </figure>
      </section>
    </>
  );
}

export default WorldCoffeePage;
