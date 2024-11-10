import chalk from "chalk";
import { type NextFunction, type Request, type Response } from "express";
import ServerError from "./ServerError/ServerError";

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

export const handlePathError = (
  _req: Request,
  _res: Response,
  next: NextFunction,
): void => {
  const error = new ServerError(404, "Endpoint not found");

  next(error);
};
