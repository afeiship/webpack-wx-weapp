import { resolve } from 'path';
import { EnvironmentPlugin, IgnorePlugin, optimize, ProvidePlugin } from 'webpack';
import WXAppWebpackPlugin, { Targets } from 'wxapp-webpack-plugin';
import nxSassGet from 'next-sass-get';
import NxSassColor from 'next-sass-color';
const { NODE_ENV } = process.env;
const isDev = NODE_ENV !== 'production';
const srcDir = resolve('src');
const variables = require('./src/config/themes/default.json').variables;

export default (env = {}) => {
  console.log('args based on env:->', env);
  const relativeFileLoader = (ext = '[ext]') => {
    return {
      loader: 'file-loader',
      options: {
        useRelativePath: true,
        name: `[name].${ext}`,
        context: srcDir
      }
    };
  };

  return {
    entry: {
      app: ['es6-promise/dist/es6-promise.auto.js', './src/app.js']
    },
    resolveLoader: {
      modules: ['./build/loaders', 'node_modules']
    },
    output: {
      filename: '[name].js',
      publicPath: '/',
      path: resolve(__dirname, 'dist')
    },
    target: Targets.Wechat,
    module: {
      rules: [
        {
          test: /\.js$/,
          use: ['babel-loader'],
          include: [resolve(__dirname, 'src'), resolve(__dirname, 'node_modules/next-weapp-boot')]
        },
        {
          test: /config\.js$/,
          loader: 'string-replace-loader',
          options: {
            multiple: [{ search: '__BUILD_ENV__', replace: NODE_ENV }]
          }
        },
        {
          test: /\.(wxss)$/,
          include: /src/,
          use: [relativeFileLoader()]
        },
        {
          test: /\.(scss)$/,
          include: /src/,
          use: [
            relativeFileLoader('wxss'),
            {
              loader: 'string-replace-loader',
              options: {
                multiple: [{ search: '/*@import "/app.wxss";*/', replace: '@import "/app.wxss";' }]
              }
            },
            {
              loader: 'postcss-loader'
            },
            {
              loader: 'sass-loader',
              options: {
                includePaths: [resolve('src', './assets/styles')],
                functions: nx.mix(nxSassGet(variables), NxSassColor.create(variables.color))
              }
            }
          ]
        },
        {
          test: /\.(png|jpg|gif)$/,
          include: /src/,
          use: {
            loader: 'file-loader',
            options: {
              useRelativePath: true,
              name: `[name]_[hash].[ext]`,
              context: srcDir
            }
          }
        },
        {
          test: /\.(json)$/,
          include: /src/,
          exclude: /themes|assets/,
          use: [relativeFileLoader()]
        },
        {
          test: /\.(json)$/,
          include: /themes|assets/,
          use: [{ loader: 'json-loader' }]
        },
        {
          test: /\.(wxml)$/,
          include: /src/,
          use: [
            relativeFileLoader(),
            {
              loader: 'wxml-loader',
              options: {
                root: srcDir,
                enforceRelativePath: false
              }
            }
          ]
        }
      ]
    },
    plugins: [
      new EnvironmentPlugin({
        NODE_ENV: 'development'
      }),
      new ProvidePlugin({
        nx: 'next-js-core2'
      }),
      new WXAppWebpackPlugin({
        clear: !isDev,
        commonModuleName: 'common.js'
      }),
      new optimize.ModuleConcatenationPlugin(),
      new IgnorePlugin(/vertx/)
    ],
    devtool: isDev ? 'source-map' : false,
    resolve: {
      extensions: ['.js', '.wxs', '.json', '.scss'],
      alias: {
        '@': resolve(__dirname, './src'),
        '#': resolve(__dirname, './src/components'),
        config: resolve(__dirname, './src/config'),
        environments: resolve(__dirname, './src/environments'),
        themes: resolve(__dirname, './src/config/themes'),
        mixins: resolve(__dirname, './src/components/mixins'),
        images: resolve(__dirname, './src/assets/images'),
        styles: resolve(__dirname, './src/assets/styles'),
        services: resolve(__dirname, './src/components/services'),
        interceptors: resolve(__dirname, './src/components/interceptors')
      }
    },
    watchOptions: {
      ignored: /dist|manifest/,
      aggregateTimeout: 300
    }
  };
};
