import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'
// import polyfillNode from 'rollup-plugin-polyfill-node'

export default defineConfig(({ command }) => {
    if (command === 'serve') {
        return {
            plugins: [
                tsconfigPaths({ root: '../..' }),
                reactRefresh(),
                // polyfillNode(),
            ],
            define: {
                global: {},
            },
            //     optimizeDeps: {
            //         exclude: ['mqtt'], // <= The libraries that need shimming should be excluded from dependency optimization.
            //     },
        }
    }
    return {
        plugins: [
            tsconfigPaths({ root: '../..' }),
            reactRefresh(),
            // polyfillNode(),
        ],
        // optimizeDeps: {
        // exclude: ['mqtt'], // <= The libraries that need shimming should be excluded from dependency optimization.
        // },
        // resolve: { alias: { mqtt: 'mqtt/dist/mqtt.js' } },
    }
})
