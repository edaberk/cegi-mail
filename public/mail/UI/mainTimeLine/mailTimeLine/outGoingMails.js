import React, { Component } from 'react'
import { MailItem } from "./MailItem"
import MailApi from "../../../../server/mailApi"
import { MailEvent } from '../../../../emitter/singleton_pattern';
import {ObserverPattern} from '../../../../emitter/observerPattern';
export class OutGoingMails extends Component {
    constructor(props) {
        super(props);
        this.mailApi = new MailApi();
        this.mailEvent = MailEvent.getMailEvent();
        this.mailEvent.addListener(this.onMailSent);
        //this.observerPattern = ObserverPattern.getMailEvent();
        //this.observerPattern.addListener(this.onMailSent);
        this.state = {
            mails: this.mailApi.isOutgoing()
        }
    }

    componentWillUnmount(){
        this.mailEvent.removeListener(this.onMailSent);
    }

    onMailSent = () => {
        this.setState({
            mails: this.mailApi.isOutgoing()
        });
    }

    toggleStar = (isLiked, mailId) => {
        this.mailApi.setStar(isLiked, mailId);
        this.setState({
            mails: this.mailApi.isOutgoing()
        });
    }

    deleteMails = (isTrash, mailId) => {
        this.mailApi.willBeDeletedMails(isTrash, mailId);
        this.setState({
            mails: this.mailApi.isOutgoing()
        });
    }

    render() {
        let mails = this.state.mails

        return (
            <div>
                {mails.map((mail) => {
                    return <MailItem deleteMails={this.deleteMails} toggleStar={this.toggleStar} key={mail.id} mail={mail} />
                })}
            </div>
        )
    }
}