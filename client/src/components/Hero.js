import React, { Component } from 'react'
import styled from 'styled-components'



export default class Hero extends Component {
    styledHero = styled.div`
        margin: 0 0 5vw 0;
        width: 100%;
        height: 35vw;
        background-image: url('https://images.unsplash.com/photo-1476838605201-a71ef70b6bff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb5fdf5c520301d7cca92dbc1f55805f&auto=format&fit=crop&w=1115&q=80');
        background-size: 100% 100%;
        display: flex;
        justify-content: center;
        align-items: center;

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
            <p>"Special Places For Special People"</p>
        </this.styledHero>
        )
  }
}
