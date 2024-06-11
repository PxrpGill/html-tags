import { transform } from 'lightningcss';
import { readFile } from 'fs/promises';

export default function lightningCSSPlugin() {
  let mixins = new Map(); // Создаем карту миксинов здесь, вне метода buildStart

  return {
    name: 'vite-plugin-lightningcss',
    async transform(code, id) {
      if (!id.endsWith('.css')) return;

      const res = await transform({
        filename: id,
        minify: true,
        targets: { chrome: 100 << 16 },
        code: Buffer.from(code),
        customAtRules: {
          mixin: {
            prelude: '<custom-ident>',
            body: 'style-block'
          },
          apply: {
            prelude: '<custom-ident>'
          }
        },
        visitor: {
          Rule: {
            custom: {
              mixin(rule) {
                mixins.set(rule.prelude.value, rule.body.value); // Используем переменную mixins, а не this.mixins
                return [];
              },
              apply(rule) {
                return mixins.get(rule.prelude.value); // Используем переменную mixins, а не this.mixins
              }
            }
          }
        }
      });

      return {
        code: res.code.toString(),
        map: res.map 
      };
    },
    buildStart() {
      // Опционально: Можно очистить карту миксинов перед началом сборки
      mixins.clear();
    }
  };
}
