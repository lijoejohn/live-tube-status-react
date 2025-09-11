import { defineConfig, loadEnv } from "vite";
import react from "@vitejs/plugin-react";
import { viteStaticCopy } from "vite-plugin-static-copy";
import path from "path";

export default defineConfig(({ mode }) => {
  // Load env file based on `mode` in the current working directory.
  // Set the third parameter to '' to load all env regardless of the `VITE_` prefix.
  const env = loadEnv(mode, process.cwd(), "");
  return {
    define: { "process.env": JSON.stringify(env) },
    base: env.VITE_BASE_URL || "/",
    plugins: [
      react(),
      // Copy GOV.UK assets (fonts/images) so the compiled CSS can find them at /assets
      viteStaticCopy({
        targets: [
          {
            src: "node_modules/govuk-frontend/dist/govuk/assets/*",
            dest: "assets",
          },
        ],
      }),
    ],
    resolve: {
      alias: {
        // keep in sync with tsconfig.paths
        components: path.resolve(__dirname, "src/components"),
      },
    },
    css: {
      preprocessorOptions: {
        scss: {
          // Let Sass resolve "govuk-frontend/govuk/..."
          includePaths: [path.resolve(__dirname, "node_modules")],
          quietDeps: true,
        },
      },
    },
  };
});
