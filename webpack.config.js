// const path = require('path')
const HtmlWebpackPlugin = require('html-webpack-plugin')
module.exports = {
  // 入口，打包谁 默认./src/index.js
  entry: './src/main.js',
  // 出口，打包到哪
  output: {
    // 输出的文件名， 默认main.js
    filename: 'bundle.js',
    // 打包到哪的路径，默认dist，需要是绝对路径
    // path: path.join(__dirname, 'dist')
  },
  plugins: [
    new HtmlWebpackPlugin({
      // 以这个文件为模板生成html
      template: './public/index.html',
    }),
  ],
  // 打包模式，开发模式不会压缩代码，打包速度更快。生产模式：production
  mode: 'development',
  // eval-source-map 开发模式下使用, 保证运行时的行数和源代码行数一致, 调错
  devtool: 'eval-source-map',
  // 配置loader
  module: {
    rules: [
      // 处理css
      {
        test: /\.css$/,
        use: ['style-loader', 'css-loader'],
      },
      // 处理less
      {
        test: /\.less$/,
        use: ['style-loader', 'css-loader', 'less-loader'],
      },
      // 处理sass
      {
        test: /\.s[ac]ss$/,
        use: ['style-loader', 'css-loader', 'sass-loader'],
      },
      // 处理图片
      {
        test: /\.(png|jpg|gif|jpeg)$/i,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
            },
          },
        ],
      },
      // 处理字体图标
      {
        test: /\.(eot|svg|ttf|woff|woff2)$/,
        use: [
          {
            loader: 'url-loader',
            options: {
              limit: 8 * 1024,
              // 配置输出的文件名
              name: '[name].[ext]',
              // 配置静态资源的引用路径
              publicPath: '../fonts/',
              // 配置输出的文件目录
              outputPath: 'fonts/',
            },
          },
        ],
      },
      // 处理音频视频
      {
        test: /\.(mp3|mp4|ogg)$/,
        use: {
          loader: 'url-loader',
          options: {
            // 如果文件不超过8k，会把文件转成base64
            // 如果文件超过了8k，会直接生成文件 依赖另一个 file-loader
            limit: 8 * 1024,
          },
        },
      },
      // babel 处理高版本js语法
      {
        test: /\.js$/,
        exclude: /(node_modules|bower_components)/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: ['@babel/preset-env'],
          },
        },
      },
    ],
  },
  // 配置webpack-dev-server
  devServer: {
    port: 8080,
    open: true, //自动打开浏览器
  },
}
