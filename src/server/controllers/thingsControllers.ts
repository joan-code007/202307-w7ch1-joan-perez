import { type Request, type Response } from "express";
import { things } from "../../data/thingsData";

export const getThings = (_req: Request, res: Response) => {
  console.log("Request geThings to get all things");

  res.status(200).json({ things });
};
