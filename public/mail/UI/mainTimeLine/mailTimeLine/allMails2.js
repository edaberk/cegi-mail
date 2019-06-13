import React, { Component } from 'react'
import { MailItem } from "./mailItem"
import MailApi from "../../../../server/mailApi"
import { MailEvent } from '../../../../emitter/singleton_pattern';
//import {ObserverPattern} from '../../../../emitter/observerPattern';
import { BrowserRouter as Router, Route, Link, withRouter } from "react-router-dom";
import { Menu } from 'primereact/menu';
import { ViewMail } from "./viewMail"

export class AllMails2 extends Component {
    constructor(props) {
        super(props);
        this.mailApi = new MailApi();
        this.mailEvent = MailEvent.getMailEvent();
        this.mailEvent.addListener(this.onMailSent);
        //this.observerPattern = ObserverPattern.getMailEvent();
        //this.observerPattern.addListener(this.onMailSent);
        this.mailEvent.eventEmitter.addListener("onclick", this.testFunc);
        this.mailEvent.eventEmitter.addListener("search", this.getSearch);
        this.state = {
            mails: this.mailApi.getMailList()
        }
    }

    testFunc = (idNumber, mail) => {
        // console.log('in listener', idNumber, mail);
    }

    getSearch = (mail) => {
        this.setState({
            mails: mail
        })
    }

    componentWillUnmount() {
        this.mailEvent.removeListener(this.onMailSent);
        this.mailEvent.removeListener(this.getSearch);
        this.mailEvent.removeListener(this.testFunc);
    }

    onMailSent = () => {
        this.setState({
            mails: this.mailApi.getMailList()
        });
    }

    updatingMailList = () => {
        this.setState({
            mails: this.mailApi.getMailList()
        });

    }

    toggleStar = (isLiked, mailId) => {
        this.mailApi.setStar(isLiked, mailId);
        this.setState({
            mails: this.mailApi.getMailList()
        });
    }

    deleteMails = (isTrash, mailId) => {
        this.mailApi.willBeDeletedMails(isTrash, mailId);
        this.setState({
            mails: this.mailApi.getMailList()
        });
    }

    render() {
        let mails = this.state.mails;

        return (
            <div className="all-mails">
                {mails.map((mail) => {
                    return <MailItem deleteMails={this.deleteMails} toggleStar={this.toggleStar} key={mail.id} mail={mail} />
                })}
            </div>
        )

    }
}
