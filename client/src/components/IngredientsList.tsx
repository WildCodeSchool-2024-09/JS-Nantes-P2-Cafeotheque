import "/src/pages/RecipePage/IngredientsList.css";
import type { IngredientsListProps } from "../types/RecipePage";

function IngredientsList({ imgSrc, ingredients }: IngredientsListProps) {
  return (
    <aside className="ingredients-list-container">
      <img
        className="tiramisu-ingredients-list"
        src={`/public/images/${imgSrc}`}
        alt="Illustration Tiramisu"
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
  );
}

export default IngredientsList;
