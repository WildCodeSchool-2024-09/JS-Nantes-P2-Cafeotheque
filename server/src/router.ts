import express from "express";

const router = express.Router();

/* ************************************************************************* */
// Define Your API Routes Here
/* ************************************************************************* */

// Define item-related routes
import itemActions from "./modules/item/itemActions";

router.get("/api/items", itemActions.browse);
router.get("/api/items/:id", itemActions.read);
router.post("/api/items", itemActions.add);

import coffeeData from "./mocks/CoffeeMock.json";
import recipeData from "./mocks/RecipeMock.json";

router.get("/api/coffee", (_, res) => {
  res.status(200).json(coffeeData);
});

router.get("/api/coffee/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);
  const coffee = coffeeData.find((el) => el.id === id);
  if (coffee) res.status(200).json(coffee);
  else res.status(404).send("Coffee was not found");
});

router.get("/api/recipe", (_, res) => {
  res.status(200).json(recipeData);
});

router.get("/api/recipe/:id", (req, res) => {
  const id = Number.parseInt(req.params.id);
  const recipe = recipeData.find((el) => el.id === id);
  if (recipe) res.status(200).json(recipe);
  else res.status(404).send("Recipe was not found");
});

/* ************************************************************************* */

export default router;
