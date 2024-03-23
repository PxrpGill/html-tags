import Inspect from 'vite-plugin-inspect';
import { createHtmlPlugin } from 'vite-plugin-html';

export default {
    base: "/html-tags.github.io",
    plugins: [
        Inspect(),
        createHtmlPlugin({
            filename: "file_loader.html",
            template: "file_loader/file_loader.html",
            minify: true,
            scripts: [
                { src: 'file_loader/main.js', type: 'module' },
              ],
        }),
        createHtmlPlugin({
            filename: "w3c_page.html",
            template: "w3c/w3c_page.html",
            minify: true,
        })
    ],
}; 