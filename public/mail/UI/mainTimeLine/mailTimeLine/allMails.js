import React, { Component } from 'react'
import { MailItem } from "./mailItem"

export class AllMails extends Component {
    constructor(props) {
        super(props);

        this.state = {
            mails: this.props.mails
        }
    }

    render() {
        let mails = this.state.mails;


        return (
            <div className="all-mails">
                {mails.map((mail) => {
                    return <MailItem toggleStar={this.props.toggleStar} key={mail.id} mail={mail} />
                })}
            </div>
        )
    }
}
