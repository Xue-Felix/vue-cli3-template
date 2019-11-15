# vue-cli3-simple
> 基于vue-cli@3搭建的单页面应用开发模板

## 简介
基于vue-cli@3搭建的单页面应用开发模板，集成了`vue-router`、`vuex`、`babel`、`sass`和`eslint`，在此基础上添加了一下模块：
* 添加了`husky`和`commitizen`用于规范`commit`
* 添加了`stylelint`用于检测`sass`语法
* 增加`sass-resources-loader`用于引入公共`sass`文件
* 增加`postcss-pxtorem`插件用于`px`和`rem`之间的转换
* 增加`image-webpack-loader`用于编译后压缩相关图片体积

## 相关命令

### 安装依赖
```
yarn install
```

### 开发
```
yarn start
// Or
yarn run serve
```

### 编译打包
```
yarn run build
```

### 格式检测和修复
```
yarn run lint
```

### 提交代码
```
yarn commit
...
git push
```

## 自定义相关配置

### 忽略样式检测
在`.stylelintignore`文件中添加相应规则

### 修改样式规则
在`.stylelintrc`添加相应[Rules](https://stylelint.io/user-guide/rules)

### 修改pxtorem的font-size值
在`postcss.config.js`中修改相应的值
```
module.exports = {
  plugins: {
    autoprefixer: {},
    "postcss-pxtorem": {
      rootValue: 75,  // 修改相应的值
      propList: ["*"]
    }
  }
};
```

### 修改js、image的publicpath及修改公共sass文件路径
在`vue.config.js`中修改相关的路径
```
// JS线上路径
const jsPublicPath = "/";
// 图片线上路径
const imagePublicPath = "/";
// sass公共路径
const sassPublicPaths = [
  path.join(__dirname, "./src/styles/reset.scss"),
  path.join(__dirname, "./src/styles/common.scss")
];
```

### 自定义@vue/cli配置
See [Configuration Reference](https://cli.vuejs.org/config/).
