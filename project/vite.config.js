import Inspect from 'vite-plugin-inspect';
import { createHtmlPlugin } from 'vite-plugin-html';

export default {
    base: "/html-tags/",
    plugins: [
        Inspect(),
        createHtmlPlugin({
            minify: true,
            pages: [
                {
                    filename: "index.html",
                    template: "index.html"
                },
                {
                    filename: "w3c/w3c_page.html",
                    template: "w3c/w3c_page.html"
                },
                {
                    filename: "file_loader/file_loader.html",
                    template: "file_loader/file_loader.html",
                    scripts: [
                        { src: "file_loader/loader.js", type: "module" },
                    ],
                },
                {
                    filename: "to_do_list/list.html",
                    template: "to_do_list/list.html",
                    scripts: [
                        { src: "to_do_list/script.js", type: "module" }
                    ]
                },
                {
                    filename: "css_styles.html",
                    template: "css_styles.html",
                    scripts: [
                        { src: "css_script.js", type: "module" }
                    ]
                }
            ]
        })
    ],
}; 