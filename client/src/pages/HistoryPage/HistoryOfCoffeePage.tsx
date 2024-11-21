import "./HistoryOfCoffeePage.css";
import HistoryAccueil from "../../components/HistoryPage/HistoryAccueil";
import HistoryCard from "../../components/HistoryPage/HistoryCard";

// Définir les types pour l'état
const HistoryOfCoffeePage = () => {
  // const [scrolling, setScrolling] = useState<boolean>(false);
  // const [imagePosition, setImagePosition] = useState<number>(0);
  // const [blurAmount, setBlurAmount] = useState<number>(0);
  // const [imageVisible, setImageVisible] = useState<boolean>(true);
  // const [secondCardVisible, setSecondCardVisible] = useState<boolean>(false);

  // const handleScroll = () => {
  //   const scrollY = window.scrollY;

  //   // Calculer la position de l'image (translation vers le haut)
  //   setImagePosition(scrollY * 0.4);

  //   // Calculer le flou en fonction du défilement
  //   const blurValue = Math.min(scrollY * 0.1, 10);
  //   setBlurAmount(blurValue);

  //   // Cacher l'image lorsque l'utilisateur arrive sur la première card
  //   const cardElement = document.getElementById("first-card");
  //   if (cardElement) {
  //     const cardPosition = cardElement.offsetTop;
  //     if (scrollY >= cardPosition) {
  //       setImageVisible(false);
  //     } else {
  //       setImageVisible(true);
  //     }
  //   }

  //   // Contrôle de la classe de réflexion de l'image
  //   if (scrollY > 100) {
  //     setScrolling(true);
  //   } else {
  //     setScrolling(false);
  //   }

  //   // Mise à jour de la visibilité de la flèche de remontée
  //   const secondCardElement = document.getElementById("second-card");
  //   if (secondCardElement) {
  //     const secondCardPosition = secondCardElement.offsetTop;
  //     // Afficher la flèche quand la deuxième carte est visible
  //     if (scrollY >= secondCardPosition) {
  //       setSecondCardVisible(true);
  //     } else {
  //       setSecondCardVisible(false);
  //     }
  //   }
  // };

  // // Ajouter l'événement de scroll au montage
  // useEffect(() => {
  //   window.addEventListener("scroll", handleScroll);

  //   return () => {
  //     window.removeEventListener("scroll", handleScroll);
  //   };
  // });

  return (
    <body>
      <HistoryAccueil />
      <HistoryCard />
      {/* Flèche pour retourner en haut de la page (si vous le souhaitez) */}
      {/* {secondCardVisible && (
        <div
          className="scroll-card fixed-bottom-right"
          onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
          onKeyUp={() => window.scrollTo({ top: 0, behavior: "smooth" })}
        >
          <div className="arrow">&#8593;</div>
        </div>
      )} */}

      {/* Image en bas de la page */}

      {/* {imageVisible && (
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
      )} */}
    </body>
  );
};

export default HistoryOfCoffeePage;
