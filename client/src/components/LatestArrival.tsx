import "../pages/HomePage/LatestArrival.css";

function LatestArrival() {
  return (
    <>
      <section className="container-latest-arrival">
        <img
          src="./public/images/Café-nouveauté.jpg"
          alt="Les nouveaux arrivages"
        />
        <section className="container-text-latest-arrival">
          <h3>Latest arrival</h3>
          <p>
            Découvrez notre tout nouveau grain de café, Luna Verde, une pépite
            rare tout juste récoltée dans les hauteurs volcaniques du Costa
            Rica. Ce café fraîchement torréfié révèle des notes subtiles de
            chocolat noir, de baies sauvages et une touche d'épices qui éveille
            les sens. Chaque gorgée offre un équilibre parfait entre douceur et
            acidité, tandis que sa texture veloutée enchante le palais. Cultivé
            avec soin par des fermiers passionnés, Luna Verde incarne l’essence
            pure de la terre où il a pris vie. À déguster dès aujourd'hui pour
            une expérience de café intense, authentique et inoubliable.
          </p>
          <button type="button">+ D'info</button>
        </section>
      </section>
    </>
  );
}

export default LatestArrival;
