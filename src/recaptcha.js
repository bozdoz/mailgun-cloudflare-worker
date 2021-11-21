/**
 * Google Response
 * @typedef {Object} GoogleResponse
 * @property {boolean} success
 * @property {number} score
 * @property {string} action
 * @property {string} [challenge_ts] ISO formatted timestamp
 * @property {string} hostname
 */

const RECAPTCHA_SECRET = process.env.APP_RECAPTCHA_SECRET
const RECAPTCHA_MINSCORE = Number(process.env.APP_RECAPTCHA_MINSCORE || '0.5')

/**
 * Uses Google Recaptcha v3 to prevent spam from bots
 * @param {string} token
 */
const recaptcha = async (token) => {
  const data = {
    secret: RECAPTCHA_SECRET,
    response: token,
  }

  /** @type {GoogleResponse} */
  const resp = await fetch('https://www.google.com/recaptcha/api/siteverify', {
    method: 'POST',
    headers: {
      'Content-Type': 'application/json',
    },
    body: JSON.stringify(data),
  }).then((resp) => resp.json())

  const { success, score } = resp

  return success && score > RECAPTCHA_MINSCORE
}

export default recaptcha
