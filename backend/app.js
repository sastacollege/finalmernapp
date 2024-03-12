import express from "express";
import dotenv from "dotenv";
import { router as userRoutes } from "./routes/users.route.js";
const app = express();

import cors from "cors";
app.use(cors());

//CONFIGURATION
dotenv.config({
  path: "./.env",
});

//MIDDLEWARES
app.use(express.json());

//ROUTES
app.use("/api/v1/users", userRoutes);

//EXPORTS
export default app;
