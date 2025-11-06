import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "./",  // Relative paths for GitHub Pages / custom domain
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "src")  // Optional, for @ imports
    }
  },
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
