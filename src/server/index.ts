import express from "express";
import cors from "cors";
import morgan from "morgan";
import monumentsRouter from "../monument/router/monumentsRouter.js";
import { handleGeneralError, handlePathError } from "./errors/middlewares.js";

const app = express();

app.use(cors());

app.use(morgan("dev"));

app.use("/monuments", monumentsRouter);

app.use(express.json());

app.use(handlePathError);

app.use(handleGeneralError);

export default app;
