import debug from "debug";
import "dotenv/config";
import connectToDatabase from "./server/data/connectToDatabase.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4000;

const mongoDbUrl = process.env.MONGODB_URL!;

try {
  await connectToDatabase(mongoDbUrl);

  startServer(port);

  debug("Connected to database");
} catch (error: unknown) {
  debug("Error connecting to database");
  debug((error as Error).message);

  process.exit(1);
}
