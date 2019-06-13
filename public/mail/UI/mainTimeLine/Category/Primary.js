import React, { Component } from 'react'
import { MailItem } from "../mailTimeLine/mailItem"
import MailApi from "../../../../server/mailApi"
//import {ObserverPattern} from '../../../../emitter/observerPattern';
import { MailEvent } from '../../../../emitter/singleton_pattern';

export class Primary extends Component {
    constructor(props) {
        super(props);
        this.mailApi = new MailApi();
        this.mailEvent = MailEvent.getMailEvent();
        this.mailEvent.addListener(this.onMailSent);
        //this.observerPattern = ObserverPattern.getMailEvent();
        //this.observerPattern.addListener(this.onMailSent);
        this.state = {
            mails: this.mailApi.checkPrimary()
        }
    }

    componentWillUnmount(){
        this.mailEvent.removeListener(this.onMailSent);
    }

    onMailSent = () => {
        this.setState({
            mails: this.mailApi.checkPrimary()
        });
    }

    toggleStar = (isLiked, mailId) => {
        this.mailApi.setStar(isLiked, mailId);
        this.setState({
            mails: this.mailApi.checkPrimary()
        });
    }

    deleteMails = (isTrash , mailId) => {
        this.mailApi.willBeDeletedMails(isTrash, mailId);
        this.setState({
            mails: this.mailApi.checkPrimary()
        });
    }


    render() {
        let mails = this.state.mails;  
        return (
            <div className="all-mails">
               {mails.map((mail) => {
                    return <MailItem deleteMails= {this.deleteMails} toggleStar={this.toggleStar} key={mail.id} mail={mail} />
                })}
            </div>
        )
    }
}

