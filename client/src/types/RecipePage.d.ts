export interface Recipe {
  id: number;

  aside: {
    illustration: string;
    ingredients: string[];
  };

  mainContent: {
    name: string;
    preparationSteps: string[];
    videoUrl: string;
  };
}

export interface IngredientsListProps {
  imgSrc: string;
  ingredients: string[];
}

export interface PreparationStepsProps {
  name: string;
  preparationSteps: string[];
}

export interface RecipeVideoProps {
  videoUrl: string;
}
