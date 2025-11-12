import express from "express";
import cors from "cors";
import dotenv from "dotenv";
import connectDB from "./src/config/db.js";
import foodRoutes from "./src/routes/food.routes.js";
import requestRoutes from "./src/routes/request.routes.js";



dotenv.config();
const app = express();
app.use(cors());
app.use(express.json());
connectDB();
app.get("/", (req, res) => res.send("✅ PlateShare Server Running"));
app.use("/api/foods", foodRoutes);
app.use("/api/requests", requestRoutes);

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server running on port ${PORT}`));

