import IngredientsList from "../../components/IngredientsList";
import PreparationSteps from "../../components/PreparationSteps";
import "./RecipeePage.css";

const RecipeePage = () => {
  return (
    <div className="recipee-page">
      <div className="ingredients-list">
        <IngredientsList />
      </div>
      <div className="preparation-steps">
        <PreparationSteps />
      </div>
    </div>
  );
};

export default RecipeePage;
