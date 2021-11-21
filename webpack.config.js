const webpack = require('webpack')

require('dotenv').config()

const { env } = process
const replacements = {
  APP_MAILGUN_API_KEY: '',
  APP_MAILGUN_DOMAIN: '',
  APP_ALLOWED_ORIGIN: '',
  APP_EMAIL_TO: '',
  APP_EMAIL_FROM: '',
  APP_EMAIL_CC: '',
  APP_EMAIL_BCC: '',
  APP_EMAIL_SUBJECT: '',
  APP_EMAIL_TEXT: '',
  APP_EMAIL_HTML: '',
  APP_RECAPTCHA_SECRET: '',
  APP_RECAPTCHA_MINSCORE: '',
}

Object.keys(env).forEach((key) => {
  if (key.startsWith('APP_')) {
    replacements[`process.env.${key}`] = JSON.stringify(env[key])
  }
})

module.exports = {
  target: 'webworker',
  entry: './index.js',
  mode: 'production',
  plugins: [new webpack.DefinePlugin(replacements)],
}
