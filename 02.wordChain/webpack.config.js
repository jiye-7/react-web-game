const path = require('path');
const RefreshWebpackPlugin = require('@pmmmwh/react-refresh-webpack-plugin');

module.exports = {
  name: 'word-chain-setting',
  mode: 'development', // 실서비스: production
  devtool: 'eval', // 빠르게 하겠다.
  resolve: {
    extensions: ['.js', '.jsx'],
  },

  // entry(입력), output(출력) - 가장 중요한 설정
  entry: {
    app: ['./client'], // './WordChain.jsx' 파일은 client.jsx에서 불러오기 때문에 webpack이 알아서 불러온다. 즉, 여기서는 따로 불러올 필요가 없다. / 확장자도 굳이 쓰지 않아도 된다.(resolve option에 서 처리)
  },

  // entry에있는 file을 읽고, 거기에 module을 적용한 후, output을 뺀다.
  module: {
    // 규칙을 적용할 파일들(정규표현식)
    rules: [
      {
        test: /\.jsx?/, // js파일, jsx파일에 이 룰을 적용하겠다
        loader: 'babel-loader', // babel rule을 적용(test에 정의해 놓은 js, jsx 파일에 최신 문법을 호환될 수 있도록 적용)
        options: {
          presets: [
            [
              '@babel/preset-env',
              {
                targets: {
                  browsers: ['> 5% in KR'],
                },
                debug: true,
              },
            ],
            '@babel/preset-react',
          ],
          // babel loader에 plugin을 넣어준다. babel이 최신 문법을 옛날 js 문법으로 transfer할 때 핫 리로딩 기능까지 추가해준다.
          plugins: [
            'react-refresh/babel', //'react-hot-loader/babel'
          ],
        },
      },
    ],
  },
  plugins: [
    new RefreshWebpackPlugin({ overlay: false }), // 앞으로 빌드할 때 마다 이 부분이 실행된다.
  ],
  output: {
    path: path.join(__dirname, 'dist'), // __dirname: 현재 폴더, dist: 현재 폴더 안에 들어있는 dist(-> 절대 경로를 자동으로 만들어줌) // 실제 경로
    filename: 'app.js',
    // publicPath: '/dist/', // 가상 경로
  },
  // 개발용 서버
  devServer: {
    devMiddleware: { publicPath: '/dist' },
    static: { directory: path.resolve(__dirname) },
    hot: true,
  },
};
