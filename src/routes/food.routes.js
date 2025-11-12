import express from "express";
import {
  getAllFoods, getFeaturedFoods, getFoodById,
  addFood, updateFood, deleteFood
} from "../controllers/foodController.js";
import verifyFirebaseToken from "../middlewares/verifyFirebaseToken.js";

const router = express.Router();

router.get("/", getAllFoods);
router.get("/featured", getFeaturedFoods);
router.get("/:id", verifyFirebaseToken, getFoodById);
router.post("/", verifyFirebaseToken, addFood);
router.patch("/:id", verifyFirebaseToken, updateFood);
router.delete("/:id", verifyFirebaseToken, deleteFood);

export default router;
