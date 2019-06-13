import React, { Component } from 'react'
import { MailItem } from "./mailItem"
import MailApi from "../../../../server/mailApi"
import { MailEvent } from '../../../../emitter/singleton_pattern';
//import {ObserverPattern} from '../../../../emitter/observerPattern';


export class Draft extends Component {
    constructor(props) {
        super(props);
        this.mailApi = new MailApi();
        this.mailEvent = MailEvent.getMailEvent();
        this.mailEvent.addListener(this.onMailSent);
        //this.observerPattern = ObserverPattern.getMailEvent();
        //this.observerPattern.addListener(this.onMailSent);
        this.mailEvent.eventEmitter.addListener("onclick", this.testFunc);
        this.state = {
            mails: this.mailApi.draftMailList()
        }
    }

    testFunc = (idNumber, name) => {
       // console.log('in listener', idNumber, name);
        
    }

    componentWillUnmount() {
        this.mailEvent.removeListener(this.onMailSent);
    }

    onMailSent = () => {
        this.setState({
            mails: this.mailApi.draftMailList()
        });
    }

    updatingMailList = () => {
        this.setState({
            mails: this.mailApi.draftMailList()
        });

    }

    toggleStar = (isLiked, mailId) => {
        this.mailApi.setStar(isLiked, mailId);
        this.setState({
            mails: this.mailApi.draftMailList()
        });
    }

    deleteMails = (isTrash, mailId) => {
        this.mailApi.willBeDeletedMails(isTrash, mailId);
        this.setState({
            mails: this.mailApi.draftMailList()
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
