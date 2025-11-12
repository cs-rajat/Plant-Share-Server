import dotenv from "dotenv";
dotenv.config();

import express from "express";
import cors from "cors";
import connectDB from "./src/config/db.js";
import foodRoutes from "./src/routes/food.routes.js";
import requestRoutes from "./src/routes/request.routes.js";

const app = express();
app.use(cors());
app.use(express.json());

// connect to Mongo
connectDB();

// api routes
app.use("/api/foods", foodRoutes);
app.use("/api/requests", requestRoutes);

app.get("/", (req, res) => res.send("✅ PlateShare server running"));

const PORT = process.env.PORT || 5000;
app.listen(PORT, () => console.log(`🚀 Server on port ${PORT}`));
