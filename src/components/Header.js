import React, { Component } from 'react'

import Navigation from './Navigation'

class Header extends Component {
  render () {
    return (
      <div className="header">
        <Navigation />
        <h1 className="title-text">Bondfire</h1>
      </div>
    )
  }
}

export default Header
