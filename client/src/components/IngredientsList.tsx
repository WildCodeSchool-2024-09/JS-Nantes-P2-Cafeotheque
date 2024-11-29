import "/src/pages/RecipePage/IngredientsList.css";
import type { IngredientsListProps } from "../types/RecipePage";

function IngredientsList({
  imgSrc,
  ingredients,
  recipeName,
  recipeList,
  handleOnChange,
}: IngredientsListProps) {
  return (
    recipeList && (
      <aside className="ingredients-list-card">
        <select onChange={handleOnChange}>
          {recipeList.map((recip, index) => {
            return (
              <option value={index} key={recip.mainContent.recipeName}>
                {recip.mainContent.recipeName}
              </option>
            );
          })}
        </select>
        <h1 className="recipe-page-api-title-mobile">
          {`Idée recette : ${recipeName}`}
        </h1>
        <img
          className="recipe-image"
          src={`/public/images/${imgSrc}`}
          alt={`illustration ${recipeName}`}
        />
        <section className="ingredients-list-title-section">
          <h2 className="ingredients-list-title">Ingrédients</h2>
        </section>
        <ul className="ingredients-list">
          {ingredients.map((ingredient) => {
            return (
              <li className="el-list-ingredients" key={ingredient}>
                {ingredient}
              </li>
            );
          })}
        </ul>
      </aside>
    )
  );
}

export default IngredientsList;
