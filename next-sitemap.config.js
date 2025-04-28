/** @type {import('next-sitemap').IConfig} */
module.exports = {
  siteUrl: 'https://maxtec.com.br',
  generateRobotsTxt: true,
  sitemapSize: 7000,
  exclude: ['/server-sitemap.xml'],
  robotsTxtOptions: {
    additionalSitemaps: [
      'https://maxtec.com.br/server-sitemap.xml',
    ],
  },
}
