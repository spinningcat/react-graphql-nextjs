var path = require("path")

module.exports = {
    mode: 'development',
    entry: path.join(__dirname, './pages/index.js'),
    output: {
        path: __dirname,
        filename : './dist/app.js',
    },
    node: {
      fs: "empty"
    },
     module: {
        rules: [{
           test: /\.js/,
           exclude: /node_modules/,
           use: 'babel-loader'       
        }]
    },
    resolve: {
        modules: ['app', 'node_modules'],
        extensions: [
          '.js',
          '.jsx',
          '.react.js',
        ],
        mainFields: [
          'browser',
          'jsnext:main',
          'main',
        ],
      },
      node: { fs: 'empty' },
      devtool: options.devtool,
      target: 'web', // Make web variables accessible to webpack, e.g. window
      performance: options.performance || {},
    }

