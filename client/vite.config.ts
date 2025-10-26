import { defineConfig } from "vite";
import react from "@vitejs/plugin-react-swc";

// https://vite.dev/config/
export default defineConfig({
  plugins: [react()],
  server: {
    // Ezzel a beállítással átirányítod az API hívásokat a backendre!
    proxy: {
      "/weatherforecast": {
        // A backend szerver címe (a te API-d címe)
        target: "http://localhost:7001",
        changeOrigin: true, // Szükséges a kereszt-eredetű kérésekhez
        secure: false, // Ha HTTPS-t használsz helyi fejlesztéshez (mint a 7001 port)
      },
      // Hozzáadhatsz más API végpontokat is, pl.:
      // '/api': 'https://localhost:7001'
    },
  },
});
