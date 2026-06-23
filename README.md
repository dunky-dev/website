# website

A pnpm repo with the shared dunky-dev tooling baked in.

## What's included

| Tool            | File                            | Purpose                                                                                  |
| --------------- | ------------------------------- | ---------------------------------------------------------------------------------------- |
| **oxlint**      | `.oxlintrc.json`                | Linting (eslint/import/react/unicorn/vitest plugins).                                    |
| **oxfmt**       | `.oxfmtrc.json`                 | Formatting — house style: no semicolons, single quotes, width 100, kebab-case filenames. |
| **lint-staged** | `.lintstagedrc.json`            | Runs `oxlint --fix` + `oxfmt` on staged `*.{ts,tsx}`.                                     |
| **husky**       | `.husky/pre-commit`             | Runs lint-staged before each commit. Installed via the `prepare` script.                 |
| **knip**        | `knip.config.ts`                | Unused-export/dependency detection.                                                      |
| **TypeScript**  | `tsconfig.json`                 | Strict, ESM, bundler resolution.                                                         |
| **pnpm**        | `.npmrc`, `pnpm-workspace.yaml` | Workspace tuning.                                                                        |
| **CI**          | `.github/workflows/ci.yml`      | Lint + typecheck on push/PR (Node 24, pnpm 10.20.0).                                      |
| **Deploy**      | `.github/workflows/deploy.yml`  | GitHub Pages deploy (build step has TODO placeholders to fill in).                       |

## License

[MIT](./LICENSE)
