import { resolve } from 'path';
import ExtractTextPlugin from 'extract-text-webpack-plugin';
import nx from 'next-js-core2';
import nxSassColor from 'next-sass-color';
const extractCss = new ExtractTextPlugin('app.wxss');
var sass = require('node-sass');
var sassUtils = require('node-sass-utils')(sass);
const variables = require('./src/config/themes/default.json').variables;

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
      path: resolve(__dirname, 'dist')
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
                  includePaths: [resolve('src', './assets/styles')],
                  functions: Object.assign(
                    {
                      'get($inKeys)': function(inSassString) {
                        var path = inSassString.getValue();
                        return sassUtils.castToSass(nx.get(variables, path));
                      }
                    },
                    nxSassColor(variables.color)
                  )
                }
              }
            ]
          })
        }
      ]
    },
    plugins: [extractCss]
  };
};
