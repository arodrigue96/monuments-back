import express from "express";
import morgan from "morgan";
import monumentsRouter from "../monument/router/monumentsRouter.js";
import { handleGeneralError } from "./errors/middlewares.js";

const app = express();

app.use(morgan("dev"));

app.use("/monuments", monumentsRouter);

app.use(handleGeneralError);

export default app;
