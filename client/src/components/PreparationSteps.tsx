import type { PreparationStepsProps } from "../types/RecipePage";
import "/src/pages/RecipePage/PreparationSteps.css";

function PreparationSteps({
  preparationSteps,
  recipeName,
}: PreparationStepsProps) {
  return (
    <>
      <main className="main-preparation-steps-container">
        <section className="recipe-title-container">
          <h1 className="recipe-page-api-title-desktop">
            {`Idée recette : ${recipeName}`}
          </h1>
        </section>
        <section className="text-and-video-tiramisu-sections">
          <h2 className="preparation-title">Préparation</h2>
          <ol className="preparation-steps-list">
            {preparationSteps.map((step) => {
              return (
                <li key={step} className="number-of-step">
                  <p>{step}</p>
                </li>
              );
            })}
          </ol>
        </section>
      </main>
    </>
  );
}
export default PreparationSteps;
