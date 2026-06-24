# website

The [dunky.dev](https://dunky.dev) landing page.

Static site in `src/` (HTML/CSS/JS, no build step). Deployed on Vercel, which
serves this page at the apex and proxies the tool sub-apps under their own
paths (e.g. [`/state-machine`](https://dunky.dev/state-machine)).

## Develop

```sh
pnpm install
pnpm dev      # serves src/ at http://localhost:8080
```

The logo and favicon come from the `src/logo` submodule — clone with
`--recurse-submodules` (or run `git submodule update --init`).

## License

[MIT](./LICENSE)
