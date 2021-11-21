import handleRequest from './src/handleRequest'

addEventListener('fetch', (event) => {
  /** @type {Request} */
  const request = event.request
  const { url, referrer, headers } = request

  console.log(`Request came from url: ${url} and referrer: ${referrer}`)

  console.log({ headers })

  event.respondWith(handleRequest(event.request))
})
