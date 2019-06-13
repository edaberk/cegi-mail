import React, { Component } from 'react';
import { Dialog } from 'primereact/dialog';
import { Button } from 'primereact/button';
import { InputText } from 'primereact/inputtext';
import MailApi from "../../../../server/mailApi";
import { AllMails2 } from "../mailTimeLine/allMails2";
import { MailEvent } from '../../../../emitter/singleton_pattern';

export class CreateMail extends Component {
    constructor(props) {
        super(props);
        this.mailApi = new MailApi();
        this.state = { visible: false, value: "", receiver: "", subject: "" };
        this.onClick = this.onClick.bind(this);
        this.onHide = this.onHide.bind(this);
        this.keyPress = this.keyPress.bind(this);
        this.draftMail = this.draftMail.bind(this);
        this.sentMails = this.sentMails.bind(this);
        this.getReseiver = this.getReseiver.bind(this);
        this.getSubject = this.getSubject.bind(this);
        this.createDraftItem = this.createDraftItem.bind(this);
        this.mailEvent = MailEvent.getMailEvent();
        this.mailEvent.eventEmitter.addListener("draft", this.createDraftItem);
    }

    onClick(event) {
        this.setState({ visible: true });
    }

    createDraftItem(event) {
        this.setState({ visible: true, value: event[0].text, receiver: event[0].receiver, subject: event[0].subject });
        this.mailApi.removeDraftMail(event);
        return event[0];
    }

    onHide(event) {
        this.setState({ visible: false });
    }

    keyPress(e) {
        this.setState({ value: e.target.value });
        if (e.keyCode == 13) {
            let randomId = Math.random();
            let messageNumb = Math.random();
            this.mailApi.addMail(
                {
                    text: e.target.value,
                    receiver: this.state.receiver,
                    subject: this.state.subject,
                    id: randomId,
                    messageNumber: messageNumb,
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
            this.setState({ visible: false })
        }
    }


    draftMail() {
        console.log(this.state.value)
        let randomId = Math.random();
        let messageNumb = Math.random();
        this.mailApi.addDraft(
            {
                text: this.state.value,
                receiver: this.state.receiver,
                subject: this.state.subject,
                id: randomId,
                messageNumber: messageNumb,
                senderId: 12345,
                receiverId: 7646,
                isComing: false,
                isOutgoing: true,
                isTrash: false,
                isStared: false,
                starButtonLabel: "Unlike",
                mailType: "social",
                isDraft: true
            }
        )
        this.setState({ visible: false })
    }

    sentMails() {
        let randomId = Math.random();
        let messageNumb = Math.random();
        this.mailApi.addMail(
            {
                text: this.state.value,
                receiver: this.state.receiver,
                subject: this.state.subject,
                id: randomId,
                messageNumber: messageNumb,
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

        this.setState({ visible: false })
    }

    getReseiver = (e) => {
        this.setState({ receiver: e.target.value });

    }

    getSubject = (e) => {
        this.setState({ subject: e.target.value });
    }



    render() {


        const footer = (
            <div>
                <Button label="Gönder" icon="pi pi-check" onClick={this.sentMails} />
                <Button label="Taslak" icon="pi pi-times" onClick={this.draftMail} className="p-button-secondary" />
            </div>

        );

        return (
            <div>
                <div className="content-section introduction">
                    <div className="feature-intro">
                    </div>
                </div>

                <div className="content-section implementation">
                    <Dialog header="Create Mail I" visible={this.state.visible} style={{ width: '50vw' }} footer={footer} onHide={this.onHide} maximizable>

                        <div>
                            Alici
                        <input className="input" type="text" onChange={this.getReseiver} value={this.state.receiver} />
                        </div>
                        <div>
                            Konu
                        <input className="input" type="text" onChange={this.getSubject} value={this.state.subject} />
                        </div>
                        <div>
                            Mesaj
                        <input className="input" type="text" onChange={this.keyPress} value={this.state.value} />
                        </div>

                    </Dialog>

                    <Button label="Yeni Mail" icon="pi pi-external-link" onClick={this.onClick} />
                </div>
            </div>
        )

    }

}