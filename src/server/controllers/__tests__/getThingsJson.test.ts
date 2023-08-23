import { type Request, type Response } from "express";
import { getThings } from "../thingsControllers.js";

const req: Partial<Request> = {};

const res: Partial<Response> = {
  status: jest.fn().mockReturnThis(),
  json: jest.fn(),
};

describe("Given a things controller", () => {
  describe("When it receives a response", () => {
    test("Then it should call its method json", () => {
      getThings(req as Request, res as Response);

      expect(res.json).toHaveBeenCalledTimes(1);
    });
  });
});
