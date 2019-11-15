const path = require("path");
// JS线上路径
const jsPublicPath = "/";
// 图片线上路径
const imagePublicPath = "/";
// sass公共路径
const sassPublicPaths = [
  path.join(__dirname, "./src/styles/reset.scss"),
  path.join(__dirname, "./src/styles/common.scss")
];

module.exports = {
  chainWebpack: config => {
    /* 修改mini-css-extract-plugin的css名称 */
    config
      .mode("production")
      .plugin("extract-css")
      .tap(args => {
        args[0].filename = "css/[name].css";
        return args;
      });
    /* 修改输出文件名称 */
    config
      .mode("production")
      .output.filename("js/[name].js")
      .chunkFilename("js/[name].js")
      .publicPath(jsPublicPath);
    /* 添加sass-resources-loader */
    const oneOfsMap = config.mode("production").module.rule("scss").oneOfs
      .store;
    oneOfsMap.forEach(item => {
      item
        .use("sass-resources-loader")
        .loader("sass-resources-loader")
        .options({
          resources: sassPublicPaths
        })
        .end();
    });
    /* 重新设定images规则 */
    const imagesRule = config.mode("production").module.rule("images");
    imagesRule.uses.clear();
    imagesRule
      .use("url-loader")
      .loader("url-loader")
      .options({
        limit: 100000,
        name: "img/[name].[hash:7].[ext]",
        publicPath: imagePublicPath
      });
  }
};
