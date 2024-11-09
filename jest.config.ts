import { createDefaultPreset, JestConfigWithTsJest } from "ts-jest";

const jestConfig: JestConfigWithTsJest = {
  verbose: true,
  rootDir: "src",
  collectCoverageFrom: ["**/*.ts", "!server/startServer.ts", "!index.ts"],
  coverageDirectory: "../coverage",
  ...createDefaultPreset(),
};

export default jestConfig;
