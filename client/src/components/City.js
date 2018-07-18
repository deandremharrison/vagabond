import React, { Component } from 'react'
import styled from 'styled-components'

export default class City extends Component {

    StyledCity = styled.div`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 50vw;
        height: 24vw;
        margin: 0 auto 2vh auto;
        

        img {
            width: 100%;
            height: 85%;
            border-radius: 3px;
        }

        p {
            margin: 0;
            font-size: 20px
        }

        @media screen and (min-width: 780px) {
            width: 28vw;
            margin: 0 0 2vh 0;
            p {
                font-size: calc(4px + 2vw);
            }
        }
    `

    sendToCityShow = () => {
        this.props.history.push(`/cities/${this.props.city.id}`)
    }
    render() {
        return (
            <this.StyledCity onClick={this.sendToCityShow}>
                <img src={this.props.city.image_url} alt="some stuff" />
                <p>{this.props.city.name}</p>
            </this.StyledCity>
        )
    }
}
