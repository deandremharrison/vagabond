import React, { Component } from 'react'
import styled from 'styled-components'
import City from './City';
import axios from 'axios'

export default class CityGallery extends Component {

    state = {
        cities: []
    }

    StyledCityGallery = styled.div`
        display: flex;
        flex-wrap: wrap;
        justify-content: space-between;
        width: 100%;
        `
    fetchCitiesData = async () => {
        const res = await axios.get(`/api/cities`)
        this.setState({ cities: res.data})
    }

    componentDidMount = () => {
        this.fetchCitiesData()
    }

    render() {
        const cities = this.state.cities.map((city, i) => {
            return <City key={i} city={city} history={this.props.history}/>
        })
        return (
            <this.StyledCityGallery>
                {cities}
            </this.StyledCityGallery>
        )
    }
}
