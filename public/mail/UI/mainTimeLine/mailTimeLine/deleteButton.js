import React, { Component } from 'react'

export class DeleteButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            isTrash: this.props.mail.isTrash
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let Trash = !this.state.isTrash
        this.setState({
            isTrash: Trash
        });
        this.props.deleteMails(Trash);
    }



    render() {
        
        

        // const text = this.state.liked ? 'liked' : 'haven\'t liked';

        return (
            <div className="customContainer">
                <button className="btn btn-primary" onClick={this.handleClick}>
                    Sil </button>
            </div>
        );
    }
}