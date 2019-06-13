import React, { Component } from 'react'
import { FavButton } from "./favButton"
import MailApi from "../../../../server/mailApi"
import { DeleteButton } from "./deleteButton"
import { MailEvent } from "../../../../emitter/singleton_pattern";
import { Link } from "react-router-dom";



export class MailItem extends Component {
    constructor(props) {
        super(props);
        this.mailEvent = MailEvent.getMailEvent();
        this.mailApi = new MailApi();
        
    }

    toggleStar = (isLiked) => {
        this.props.toggleStar(isLiked, this.props.mail.id)
    }

    deleteMails = (isTrash) => {
        this.props.deleteMails(isTrash, this.props.mail.id)
    }

    sendId = () => {
        this.mailApi.getId(this.props.mail.id);
    }

    render() {
        return (
            <div className="mail-item" onClick={this.sendId}>
                <div className="mailItemButtons">
                    <FavButton mail={this.props.mail} toggleStar={this.toggleStar} />
                    <DeleteButton mail={this.props.mail} deleteMails={this.deleteMails} />
                </div>
                <Link to={"/mail_details/" + this.props.mail.id}>
                    <div className="featuresOfMail" onClick={() => {
                    }}
                    >
                        Zillow Group
                        <div>
                            <div>
                                Alici:
                        </div>
                            {this.props.mail.receiver}
                        </div>
                        <div>
                            <div>
                                {this.props.mail.subject}
                            </div>
                            <div>
                                {this.props.mail.text}
                            </div>
                        </div>
                    </div>
                </Link>
            </div>
        )
    }
}
