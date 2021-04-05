const path = require("path");
export default {
  extraBabelPlugins: [
    ["import", { libraryName: "antd", libraryDirectory: "es", style: "css" }],
  ],
  alias: {
      "@": path.resolve("./src/")
  },
  
env: {
    development: { // 针对本地开发环境 配置资源路径
      publicPath: '/',
    },
    // production: { s3中不需要这个配置
    //   publicPath: '/dist/',
    // }
  }
};
