import { type NextFunction, type Request, type Response } from "express";
import knownThings from "../../data/things.js";
import { type ParamIdRequest } from "../../types.js";
import CustomError from "../CustomError/CustomError.js";
import {
  getThingByIdController,
  getThingsController,
} from "./thingsControllers.js";

const req: Partial<Request> = {};
const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};
const next: Partial<NextFunction> = {};

beforeEach(() => {
  jest.clearAllMocks();
});

const expectedStatusCode = 200;

describe("Given a getThingsController controller", () => {
  describe("When it receives a request", () => {
    test("Then it should call its method status with 200", () => {
      getThingsController(
        req as Request,
        res as Response,
        next as NextFunction
      );

      expect(res.status).toHaveBeenCalledWith(expectedStatusCode);
    });

    test("Then it should call its json method", () => {
      getThingsController(
        req as Request,
        res as Response,
        next as NextFunction
      );

      const timesCalled = 1;

      expect(res.json).toHaveBeenCalledTimes(timesCalled);
    });
  });
});

describe("Given a getthingByIdController controller", () => {
  describe("When it receives a request with 1 as request parameter", () => {
    test("Then it should call it's json method with a the thing 'anger management", () => {
      const req: Partial<Request<{ idThing: string }>> = {
        params: { idThing: "1" },
      };

      const thing = knownThings.find((thing) => thing.id === 1);

      getThingByIdController(
        req as ParamIdRequest,
        res as Response,
        next as NextFunction
      );

      expect(res.json).toHaveBeenCalledWith(thing);
    });
  });

  describe("When it receives a request with 4 as request parameter", () => {
    test("Then it should throw a custom error with the message 'Error, can't get thing', and the status code 404", () => {
      const req: Partial<Request<{ idThing: string }>> = {
        params: { idThing: "4" },
      };
      const newError = new CustomError("Error, can't get thing", 404);
      const next: Partial<NextFunction> = jest.fn();

      getThingByIdController(
        req as ParamIdRequest,
        res as Response,
        next as NextFunction
      );

      expect(next).toHaveBeenCalledWith(newError);
    });
  });
});
