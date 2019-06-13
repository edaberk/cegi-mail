import React, { Component } from 'react'

export class FavButton extends Component {
    constructor(props) {
        super(props);
        this.state = {
            liked: this.props.mail.isStared
        }
        this.handleClick = this.handleClick.bind(this);
    }

    handleClick() {
        let isLiked = !this.state.liked
        this.setState({
            liked: isLiked
        });
        this.props.toggleStar(isLiked);
    }



    render() {
        const label = this.state.liked ? "unlike" : "like"

        // const text = this.state.liked ? 'liked' : 'haven\'t liked';

        return (
            <div className="customContainer">
                <button className="btn btn-primary" onClick={this.handleClick}>
                    {label}</button>
            </div>
        );
    }
}