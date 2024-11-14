import "/src/pages/RecipeePage/IngredientsList.css";

function IngredientsList() {
  return (
    <aside className="ingredients-list-container">
      <img
        className="tiramisu-ingredients-list"
        src="src/assets/images/tiramisu.jpg"
        alt="Illustration Tiramisu"
      />
      <h2 className="ingredients-list-title">Ingrédients</h2>
      <ul className="ingredients-list">
        <li> 3 oeufs</li>
        <li>100 g de sucre roux</li>
        <li>1 sachet de sucre vanillé</li>
        <li>250 g de mascarpone</li>
        <li>50 cl de café noir</li>
        <li>24 biscuits à la cuillère</li>
        <li>30 g de cacao amer</li>
      </ul>
    </aside>
  );
}

export default IngredientsList;
