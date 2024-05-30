import { defineConfig } from 'vite';
import { resolve } from 'path';
import { browserslistToTargets } from 'lightningcss';
import browserslist from 'browserslist';

export default defineConfig({
    base: "/html-tags/",
    root: 'src/pages',
    publicDir: resolve(__dirname, 'public'),
    css: {
        transformer: 'lightningcss',
        lightningcss: {
            targets: browserslistToTargets(browserslist('>= 0.25%'))
        }
    },
    build: {
        outDir: '../../dist',
        minify: true,
        rollupOptions: {
            input: {
                main: resolve(__dirname, 'src/pages/index.html'),
                fileLoader: resolve(__dirname, 'src/pages/file_loader.html'),
                cssStyles: resolve(__dirname, 'src/pages/css_styles.html'),
                w3c: resolve(__dirname, 'src/pages/w3c.html'),
                toDoList: resolve(__dirname, 'src/pages/list.html'),
                ...getFramesInput(resolve(__dirname, 'src/pages/frames'))
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
    },
});

function getFramesInput(directory) {
    const fs = require('fs');
    const path = require('path');

    const files = fs.readdirSync(directory);
    const input = {};

    for (const file of files) {
        const filePath = path.resolve(directory, file);
        const fileName = path.parse(file).name;
        if (fs.statSync(filePath).isFile() && path.extname(file) === '.html') {
            input[fileName] = filePath;
        }
    }

    return input;
}