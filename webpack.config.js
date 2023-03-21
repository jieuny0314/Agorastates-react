const path = require('path');
const HtmlWebpackPlugin = require('html-webpack-plugin');
const MiniCssExtractPlugin = require('mini-css-extract-plugin');
const CssMinimizerPlugin = require('css-minimizer-webpack-plugin');

module.exports = {
  entry: './src/index.js', // 빌드 시작 위치
  output: {
    // 빌드결과 저장 위치
    filename: 'app.bundle.js',
    path: path.resolve(__dirname, 'docs'),
    clean: true,
  },

  module: {
    rules: [
      {
        test: /\.js$/,
        exclude: /node_modules/,
        use: {
          loader: 'babel-loader',
          options: {
            presets: [
              ['@babel/preset-env'],
              ['@babel/preset-react', { runtime: 'automatic' }],
            ],
          },
        },
      },
      {
        test: /\.css$/,
        use: [MiniCssExtractPlugin.loader, 'css-loader'],
        exclude: /node_modules/,
      },
      {
        test: /\.jpeg$/,
        use: [
         {
           loader: 'file-loader',
           options: {
             name: '[name].[ext]'
             // 이름이 랜덤한 해시값으로 생성되는 것을 막기 위해 이름을 따로 설정해준다.
            }
          },
        ],
 }  ,
    ],
  },
  optimization: {
    minimizer: [
      new CssMinimizerPlugin(), // css를 줄여주는 플러그인
    ],
  },
  plugins: [
    new HtmlWebpackPlugin({
      template: './public/index.html',
    }),
    new MiniCssExtractPlugin({
      filename: 'style.css',
    }),
  ],
};