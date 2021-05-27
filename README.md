### 初始化项目
`yarn init -y`

### 安装webpack依赖包
`yarn add webpack webpack-cli -D`

 ### 在package.json中配置scripts, 添加脚本
 ```js
 scripts: {
	"build": "webpack --config webpack.config.js",
  "serve": "webpack serve --config webpack.config.js"
}
```

### 安装依赖包，配置webpack.config.js

### source map
```js
mode: 'development',
devtool: 'eval-source-map'
```
或者
```js
mode: 'production',
devtool: 'source-map'
// devtool: ' nosources-source-map'  不暴露源码
```
> 在生产环境下，如果省略了 devtool 选项，则最终生成的文件中不包含 Source Map
