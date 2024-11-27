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
        <header className="recipe-page-secondary-header">
          <h1 className="recipe-page-api-title">
            {`Idée recette : ${recipe[0].mainContent.recipeName}`}
          </h1>
        </header>
        <main className="main-recipe-page-card">
          <aside className="ingredients-list-card">
            <IngredientsList
              imgSrc={recipe[0].aside.illustration}
              ingredients={recipe[0].aside.ingredients}
            />
          </aside>
          <article className="prep-steps-and-video-card">
            <PreparationSteps
              preparationSteps={recipe[0].mainContent.preparationSteps}
            />
            <RecipeVideo videoUrl={recipe[0].mainContent.videoUrl} />
          </article>
        </main>
      </body>
    )
  );
}

export default RecipePage;
