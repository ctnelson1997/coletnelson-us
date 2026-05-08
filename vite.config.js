import { defineConfig } from 'vite'
import react from '@vitejs/plugin-react'
import { readdirSync, readFileSync, writeFileSync, mkdirSync } from 'node:fs'
import { dirname, join, resolve } from 'node:path'
import { fileURLToPath } from 'node:url'

const __dirname = dirname(fileURLToPath(import.meta.url))

const SITE_URL = 'https://coletnelson.us'
const SITE_TITLE = 'Cole Tyler Nelson'
const SITE_DESCRIPTION = 'Blog posts by Cole Tyler Nelson, instructor at UW-Madison.'
const FEED_AUTHOR = 'ctnelson2@wisc.edu (Cole Tyler Nelson)'

function escapeXml(s) {
  return String(s)
    .replace(/&/g, '&amp;')
    .replace(/</g, '&lt;')
    .replace(/>/g, '&gt;')
    .replace(/"/g, '&quot;')
    .replace(/'/g, '&apos;')
}

function parseFrontmatter(raw) {
  const match = raw.match(/^---\r?\n([\s\S]*?)\r?\n---\r?\n?([\s\S]*)$/)
  if (!match) return { data: {}, content: raw }
  const data = {}
  for (const line of match[1].split(/\r?\n/)) {
    const idx = line.indexOf(':')
    if (idx === -1) continue
    const key = line.slice(0, idx).trim()
    let value = line.slice(idx + 1).trim()
    if ((value.startsWith('"') && value.endsWith('"')) || (value.startsWith("'") && value.endsWith("'"))) {
      value = value.slice(1, -1)
    }
    data[key] = value
  }
  return { data, content: match[2] }
}

function toRfc822(isoDate) {
  const [y, m, d] = isoDate.split('-').map(Number)
  return new Date(Date.UTC(y, m - 1, d)).toUTCString()
}

function loadPosts(postsDir) {
  return readdirSync(postsDir)
    .filter(f => f.endsWith('.md'))
    .map(f => {
      const raw = readFileSync(join(postsDir, f), 'utf8')
      const { data, content } = parseFrontmatter(raw)
      return { ...data, content }
    })
    .filter(p => p.slug && p.title && p.date)
    .sort((a, b) => (a.date < b.date ? 1 : -1))
}

function buildRss(posts) {
  const items = posts.map(p => {
    const url = `${SITE_URL}/#/blog/${p.slug}`
    const description = p.description || p.content.slice(0, 280).replace(/\s+/g, ' ').trim()
    return `    <item>
      <title>${escapeXml(p.title)}</title>
      <link>${escapeXml(url)}</link>
      <guid isPermaLink="true">${escapeXml(url)}</guid>
      <pubDate>${toRfc822(p.date)}</pubDate>
      <author>${escapeXml(FEED_AUTHOR)}</author>
      <description>${escapeXml(description)}</description>
    </item>`
  }).join('\n')

  const lastBuild = posts.length ? toRfc822(posts[0].date) : new Date().toUTCString()

  return `<?xml version="1.0" encoding="UTF-8"?>
<rss version="2.0" xmlns:atom="http://www.w3.org/2005/Atom">
  <channel>
    <title>${escapeXml(SITE_TITLE)}</title>
    <link>${SITE_URL}/</link>
    <atom:link href="${SITE_URL}/rss.xml" rel="self" type="application/rss+xml" />
    <description>${escapeXml(SITE_DESCRIPTION)}</description>
    <language>en-us</language>
    <lastBuildDate>${lastBuild}</lastBuildDate>
${items}
  </channel>
</rss>
`
}

function rssPlugin() {
  const postsDir = resolve(__dirname, 'src/posts')
  return {
    name: 'rss-feed',
    apply: 'build',
    closeBundle() {
      const posts = loadPosts(postsDir)
      const xml = buildRss(posts)
      const outDir = resolve(__dirname, 'docs')
      mkdirSync(outDir, { recursive: true })
      writeFileSync(join(outDir, 'rss.xml'), xml)
      console.log(`[rss-feed] wrote ${posts.length} items to docs/rss.xml`)
    },
  }
}

// https://vitejs.dev/config/
export default defineConfig({
  plugins: [react(), rssPlugin()],
  base: '/',
  build: {
    sourcemap: true,
    outDir: 'docs/'
  },
})
