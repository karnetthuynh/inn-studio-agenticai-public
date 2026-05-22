import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  base:
    process.env.NODE_ENV === "production"
      ? "/Karnett-Huynh/inn-studio-agenticai/" // GitHub Pages path
      : "/", // Local development path
});
