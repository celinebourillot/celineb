import React from 'react'

const sitemapXml = `<?xml version="1.0" encoding="UTF-8"?>
  <urlset xmlns="http://www.sitemaps.org/schemas/sitemap/0.9">
    <url><loc>https://celineb.me</loc><lastmod>2019-03-15</lastmod></url>
    <url><loc>https://celineb.me/about-me</loc><lastmod>2019-03-15</lastmod></url>
    <url><loc>https://celineb.me/projects</loc><lastmod>2019-03-15</lastmod></url>
    <url><loc>https://celineb.me/blog</loc><lastmod>2019-03-15</lastmod></url>
  </urlset>`

export default class Sitemap extends React.Component {

  static getInitialProps ({res}) {
    res.setHeader('Content-Type', 'text/xml')
    res.write(sitemapXml)
    res.end()
  }

}
