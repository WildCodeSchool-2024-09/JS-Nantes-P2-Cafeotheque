import type { PreparationStepsProps } from "../types/RecipePage";
import "/src/pages/RecipeePage/PreparationSteps.css";

function PreparationSteps({ name, preparationSteps }: PreparationStepsProps) {
  return (
    <main className="main-preparation-steps-container">
      <h1 className="idee-recette-tiramisu-title">
        {`Idée recette : ${name}`}
      </h1>
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
  );
}

export default PreparationSteps;
