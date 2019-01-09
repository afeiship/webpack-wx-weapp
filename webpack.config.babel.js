import { resolve } from 'path';
import { EnvironmentPlugin, IgnorePlugin, optimize, ProvidePlugin } from 'webpack';
import WXAppWebpackPlugin, { Targets } from 'wxapp-webpack-plugin';

const { NODE_ENV } = process.env;
const isDev = NODE_ENV !== 'production';
const srcDir = resolve('src');

export default (env = {}) => {
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
                includePaths: [resolve('src', './assets/styles')]
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
          use: relativeFileLoader()
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
      extensions: ['.js', '.json', '.scss'],
      alias: {
        '@': resolve(__dirname, './src'),
        '#': resolve(__dirname, './src/components'),
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
