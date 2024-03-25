import Inspect from 'vite-plugin-inspect';
import { createHtmlPlugin } from 'vite-plugin-html';

export default {
    base: "/html-tags.github.io/",
    plugins: [
        Inspect(),
        createHtmlPlugin({
            minify: true,
            pages: [
                {
                    filename: "Main Page",
                    template: "index.html"
                },
                {
                    filename: "W3C",
                    template: "w3c/w3c_page.html"
                },
                {
                    filename: "File Loader",
                    template: "file_loader/file_loader.html"
                }
            ]
        })
    ],
}; 