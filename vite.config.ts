import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import path from "path";

export default defineConfig({
  plugins: [react()],
  resolve: {
    alias: {
      "@": path.resolve(__dirname, "./src"),
      "@/theme": path.resolve(__dirname, "./theme"),
      "@/storybook": path.resolve(__dirname, "./.storybook"),
    },
  },
});
