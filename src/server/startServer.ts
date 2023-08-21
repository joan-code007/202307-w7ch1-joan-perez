import chalk from "chalk";
import "dotenv/config.js";
import app from "./index.js";

const startServer = () => {
  const port = 4000;

  app.listen(port, () => {
    console.log(chalk.blue(`Listening on http://localhost:${port}`));
  });
};

export default startServer;
