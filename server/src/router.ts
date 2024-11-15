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
import RecipeData from "./mocks/RecipeeMock.json";

router.get("/api/coffee", (_, res) => {
  res.status(200).json(coffeeData);
});

router.get("/api/coffee/:id", (req, res) => {
  const id = req.params.id;
  for (const el of coffeeData)
    if (el.id === Number.parseInt(id)) res.status(200).json(el);
  res.status(404).send("Coffee was not found");
});

router.get("/api/recipe", (_, res) => {
  res.status(200).json(RecipeData);
});

router.get("/api/recipe/:id", (req, res) => {
  const id = req.params.id;
  for (const el of RecipeData)
    if (el.id === Number.parseInt(id)) res.status(200).json(el);
  res.status(404).send("Recipe was not found");
});

/* ************************************************************************* */

export default router;
