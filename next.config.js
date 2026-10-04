/** @type {import('next').NextConfig} */
module.exports = {
  async redirects() {
    return [
      { source: '/blog', destination: '/notes', permanent: true },
      { source: '/blog/:slug', destination: '/notes/:slug', permanent: true },
      { source: '/codebook', destination: '/notes', permanent: true },
      { source: '/codebook/:slug', destination: '/notes/:slug', permanent: true },
    ]
  },
}
