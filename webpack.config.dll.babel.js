import {resolve} from 'path';
import {
  EnvironmentPlugin,
  IgnorePlugin,
  optimize, ProvidePlugin,
} from 'webpack';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
const extractCss = new ExtractTextPlugin('app.wxss');

export default (env = {}) => {

  return {
    entry: {
      app: './src/assets/styles/index.scss'
    },
    resolveLoader: {
      modules: ['./build/loaders', 'node_modules']
    },
    output: {
      filename: 'app.wxss',
      publicPath: '/',
      path: resolve(__dirname, 'dist'),
    },
    module: {
      rules: [
        {
          test: /\.scss$/,
          use: extractCss.extract({
            fallback: 'style-loader',
            use: [
              'css-loader',
              'postcss-loader',
              {
                loader: 'sass-loader',
                options: {
                  includePaths: [
                    resolve('src', './assets/styles')
                  ],
                },
              }
            ]
          })
        }
      ],
    },
    plugins: [
      extractCss
    ]
  };

};
