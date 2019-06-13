import React, { Component } from 'react'

export class IncomingMailItem extends Component {
    constructor(props) {
        super(props);

    }
render() {
    console.log(this.props.mail)
    return (
        <div className="mail-item">
            {this.props.mail.text}
        </div>
    )
}
}
