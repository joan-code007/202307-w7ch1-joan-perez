import express from "express";
import thingsRouter from "./routers/thingsRouter";

const app = express();

app.use("/things", thingsRouter);

export default app;
