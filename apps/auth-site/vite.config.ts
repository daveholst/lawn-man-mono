import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

export default defineConfig(({ command, mode }) => {
    if (command === 'serve') {
        return {
            server: { port: 3100 },
            plugins: [tsconfigPaths({ root: '../..' }), reactRefresh()],
            define: {
                global: {},
            },
        }
    }
    return { plugins: [tsconfigPaths({ root: '../..' }), reactRefresh()] }
})
