const MAILGUN_API_KEY = process.env.APP_MAILGUN_API_KEY
const MAILGUN_DOMAIN = process.env.APP_MAILGUN_DOMAIN

/**
 * @type {Message}
 */
const OVERRIDES = {
  from: process.env.APP_EMAIL_FROM,
  to: process.env.APP_EMAIL_TO,
  cc: process.env.APP_EMAIL_CC,
  bcc: process.env.APP_EMAIL_BCC,
  subject: process.env.APP_EMAIL_SUBJECT,
  text: process.env.APP_EMAIL_TEXT,
  html: process.env.APP_EMAIL_HTML,
}

// remove any empty overrides before spreading
Object.keys(OVERRIDES).forEach((key) => {
  if (!OVERRIDES[key]) {
    delete OVERRIDES[key]
  }
})

/**
 * @param {Message} message
 */
const sendMail = async (message) => {
  const data = {
    ...message,
    ...OVERRIDES,
  }

  if (!data.to || !data.from || (!data.text && !data.html)) {
    throw new Error('to, from, text, and html fields are required!')
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
