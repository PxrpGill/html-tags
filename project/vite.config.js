import { defineConfig } from 'vite';
import { resolve } from 'path';
import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';

export default defineConfig({
    base: "/html-tags",
    root: 'src/pages',
    css: {
        transformer: 'lightningcss',
        lightningcss: {
            targets: browserslistToTargets(browserslist('>= 0.25%'))
        }
    },
    build: {
        outDir: '../../dist',
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/pages/index.html'),
                fileLoader: resolve(__dirname, 'src/pages/file_loader.html'),
                cssStyles: resolve(__dirname, 'src/pages/css_styles.html'),
                w3c: resolve(__dirname, 'src/pages/w3c.html'),
                toDoList: resolve(__dirname, 'src/pages/list.html')
            }
        }
    },
    server: {
        open: true,
    },
    resolve: {
        alias: {
            '/scripts': resolve(__dirname, './src/scripts'),
            '/styles': resolve(__dirname, './src/styles'),
            '/data': resolve(__dirname, './src/data'),
        },
    }
});