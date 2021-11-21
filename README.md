# Mailgun Cloudflare Worker

### Can I use this as a template?

Yes!

Run:

```bash
wrangler generate mailgun-cloudflare-worker https://github.com/bozdoz/mailgun-cloudflare-worker
wrangler init
```

Add `webpack_config` to `wrangler.toml`:

```toml
webpack_config = "webpack.config.js"
```

### Development

1. install dependencies: `npm ci`
2. define your environment variables:
   - Just `cp` the example file (`cp .env-example .env`) and fill in your information
3. publish/test: `wrangler publish`

### Using

- [Mailgun](https://www.mailgun.com/email-api/)
- [Cloudflare Workers](https://workers.cloudflare.com/)
- [dotenv](https://www.npmjs.com/package/dotenv)
- [webpack](https://webpack.js.org/)
