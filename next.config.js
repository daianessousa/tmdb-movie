module.exports = {
  reactStrictMode: true,
  images: {
    domains: ['image.tmdb.org', 'https://www.youtube.com/'], 
  },
  env: {
    BASE_URL: process.env.BASE_URL,
    API_KEY: process.env.API_KEY
  }
}
