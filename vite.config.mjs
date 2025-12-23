import { defineConfig, loadEnv } from 'vite';
import react from '@vitejs/plugin-react';
import jsconfigPaths from 'vite-jsconfig-paths';
import path from 'path';

export default defineConfig(({ mode }) => {
  const env = loadEnv(mode, process.cwd(), '');

  // ✅ PUBLIC BASE PATH (NOT API URL)
  // Use '/' for Netlify/Vercel root deployments
  const BASE_PATH = env.VITE_BASE_PATH || '/';

  const PORT = 3000;

  return {
    base: BASE_PATH,

    server: {
      open: true,
      port: PORT,
      host: true
    },

    preview: {
      open: true,
      host: true
    },

    define: {
      global: 'window'
    },

    resolve: {
      alias: {
        '@': path.resolve(__dirname, 'src'),                 // optional general alias
        '@viewmodel': path.resolve(__dirname, 'src/viewmodel'), // NEW alias for your viewmodel folder
        '@ant-design/icons': path.resolve(
          __dirname,
          'node_modules/@ant-design/icons'
        ),
        // Add more aliases as needed
      }
    },


    plugins: [
      react(),
      jsconfigPaths(),
    ],

    build: {
      chunkSizeWarningLimit: 1000,
      sourcemap: true,
      cssCodeSplit: true,

      rollupOptions: {
        output: {
          chunkFileNames: 'js/[name]-[hash].js',
          entryFileNames: 'js/[name]-[hash].js',
          assetFileNames: (assetInfo) => {
            const name = assetInfo.name || '';
            const ext = name.split('.').pop();

            if (/\.css$/.test(name)) {
              return `css/[name]-[hash].${ext}`;
            }

            if (/\.(png|jpe?g|gif|svg|webp|ico)$/.test(name)) {
              return `images/[name]-[hash].${ext}`;
            }

            if (/\.(woff2?|eot|ttf|otf)$/.test(name)) {
              return `fonts/[name]-[hash].${ext}`;
            }

            return `assets/[name]-[hash].${ext}`;
          }
        }
      },

      // Only drop console/debugger in production
      ...(mode === 'production' && {
        esbuild: {
          drop: ['console', 'debugger'],
          pure: [
            'console.log',
            'console.info',
            'console.debug',
            'console.warn'
          ]
        }
      })
    },

    optimizeDeps: {
      include: [
        '@mui/material/Tooltip',
        'react',
        'react-dom',
        'react-router-dom'
      ]
    }
  };
});
