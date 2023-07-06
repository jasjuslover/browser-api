import { defineConfig } from "vite";

export default defineConfig(({ command, mode, ssrBuild }) => {
  if (command !== "serve") {
    // command === 'build'
    return {
      // build specific config
      base: "/browser-api",
      build: {
        outDir: "../dist",
      },
    };
  }
  return {};
});
