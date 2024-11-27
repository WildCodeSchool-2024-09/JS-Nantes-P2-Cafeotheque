export interface Recipe {
  id: number;

  aside: {
    illustration: string;
    ingredients: string[];
  };

  mainContent: {
    recipeName: string;
    preparationSteps: string[];
    videoUrl: string;
  };
}

export interface IngredientsListProps {
  imgSrc: string;
  ingredients: string[];
}

export interface PreparationStepsProps {
  preparationSteps: string[];
}

export interface RecipeVideoProps {
  videoUrl: string;
}

export interface RecipeNameProps {
  recipeName: string;
}
