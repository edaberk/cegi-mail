import React, { Component } from 'react'
import { MailItem } from "./MailItem"
import MailApi from "../../../../server/mailApi"

export class Favori extends Component {
    constructor(props) {
        super(props);
        this.mailApi = new MailApi();
        this.state = {
            mails: this.mailApi.favMailList()
        }
    }

    componentDidMount() {
    }


    toggleStar = (isLiked, mailId) => {
        this.mailApi.setStar(isLiked, mailId);
        this.setState({
            mails: this.mailApi.favMailList()
        });
    }

    deleteMails = (isTrash , mailId) => {
        this.mailApi.willBeDeletedMails(isTrash, mailId);
        this.setState({
            mails: this.mailApi.favMailList()
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
