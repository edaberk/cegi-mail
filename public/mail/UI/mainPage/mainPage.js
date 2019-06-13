import React, { Component } from 'react'
import {MainHeader} from "../header/mainHeader"
import { TimeLine } from "../mainTimeLine/timeLine";
export class MainPage extends Component {
  render() {
    return (
      <div className="main">
        <MainHeader/>
        <TimeLine/>
      </div>
    )
  }
}
