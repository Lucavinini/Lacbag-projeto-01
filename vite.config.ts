import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({
  base: "/lacbag-industrial-solutions/",
  plugins: [react()],
  server: {
    port: 3000,
  },
});
