import React from "react";
import "./CoffeeDetailPage.css";

function CoffeeDetailPage() {
  return (
    <div className="coffee-detail-page">
      {/* Conteneur de l'image du café */}
      <div className="content-container">
        <div className="image-container">
          <img
            src="https://i.ibb.co/VmKTCwc/Vietnam-coffee-beans-VOA.jpg"
            alt="Café"
          />
        </div>
        <div className="text-container">
          <section>
            <h2>Café du Vietnam</h2>
            <p>Profil : Sucré</p>
            <br />
            <h3>Histoire</h3>
            <p>
              Un café corsé et sucré, avec des notes de chocolat noir et de lait
              concentré, ce qui le rend crémeux et agréable. Il est souvent
              préparé glacé avec du lait sucré, créant une boisson
              rafraîchissante qui se distingue par sa douceur. Ce café est très
              populaire au Vietnam, offrant une riche expérience de dégustation
              qui combine intensité et douceur pour une expérience unique.
            </p>
            <br />
            <h3>Conseil de préparation</h3>
            <p>
              Préparez ce café avec une méthode de filtrage vietnamienne
              traditionnelle, en versant lentement de l'eau chaude sur le café
              moulu dans un filtre métallique. Une fois l'infusion terminée,
              mélangez le café avec une généreuse portion de lait concentré
              sucré. Servez chaud ou glacé selon votre préférence.
            </p>
          </section>
          <section className="info-section">
            <div className="info-item">
              <span className="label">Continent:</span>
              <span className="value">Asie</span>
            </div>
            <div className="info-item">
              <span className="label">Pays:</span>
              <span className="value">Vietnam</span>
            </div>
            <div className="info-item">
              <span className="label">Profil:</span>
              <span className="value">Sucré</span>
            </div>
            <div className="info-item">
              <span className="label">Prix:</span>
              <span className="value">€22.50</span>
            </div>
          </section>
        </div>
      </div>

      {/* Section avec la carte du monde et les images */}
      <div className="section-with-map-and-info">
        <div className="map-container">
          <img
            src="https://i.ibb.co/dMfxKms/Vietnam-orthographic-projection-svg.png"
            alt="Carte du monde"
            className="world-map"
          />
        </div>
        <div className="extra-info">
          <div className="coffee-grain">
            <img
              src="https://i.ibb.co/kh05r9N/pngegg-2.png"
              alt="Grains de café"
            />
          </div>
          <div className="card-container">
            <div className="card">
              <a href="/coffees-vietnam" className="card-link">
                <h3>Lien vers tous les cafés de la même origine</h3>
              </a>
            </div>
          </div>
          <div className="coffee-leaves">
            <img
              src="https://i.ibb.co/Tw6jpvR/pngegg-2-2.png"
              alt="Feuilles de caféier"
            />
          </div>
        </div>
      </div>

      {/* Section des cartes avec des images de café des différentes régions (sous la carte du monde) */}
      <div className="cards-container">
        <div className="card-region">
          <img
            src="https://i.ibb.co/rcSPZH2/000406-2023-1kg-perou-grains.jpg"
            alt="Café de Colombie"
          />
          <h3>Café de Colombie</h3>
        </div>

        <div className="card-region">
          <img
            src="https://i.ibb.co/F8L7hHd/amerique-latine-fairtrade-bio.jpg"
            alt="Café du Brésil"
          />
          <h3>Café du Brésil</h3>
        </div>

        <div className="card-region">
          <img
            src="https://i.ibb.co/mGydgLc/Borbone-Espresso-Intenso.jpg"
            alt="Café d'Éthiopie"
          />
          <h3>Café d'Éthiopie</h3>
        </div>
        <div className="card-region">
          <img
            src="https://i.ibb.co/w4qktGd/Cafe-Sati-Pe-rou-bio-fairtrade-moulu-100-arabica.png"
            alt="Café du Costa Rica"
          />
          <h3>Café du Costa Rica</h3>
        </div>
      </div>
    </div>
  );
}

export default CoffeeDetailPage;
