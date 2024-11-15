import { useEffect, useState } from "react";
import "./HistoryOfCoffeePage.css";

// Définir les types pour l'état
const HistoryOfCoffeePage = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [imagePosition, setImagePosition] = useState<number>(0);
  const [blurAmount, setBlurAmount] = useState<number>(0);
  const [imageVisible, setImageVisible] = useState<boolean>(true);
  const [secondCardVisible, setSecondCardVisible] = useState<boolean>(false);

  const handleScroll = () => {
    const scrollY = window.scrollY;

    // Calculer la position de l'image (translation vers le haut)
    setImagePosition(scrollY * 0.4);

    // Calculer le flou en fonction du défilement
    const blurValue = Math.min(scrollY * 0.1, 10);
    setBlurAmount(blurValue);

    // Cacher l'image lorsque l'utilisateur arrive sur la première card
    const cardElement = document.getElementById("first-card");
    if (cardElement) {
      const cardPosition = cardElement.offsetTop;
      if (scrollY >= cardPosition) {
        setImageVisible(false);
      } else {
        setImageVisible(true);
      }
    }

    // Contrôle de la classe de réflexion de l'image
    if (scrollY > 100) {
      setScrolling(true);
    } else {
      setScrolling(false);
    }

    // Mise à jour de la visibilité de la flèche de remontée
    const secondCardElement = document.getElementById("second-card");
    if (secondCardElement) {
      const secondCardPosition = secondCardElement.offsetTop;
      // Afficher la flèche quand la deuxième carte est visible
      if (scrollY >= secondCardPosition) {
        setSecondCardVisible(true);
      } else {
        setSecondCardVisible(false);
      }
    }
  };

  // Fonction pour défiler vers une carte spécifique
  const scrollToCard = (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
    targetId: string,
  ) => {
    if (
      event.type === "click" ||
      event.type === "Enter" ||
      event.type === " "
    ) {
      const targetElement = document.getElementById(targetId);
      if (targetElement) {
        targetElement.scrollIntoView({ behavior: "smooth", block: "center" });
      }
    }
  };

  // Ajouter l'événement de scroll au montage
  useEffect(() => {
    window.addEventListener("scroll", handleScroll);

    return () => {
      window.removeEventListener("scroll", handleScroll);
    };
  });

  return (
    <div>
      <h1>Tout savoir sur l'histoire du Café</h1>

      {/* Card avec flèche vers la première card */}
      <div
        className="scroll-card first-scroll-card"
        onClick={(e) => scrollToCard(e, "first-card")}
        onKeyUp={(e) => scrollToCard(e, "first-card")}
      >
        <div className="arrow">&#8595;</div>
      </div>

      {/* Première carte avec le texte sur l'histoire du café */}
      <div className="card-container first-card-container">
        <div id="first-card" className="card">
          <h3>
            Histoire du café : d’où vient-il ?
            <br />
            <br />
            Découvert en Éthiopie il y a plus de mille ans, le café s’est
            répandu grâce au commerce et est devenu populaire dans le monde
            entier. Aujourd’hui, les principaux producteurs sont le Brésil, la
            Colombie, l’Éthiopie, l’Indonésie et le Vietnam.
          </h3>
        </div>
      </div>

      {/* Deuxième carte avec le texte sur les débuts de la culture du café */}
      <div className="card-container">
        <div id="second-card" className="card">
          <h3>
            Les débuts de la culture du café.
            <br />
            <br />
            D’après les recherches scientifiques sur le sujet, c’est à Harar que
            la culture des caféiers voit le jour. La production de la plante y
            est maîtrisée, ainsi que la torréfaction des grains. Puis, la
            culture s’étend et se développe au Yémen à partir du XIIIe siècle.
          </h3>
        </div>
      </div>

      {/* Troisième carte avec le texte sur l'origine du café */}
      <div className="card-container">
        <div id="third-card" className="card">
          <h3>
            Les origines du café.
            <br />
            <br />
            La légende raconte qu’il y a plus de mille ans, un berger nommé
            Khaldi aurait découvert le café en Éthiopie (autrefois appelée
            Abyssinie). Après avoir ingéré les fruits d’un arbuste, ses chèvres
            étaient plus agitées qu’habituellement. Curieux, il décida d’en
            consommer lui-même. C’est là qu’il se rendit compte du pouvoir
            énergisant des cerises des plants du caféier arabica, en raison de
            la caféine qu’elles renfermaient. C’est de là qu’est parti
            l’invention du célèbre café au goût si exquis.
          </h3>
        </div>
      </div>

      {/* Quatrième carte avec le texte sur l'ouverture du premier établissement */}
      <div className="card-container">
        <div id="fourth-card" className="card">
          <h3>
            L’ouverture du 1er établissement de café.
            <br />
            <br />
            C’est en 1554 à Constantinople que s’ouvre le 1er établissement de
            café, grâce à Hakim d’Alep et Djem de Damas. À partir de ce
            moment-là, il conquiert rapidement le cœur et les papilles des
            Européens. Grâce à cette montée en puissance de la consommation du
            café celui ci connaitra un succès fou auprès des populations.
          </h3>
        </div>
      </div>

      {/* Cinquième carte avec le texte sur la popularisation du café */}
      <div className="card-container">
        <div id="fifth-card" className="card">
          <h3>
            La popularisation du café.
            <br />
            <br />
            La plus grande partie du négoce de café se passe au port de Moccha,
            d’où l’appellation Moka, célèbre variété de café dont on a tous déjà
            entendu parler. C’est dans ce port que la majorité du café destiné
            au commerce transite vers d’autres pays. En parallèle, le café
            arabica devient une boisson rituelle et médicinale très populaire
            dans la péninsule Arabique. Très utilisé par les religieux car il
            permet de rester éveillé pour prier, le café est adopté par la
            population : il est souvent décrit comme le vin de l’Islam.
          </h3>
        </div>
      </div>

      {/* Image sous la dernière carte */}
      <div className="europe-container">
        <img
          src="https://i.ibb.co/7rrdv3v/Diffusion-Cafe-Europe.webp"
          alt="Diffusion du café en Europe"
          className="history-image"
        />
      </div>

      {/* Sixième carte avec le texte sur le café arrive en europe */}
      <div className="card-container">
        <div id="sixth-card" className="card">
          <h3>
            Le café arrive en Europe.
            <br />
            <br />
            C’est via les commerçants italiens que les premiers grains de café
            font leur entrée en Europe au début du XVIIe siècle, à Venise qui
            était alors un grand port de commerce. En effet, déjà spécialisés
            dans le commerce d’épices entre l’Orient et l’Europe, le café
            s’ajoute naturellement aux produits que les Italiens introduisent en
            Europe. Le célèbre breuvage a d’abord commencé à se répandre chez
            les moines et les commerçants vénitiens, puis auprès du peuple. Le
            café arrive rapidement dans plusieurs pays d’Europe, comme la
            Hollande, l’Angleterre, l’Autriche, etc. En France, les premiers
            sacs de café vert sont débarqués en 1644 à Marseille, importés par
            des Égyptiens. Sa consommation très appréciée s’est rapidement
            popularisée, les premiers cafés français voient le jour en 1671.
            Saviez-vous que la percolation sera utilisée pour la préparation du
            café pour la première fois en France ? Avant, c’est l’infusion qui
            permettait de préparer les grains.
          </h3>
        </div>
      </div>

      {/* Flèche pour retourner en haut de la page (si vous le souhaitez) */}
      {secondCardVisible && (
        <div
          className="scroll-card fixed-bottom-right"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onKeyUp={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="arrow">&#8593;</div>
        </div>
      )}

      {/* Image en bas de la page */}
      {imageVisible && (
        <img
          id="Coffee-Bottom-image"
          src="https://i.ibb.co/MkYhTj1/pngegg-4.png"
          alt="Coffee grain"
          className={scrolling ? "reflection" : ""}
          style={{
            transform: `translateY(${imagePosition}px)`,
            filter: `blur(${blurAmount}px)`,
            transition: "transform 1s ease, filter 1s ease, opacity 1s ease",
          }}
        />
      )}
      {/* Nouvelle image à la fin de la page */}
      <div className="final-image-container">
        <img
          src="https://i.ibb.co/BNsb2fK/pngegg-1-1.png"
          alt="grain coffee final page"
          className="final-image"
        />
      </div>
    </div>
  );
};

export default HistoryOfCoffeePage;
