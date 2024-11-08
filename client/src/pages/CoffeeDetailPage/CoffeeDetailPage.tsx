import "./CoffeeDetailPage.css";

function CoffeeDetailPage() {
  return (
    <div className="coffee-detail-page">
      {/* Conteneur de l'image et du texte */}
      <div className="content-container">
        {/* Image */}
        <div className="image-container">
          <img
            src="https://i.ibb.co/VmKTCwc/Vietnam-coffee-beans-VOA.jpg"
            alt="Café"
          />
        </div>

        {/* Section texte */}
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

          <br />
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
    </div>
  );
}

export default CoffeeDetailPage;
