import React, { Component } from 'react'
import {MailItem} from "./mailItem"

export class AllMails extends Component {
    constructor(props) {
        super(props);
        
      }
    getMails = () => {
        return this.props.mails
    }
    render() {
        let mails = this.getMails() 
        return (
            <div className="all-mails">
                {mails.map(function(mail){
                    return <MailItem mail={mail}/>
                })}
            </div>
        )
    }
}
