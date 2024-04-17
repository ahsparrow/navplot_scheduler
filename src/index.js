/**
 * Temporarilty update wrangler.toml with GitHub API key
 * Run `npx wrangler dev --test-scheduled --local --env dev`
 * Run `curl "http://localhost:8787/__scheduled?cron=*+*+*+*+*"` to test the
 * scheduled event
 * Run `wrangler publish --name navplot_scheduler
 */

import { Octokit } from "@octokit/rest";

// Trigger happens 10 minutes before the hour
const HOURS = [0, 5, 6, 7, 8, 9, 10, 11, 13, 15, 17];

export default {
  async scheduled(controller, env, ctx) {
    console.log('Scheduled request');

    // Get UK local hour
    const date = new Date().toLocaleString("en-US", {timeZone: "Europe/London"});
    const hour = new Date(date).getHours();

    if (HOURS.includes(hour)) {
        const octokit = new Octokit({
            auth: env.GITHUB_TOKEN
        })

        await octokit.request('POST /repos/ahsparrow/navplot2/actions/workflows/navplot.yaml/dispatches', {
            ref: 'main',
        })
    }
  }
};
