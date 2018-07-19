import React, { Component } from 'react'
import styled from 'styled-components'

export default class PostCard extends Component {


    sendToPostEdit = () => {
        this.props.history.push(`/users/${this.userId}/posts/new`)
    }

    render() {
        return (
            <div>
                {/* <p>show something</p>
                <button onClick={this.sendToPostEdit}>edit</button> */}



                                <div className="parentDiv">
                    <div className="imgDiv">
                        <img src="https://cdn0.iconfinder.com/data/icons/handsome-man-avatars/283/stock_man_avatar-16-512.png" />
                    </div>
                    <div className="reviewDiv">
                        <p className="subjectP">{this.props.post.title}</p>
                        <p className="descriptionP">{this.props.post.body}</p>
                    </div>
                </div>
                <button>first button</button>
                <button>second button</button>
            </div>
        )
    }
}
