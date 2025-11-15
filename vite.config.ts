import { reactRouter } from "@react-router/dev/vite";
import tailwindcss from "@tailwindcss/vite";
import { defineConfig } from "vite";
import tsconfigPaths from "vite-tsconfig-paths";

export default defineConfig((config) => ({
  plugins: [tailwindcss(), reactRouter(), tsconfigPaths()],
  server: {
    cors: true,
    host: "0.0.0.0",
    port: 5173,
    strictPort: true,
  },
  // ref: https://github.com/remix-run/react-router/issues/12568
  resolve: {
    alias: config.command === "build" ? {
      "react-dom/server": "react-dom/server.node",
    } : undefined,
  },
}));
