import express from "express";
import MonumentsController from "../monuments/Monument/controllers/MonumentsController.js";
import morgan from "morgan";
import monuments from "../monuments/data/index.js";

const app = express();

const monumentsController = new MonumentsController(monuments);

app.use(morgan("dev"));

app.get("/monuments", monumentsController.get);

export default app;
