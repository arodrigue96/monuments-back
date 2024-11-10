import { type Response, type Request } from "express";
import Monument from "../../Monument";
import MonumentsController from "../MonumentsController";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the method get of MonumentController class", () => {
  describe("When it's receives a request", () => {
    const coliseo = new Monument("Coliseo", "", "", {
      country: "Italy",
      city: "Roma",
    });

    const angkor = new Monument("Angkor", "", "", {
      country: "Cambodja",
      city: "Siem Reap",
    });
    const monumentsController = new MonumentsController([coliseo, angkor]);

    const req: Partial<Request> = {
      body: {},
    };

    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    test("Then it should call status method with status code 201", () => {
      monumentsController.post(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(201);
    });

    test("Then it should call json method", () => {
      monumentsController.post(req as Request, res as Response);

      expect(res.json).toHaveBeenCalled();
    });
  });
});
