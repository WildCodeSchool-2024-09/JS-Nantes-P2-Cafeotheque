import { useEffect, useState } from "react";
import "./HistoryOfCoffeePage.css";

// Définir les types pour l'état
const HistoryOfCoffeePage = () => {
  const [scrolling, setScrolling] = useState<boolean>(false);
  const [imagePosition, setImagePosition] = useState<number>(0);
  const [blurAmount, setBlurAmount] = useState<number>(0);
  const [imageVisible, setImageVisible] = useState<boolean>(true);

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
  };

  // Fonction pour défiler vers la première card de texte
  const scrollToCard = (
    event:
      | React.MouseEvent<HTMLDivElement>
      | React.KeyboardEvent<HTMLDivElement>,
  ) => {
    if (
      event.type === "click" ||
      event.type === "Enter" ||
      event.type === " "
    ) {
      document
        .getElementById("first-card")
        ?.scrollIntoView({ behavior: "smooth" });
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
        className="scroll-card"
        onClick={scrollToCard}
        onKeyUp={scrollToCard} // Ajout de l'événement clavier
      >
        <div className="arrow">&#8595;</div>
      </div>

      {/* Première card avec du texte */}
      <div className="card-container">
        <div id="first-card" className="card">
          <h3>
            Histoire du café : d’où vient-il ?
            <br />
            Découvert en Éthiopie il y a plus de mille ans, le café s’est
            répandu grâce au commerce et est devenu populaire dans le monde
            entier. Aujourd’hui, les principaux producteurs sont le Brésil, la
            Colombie, l’Éthiopie, l’Indonésie et le Vietnam.
          </h3>
        </div>
      </div>

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
            transition: "transform 1s ease, filter 1s ease, opacity 1s ease", // Transition plus longue pour la disparition
          }}
        />
      )}
    </div>
  );
};

export default HistoryOfCoffeePage;
