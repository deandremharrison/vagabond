import React, { Component } from 'react'
import styled from 'styled-components'



export default class Hero extends Component {
    styledHero = styled.div`
        img {
            width: 100%;
            height: 35vw;
        }
    `
    render() {
        return (
        <this.styledHero>
            <img src="https://images.unsplash.com/photo-1476838605201-a71ef70b6bff?ixlib=rb-0.3.5&ixid=eyJhcHBfaWQiOjEyMDd9&s=fb5fdf5c520301d7cca92dbc1f55805f&auto=format&fit=crop&w=1115&q=80
            " alt="big pic"/>
        </this.styledHero>
        )
  }
}
