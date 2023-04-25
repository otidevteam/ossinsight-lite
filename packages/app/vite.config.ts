import { defineConfig } from 'vite';
import widgets, { mysqlPlugin } from 'widgets-vite-plugin';
import viteReact from '@vitejs/plugin-react';
import externalGlobals from 'rollup-plugin-external-globals';
import svgr from 'vite-plugin-svgr';

export default defineConfig((env) => ({
  plugins: [
    widgets(),
    mysqlPlugin(),
    viteReact({
      jsxRuntime: env.command === 'build' ? 'classic' : 'automatic',
    }),
    svgr({
      svgrOptions: {
        svgProps: {
          fill: 'currentColor'
        }
      }
    }),
    {
      apply: 'build',
      ...externalGlobals({
        'react': 'React',
        'react-dom': 'ReactDOM',
      }),
    },
  ],
}));