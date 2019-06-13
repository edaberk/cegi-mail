import React, { Component } from 'react'
import {AllMails} from "../../allMails"
export class TimeLineMails extends Component {
  render() {
    return (
      <div className="time-line-mails">
        <AllMails mails={this.props.mails}/>
      </div>
    )
  }
}
