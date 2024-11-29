import { useEffect, useState } from "react";
import type { ChangeEvent } from "react";
import IngredientsList from "../../components/IngredientsList";
import PreparationSteps from "../../components/PreparationSteps";
import "./RecipePage.css";
import RecipeVideo from "../../components/RecipeVideo";
import type { Recipe } from "../../types/RecipePage";

function RecipePage() {
  const [recipeList, setRecipeList] = useState<Recipe[] | null>(null);
  const [recipe, setRecipe] = useState<Recipe | null>(null);

  useEffect(() => {
    fetch("http://localhost:4000/api/recipe")
      .then((res) => res.json())
      .then((recipes) => {
        setRecipe(recipes[0]);
        setRecipeList(recipes);
      });
  }, []);

  function handleOnChange(event: ChangeEvent<HTMLSelectElement>) {
    const selectedIndex = Number.parseInt(event.target.value);
    const list = recipeList as Recipe[];
    setRecipe(list[selectedIndex]);
  }

  return (
    recipeList &&
    recipe && (
      <main className="main-recipe-page-card">
        <IngredientsList
          imgSrc={recipe.aside.illustration}
          ingredients={recipe.aside.ingredients}
          recipeName={recipe.mainContent.recipeName}
          recipeList={recipeList}
          handleOnChange={handleOnChange}
        />
        <article className="prep-steps-and-video-card">
          <PreparationSteps
            preparationSteps={recipe.mainContent.preparationSteps}
            recipeName={recipe.mainContent.recipeName}
          />
          <RecipeVideo videoUrl={recipe.mainContent.videoUrl} />
        </article>
      </main>
    )
  );
}

export default RecipePage;
