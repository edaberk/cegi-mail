import React, { Component } from 'react'
import {IncomingMailList} from "./IncomingMailList"
export class TimeLineMails extends Component {
  render() {
    return (
      <div className="time-line-mails">
        <IncomingMailList mails={this.props.mails}/>
      </div>
    )
  }
}
