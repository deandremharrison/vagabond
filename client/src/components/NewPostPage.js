import React, { Component } from 'react'
import styled from 'styled-components'
import NewPostForm from './NewPostForm';

export default class NewPostPage extends Component {
    state = {

    }

    StyledPostPage = styled.div`
        margin: 3vh 5vw 0 5vw;
    `
    render() {
        return (
            <this.StyledPostPage>
                <NewPostForm history={this.props.history}/>
            </this.StyledPostPage>
        )
    }
}
