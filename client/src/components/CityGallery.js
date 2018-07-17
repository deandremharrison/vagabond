import React, { Component } from 'react'
import styled from 'styled-components'
import City from './City';

export default class CityGallery extends Component {

    state = {
        cities: [{
                name: "Atlanta",
                image_url: "https://www.atlantaga.gov/Home/ShowImage?id=3272&t=636335665341170000"
            },{
                name: "London",
                image_url: "https://thesavvybackpacker.com/wp-content/uploads/2016/03/london-city-guide.jpg"   
            },{
                name: "New York",
                image_url: "https://images.musement.com/cover/0002/42/view-on-manhattan-at-night-new-york-usa-jpg_header-141511.jpeg?w=1200&h=630&q=60&fit=crop" 
            },{
                name: "New Orleans",
                image_url: "https://photonews247.com/wp-content/uploads/2015/11/Walgreens-Drugs-C-opened-24-hours-at-900-Canal-Street-New-Orleans-LA.jpg"
            },{
                name: "Washington DC",
                image_url: "https://www.tripsavvy.com/thmb/If7DQOslS1PgsgagCvm6PGrtwRY=/960x0/filters:no_upscale():max_bytes(150000):strip_icc()/capitol-building-170402241-58ddb7bf5f9b58468374c174.jpg"
            },{
                name: "Portland",
                image_url: "https://www.webranking.com/wp-content/uploads/portland-oregon-skyline.jpg"
            }]
    }

    StyledCityGallery = styled.div`
        display: flex;
        flex-wrap: wrap;
        /* justify-content: space-around; */
    `

    render() {
        const cities = this.state.cities.map((city, i) => {
            return <City key={i} city={city} />
        })
        return (
            <this.StyledCityGallery>
                {cities}
            </this.StyledCityGallery>
        )
    }
}
