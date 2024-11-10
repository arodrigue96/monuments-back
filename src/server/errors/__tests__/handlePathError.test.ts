import { type NextFunction, type Request, type Response } from "express";
import { handlePathError } from "../middlewares";
import ServerError from "../ServerError/ServerError";

describe("Given the handlePathError function", () => {
  describe("When it receives a request with an inexisting endpoint", () => {
    test("Then it should call next function with an error", () => {
      const expectedStatusCode = 404;
      const message = "Endpoint not found";

      const req: Partial<Request> = {};
      const res: Partial<Response> = {
        status: jest.fn(),
        json: jest.fn(),
      };
      const next: NextFunction = jest.fn();

      const error = new ServerError(expectedStatusCode, message);

      handlePathError(req as Request, res as Response, next);

      expect(next).toHaveBeenCalledWith(error);
    });
  });
});
