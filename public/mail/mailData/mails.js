import React, { Component } from 'react'
import {AllMails} from "../mailsFilter/allMails/allMails"

const mails = [
    {
        text:"eda",
        id:1234,
        senderId:12345,
        receiverId:7646,
        isComing:false,
        isOutgoing:false,
        isTrash:false
    },
    {
        text:"berk",
        id:1234,
        senderId:12345,
        receiverId:7646,
        isComing:false,
        isOutgoing:false,
        isTrash:false
    },
    {
        text:"yildirim",
        id:1234,
        senderId:12345,
        receiverId:7646,
        isComing:false,
        isOutgoing:false,
        isTrash:false
    }
]

export class Mails extends Component {
   

  render() {
      
    return (
      <div>
          <AllMails mails={mails}/>
        
      </div>
    )
  }
}
