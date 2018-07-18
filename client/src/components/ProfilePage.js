import React, { Component } from 'react'
import axios from 'axios'


export default class ProfilePage extends Component {

    state = {
        user: {}
    }

    fetchUserData = async () => {
        const res = await axios.get(`/api/users/${this.props.match.params.userId}`)
        this.setState({ user: res.data})
    }

    componentDidMount = () => {
        this.fetchUserData()
    }

    render() {
        return (
            <div>

            </div>
        )
    }
}
