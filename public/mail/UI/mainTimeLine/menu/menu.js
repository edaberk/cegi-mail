import React, { Component } from 'react'
import { BrowserRouter as Router, Route, Link } from "react-router-dom";
import { AllMails } from "../mailTimeLine/allMails"
import { IncomingMails } from "../mailTimeLine/incomingMails"
import { Favori } from "../mailTimeLine/Favori";


const mails = [
    {
        text: "eda",
        id: 1000,
        senderId: 12345,
        receiverId: 7646,
        isComing: false,
        isOutgoing: false,
        isTrash: false,
        isStared:false,
        starButtonLabel:"Unlike"
    },
    {
        text: "berk",
        id: 1001,
        senderId: 1234,
        receiverId: 7646,
        isComing: false,
        isOutgoing: false,
        isTrash: false,
        isStared:false,
        starButtonLabel:"Unlike"
    },
    {
        text: "yildirim",
        id: 1002,
        senderId: 12345,
        receiverId: 7646,
        isComing: false,
        isOutgoing: false,
        isTrash: false,
        isStared:false,
        starButtonLabel:"Unlike"
    }
] 


export class Menu extends Component {

    toggleStar = (isLiked, mailId) => {
        console.log('in menu');
        console.log(isLiked, mailId);
        for(let i=0; i<mails.length; i++){
            if(mails[i].id===mailId){
                mails[i].isStared = isLiked
                
            }
        }
    }

    render() {
        return (
            <Router >
                <div className="menu">

                    <div className="link">
                        <li><Link to='/butunmailler'>Bütün Mailler</Link></li>
                        <li><Link to='/gelenkutusu'>Gelen Kutusu</Link></li>
                        <li><Link to='/favori'>Favori</Link></li>
                    </div>

                    <div className="mails">
                        <Route exact path='/butunmailler' component={() => <AllMails toggleStar={this.toggleStar} mails={mails} />} />
                        <Route exact path='/gelenkutusu' component={() => <IncomingMails toggleStar={this.toggleStar} mails={mails} />} />
                        <Route exact path='/favori' component={() => <Favori toggleStar={this.toggleStar} mails={mails} />} />
                        
                    </div>


                </div>
            </Router>

        )
    }
}
