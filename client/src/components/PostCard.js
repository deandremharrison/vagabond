import React, { Component } from 'react'
import styled from 'styled-components'

export default class PostCard extends Component {
    render() {
        return (
            <div>
                <button onClick={this.sendToPostEdit}>edit</button>
            </div>
        )
    }
}
