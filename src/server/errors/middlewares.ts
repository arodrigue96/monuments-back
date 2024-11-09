import chalk from "chalk";
import { type NextFunction, type Request, type Response } from "express";
import type ServerError from "./ServerError/ServerError.js";

export const handleGeneralError = (
  error: ServerError,
  _req: Request,
  res: Response,
  _next: NextFunction,
): void => {
  console.log(chalk.red(error.message));
  console.log(chalk.red(error.stack));

  res.status(error.statusCode ?? 500).json({
    error: error.statusCode ? error.message : "Server error",
  });
};
