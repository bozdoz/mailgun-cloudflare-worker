const MAILGUN_API_KEY = process.env.MAILGUN_API_KEY
const MAILGUN_DOMAIN = process.env.MAILGUN_DOMAIN

/**
 * @type {Message}
 */
const DEFAULT_MESSAGE = {
  from: process.env.EMAIL_FROM,
  to: process.env.EMAIL_TO,
  cc: process.env.EMAIL_CC,
  bcc: process.env.EMAIL_BCC,
  subject: process.env.EMAIL_SUBJECT,
  text: process.env.EMAIL_TEXT,
  html: process.env.EMAIL_HTML,
}

/**
 * @param {Message} message
 */
const sendMail = async (message) => {
  const data = {
    ...DEFAULT_MESSAGE,
    ...message,
  }

  const formData = new FormData()

  Object.keys(data).forEach((key) => {
    formData.append(key, data[key])
  })

  return fetch(`https://api.mailgun.net/v3/${MAILGUN_DOMAIN}/messages`, {
    method: 'POST',
    headers: {
      Authorization: `Basic ${Buffer.from(`api:${MAILGUN_API_KEY}`).toString(
        'base64',
      )}`,
    },
    body: formData,
  })
}

export default sendMail
