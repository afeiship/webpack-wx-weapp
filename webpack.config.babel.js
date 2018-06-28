import {resolve} from 'path';
import {
  DefinePlugin,
  EnvironmentPlugin,
  IgnorePlugin,
  optimize,
} from 'webpack';
import WXAppWebpackPlugin, { Targets } from 'wxapp-webpack-plugin';
import MinifyPlugin from 'babel-minify-webpack-plugin';
import pkg from './package.json';

const {NODE_ENV} = process.env;
const isDev = NODE_ENV !== 'production';
const srcDir = resolve('src');

const copyPatterns = []
  .concat(pkg.copyWebpack || [])
  .map(
    (pattern) =>
      typeof pattern === 'string' ? {from: pattern, to: pattern} : pattern,
  );

export default (env = {}) => {
  const min = env.min;

  const relativeFileLoader = (ext = '[ext]') => {
    return {
      loader: 'file-loader',
      options: {
        useRelativePath: true,
        name: `[name].${ext}`,
        context: srcDir,
      },
    };
  };

  return {
    entry: {
      app: [
        'es6-promise/dist/es6-promise.auto.js',
        './src/app.js',
      ]
    },
    output: {
      filename: '[name].js',
      publicPath: '/',
      path: resolve('dist')
    },
    target: Targets.Wechat,
    module: {
      rules: [
        {
          test: /\.js$/,
          include: /src/,
          exclude: /node_modules/,
          use: ['babel-loader'],
        },
        {
          test: /\.wxs$/,
          include: /src/,
          exclude: /node_modules/,
          use: [
            relativeFileLoader(),
            'babel-loader',
          ],
        },
        {
          test: /\.(scss|wxss)$/,
          include: /src/,
          use: [
            relativeFileLoader('wxss'),
            {
              loader: 'sass-loader',
              options: {
                includePaths: [resolve('src', 'styles'), srcDir],
              },
            },
          ],
        },
        {
          test: /\.(json|png|jpg|gif)$/,
          include: /src/,
          use: relativeFileLoader(),
        },
        {
          test: /\.(wxml)$/,
          include: /src/,
          use: [
            relativeFileLoader('wxml'),
            {
              loader: 'wxml-loader',
              options: {
                root: srcDir,
                enforceRelativePath: true,
              },
            },
          ],
        },
      ],
    },
    plugins: [
      new EnvironmentPlugin({
        NODE_ENV: 'development',
      }),
      new DefinePlugin({
        wx: 'wx'
      }),
      new WXAppWebpackPlugin({
				clear: !isDev,
				commonModuleName:'common.js'
      }),
      new optimize.ModuleConcatenationPlugin(),
      new IgnorePlugin(/vertx/),
      min && new MinifyPlugin(),
    ].filter(Boolean),
    devtool: isDev ? 'source-map' : false,
    resolve: {
      modules: [resolve(__dirname, 'src'), 'node_modules'],
    },
    watchOptions: {
      ignored: /dist|manifest/,
      aggregateTimeout: 300,
    }
  };
};
