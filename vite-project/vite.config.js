import Inspect from 'vite-plugin-inspect';
import { createHtmlPlugin } from 'vite-plugin-html';

export default {
    base: "/html-tags.github.io/",
    plugins: [
        Inspect(),
    ],
}; 