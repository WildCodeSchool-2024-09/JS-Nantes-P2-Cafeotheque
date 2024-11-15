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

import coffeeData from "./mocks/apiMock.json";

router.get("/api/coffee", (_, res) => {
  res.status(200).json(coffeeData);
});

/* ************************************************************************* */

export default router;
