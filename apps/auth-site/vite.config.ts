import reactRefresh from '@vitejs/plugin-react-refresh'
import { defineConfig } from 'vite'
import tsconfigPaths from 'vite-tsconfig-paths'

// https://vitejs.dev/config/
// export default defineConfig(({ command, mode }) => {
//     if (command === 'serve') {
//         return {
//             define: {
//                 global: {},
//             },
//             // resolve: {
//             //     alias: [
//             //         {
//             //             find: /^~.+/,
//             //             replacement: (val) => {
//             //                 return val.replace(/^~/, '')
//             //             },
//             //         } as any,
//             //     ],
//             // },
//         }
//     }
//     return {
//         resolve: {
//             alias: [
//                 {
//                     find: /^~.+/,
//                     replacement: (val) => {
//                         return val.replace(/^~/, '')
//                     },
//                 } as any,
//             ],
//         },
//     }
// })

export default defineConfig({
    plugins: [tsconfigPaths({ root: '../..' }), reactRefresh()],
    // resolve: {
    //     alias: [
    //         {
    //             find: /^~.+/,
    //             replacement: (val) => {
    //                 return val.replace(/^~/, '')
    //             },
    //         } as any,
    //     ],
    // },
    define: {
        global: {},
    },
})
