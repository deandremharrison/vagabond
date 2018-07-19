import React, { Component } from 'react'
import styled from 'styled-components'
import road from "../media/road.mp4"


export default class HeroImage extends Component {
    styledHero = styled.div`
        margin: 0 auto 5vw auto;
        width: 100%;
        height: 35vw;
        display: flex;
        justify-content: center;
        align-items: center;
        overflow: hidden;

        p {
            color: white;
            font-size: 32px;
            margin: 0;
            text-shadow: 0 0 2px black;
            background-color: rgba(219, 219, 219, .6)
        }
    `
    render() {
        return (
        <this.styledHero>
            <img src={this.props.imageUrl} alt="skyline"/>
        </this.styledHero>
        )
  }
}
