import VitePluginBrowserSync from 'vite-plugin-browser-sync'
import viteImagemin from 'vite-plugin-imagemin'
import { resolve } from 'path'

export default {
    build: {
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'index.html'),
            },
            output: {
                chunkFileNames: 'assets/js/[name]-[hash].js',
                entryFileNames: 'assets/js/[name]-[hash].js',

                assetFileNames: ({name}) => {
                    if (/\.(gif|jpe?g|png|svg)$/.test(name ?? '')){
                        return 'assets/images/[name]-[hash][extname]';
                    }

                    if (/\.css$/.test(name ?? '')) {
                        return 'assets/css/[name]-[hash][extname]';
                    }

                    if (/\.php$/.test(name ?? '')) {
                        return 'php/[name][extname]';
                    }

                    if (/\.(ttf|eot|woff|woff2)$/.test(name ?? '')){
                        return 'assets/fonts/[name]-[hash][extname]';
                    }
                    return 'assets/[name]-[hash][extname]';
                },
            },
        },
    },
    plugins: [
        VitePluginBrowserSync({
            bs: {
                ui: {
                    port: 8080
                },
                notify: false,
                host: 'pdotest.lan',
                open: {
                    browser: 'firefox developer edition',
                },
                browser: 'firefox developer edition',
                ghostMode: {
                    clicks: true,
                    scroll: true,
                    location: true,
                    forms: true
                },
                reloadOnRestart: true,
                scrollProportionally: true
            }
        }),
        viteImagemin({
            gifsicle: {
                optimizationLevel: 7,
                interlaced: false,
            },
            optipng: {
                optimizationLevel: 7,
            },
            mozjpeg: {
                quality: 60,
            },
            pngquant: {
                quality: [0.8, 0.9],
                speed: 4,
            },
            svgo: {
                plugins: [
                    {
                        name: 'removeViewBox',
                    },
                    {
                        name: 'removeEmptyAttrs',
                        active: false,
                    },
                ],
            },
        })
    ]
}