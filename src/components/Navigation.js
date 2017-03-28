import React, { Component } from 'react'

import LeftNav from './LeftNav'
import RightNav from './RightNav'

class Navigation extends Component {
  render () {
    return (
      <div className="navigation-bar">
        <LeftNav />
        <p>This is the Navigation component.</p>
        <RightNav />
      </div>
    )
  }
}

export default Navigation
