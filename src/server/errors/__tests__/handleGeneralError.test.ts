import { type NextFunction, type Request, type Response } from "express";
import { handleGeneralError } from "../middlewares";
import ServerError from "../ServerError/ServerError";

afterEach(() => {
  jest.clearAllMocks();
});

describe("Given the handleGeneralError function", () => {
  const req: Partial<Request> = {};
  const res: Partial<Response> = {
    status: jest.fn().mockReturnThis(),
    json: jest.fn(),
  };
  const next: NextFunction = jest.fn();

  describe("When it receives a request from handlePathError middleware with a error", () => {
    const error = new ServerError(404, "Endpoint not found");
    const expectedStatusCode = 404;
    const expectedMessage = { error: "Endpoint not found" };

    test("Then it should cal status method with status code 404", () => {
      handleGeneralError(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call json method with the error message 'Endpoint not found'", () => {
      handleGeneralError(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });

  describe("When it receives a request with a server error", () => {
    const error = new ServerError(500, "Server Error");
    const expectedStatusCode = 500;
    const expectedMessage = { error: "Server Error" };

    test("Then it should call status methos with status code 500", () => {
      handleGeneralError(error, req as Request, res as Response, next);

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call json method with the error message 'Server error'", () => {
      handleGeneralError(error, req as Request, res as Response, next);

      expect(res.json).toHaveBeenCalledWith(expectedMessage);
    });
  });
});
