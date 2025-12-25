import { defineConfig } from 'vite';
import react from '@vitejs/plugin-react';
import tailwindcss from '@tailwindcss/postcss';
import autoprefixer from 'autoprefixer';
import fs from 'fs';
import path from 'path';

// Logic to find the .NET SSL certificate
const baseFolder =
  process.env.APPDATA !== undefined && process.env.APPDATA !== ''
    ? `${process.env.APPDATA}/ASP.NET/https`
    : `${process.env.HOME}/.aspnet/https`;

const certificateName = "inventory_management_system.Web";
const certFilePath = path.join(baseFolder, `${certificateName}.pem`);
const keyFilePath = path.join(baseFolder, `${certificateName}.key`);

export default defineConfig({
  plugins: [react()],
  css: {
    postcss: {
      plugins: [
        tailwindcss(),
        autoprefixer(),
      ],
    },
  },
  server: {
    port: 44447, // Matches <SpaProxyServerUrl> in .csproj
    strictPort: true,
    https: {
      key: fs.readFileSync(keyFilePath),
      cert: fs.readFileSync(certFilePath),
    },
    proxy: {
      '/api': {
        target: 'https://localhost:5001', // Matches applicationUrl in launchSettings.json
        secure: false,
        changeOrigin: true
      }
    }
  }
});