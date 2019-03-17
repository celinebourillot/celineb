import React from 'react'

const robots = `User-agent: *
Allow: /`

export default class Robots extends React.Component {

  static getInitialProps ({res}) {
    res.setHeader('Content-Type', 'text/plain')
    res.write(robots)
    res.end()
  }

}
