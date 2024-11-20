import IngredientsList from "../../components/IngredientsList";
import PreparationSteps from "../../components/PreparationSteps";
import RecipeVideo from "../../components/RecipeVideo";
import "./RecipeePage.css";

function RecipeePage() {
  return (
    <>
      <main className="main-recipe-tiramisu-page">
        <IngredientsList />
        <PreparationSteps />
        <RecipeVideo />
      </main>
    </>
  );
}

export default RecipeePage;
