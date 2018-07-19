import React, { Component } from 'react'
import styled from 'styled-components'
import NewPostForm from './NewPostForm';
import HeroImage from './HeroImage';
import axios from 'axios'

export default class NewPostPage extends Component {
    state = {
        city: {}
    }

    StyledPostPage = styled.div`
        margin: 3vh 5vw 0 5vw;
    `

    fetchCityData = async () => {
        const id = this.props.match.params.cityId
        const res = await axios.get(`/api/cities/${id}`)
        const city = res.data
        return city
    }

    saveCityData = async () => {
        const city = await this.fetchCityData()
        this.setState({ city })
    }

    componentDidMount = () => {
        this.saveCityData()
    }

    render() {
        return (
            <this.StyledPostPage>
                <HeroImage imageUrl={this.state.city.image_url}/>
                <NewPostForm city={this.state.city} history={this.props.history} />
            </this.StyledPostPage>
        )
    }
}
