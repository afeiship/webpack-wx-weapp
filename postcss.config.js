module.exports = {
  plugins: [
    // require('autoprefixer')({
    //   browsers: [
    //     'last 1 version'
    //   ],
    //   remove: true
    // }),
    require('postcss-remove-prefixes')()
  ]
};
