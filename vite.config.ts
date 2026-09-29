import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, '.', 'VITE_');
  const configuredBasePath = env.VITE_BASE_PATH?.trim() || '/';

  if (configuredBasePath[0] !== '/') {
    throw new Error('VITE_BASE_PATH must be an absolute path, such as "/" or "/repository-name/".');
  }

  return {
    base: configuredBasePath[configuredBasePath.length - 1] === '/'
      ? configuredBasePath
      : `${configuredBasePath}/`,
    plugins: [react()],
    server: {
      host: '0.0.0.0',
      port: 5173
    }
  };
});
