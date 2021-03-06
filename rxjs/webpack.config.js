// output.pathに絶対パスを指定する必要があるため、pathモジュールを読み込んでおく
const path = require('path');

module.exports = {
  // モードの設定、v4系以降はmodeを指定しないと、webpack実行時に警告が出る
  mode: 'development',
  entry: './src/rxjsTest.ts',
  module: {
    rules: [
      {
        test: /\.ts$/,
        use: 'ts-loader'
      }
    ]
  },
  resolve: {
    modules: [
      path.resolve(__dirname, "src"),
      'node_modules'
    ],
    extensions: [
      '.ts', '.js'
    ]
  },
  // 出力の設定
  output: {
    // 出力するファイル名
    filename: 'rxjsTest.js',
    // 出力先のパス（v2系以降は絶対パスを指定する必要がある）
    path: path.join(__dirname, 'dist')
  }
};