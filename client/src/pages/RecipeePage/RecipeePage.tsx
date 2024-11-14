import IngredientsList from "../../components/IngredientsList";
import PreparationSteps from "../../components/PreparationSteps";
import "./RecipeePage.css";

function RecipeePage() {
  return (
    <>
      <main className="main-recipe-tiramisu-page">
        <IngredientsList />
        <PreparationSteps />
      </main>
    </>
  );
}

export default RecipeePage;
