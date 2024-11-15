import { useEffect, useState } from "react";
import IngredientsList from "../../components/IngredientsList";
import PreparationSteps from "../../components/PreparationSteps";
import "./RecipeePage.css";

function RecipeePage() {
  const [recipe, setRecipe] = useState(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/recipe")
      .then((res) => res.json())
      .then((recipes) => setRecipe(recipes));
  }, []);

  return (
    recipe && (
      <main className="main-recipe-tiramisu-page">
        <IngredientsList
        // imgSrc={recipe[0].aside.illustration}
        //ingredients={recipe[0].aside.ingredients}
        />
        <PreparationSteps />
      </main>
    )
  );
}

export default RecipeePage;
