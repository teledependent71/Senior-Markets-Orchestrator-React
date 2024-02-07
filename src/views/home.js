import React from 'react'

import { Helmet } from 'react-helmet'

import './home.css'

const Home = (props) => {
  return (
    <div className="home-container">
      <Helmet>
        <title>Senior Markets Orchestrator</title>
        <meta property="og:title" content="Senior Markets Orchestrator" />
      </Helmet>
    </div>
  )
}

export default Home
