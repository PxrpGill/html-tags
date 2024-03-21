import Inspect from 'vite-plugin-inspect';
import { createHtmlPlugin } from 'vite-plugin-html';

export default {
    base: "/html-tags.github.io",
    plugins: [
        Inspect(),
        createHtmlPlugin({
            title: 'HTML теги',
            filename: 'index.html',
            template: 'index.html'
        },
        {
            title: 'W3C',
            filename: 'w3c_page.html',
            template: 'w3c/w3c_page.html'
        }
        )
    ],
}; 