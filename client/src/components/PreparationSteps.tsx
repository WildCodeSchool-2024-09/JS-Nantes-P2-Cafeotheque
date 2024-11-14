import "/src/pages/RecipeePage/PreparationSteps.css";

function PreparationSteps() {
  return (
    <main className="main-preparation-steps-container">
      <h1 className="idee-recette-tiramisu-title">
        Idée recette : le tiramisu
      </h1>
      <section className="text-and-video-tiramisu-sections">
        <h2 className="preparation-title">Préparation</h2>
        <ol className="preparation-steps-list">
          <li className="number-of-step">
            <p>
              Séparer les blancs des jaunes d'oeufs.
              <br />
              Mélanger les jaunes avec le sucre roux et le sucre vanillé.
            </p>
          </li>
          <li className="number-of-step">
            <p>Ajouter le mascarpone au fouet.</p>
          </li>
          <li className="number-of-step">
            <p>
              Monter les blancs en neige et les incorporer délicatement à la
              spatule <br /> au mélange précédent. Réserver.
            </p>
          </li>
          <li className="number-of-step">
            <p>
              Mouiller les biscuits dans le café rapidement avant d'en tapisser
              le fond du plat.
            </p>
            <p>
              Recouvrir d'une couche de crème au mascarpone puis répéter
              l'opération en <br /> alternant couche de biscuits et couche de
              crème en terminant par cette dernière.
              <br />
              Saupoudrer de cacao.
            </p>
          </li>
          <li className="number-of-step">
            <p>Mettre au réfrigérateur 4 heures minimum puis déguster frais.</p>
          </li>
        </ol>
      </section>
    </main>
  );
}

export default PreparationSteps;
