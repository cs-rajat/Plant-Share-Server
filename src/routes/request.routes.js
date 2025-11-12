import express from "express";
import {
  createRequest,
  getRequestsByFood,
  updateRequestStatus
} from "../controllers/requestController.js";
import verifyFirebaseToken from "../middlewares/verifyFirebaseToken.js";

const router = express.Router();
router.post("/", verifyFirebaseToken, createRequest);
router.get("/:foodId", verifyFirebaseToken, getRequestsByFood);
router.patch("/:id", verifyFirebaseToken, updateRequestStatus);

export default router;
