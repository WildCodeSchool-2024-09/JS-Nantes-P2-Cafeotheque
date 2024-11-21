import "../../pages/HistoryPage/HistoryCard.css";

function HistoryCard() {
  const cards = [
    {
      id: 1,
      title: "Histoire du café : d’où vient-il ?",
      description:
        "Découvert en Éthiopie il y a plus de mille ans, le café s’est répandu grâce au commerce et est devenu populaire dans le monde entier. Aujourd’hui, les principaux producteurs sont le Brésil, la Colombie, l’Éthiopie, l’Indonésie et le Vietnam.",
    },
    {
      id: 2,
      title: "Les débuts de la culture du café.",
      description:
        "D’après les recherches scientifiques sur le sujet, c’est à Harar que la culture des caféiers voit le jour. La production de la plante y est maîtrisée, ainsi que la torréfaction des grains. Puis, la culture s’étend et se développe au Yémen à partir du XIIIe siècle.",
    },
    {
      id: 3,
      title: "Les origines du café.",
      description:
        "La légende raconte qu’il y a plus de mille ans, un berger nommé Khaldi aurait découvert le café en Éthiopie (autrefois appelée Abyssinie). Après avoir ingéré les fruits d’un arbuste, ses chèvres étaient plus agitées qu’habituellement. Curieux, il décida d’en consommer lui-même. C’est là qu’il se rendit compte du pouvoir énergisant des cerises des plants du caféier arabica, en raison de la caféine qu’elles renfermaient. C’est de là qu’est parti l’invention du célèbre café au goût si exquis.",
    },
    {
      id: 4,
      title: "L’ouverture du 1er établissement de café.",
      description:
        " C’est en 1554 à Constantinople que s’ouvre le 1er établissement de café, grâce à Hakim d’Alep et Djem de Damas. À partir de ce moment-là, il conquiert rapidement le cœur et les papilles des Européens. Grâce à cette montée en puissance de la consommation du café celui ci connaitra un succès fou auprès des populations.",
    },
    {
      id: 5,
      title: "La popularisation du café.",
      description:
        "   La plus grande partie du négoce de café se passe au port de Moccha, d’où l’appellation Moka, célèbre variété de café dont on a tous déjà entendu parler. C’est dans ce port que la majorité du café destiné au commerce transite vers d’autres pays. En parallèle, le café arabica devient une boisson rituelle et médicinale très populaire dans la péninsule Arabique. Très utilisé par les religieux car il permet de rester éveillé pour prier, le café est adopté par la population : il est souvent décrit comme le vin de l’Islam.",
    },
    {
      id: 6,
      title: "Le café arrive en Europe.",
      description:
        " C’est via les commerçants italiens que les premiers grains de café font leur entrée en Europe au début du XVIIe siècle, à Venise qui était alors un grand port de commerce. En effet, déjà spécialisés dans le commerce d’épices entre l’Orient et l’Europe, le café s’ajoute naturellement aux produits que les Italiens introduisent en Europe. Le célèbre breuvage a d’abord commencé à se répandre chez les moines et les commerçants vénitiens, puis auprès du peuple. Le café arrive rapidement dans plusieurs pays d’Europe, comme la Hollande, l’Angleterre, l’Autriche, etc. En France, les premiers sacs de café vert sont débarqués en 1644 à Marseille, importés par des Égyptiens. Sa consommation très appréciée s’est rapidement popularisée, les premiers cafés français voient le jour en 1671. Saviez-vous que la percolation sera utilisée pour la préparation du café pour la première fois en France ? Avant, c’est l’infusion qui permettait de préparer les grains.",
    },
  ];
  return (
    <section id="historyTop" className="container-central-history">
      <img
        src="https://i.ibb.co/MkYhTj1/pngegg-4.png"
        alt="Plein de grain de café"
      />
      <div className="first-button">
        <a href="#historyBottom">⬇</a>
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
        <a id="historyBottom" href="#historyTop">
          ⬆︎
        </a>
      </div>
    </section>
  );
}

export default HistoryCard;
