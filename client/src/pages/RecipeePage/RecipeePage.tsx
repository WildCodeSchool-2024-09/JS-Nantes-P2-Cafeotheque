import { useEffect, useState } from "react";
import IngredientsList from "../../components/IngredientsList";
import PreparationSteps from "../../components/PreparationSteps";
import "./RecipeePage.css";
import RecipeVideo from "../../components/RecipeVideo";
import type { Recipe } from "../../types/RecipePage";

function RecipeePage() {
  const [recipe, setRecipe] = useState<Recipe[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/recipe")
      .then((res) => res.json())
      .then((recipes) => setRecipe(recipes));
  }, []);

  return (
    recipe && (
      <main className="main-recipe-tiramisu-page">
        <IngredientsList
          imgSrc={recipe[0].aside.illustration}
          ingredients={recipe[0].aside.ingredients}
        />
        <PreparationSteps
          name={recipe[0].mainContent.name}
          preparationSteps={recipe[0].mainContent.preparationSteps}
        />
        <RecipeVideo videoUrl={recipe[0].mainContent.videoUrl} />
      </main>
    )
  );
}

export default RecipeePage;
