import { Router } from "express";
import monuments from "../data/index.js";
import MonumentsController from "../Monument/controller/MonumentsController.js";

const monumentsRouter = Router();

const monumentController = new MonumentsController(monuments);

monumentsRouter.get("/", monumentController.get);

export default monumentsRouter;
