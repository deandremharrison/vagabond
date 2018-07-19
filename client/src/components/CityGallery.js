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
        // What I wanted to do:
        // const res = await axios.get(`/api/cities`)
        // const cities = res.data
        // console.log(cities)
        // return cities

        // return await axios.get(`/api/cities`)

        const res = await axios.get(`/api/cities`)
        const cities = res.data
        return cities
    }

    saveCitiesData = async () => {
        //wanted to pass in cities array and save it to state

        // promise.then(res => {
        //     this.setState({ cities: res.data})
        // })

        const cities = await this.fetchCitiesData()
        this.setState({ cities })
    }

    componentDidMount = () => {
        this.saveCitiesData()
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
