import type { Config } from "jest";

const config: Config = {
  preset: "ts-jest",
  testEnvironment: "jsdom",
  setupFilesAfterEnv: ["<rootDir>/src/__test__/setupTests.ts"],
  moduleFileExtensions: ["ts", "tsx", "js", "jsx"],
  moduleNameMapper: {
    "\\.(css|scss)$": "identity-obj-proxy",
    "^components/(.*)$": "<rootDir>/src/components/$1",
    "^styles/(.*)$": "<rootDir>/src/styles/$1",
  },
};
export default config;
