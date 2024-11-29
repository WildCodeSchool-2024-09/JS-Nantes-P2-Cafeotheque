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
  recipeName: string;
  recipeList: Recipe[] | null;
  handleOnChange: (event: ChangeEvent<HTMLSelectElement>) => void;
}

export interface PreparationStepsProps {
  preparationSteps: string[];
  recipeName: string;
}

export interface RecipeVideoProps {
  videoUrl: string;
}
