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
      <body className="main-recipe-tiramisu-page">
        <h1 className="idee-recette-tiramisu-title">
          {`Idée recette : ${recipe[0].mainContent.recipeName}`}
        </h1>
        <section className="recipe-components">
          <aside className="ingredients-list-section">
            <IngredientsList
              imgSrc={recipe[0].aside.illustration}
              ingredients={recipe[0].aside.ingredients}
            />
          </aside>
          <section className="prep-steps-and-videp-section">
            <PreparationSteps
              preparationSteps={recipe[0].mainContent.preparationSteps}
            />

            <RecipeVideo videoUrl={recipe[0].mainContent.videoUrl} />
          </section>
        </section>
      </body>
    )
  );
}

export default RecipePage;
