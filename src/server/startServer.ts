import { type Express } from "express";
import chalk from "chalk";

const startServer = (port: number, app: Express): void => {
  app.listen(port, () => {
    console.log(chalk.green(`Serving in port: ${port}`));
  });
};

export default startServer;
