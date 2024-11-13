import "/src/pages/RecipeePage/RecipeePage.css";

function RecipeePage() {
  return (
    <>
      <body>
        <aside>
          <section className="tiramisu-illustration">
            <img
              src="src/assets/images/tiramisu.jpg"
              alt="Illustration Tiramisu"
            />
          </section>
          <section className="ingredients-list">
            <h2 className="ingredients-title">Ingrédients</h2>
            <ul>
              <li> 3 oeufs</li>
              <li>100 g de sucre roux</li>
              <li>1 sachet de sucre vanillé</li>
              <li>250 g de mascarpone</li>
              <li>50 cl de café noir</li>
              <li>24 biscuits à la cuillère</li>
              <li>30 g de cacao amer</li>
            </ul>
          </section>
        </aside>
        <main>
          <h1> Idée recette : le tiramisu </h1>
          <h2> Préparation</h2>
          <h3>Ėtape 1</h3>
          <h3>Ėtape 2</h3>
          <h3>Ėtape 3</h3>
          <h3>Ėtape 4</h3>
          <h3>Ėtape 5</h3>
        </main>
      </body>
    </>
  );
}

export default RecipeePage;
