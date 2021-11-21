# Mailjetgun Cloudflare Worker

### Can I Use as a Template?

Yes!

Run:

```bash
wrangler generate mailgun-cloudflare-worker https://github.com/bozdoz/mailgun-cloudflare-worker
```

### Development

1. install dependencies: `npm ci`
2. define your environment variables (somehow):
   - Using direnv: in a .envrc file: `cp .env-example .envrc`
   - Just export the variables (see `.env-example`)!
3. publish/test: `wrangler publish`

### Using

- [Mailgun](https://www.mailgun.com/email-api/)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [webpack](https://webpack.js.org/)
