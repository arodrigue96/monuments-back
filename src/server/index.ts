import express from "express";
import morgan from "morgan";
import monumentsRouter from "../monument/router/monumentsRouter.js";
import { handleGeneralError, handlePathError } from "./errors/middlewares.js";

const app = express();

app.use(morgan("dev"));

app.use("/monuments", monumentsRouter);

app.use(handlePathError);

app.use(handleGeneralError);

export default app;
