import "../../pages/HistoryPage/HistoryCard.css";
import cards from "../../mocks/apiCardsHistory.json";

function HistoryCard() {
  return (
    <section id="history-top" className="container-central-history">
      <img
        src="https://i.ibb.co/MkYhTj1/pngegg-4.png"
        alt="Plein de grain de café"
      />
      <div className="first-button">
        <a href="#history-bottom">⬇</a>
      </div>
      <section className="card-container-history">
        {cards.map((el) => (
          <section key={el.id} className={`card-${el.id}`}>
            <article>
              <h3>{el.title}</h3>
              <p>{el.description}</p>
              <p className="info">ⓘ</p>
            </article>
            <figure className="plante-coffee">
              <img src="images/Plante-cafe.jpg" alt="" />
            </figure>
          </section>
        ))}
        <figure className="image-europe-container">
          <img
            src="https://i.ibb.co/7rrdv3v/Diffusion-Cafe-Europe.webp"
            alt="Diffusion du café en Europe"
          />
        </figure>
        <figure className="image-end-page-container">
          <img
            src="https://i.ibb.co/BNsb2fK/pngegg-1-1.png"
            alt="grain coffee final page"
          />
        </figure>
      </section>
      <div className="second-button">
        <a id="history-bottom" href="#history-top">
          ⬆︎
        </a>
      </div>
    </section>
  );
}

export default HistoryCard;
