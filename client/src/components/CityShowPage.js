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

    render() {
        return (
            <div>
                <HeroImage imageUrl={this.state.city.image_url} />
                <PostsGallery posts={this.state.posts} history={this.props.history}/>
            </div>
        )
    }
}
