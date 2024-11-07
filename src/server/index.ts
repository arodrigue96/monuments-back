import express from "express";
import morgan from "morgan";
import monumentsRouter from "../monument/router/monumentsRouter.js";

const app = express();

app.use(morgan("dev"));

app.use("/monuments", monumentsRouter);

export default app;
