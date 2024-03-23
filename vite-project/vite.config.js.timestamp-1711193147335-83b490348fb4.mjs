// vite.config.js
import Inspect from "file:///C:/Users/%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9/Desktop/html-tags.github.io/vite-project/node_modules/vite-plugin-inspect/dist/index.mjs";
import { createHtmlPlugin } from "file:///C:/Users/%D0%95%D0%B2%D0%B3%D0%B5%D0%BD%D0%B8%D0%B9/Desktop/html-tags.github.io/vite-project/node_modules/vite-plugin-html/dist/index.mjs";
var vite_config_default = {
  base: "/html-tags.github.io",
  plugins: [
    Inspect(),
    createHtmlPlugin({
      filename: "index.html",
      template: "./index.html",
      minify: true,
      head: [
        { tag: "meta", attrs: { name: "canonical", content: "/" } }
      ]
    }),
    createHtmlPlugin({
      filename: "file_loader.html",
      template: "file_loader/file_loader.html",
      minify: true,
      scripts: [
        { src: "file_loader/main.js", type: "module" }
      ]
    }),
    createHtmlPlugin({
      filename: "w3c_page.html",
      template: "w3c/w3c_page.html",
      minify: true
    })
  ]
};
export {
  vite_config_default as default
};
//# sourceMappingURL=data:application/json;base64,ewogICJ2ZXJzaW9uIjogMywKICAic291cmNlcyI6IFsidml0ZS5jb25maWcuanMiXSwKICAic291cmNlc0NvbnRlbnQiOiBbImNvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9kaXJuYW1lID0gXCJDOlxcXFxVc2Vyc1xcXFxcdTA0MTVcdTA0MzJcdTA0MzNcdTA0MzVcdTA0M0RcdTA0MzhcdTA0MzlcXFxcRGVza3RvcFxcXFxodG1sLXRhZ3MuZ2l0aHViLmlvXFxcXHZpdGUtcHJvamVjdFwiO2NvbnN0IF9fdml0ZV9pbmplY3RlZF9vcmlnaW5hbF9maWxlbmFtZSA9IFwiQzpcXFxcVXNlcnNcXFxcXHUwNDE1XHUwNDMyXHUwNDMzXHUwNDM1XHUwNDNEXHUwNDM4XHUwNDM5XFxcXERlc2t0b3BcXFxcaHRtbC10YWdzLmdpdGh1Yi5pb1xcXFx2aXRlLXByb2plY3RcXFxcdml0ZS5jb25maWcuanNcIjtjb25zdCBfX3ZpdGVfaW5qZWN0ZWRfb3JpZ2luYWxfaW1wb3J0X21ldGFfdXJsID0gXCJmaWxlOi8vL0M6L1VzZXJzLyVEMCU5NSVEMCVCMiVEMCVCMyVEMCVCNSVEMCVCRCVEMCVCOCVEMCVCOS9EZXNrdG9wL2h0bWwtdGFncy5naXRodWIuaW8vdml0ZS1wcm9qZWN0L3ZpdGUuY29uZmlnLmpzXCI7aW1wb3J0IEluc3BlY3QgZnJvbSAndml0ZS1wbHVnaW4taW5zcGVjdCc7XHJcbmltcG9ydCB7IGNyZWF0ZUh0bWxQbHVnaW4gfSBmcm9tICd2aXRlLXBsdWdpbi1odG1sJztcclxuXHJcbmV4cG9ydCBkZWZhdWx0IHtcclxuICAgIGJhc2U6IFwiL2h0bWwtdGFncy5naXRodWIuaW9cIixcclxuICAgIHBsdWdpbnM6IFtcclxuICAgICAgICBJbnNwZWN0KCksXHJcbiAgICAgICAgY3JlYXRlSHRtbFBsdWdpbih7XHJcbiAgICAgICAgICAgIGZpbGVuYW1lOiBcImluZGV4Lmh0bWxcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IFwiLi9pbmRleC5odG1sXCIsXHJcbiAgICAgICAgICAgIG1pbmlmeTogdHJ1ZSxcclxuICAgICAgICAgICAgaGVhZDogW1xyXG4gICAgICAgICAgICAgICAgeyB0YWc6ICdtZXRhJywgYXR0cnM6IHsgbmFtZTogJ2Nhbm9uaWNhbCcsIGNvbnRlbnQ6ICcvJyB9IH1cclxuICAgICAgICAgICAgICBdXHJcbiAgICAgICAgfSksXHJcbiAgICAgICAgY3JlYXRlSHRtbFBsdWdpbih7XHJcbiAgICAgICAgICAgIGZpbGVuYW1lOiBcImZpbGVfbG9hZGVyLmh0bWxcIixcclxuICAgICAgICAgICAgdGVtcGxhdGU6IFwiZmlsZV9sb2FkZXIvZmlsZV9sb2FkZXIuaHRtbFwiLFxyXG4gICAgICAgICAgICBtaW5pZnk6IHRydWUsXHJcbiAgICAgICAgICAgIHNjcmlwdHM6IFtcclxuICAgICAgICAgICAgICAgIHsgc3JjOiAnZmlsZV9sb2FkZXIvbWFpbi5qcycsIHR5cGU6ICdtb2R1bGUnIH0sXHJcbiAgICAgICAgICAgICAgXSxcclxuICAgICAgICB9KSxcclxuICAgICAgICBjcmVhdGVIdG1sUGx1Z2luKHtcclxuICAgICAgICAgICAgZmlsZW5hbWU6IFwidzNjX3BhZ2UuaHRtbFwiLFxyXG4gICAgICAgICAgICB0ZW1wbGF0ZTogXCJ3M2MvdzNjX3BhZ2UuaHRtbFwiLFxyXG4gICAgICAgICAgICBtaW5pZnk6IHRydWUsXHJcbiAgICAgICAgfSlcclxuICAgIF0sXHJcbn07ICJdLAogICJtYXBwaW5ncyI6ICI7QUFBNFksT0FBTyxhQUFhO0FBQ2hhLFNBQVMsd0JBQXdCO0FBRWpDLElBQU8sc0JBQVE7QUFBQSxFQUNYLE1BQU07QUFBQSxFQUNOLFNBQVM7QUFBQSxJQUNMLFFBQVE7QUFBQSxJQUNSLGlCQUFpQjtBQUFBLE1BQ2IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLE1BQ1IsTUFBTTtBQUFBLFFBQ0YsRUFBRSxLQUFLLFFBQVEsT0FBTyxFQUFFLE1BQU0sYUFBYSxTQUFTLElBQUksRUFBRTtBQUFBLE1BQzVEO0FBQUEsSUFDTixDQUFDO0FBQUEsSUFDRCxpQkFBaUI7QUFBQSxNQUNiLFVBQVU7QUFBQSxNQUNWLFVBQVU7QUFBQSxNQUNWLFFBQVE7QUFBQSxNQUNSLFNBQVM7QUFBQSxRQUNMLEVBQUUsS0FBSyx1QkFBdUIsTUFBTSxTQUFTO0FBQUEsTUFDL0M7QUFBQSxJQUNOLENBQUM7QUFBQSxJQUNELGlCQUFpQjtBQUFBLE1BQ2IsVUFBVTtBQUFBLE1BQ1YsVUFBVTtBQUFBLE1BQ1YsUUFBUTtBQUFBLElBQ1osQ0FBQztBQUFBLEVBQ0w7QUFDSjsiLAogICJuYW1lcyI6IFtdCn0K
