
import { defineConfig } from "vite";
import react from "@vitejs/plugin-react";

export default defineConfig({

  // Active le support React dans Vite.
  plugins: [react()],

  server: {

    // Port du serveur de développement React.
    port: 5173,

    // Redirige les requêtes qui commencent par /api.
    proxy: {
      "/api": {

        // Adresse de notre backend Spring Boot.
        target: "http://localhost:8080",

        // Adapte l'origine de la requête côté proxy.
        changeOrigin: true
      }
    }
  }
});
