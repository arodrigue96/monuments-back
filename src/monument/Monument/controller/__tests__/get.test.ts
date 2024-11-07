import { type Response, type Request } from "express";
import Monument from "../../Monument";
import MonumentsController from "../MonumentsController";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the method get of MonumentController class", () => {
  describe("When it's receives a response", () => {
    const coliseo = new Monument("Coliseo", "", "", {
      country: "Italy",
      city: "Roma",
    });
    const monuments = [coliseo];
    const req = {};
    const res: Partial<Response> = {
      status: jest.fn().mockReturnThis(),
      json: jest.fn(),
    };

    const monumentsController = new MonumentsController(monuments);

    test("Then it should call status method with status code 200", () => {
      monumentsController.get(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(200);
    });

    test("THen it should call json method with the monument Coliseo", () => {
      monumentsController.get(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledWith({ monuments });
    });
  });
});
