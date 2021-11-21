import recaptcha from './recaptcha'

const RECAPTCHA_SECRET = process.env.RECAPTCHA_SECRET

/**
 * @param {Message & { token: string }} body
 */
const validateFields = async (body) => {
  if (!body.to || !body.from || (!body.text && !body.html)) {
    throw new Error('to, from, text, and html fields are required!')
  }

  if (RECAPTCHA_SECRET) {
    // secret means that google recaptcha has been setup
    // verify that the request is not from a bot
    if (!body.token) {
      throw new Error('Captcha token not submitted')
    }

    const verified = await recaptcha(body.token)

    if (!verified) {
      throw new Error('Captcha verification failed')
    }
  }
}

export default validateFields
