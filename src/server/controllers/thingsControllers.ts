import { type Request, type Response } from "express";
import knownThings from "../data/things.js";
import { type Thing } from "../data/types.js";
import { type CustomRequest } from "./types.js";

export const getThings = (_req: Request, res: Response) => {
  console.log("Things got delivered by GET method.");

  res.status(200).json({ knownThings });
};

export const getThingById = (req: Request, res: Response) => {
  const { idThing } = req.params;

  const foundThing = knownThings.find((thing) => thing.id === Number(idThing));

  console.log("Thing got delivered by GET method.");

  res.status(200).json(foundThing);
};

export const deleteThingById = (req: Request, res: Response) => {
  const { idThing } = req.params;

  const thingToDeletePosition = knownThings.findIndex(
    (thing) => thing.id === Number(idThing)
  );

  knownThings.splice(thingToDeletePosition, 1);

  res.status(200).json({ message: `Thing nº${idThing} got deleted` });
};

export const createThingByBody = (req: CustomRequest<Thing>, res: Response) => {
  const newThing: Thing = req.body;

  if (!newThing) {
    return new Error("value must be defined");
  }

  const newThings = [...knownThings, newThing];

  console.log(req.body);
  res.status(201).json(newThings);
};
