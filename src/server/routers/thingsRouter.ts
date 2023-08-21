import express from "express";
import { getThings } from "../controllers/thingsControllers";

const thingsRouter = express.Router();

thingsRouter.get("/", getThings);

export default thingsRouter;
