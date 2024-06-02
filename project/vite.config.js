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

                abbr: resolve(__dirname, 'src/pages/frames/abbr.html'),
                address: resolve(__dirname, 'src/pages/frames/address.html'),
                area: resolve(__dirname, 'src/pages/frames/area.html'),
                article: resolve(__dirname, 'src/pages/frames/article.html'),
                aside: resolve(__dirname, 'src/pages/frames/aside.html'),

                bdi: resolve(__dirname, 'src/pages/frames/bdi.html'),
                bdo: resolve(__dirname, 'src/pages/frames/bdo.html'),
                blockquote: resolve(__dirname, 'src/pages/frames/blockquote.html'),

                cite: resolve(__dirname, 'src/pages/frames/cite.html'),
                code: resolve(__dirname, 'src/pages/frames/code.html'),

                data: resolve(__dirname, 'src/pages/frames/data.html'),
                dfn: resolve(__dirname, 'src/pages/frames/dfn.html'),
                div: resolve(__dirname, 'src/pages/frames/div.html'),
                dl: resolve(__dirname, 'src/pages/frames/dl.html'),
                dt: resolve(__dirname, 'src/pages/frames/dt.html'),

                figure: resolve(__dirname, 'src/pages/frames/figure.html'),
                footer: resolve(__dirname, 'src/pages/frames/footer.html'),

                header: resolve(__dirname, 'src/pages/frames/header.html'),
                hgroup: resolve(__dirname, 'src/pages/frames/hgroup.html'),

                iframe: resolve(__dirname, 'src/pages/frames/iframe.html'),
                img: resolve(__dirname, 'src/pages/frames/img.html'),

                mainTag: resolve(__dirname, 'src/pages/frames/main.html'),
                menu: resolve(__dirname, 'src/pages/frames/menu.html'),

                nav: resolve(__dirname, 'src/pages/frames/nav.html'),

                object: resolve(__dirname, 'src/pages/frames/object.html'),
                ol: resolve(__dirname, 'src/pages/frames/ol.html'),

                p: resolve(__dirname, 'src/pages/frames/p.html'),
                pre: resolve(__dirname, 'src/pages/frames/pre.html'),

                q: resolve(__dirname, 'src/pages/frames/q.html'),

                rp: resolve(__dirname, 'src/pages/frames/rp.html'),
                ruby: resolve(__dirname, 'src/pages/frames/ruby.html'),

                samp: resolve(__dirname, 'src/pages/frames/samp.html'),
                search: resolve(__dirname, 'src/pages/frames/search.html'),
                section: resolve(__dirname, 'src/pages/frames/section.html'),
                source: resolve(__dirname, 'src/pages/frames/source.html'),
                span: resolve(__dirname, 'src/pages/frames/span.html'),

                table: resolve(__dirname, 'src/pages/frames/table.html'),
                time: resolve(__dirname, 'src/pages/frames/time.html'),
                track: resolve(__dirname, 'src/pages/frames/track.html'),

                ul: resolve(__dirname, 'src/pages/frames/ul.html'),

                var: resolve(__dirname, 'src/pages/frames/var.html')
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
