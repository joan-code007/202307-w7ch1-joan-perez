import startServer from "./routes/startServer.js";

const port = process.env.PORT ?? 4000;

startServer(Number(port));
