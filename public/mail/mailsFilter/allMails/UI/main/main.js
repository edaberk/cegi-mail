import React, { Component } from 'react'
import {Header} from "../header/header"
import {TimeLine} from "../timeLine/timeLine"
export class Main extends Component {
  render() {
    
    return (
      <div className="main">
        <Header/>
        <TimeLine mails= {this.props.mails}/>
      </div>
    )
  }
}
