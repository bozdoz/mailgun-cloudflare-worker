import webpack from 'webpack'

require('dotenv').config()

const { env } = process
const replacements = {}
Object.keys(env).forEach((key) => {
  replacements[key] = JSON.stringify(env[key])
})

module.exports = {
  target: 'webworker',
  entry: './index.js',
  mode: 'production',
  plugins: [new webpack.DefinePlugin(replacements)],
}
