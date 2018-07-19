import React, { Component } from 'react'
import PostCard from './PostCard';
import styled from 'styled-components'

export default class PostsGallery extends Component {

    StyledPostGallery = styled.div`
    width: 90vw;
    // border: solid blue;
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
