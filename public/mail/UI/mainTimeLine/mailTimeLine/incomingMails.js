import React, { Component } from 'react'
import {MailItem} from "./mailItem"
let incomingList=[]
export class IncomingMails extends Component {
    constructor(props) {
        super(props);
        
      }
    getMails = () => {
        incomingList=[]
        for (let i=0; i<this.props.mails.length; i++){
            if(this.props.mails[i].senderId === 12345){
                console.log(this.props.mails[i].senderId)
                incomingList.push(this.props.mails[i])
                
            }    
        }
        return incomingList
    }

    deleteMails = (isTrash , mailId) => {
        this.mailApi.willBeDeletedMails(isTrash, mailId);
        this.setState({
            mails: this.mailApi.getMailList()
        });
    }

    render() {
        let mails = this.getMails() 
        return (
            <div>
                {mails.map((mail)=>{
                    return <MailItem deleteMails={this.deleteMails} toggleStar={this.props.toggleStar} key={mail.id} mail= {mail}/>
                })}
            </div>
        )
    }
}
