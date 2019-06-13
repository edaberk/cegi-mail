import React, { Component } from 'react'
import { Menu2 } from "./menu/menu2"
import {CreateMail} from "./createMail/createMail"

export class TimeLine extends Component {
  render() {
    return (
      <div className="time-line">
        <CreateMail/>
        <Menu2 />
      </div>
    )
  }
}
