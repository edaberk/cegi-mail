import React, { Component } from 'react';
import MailApi from "../../../../server/mailApi";
import { MailEvent } from "../../../../emitter/singleton_pattern"
import { Draft } from "./draft"
import { Card } from 'primereact/card';
import 'primeicons/primeicons.css';
import 'primeflex/primeflex.css';
import 'prismjs/themes/prism-coy.css';
import { Button } from 'primereact/button';
import { Dialog } from 'primereact/dialog';

export class ViewMail extends Component {
    constructor(props) {
        super(props);
        this.mailApi = new MailApi();
        this.mailEvent = MailEvent.getMailEvent();
        this.onHide = this.onHide.bind(this);
        this.redirect = this.redirect.bind(this);
        this.state = {
            visible: true,
            directs: true,
            value: "",
            receiver: "",
            subject: "",
            id: ""
        }

    }

    onHide(event) {
        this.setState({ visible: !this.state.visible });
    }

    redirect(event) {
        this.setState({ directs: !this.state.directs });
    }

    getMail = () => {

        let mail = this.mailApi.getMailItem(this.props.match.params.id);
        /* if (mail[0].receiver.includes("@gmail.com")) {
             console.log(mail[0].receiver)
         } else {
             this.mailEvent.eventEmitter.emit("draft", mail);
         }*/
        if (mail[0].isDraft === true) {
            this.mailEvent.eventEmitter.emit("draft", mail);
        }
        return mail
    }

    

    createMail = (event) => {
        this.setState({ visible: !this.state.visible });
        let randomId = Math.random();
        let mail = this.getMail();
        console.log(mail[0].messageNumber)
        this.mailApi.addMail(
            {
                text: this.state.value,
                receiver: this.state.receiver,
                subject: this.state.subject,
                id: randomId,
                messageNumber:mail[0].messageNumber,
                senderId: 12345,
                receiverId: 7646,
                isComing: false,
                isOutgoing: true,
                isTrash: false,
                isStared: false,
                starButtonLabel: "Unlike",
                mailType: "social",
                isDraft: false
            }
        )


    }

    getReseiver = (e) => {
        this.setState({ receiver: e.target.value });

    }

    getValue = (e) => {
        this.setState({ value: e.target.value });
    }
    getSubject = (e) => {
        this.setState({ subject: e.target.value });
    }
    getId = (e) => {
        let mail = this.getMail();
        this.setState({ id: mail[0].id })
    }

    render() {
        const style = this.state.visible ? { display: "none" } : {};
        const directsStyle = this.state.directs ? { display: "none" } : {};
        console.log(this.props.match.params.id)
        let mail = this.getMail();
       /* mail.map((mailItem)=>{
            return (
                <div>
                    {mailItem.text}
                </div>
            )
        })*/
        
        if (mail[0].isDraft === false) {
            return (
                <div>
            {mail.map((mailItem)=>{
            return (

                <div className="main-mail-view">
                    <div>
                        Konu: {mailItem.subject}
                    </div>
                    <div>
                        <div className="sender-receiver">
                            <div className="sender">
                                Gönderen: {mailItem.receiver}
                            </div>
                            <div className="receiver">
                                Alici: 
                            </div>
                        </div>
                    </div>
                    <div>
                        <div className="content-section implementation" >
                            <Card title="Mesaj" style={{ width: '100%' }}>
                                <div> {mailItem.text} </div>
                            </Card>
                        </div>
                    </div>
                    <div className='redirects'>
                        <Button label="Yanıtla" className="p-button-success" onClick={this.onHide} />
                        <Button label="Yönlendir" className="p-button-success" onClick={this.redirect} />
                    </div>


                    <div style={style}>
                        <div>
                            Kime:
                    <input type="text" onChange={this.getReseiver} />
                        </div>
                        <div>
                            Konu:
                            <input type="text" onChange={this.getSubject} />
                        </div>
                        <div>
                            Mesaj:
                    <input type="text" onChange={this.getValue} />
                        </div>
                        <div >
                            <Button label="Gönder" className="p-button-success" onClick={this.createMail} />
                        </div>
                    </div>

                    <div style={directsStyle}>


                        <div>
                            Kime:
                            <input type="text" onChange={this.getReseiver} />
                            <Button label="Gönder" className="p-button-success" onClick={this.createMail} />
                        </div>
                    </div>
                </div>
            )})
            }</div>
            )
        } else {
            return (
                <Draft />
            )
        }
    }
}