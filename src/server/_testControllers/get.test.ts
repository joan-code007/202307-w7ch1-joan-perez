import { type Request, type Response } from "express";
import { getThings } from "../controllers/thingsControllers.js";

const req: Partial<Request> = {};

const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("Given a things controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its method status with 200", () => {
      const expectedCode = 200;

      getThings(req as Request, res as Response);

      expect(res.status).toHaveBeenCalledWith(expectedCode);
    });
  });
});
