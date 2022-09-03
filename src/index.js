/**
 * - Run `wrangler dev --local` in your terminal to start a development server
 * - Run `curl "http://localhost:8787/cdn-cgi/mf/scheduled"` to trigger the scheduled event
 * - Go back to the console to see what your worker has logged
 * - Update the Cron trigger in wrangler.toml (see https://developers.cloudflare.com/workers/wrangler/configuration/#triggers)
 * - Run `wrangler publish --name my-worker` to publish your worker
 */

export default {
  async scheduled(controller, env, ctx) {
    console.log('Scheduled request');

    const init = {
      method: 'POST',
      headers: {
        'User-Agent': 'ahsparrow',
        'Accept': 'application/vnd.github.v3+json',
        'Authorization': env.GITHUB_TOKEN
      },
      body: JSON.stringify({"ref": "refs/heads/master"})
    };

    const response = await fetch("https://api.github.com/repos/ahsparrow/navplot2/actions/workflows/navplot.yaml/dispatches", init)
     .then((response) => response.text())
     .then((txt) => console.log(txt));
  },
};
