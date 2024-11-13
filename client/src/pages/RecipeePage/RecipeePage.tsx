import "/src/pages/RecipeePage/RecipeePage.css";
import IngredientsList from "../../components/IngredientsList";

function RecipeePage() {
  return (
    <>
      <IngredientsList />
      <main>
        <h1>Idée recette : le tiramisu</h1>
        <h2>Préparation</h2>
        <h3>Ėtape 1</h3>
        <h3>Ėtape 2</h3>
        <h3>Ėtape 3</h3>
        <h3>Ėtape 4</h3>
        <h3>Ėtape 5</h3>
        <h2>La recette en vidéo</h2>
      </main>
    </>
  );
}

export default RecipeePage;
