import { useEffect, useState } from "react";
import IngredientsList from "../../components/IngredientsList";
import PreparationSteps from "../../components/PreparationSteps";
import "./RecipePage.css";
import RecipeVideo from "../../components/RecipeVideo";
import type { Recipe } from "../../types/RecipePage";

function RecipePage() {
  const [recipe, setRecipe] = useState<Recipe[] | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/recipe")
      .then((res) => res.json())
      .then((recipes) => setRecipe(recipes));
  }, []);

  return (
    recipe && (
      <body className="body-recipe-page">
        <main className="main-recipe-page-card">
          <IngredientsList
            imgSrc={recipe[0].aside.illustration}
            ingredients={recipe[0].aside.ingredients}
            recipeName={recipe[0].mainContent.recipeName}
          />
          <article className="prep-steps-and-video-card">
            <PreparationSteps
              preparationSteps={recipe[0].mainContent.preparationSteps}
              recipeName={recipe[0].mainContent.recipeName}
            />
            <RecipeVideo videoUrl={recipe[0].mainContent.videoUrl} />
          </article>
        </main>
      </body>
    )
  );
}

export default RecipePage;
