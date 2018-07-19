import React, { Component } from 'react'
import PostCard from './PostCard';
import styled from 'styled-components'

export default class PostsGallery extends Component {

    StyledPostGallery = styled.div`
    width: 90vw;
    border: solid blue;

    .parentDiv {
        width: 85vw;
        height:40vh;
        border: solid red;
        display: flex;
    }

    .reviewDiv {
        width: 70vw;
        border: solid green;
        display: flex;
        flex-direction: column;
        align-items: center;
    }

    .imgDiv img{
        width: 20vw;
        border: solid yellow;
    }

    button{
        width: 5vw;
        border-radius: 25px;
        margin: 1em;
    }

    .subjectP{
        border: solid purple;
        width: 60vw;
    }

    .descriptionP{
        border: solid orange;
        width: 60vw;
        height: 40vh;
    }
    `
    render() {
        const posts = this.props.posts.map((post, i) => {
            return <PostCard key={i} post={post} history={this.props.history} />
        })

        return (
            <this.StyledPostGallery>
                {/* <div className="parentDiv">
                    <div className="imgDiv">
                        <img src="https://cdn0.iconfinder.com/data/icons/handsome-man-avatars/283/stock_man_avatar-16-512.png" />
                    </div>
                    <div className="reviewDiv">
                        <p className="subjectP">subject</p>
                        <p className="descriptionP">{this.props.post.body}</p>
                    </div> */}

                    {posts}
                {/* </div>
                <button>first button</button>
                <button>second button</button> */}
            </this.StyledPostGallery>
        )
    }
}
