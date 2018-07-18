import React, { Component } from 'react'
import axios from 'axios'

export default class PostPage extends Component {

    state = {
        post: {}
    }

    fetchPostData = async () => {
        const res = await axios.get(`/api/users/${this.props.match.params.userId}/posts/${this.props.match.params.postId}`)
        this.setState({ post: res.data})
    }

    componentDidMount = () => {
        this.fetchPostData()
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
