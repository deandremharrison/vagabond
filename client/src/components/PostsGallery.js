import React, { Component } from 'react'
import PostCard from './PostCard';

export default class PostsGallery extends Component {
    render() {
        const posts = this.props.posts.map((post, i) => {
            return <PostCard key={i} post={post} history={this.props.history}/>
        })
        return (
            <div>
                {posts}
            </div>
        )
    }
}
