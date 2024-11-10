import { type Request, type Response } from "express";
import { type MonumentsControllerStructure } from "./types";
import Monument from "../Monument.js";
import monuments from "../../data/index.js";

class MonumentsController implements MonumentsControllerStructure {
  constructor(private readonly monuments: Monument[]) {}

  get = (_req: Request, res: Response): void => {
    const statusCode = 200;

    res.status(statusCode).json({ monuments: this.monuments });
  };

  post = (req: Request, res: Response): void => {
    const statusCode = 201;
    const { name, description, imageUrl, city, country } = req.body as Monument;
    const newMonument = new Monument(name, description, imageUrl, {
      country,
      city,
    });

    monuments.push(newMonument);

    res.status(statusCode).json({ status: "Success", monument: newMonument });
  };
}

export default MonumentsController;
