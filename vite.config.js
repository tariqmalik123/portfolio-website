import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";
import path from "path";

export default defineConfig({
  base: "./", // Important for GitHub Pages / custom domain
  plugins: [react()],
  build: {
    outDir: "dist",
    emptyOutDir: true
  }
});
