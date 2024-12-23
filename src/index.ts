import app from "./server/index.js";
import startServer from "./server/startServer.js";

const port = process.env.PORT ?? 4000;

startServer(Number(port), app);
