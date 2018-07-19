import React, { Component } from 'react'
import Hero from './Hero';
import CityGallery from './CityGallery';
import styled from 'styled-components'

export default class HomePage extends Component {


    render() {

        const StyledSectionHeader = styled.div`
            width: 100%;
            display: flex;
            justify-content: center;
        `

        return (
            <div>
                <Hero />
                <StyledSectionHeader>
                    <h1>Adventures</h1>
                </StyledSectionHeader>
                <CityGallery history={this.props.history} />
            </div>
        )
    }
}
