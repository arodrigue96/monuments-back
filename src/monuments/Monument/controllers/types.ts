import { type Request, type Response } from "express";
import type Monument from "../Monument";

export interface MonumentsControllerStructure {
  get: (req: Request, res: Response, monuments: Monument[]) => void;
}
