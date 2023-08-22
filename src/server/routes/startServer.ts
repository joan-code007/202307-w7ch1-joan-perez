import app from "./index.js";

const startServer = (port: string | number) => {
  app.listen(Number(port), () => {
    console.log(`Listening on http://localhost:${port}/`);
  });
};

export default startServer;
