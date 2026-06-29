import { defineConfig } from 'astro/config'
import mdx from '@astrojs/mdx'

export default defineConfig({
  site: 'https://www.dunky.dev',
  trailingSlash: 'never',
  integrations: [mdx()],
  server: {
    headers: {
      'Access-Control-Allow-Origin': '*',
    },
  },
})
