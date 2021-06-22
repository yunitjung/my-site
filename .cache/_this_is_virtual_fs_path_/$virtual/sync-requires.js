
// prefer default export if available
const preferDefault = m => (m && m.default) || m


exports.components = {
  "component---src-pages-404-js": preferDefault(require("D:\\project\\my-site\\src\\pages\\404.js")),
  "component---src-pages-about-js": preferDefault(require("D:\\project\\my-site\\src\\pages\\about.js")),
  "component---src-pages-index-js": preferDefault(require("D:\\project\\my-site\\src\\pages\\index.js")),
  "component---src-pages-work-js": preferDefault(require("D:\\project\\my-site\\src\\pages\\work.js"))
}

