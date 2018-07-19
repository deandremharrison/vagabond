import React, { Component } from 'react'
import axios from 'axios'

export default class PostPage extends Component {

    state = {
        user: {},
        post: {}
    }

    fetchPostData = async () => {
        const res = await axios.get(`/api/users/${this.props.match.params.userId}/posts/${this.props.match.params.postId}`)
        this.setState({ post: res.data})
    }

    fetchUserData = async () => {
        const res = await axios.get(`/api/users/${this.props.match.params.userId}`)
        const user = res.data
        return user
    }

    saveUserData= async () => {
        const user = await this.fetchUserData()
        this.setState({ user })
    }

    componentDidMount = () => {
        this.fetchPostData()
        this.saveUserData()
    }
    render() {
        return (
            <div>

            </div>
        )
    }
}
