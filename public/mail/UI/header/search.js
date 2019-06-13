import React, { Component } from 'react'
import MailApi from "../../../server/mailApi"
import { MailEvent } from '../../../emitter/singleton_pattern'
import { Link } from "react-router-dom";
export class Search extends Component {
  constructor(props) {
    super(props);
    this.mailApi = new MailApi();
    this.mailEvent = MailEvent.getMailEvent()
    this.keyPress = this.keyPress.bind(this);
    this.getText = this.getText.bind(this);
    this.mailEvent.eventEmitter.addListener("search", this.getSearch);
    this.state = { value: "", isActive: false }
  }

  getSearch = (mail) => {
    return mail
  }

  keyPress(e) {
    this.setState({
      value: e.target.value
    })

  }

  getText(e) {
    if (e.keyCode == 13) {
      this.mailApi.searchList(this.state.value);
    }
  }

  render() {
    let mail = this.getSearch();
    return (
      <div className="search">
        <input type="text" placeholder="Ara" onChange={this.keyPress} onKeyDown={this.getText} />
      </div>
    )
  }
}
