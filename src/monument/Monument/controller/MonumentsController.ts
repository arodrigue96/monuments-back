import { type Request, type Response } from "express";
import { type MonumentsControllerStructure } from "./types";
import type Monument from "../Monument";

class MonumentsController implements MonumentsControllerStructure {
  constructor(private readonly monuments: Monument[]) {}

  get = (_req: Request, res: Response): void => {
    const statusCode = 200;

    res.header("Access-Control-Allow-Origin", "*");
    res.status(statusCode).json({ monuments: this.monuments });
  };
}

export default MonumentsController;
