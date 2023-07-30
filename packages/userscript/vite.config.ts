import { defineConfig } from 'vite'
import monkey from 'vite-plugin-monkey'
import packageJson from './package.json'

// https://vitejs.dev/config/
export default defineConfig({
    // https://github.com/lisonge/vite-plugin-monkey/issues/10#issuecomment-1207264978
    esbuild: {
        charset: 'utf8',
    },
    plugins: [
        monkey({
            entry: 'src/main.ts',
            userscript: {
                name: {
                    '': packageJson.title,
                },
                author: packageJson.author,
                namespace: packageJson.author,
                description: {
                    '': packageJson.description,
                },
                license: packageJson.license,
                match: [
                    'https://twitter.com/*',
                    'https://x.com/*',
                    'https://tweetdeck.twitter.com/*',
                ],
                icon: 'https://abs.twimg.com/favicons/twitter.2.ico',
            },
            build: {
                fileName: 'twitter.user.js',
            },
            server: {
                open: true,
            },
        }),
    ],
    build: {
        cssMinify: false,
    },
})
