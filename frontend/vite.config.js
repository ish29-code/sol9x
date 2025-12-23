import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  plugins: [react()],
  server: {
    proxy: {
      "/api": {
        target: "https://sol9x-backend-0npm.onrender.com",
        changeOrigin: true,
        secure: false,
      },
    },
  },
});
