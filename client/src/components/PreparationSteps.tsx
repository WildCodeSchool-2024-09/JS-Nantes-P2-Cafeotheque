import "/src/pages/RecipeePage/PreparationSteps.css";

function PreparationSteps() {
  return (
    <main className="main-preparation-steps-container">
      <h1 className="idee-recette-tiramisu-title">
        Idée recette : le tiramisu
      </h1>
      <h2 className="preparation-title">Préparation</h2>
      <ol className="preparation-steps-list">
        <li>
          <p>
            Séparer les blancs des jaunes d'oeufs. Mélanger les jaunes avec le
            sucre roux et le sucre vanillé.
          </p>
        </li>
        <li>
          <p>Ajouter le mascarpone au fouet.</p>
        </li>
        <li>
          <p>
            Monter les blancs en neige et les incorporer délicatement à la
            spatule au mélange précédent. Réserver.
          </p>
        </li>
        <li>
          <p>
            Mouiller les biscuits dans le café rapidement avant d'en tapisser le
            fond du plat.{" "}
          </p>
          <p>
            Recouvrir d'une couche de crème au mascarpone puis répéter
            l'opération en alternant couche de biscuits et couche de crème en
            terminant par cette dernière. Saupoudrer de cacao.
          </p>
        </li>
        <li>
          <p>Mettre au réfrigérateur 4 heures minimum puis déguster frais.</p>
        </li>
      </ol>

      <h2>La recette en vidéo</h2>
    </main>
  );
}

export default PreparationSteps;
