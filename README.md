# Scheduler for NavPlot

Cloudflare worker to schedule a GitHub action from NavPlot

### Cloudflare

1. Install wrangler

        npm install wrangler
        npx wrangler login

2. Publish to cloudflare

        npx wrangler deploy

3. Set secret GITHUB token

        npx wrangler secret put GITHUB_TOKEN
