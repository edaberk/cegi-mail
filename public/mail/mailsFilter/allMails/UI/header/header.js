import React, { Component } from 'react'
import {Search} from "./Search"
import {MenuButton} from "./menuButton"
export class Header extends Component {
  render() {
    return (
      <div className="header">
        <MenuButton/>
        <Search/>
      </div>
    )
  }
}
