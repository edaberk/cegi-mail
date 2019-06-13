import React, { Component } from 'react'
import {IncomingMailItem} from "./incomingMailItem"
let incomingList=[]
export class IncomingMailList extends Component {
    constructor(props) {
        super(props);
        
      }
    getMails = () => {
        incomingList=[]
        for (let i=0; i<this.props.mails.length; i++){
            if(this.props.mails[i].senderId === '12345'){
                console.log(this.props.mails[i].senderId)
                incomingList.push(this.props.mails[i])
                
            }    
        }
        return incomingList
    }
    render() {
        let mails = this.getMails() 
        console.log(mails)
        return (
            <div>
                {mails.map(function(mail){
                    return <IncomingMailItem mail= {mail}/>
                })}
            </div>
        )
    }
}
