import React, { Component } from 'react'
import styled from 'styled-components'

export default class City extends Component {

    StyledCity = styled.div`
        box-sizing: border-box;
        display: flex;
        flex-direction: column;
        align-items: center;
        width: 48vw;
        height: 24vw;
        margin: 0 1vw 2vh 1vw;
        

        img {
            width: 100%;
            height: 85%;
            /* border: 1px solid black; */
            /* box-shadow: 0 0 2px black; */
            border-radius: 3px;
        }

        p {
            margin: 0;
            font-size: 20px
        }

        /* @media screen and (min-width: 450px) {
            width: 45vw;
        } */

        @media screen and (min-width: 780px) {
            width: 31vw;
            margin: 0 1vw 2vh 1vw;
            p {
                font-size: calc(4px + 2vw);
            }
        }
    `
    render() {
        return (
            <this.StyledCity>
                <img src={this.props.city.image_url} alt="some stuff" />
                <p>{this.props.city.name}</p>
            </this.StyledCity>
        )
    }
}
