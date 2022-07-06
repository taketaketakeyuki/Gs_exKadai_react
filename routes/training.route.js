import express from "express";
import { getResult } from "../controllers/training.controller.js";

export const trainingRouter = express.Router();

trainingRouter.post("/", (req, res) => getResult(req, res));