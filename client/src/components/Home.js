import React, { Component } from 'react'
import Hero from './Hero';
import CityGallery from './CityGallery';

export default class Home extends Component {

    render() {
        return (
            <div>
                <Hero />
                <center>
                    <h1>"Share Your Experiences"</h1>
                </center>
                <CityGallery />
            </div>
        )
    }
}
