import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";
import tailwindcss from "@tailwindcss/vite";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react(), tailwindcss()],
  build: {
    rollupOptions: {
      output: {
        manualChunks: {
          // Group related vendor libs together
          "three-ecosystem": [
            "three",
            "@react-three/fiber",
            "@react-three/drei",
          ],
          "react-vendor": ["react", "react-dom", "react-router-dom"],
          "ui-libs": ["framer-motion", "@mui/material"],
        },
      },
    },
  },
  assetsInclude: ["**/*.glb", "**/*.gltf", "**/*.hdr"],
});
