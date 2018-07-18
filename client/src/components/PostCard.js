import React, { Component } from 'react'
import styled from 'styled-components'

export default class PostCard extends Component {


    sendToPostEdit = () => {
        this.props.history.push(`/users/${this.userId}/posts/new`)
    }

    render() {
        return (
            <div>
                <button onClick={this.sendToPostEdit}>edit</button>
            </div>
        )
    }
}
