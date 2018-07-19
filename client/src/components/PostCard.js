import React, { Component } from 'react'
import styled from 'styled-components'

export default class PostCard extends Component {

    StyledPostCard = styled.div`
    .parentDiv {
        width: 85vw;
        height:40vh;
        border: solid;
        display: flex;
    }

    .reviewDiv {
        width: 70vw;
        // border: solid green;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .imgDiv img{
        width: 17vw;
        border: solid;
        border-radius: 20000px;
        margin: 20px;
        
    }
    .buttonDiv{
        float: right;
        margin-right: 100px;
    }

    Button{
        width: 4vw;
        border-radius: 25px;
        margin: 1em;
        outline: none;
    }

    .subjectP{
        // border: solid;
        text-align: center;
        width: 60vw;
        font-size: 22pt;
    }

    .descriptionP{
        border-top: solid;
        width: 60vw;
        height: 40vh;
    }


    `


    sendToPostEdit = () => {
        this.props.history.push(`/users/${this.userId}/posts/new`)
    }

    render() {
        return (
            <this.StyledPostCard>
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
                <div className="buttonDiv">
                    <button className="editButton">Edit Post</button>
                    <button className="deleteButton">Delete Post</button>
                </div>
            </this.StyledPostCard>
        )
    }
}
