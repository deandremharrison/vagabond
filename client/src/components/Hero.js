import React, { Component } from 'react'
import styled from 'styled-components'
import road from "../media/road.mp4"


export default class Hero extends Component {


    render() {
        const StyledHero = styled.div`
            margin: 0 auto 5vw auto;
            width: 100%;
            height: 35vw;
            display: flex;
            justify-content: center;
            align-items: center;
            overflow: hidden;
            position: relative;
        `

        const StyledTextContainer = styled.div`
            position: absolute;
            text-align: center;
            p {
                color: #f7f7f7;
                font-size: 4vw;
                text-shadow: 0 0 2px black;
                margin: 0;
                line-height: 4vw;
                font-family: 'Fjalla One', sans-serif;
                text-transform: uppercase;
            }
            p:nth-child(2) {
                font-size: 8vw;
                line-height: 9vw;
            }
        `

        return (
            <StyledHero>
                <video width="100%" autoPlay loop muted>
                    <source src={road} type="video/mp4" />
                </video>
                <StyledTextContainer>
                    <p>not all who</p>
                    <p>wander</p>
                    <p>are lost</p>
                </StyledTextContainer>
            </StyledHero>
        )
    }
}
