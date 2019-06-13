import React, { Component } from 'react'
import {Menu} from "./menu"
import {TimeLineMails} from "./timeLineMails"

export class TimeLine extends Component {
  render() {
    return (
      <div className="time-line">
        <Menu/>
        <TimeLineMails mails={this.props.mails}/>
      </div>
    )
  }
}
