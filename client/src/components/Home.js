import React, { Component } from 'react'
import Hero from './Hero';
import CityGallery from './CityGallery';

export default class Home extends Component {
  render() {
    return (
      <div>
        <Hero />
        <CityGallery />
      </div>
    )
  }
}
