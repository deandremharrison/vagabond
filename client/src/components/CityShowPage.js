import React, { Component } from 'react'
import styled from 'styled-components'
import axios from 'axios'
import HeroImage from './HeroImage';
import PostsGallery from './PostsGallery';

export default class CityShowPage extends Component {
    state = {
        city: {},
        posts: []
    }

    fetchCityData = async () => {
        const res = await axios.get(`/api/cities/${this.props.match.params.cityId}`)
        this.setState({ city: res.data })
    }

    fetchCityPosts = async () => {
        const res = await axios.get(`/api/cities/${this.props.match.params.cityId}/posts`)
        this.setState({ posts: res.data })
    }

    componentDidMount = () => {
        this.fetchCityData()
        this.fetchCityPosts()
    }

    sendToNewPostPage = () => {
        this.props.history.push(`/cities/${this.state.city.id}/posts/new`)
    }

    render() {

        const StyledCityShowPage = styled.div`
            button.add {
                margin: 0 0 4vh 2.5vw;
                border: 6px solid green;
                width: 120px;
                height: 50px;
                font-size: 18px;
                color: white;
                background: green;
                border-radius: 25px;

            }
        `

        return (
            <StyledCityShowPage>
                <HeroImage imageUrl={this.state.city.image_url} />
                <button className="add" onClick={this.sendToNewPostPage}>+ add post</button>
                <PostsGallery posts={this.state.posts} history={this.props.history}/>
            </StyledCityShowPage>
        )
    }
}
