import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

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
            // optimizeDeps: {
            //     exclude: ['mqtt'], // <= The libraries that need shimming should be excluded from dependency optimization.
            // },
            // required for mqtt to work:https://github.com/mqttjs/MQTT.js/issues/1269
            resolve: { alias: { mqtt: 'mqtt/dist/mqtt.js' } },
        }
    }
    return {
        plugins: [
            tsconfigPaths({ root: '../..' }),
            reactRefresh(),
            // polyfillNode(),
        ],
        // define: {
        //     global: {},
        // },
        // optimizeDeps: {
        // exclude: ['mqtt'], // <= The libraries that need shimming should be excluded from dependency optimization.
        // },
        resolve: { alias: { mqtt: 'mqtt/dist/mqtt.js' } },
    }
})
