# Scheduler for NavPlot

Cloudflare worker to schedule a GitHub action from NavPlot

### Cloudflare

1. Install wrangler

    npm install -g wrangler
    wrangler login

2. Publish to cloudflare

    wrangler publish

3. Set secret GITHUB token

    wrangler secret put GITHUB_TOKEN
