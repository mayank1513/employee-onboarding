import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react()],
  build: {
    sourcemap: false,
    rollupOptions: {
      onLog(level, log, handler) {
        if (log.cause) {
          return;
        }
        handler(level, log);
      },
    },
  },
});
