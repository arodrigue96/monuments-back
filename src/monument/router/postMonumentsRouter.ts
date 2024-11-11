import { Router } from "express";
import MonumentsController from "../Monument/controller/MonumentsController.js";
import monuments from "../data/index.js";

const postMonumentRouter = Router();

const postMonumentController = new MonumentsController(monuments);

postMonumentRouter.post("/", postMonumentController.post);

export default postMonumentRouter;
