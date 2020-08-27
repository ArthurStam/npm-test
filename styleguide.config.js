const { argv } = require('yargs')

module.exports = {
  styleguideDir: argv.dist,
  webpackConfig: {
    module: {
      rules: [
        {
          test: /\.jsx?$/,
          exclude: /node_modules/,
          loader: 'babel-loader'
        },
      ]
    }
  }
}
